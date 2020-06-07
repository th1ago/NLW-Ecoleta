const express = require("express")
const app = express()

// pegar o banco de dados
const db = require("./database/db.js")

// config pasta public
app.use(express.static("public"))

// habilita o req.body
app.use(express.urlencoded({ extended: true }))

// template engine, redennizar 
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", { // nome da pasta
    // autoescape: true, // controle de saida
    express: app, // variavel do servidor
    noCache: true, // sem cache
    // watch: true, // seria o nodemon
})

// inicia
app.get("/", (req, res) => {
    return res.render("index.html", {title: "Seu marketplace de coleta de residuos"})
})

app.get("/create-point", (req, res) => {
    return res.render("create-point.html")
})

app.post("/savepoint", (req, res) =>{
    
    console.log(req.body)

    const query = `
    INSERT INTO places (
        image,
        name,
        address,
        address2,
        state,
        city,
        items
    )  VALUES (?,?,?,?,?,?,?);
    `

    const value =[
        req.body.image,
        req.body.name,
        req.body.address,
        req.body.address2,
        req.body.state,
        req.body.city,
        req.body.items
    ]

    function afterInsertData(err) {
        if(err) {
            console.log(err)
            return res.send("Erro ao cadastrar")
        }
        console.log("Cadastro com sucesso")
        console.log(this)

        return res.render("create-point.html", {saved: true})
    }
    
    db.run(query, value, afterInsertData)
})

app.get("/search-results", (req, res) => {

    const search = req.query.search

    if(search == ""){
        // pesquisa vazia
        return res.render("search-results.html", { total: 0 })
    }

    db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, function(err, rows){
        if(err) {
            return console.log(err)
        }        
        console.log(rows)

        const total = rows.length

        // mmostra a pag com os dados
        return res.render("search-results.html", { places: rows, total })
    })

})

// ON o servidor
app.listen(3000)

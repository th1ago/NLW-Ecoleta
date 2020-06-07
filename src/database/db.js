// verbose - ter mais msg
const sqlite = require("sqlite3").verbose()

// new inicia um novo objeto desde que seja um constructor/classe
const db = new sqlite.Database("./src/database/database.db")

// exportar o obj db
module.exports = db

db.serialize(() => {
    // criar uma tabela
    // db.run(`
    //     CREATE TABLE IF NOT EXISTS places(
    //         id INTEGER PRIMARY KEY AUTOINCREMENT,
    //         image TEXT,
    //         name TEXT,
    //         address TEXT,
    //         address2 TEXT,
    //         state TEXT,
    //         city TEXT,
    //         items TEXT
    //     );
    // `)

    // inserir dados na tabela
    // const query = `
    // INSERT INTO places (
    //     image,
    //     name,
    //     address,
    //     address2,
    //     state,
    //     city,
    //     items
    // )  VALUES (?,?,?,?,?,?,?);
    // `

    // const value =[
    //     "https://images.unsplash.com/photo-1516992654410-9309d4587e94?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    //     "Colectoria",
    //     "Residuos Eletronicos, Lampadas",
    //     "N.200",
    //     "Santa Catarina",
    //     "Rio do Sul", 
    //     "Guilherme Gemballa, Jardim America",
    // ]

    // function afterInsertData(err) {
    //     if(err) {
    //         return console.log(err)
    //     }
    //     console.log("Cadastro com sucesso")
    //     console.log(this)
    // }
    
    // db.run(query, value, afterInsertData)

    // consultar os dados da tabela
    // db.all(`SELECT * FROM places`, function(err, rows){
    //     if(err) {
    //         return console.log(err)
    //     }
    //     console.log("Aqui estao os seus registros")
    //     console.log(rows)
    // })

    // deletar os dados
    // db.run(`DELETE FROM places WHERE id=?`, [1], function(err) {
    //     if(err) {
    //         return console.log(err)
    //     }
    //     console.log("Aqui estao os seus registros")
    // })
})
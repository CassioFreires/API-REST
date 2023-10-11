import { Sequelize } from "sequelize";
const conexao = new Sequelize('bdcopa', 'root', 'Freires2@', {
    host: 'localhost',
    dialect: 'mysql'
})

// fazer a conexao ao mysql
export default conexao
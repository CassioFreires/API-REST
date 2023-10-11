import conexao from "../database/conexaobd.js";
import {
    QueryTypes
} from "sequelize";


class SelecaoRepository {

    // CRUD
    async create(selecoes) {
        console.log(selecoes);
        const selecao = selecoes.selecao;
        const grupo = selecoes.grupo;
        const sql = `INSERT INTO selecoes(id, selecao, grupo) VALUE(default, '${selecao}', '${grupo}')`;

        const rows = await conexao.query(sql, {type: QueryTypes.INSERT});
        return rows
        
    }
    async findAll() {
        const sql = "SELECT * FROM `selecoes`"
        const rows = await conexao.query(sql, {type: QueryTypes.SELECT});
        return rows

    }

    async findById(id) {
        const sql = `SELECT * FROM selecoes WHERE id = ${id}`;
        const rows = await conexao.query(sql, {type: QueryTypes.SELECT})
        return rows
          
    }

    async update(id, reqBody) {
        const selecao = reqBody.selecao;
        const grupo = reqBody.grupo;
        const sql = `UPDATE bdcopa.selecoes SET selecao='${selecao}', grupo='${grupo}' WHERE id=${id}`;

        const rows = await conexao.query(sql, {type: QueryTypes.UPDATE});
        return rows;

    }

    async delete(id ) {
        const sql = `DELETE FROM bdcopa.selecoes WHERE id=${id}`;

        const rows = await conexao.query(sql, {type: QueryTypes.DELETE})
        return rows
    }
}

export default new SelecaoRepository();
import conexao from './app/database/conexaobd.js';
import app from '../src/app.js';


const PORT = process.env.PORT || 3000;

// conectando no banco de dados
conexao.authenticate()
    .then(() => {
        console.log('Conexão com o banco de dados estabelecidade com sucesso');

        //Servidor http que escuta na PORTa 3000
        app.listen(PORT, () => {
            console.log(`Servidor rodando no endereço http://localhost:${PORT}`);
        });
    })
    .catch((error) => {
        console.log('Erro ao tentar conectar ao banco de dados mysql: ' + error);
    })
import express from 'express'
import SelecaoController from "./app/controllers/SelecaoController.js";

const routes = express.Router()


// ROTAS      
routes.get('/selecoes', SelecaoController.index)
routes.get('/selecoes/:id', SelecaoController.show)
routes.post('/selecoes', SelecaoController.store)
routes.put('/selecoes/:id', SelecaoController.update)
routes.delete('/selecoes/:id', SelecaoController.delete)



export default routes;
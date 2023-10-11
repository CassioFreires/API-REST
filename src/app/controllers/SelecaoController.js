import SelecaoRepository from '../repositories/SelecaoRepository.js';


class SelecaoController {
    
    // CONTROLE DO CRUD DA BASE DE DADOS
    async store(req, res) {
      const rows = SelecaoRepository.create(req.body)
        .then((dados) => res.json(dados))
        .catch((error) => res.status(404).send('Houve um erro ao tentar inserir novos valores na base' + error));
    }

    async index(req, res) {
        const rows = await SelecaoRepository.findAll()
        .then((dados) => res.json(dados))
        .catch((error) => res.status(404).send('Houve um erro ao tentar listar dados da base:' + error))

    }

    async show(req, res) {
        const rows = await SelecaoRepository.findById(req.params.id)
        .then((dados) => res.json(dados))
        .catch((error) => res.status(404).send('Houve um erro:' + error))
    }

    async update(req, res) {
        const rows = await SelecaoRepository.update(req.params.id, req.body)
        .then((dados) => res.json(dados))
        .catch((error) => res.status(404).send('Houve um erro:' + error))
    }
    async delete(req, res) {
       const rows = await SelecaoRepository.delete(req.params.id)
       .then((dados) => res.json(dados))
        .catch((error) => res.status(404).send('Houve um erro:' + error))
    }
}

export default new SelecaoController()
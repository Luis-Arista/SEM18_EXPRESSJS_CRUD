const musicaModel = require('../models/musica')

const getMusica = async () => {
    return musicaModel.find({})
}

const createMusica = async (body) => {
    const newMusica = new musicaModel(body)
    await newMusica.save()
    return newMusica
}

module.exports = {
    getMusica,
    createMusica
}
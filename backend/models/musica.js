const mongoose = require('mongoose')

const { Schema , model } = mongoose


const esquemaMusica = new Schema({
   nombre: String,
   duracion: String,
   genero: String,
   link: String,
   artista: String

}, {
  versionKey: false,
  timestamps: true
})

const musicaModel = model('musica' , esquemaMusica )

module.exports = musicaModel
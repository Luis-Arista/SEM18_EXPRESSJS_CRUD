const mongoose = require('mongoose')

const { Schema , model } = mongoose


const ProductSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: String,
  sku: Number,
  price: Number
}, {
  versionKey: false,
  timestamps: true
})

const ProductModel = model('productos' , ProductSchema )

module.exports = ProductModel
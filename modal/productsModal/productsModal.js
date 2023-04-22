const mongoose = require('mongoose')

const ProductSchema = mongoose.Schema({
    name: {
        type: String
    },
    image:{
        data: Buffer,
        contentType: String
    },
  
}, {timestamps: true}
)

module.exports = product = mongoose.model('product', ProductSchema)



// const productSchema = new Schema({
//     name: {
//         type: String
//     },
//     image:{
//         data: Buffer,
//         contentType: String
//     }
// })

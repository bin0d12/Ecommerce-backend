const express = require('express')
const cors = require('cors')
const mongoose= require('mongoose')
const morgan = require('morgan')
const dotEnv = require('dotenv')
const routes = require('./routes/routes')
const sellerRoutes = require('./routes/sellerModule/sellerRoutes')
const productRoutes = require('./routes/productsModule/productDetailsRoutes')
const bodyParser = require('body-parser')
mongoose.connect('mongodb://localhost:27017/E-commerce')
const db = mongoose.connection

db.on('error', (err) => {
    console.log(err, "errrrr");
})
db.once('open', () =>{
    console.log("connection successfully");
})

const app = express()
app.use(cors())
// app.use(function(req, res, next) {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
//     res.setHeader('Access-Control-Allow-Credentials', true);
//     next();
 //   });
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())
app.use('/api', routes)
app.use('/products', productRoutes)
app.use('/sellerApi', sellerRoutes)

app.listen(3005, () => {
    console.log(`port listening to port 3005`);
})
const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json())
app.use(cors())






const {getShirtM, getShirtF, getPantM, getPantF, getCart, addToCart, deleteItem} = require('./controller')

 


app.get('/mshirt', getShirtM)

app.get('/fshirt', getShirtF)

app.get('/mpant', getPantM)

app.get('/fpant', getPantF)

app.get('/cart', getCart)

app.post('/cart', addToCart)


app.delete('/cart/:id', deleteItem)











app.listen(5500, () => {console.log('Running on server port: 5500')})
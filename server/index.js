const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json())
app.use(cors())






const {getShirtM, getShirtF, getPantM, getPantF, deleteItem} = require('./controller')

 


app.get('/api/houses', getShirtM)

app.get('/api/houses', getShirtF)

app.get('/api/houses', getPantM)

app.get('/api/houses', getPantF)


app.delete('/api/houses/:id', deleteItem)











app.listen(5500, () => {console.log('Running on server port: 5500')})
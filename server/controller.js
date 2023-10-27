const mshirt = require('./mshirt.json')
const fshirt = require('./fshirt.json')
const mpant = require('./mpant.json')
const fpant = require('./fpant.json')
const cart = require('./cart.json')






module.exports = {
    getShirtM: (req, res) => {
        res.status(200).send(mshirt)
    },

    getShirtF: (req, res) => {
        res.status(200).send(fshirt)
    },

    getPantM: (req, res) => {
        res.status(200).send(mpant)
    },

    getPantF: (req, res) => {
        res.status(200).send(fpant)
    },

    getCart: (req, res) => {
        res.status(200).send(cart)
    },

    addToCart: (req, res) => {
        cart.push(req.body)
        res.status(200).send(cart)
    },

    deleteItem: (req, res) => {
        let index = houses.findIndex(houses => houses.id === +req.params.id)
        houses.splice(index, 1)
        res.status(200).send(houses)
    }

}

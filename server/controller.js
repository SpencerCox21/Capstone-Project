const mshirt = require('./mshirt.json')
const fshirt = require('./fshirt.json')
const mpant = require('./mpant.json')
const fpant = require('./fpant.json')
let cart = require('./cart.json')






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

    purchaseCart: (req, res) => {
        cart = []
        res.status(200).send(cart)
    },

    deleteItem: (req, res) => {

        let index = cart.findIndex(item => item.id === req.params.id)
        cart.splice(index, 1)
        res.status(200).send(cart)

    }

}

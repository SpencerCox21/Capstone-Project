const houses = require('./db.json')






module.exports = {
    getShirtM: (req, res) => {
        res.status(200).send(houses)
    },

    getShirtF: (req, res) => {
        res.status(200).send(houses)
    },

    getPantM: (req, res) => {
        res.status(200).send(houses)
    },

    getPantF: (req, res) => {
        res.status(200).send(houses)
    },

    deleteItem: (req, res) => {
        let index = houses.findIndex(houses => houses.id === +req.params.id)
        houses.splice(index, 1)
        res.status(200).send(houses)
    }

}

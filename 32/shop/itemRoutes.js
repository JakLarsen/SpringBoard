const express = require('express')
const router = new express.Router()
const ExpressError = require("./expressError")
const items = require('./items')





router.get('/', function (req, res){
    res.json({items})
})
router.post('/', function (req,res){
    let newItem = {name: req.body.name, price: req.body.price}
    items.push(newItem)
    res.status(201).json(`Added: ${newItem}`)
})
router.get('/:name', function (req, res){
    const item = items.find(i=>i.name === req.params.name)
    if(item === undefined){
        throw new ExpressError("Item not found", 404)
    }
    res.json({item})
})
router.patch('/:name', function(req,res){
    const item = items.find(i => i.name === req.params.name)
    if (item === undefined) {
        throw new ExpressError("Item not found", 404)
    }
    item.name = req.body.name
    res.json({item})
})
router.delete('/:name', function(req,res){
    const item = items.find(i => i.name === req.params.name)
    if (item === undefined) {
        throw new ExpressError("Item not found", 404)
    }
    items.splice(item, 1)
    res.json({ message: "Deleted" })
})





module.exports = router
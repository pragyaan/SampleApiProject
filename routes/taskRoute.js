/**
 * Created by Dinesh Reddy Maddula on 4/21/2017.
 */

//declarations
var express = require('express'),
    Controller = require('../controllers/taskController.js');
var ts = new Controller();
var router = express.Router();

// get post put delete (routes)
router.get('/',ts.getAll.bind());
router.post('/',ts.create.bind());
router.get('/:id',ts.getById.bind());
router.put('/:id',ts.update.bind());
router.delete('/:id',ts.delete.bind());

module.exports= router;

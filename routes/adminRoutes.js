const path = require('path');

const express = require('express');

const Router = express.Router();

const WheatherController = require('../controller/WheatherController');

Router.get('/',WheatherController.GetWheatherController);

Router.post('/',WheatherController.PostWheatherController);

module.exports = Router;
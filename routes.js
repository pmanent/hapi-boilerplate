var controllers = require('./controllers');
var Joi = require('joi');

module.exports = [
  {
    method: 'GET',
    path: '/users',
    handler: controllers.users.get
  },
  {
    method: 'GET',
    path: '/salute/{name}',
    handler: controllers.users.salute
  },
  {
    method: 'GET',
    path: '/breweries',
    handler: controllers.brewery.findAll
  },
  {
    method: 'GET',
    path: '/brewery',
    handler: controllers.brewery.getBrewery,
    options: {
        validate: {
            query: {
                idBrewery: Joi.string().required()
            }
        }
    }
  }
];

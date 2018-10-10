var models = require('../models');

module.exports = {
	findAll:function (request, reply) {
    return models.Brewery.findAll(
      {
          attributes: ['idBrewery', 'Name', 'Location' , 'Type' , 'Foundation' , 'CreationDate' , 'ModifyDate']
      }
    );
	},
  selectAll: function(request,reply){
    return models.sequelize.query('SELECT * FROM  bbf.BREWERY', { model: models.Brewery });
  },
  getBrewery: function(request,reply){
    console.log(request.query.idBrewery);
    return models.sequelize.query('SELECT * FROM  bbf.BREWERY', { model: models.Brewery });
  }
};

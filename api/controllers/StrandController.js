/**
 * StrandController
 *
 * @description :: Server-side logic for managing strands
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  ws281x: require('rpi-ws281x-native'),
	list: function(req, res){
    StrandService.list(function(strands){
      res.json(strands);
    });
  },
  create: function(req, res){
    var strandVals = (req.body) ? req.body : undefined
    StrandService.create(strandVals, function(success){
      res.json(success);
    });
  },
  remove: function(req, res){
    var strandVals = (req.body) ? req.body : undefined
    StrandService.remove(strandVals, function(success){
      res.json(success);
    });
  },
  setActive: function(req, res){
    var strand = (req.body) ? req.body.strand : undefined
    StrandService.setActive(strand, function(success){
      console.log(ws281x);
      res.json(success);
    });
  },
  getActive: function(req, res){
    StrandService.getActive(function(success){
      res.json(success)
    });
  }
};


/**
 * ProfileController
 *
 * @description :: Server-side logic for managing strands/profiles
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  ws281x: require('rpi-ws281x-native'),
	list: function(req, res){
    ProfileService.list(function(strands){
      res.json(strands);
    });
  },
  create: function(req, res){
    var strandVals = (req.body) ? req.body : undefined
    ProfileService.create(strandVals, function(success){
      res.json(success);
    });
  },
  remove: function(req, res){
    var strandVals = (req.body) ? req.body : undefined
    ProfileService.remove(strandVals, function(success){
      res.json(success);
    });
  },
  setActive: function(req, res){
    var strand = (req.body) ? req.body.strand : undefined
    ProfileService.setActive(strand, function(success){
      console.log(ws281x);
      res.json(success);
    });
  },
  getActive: function(req, res){
    ProfileService.getActive(function(success){
      res.json(success)
    });
  }
};


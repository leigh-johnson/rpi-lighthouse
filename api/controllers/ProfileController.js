/**
 * ProfileController
 *
 * @description :: Server-side logic for managing profiles/profiles
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  ws281x: require('rpi-ws281x-native'),
	list: function(req, res){
    ProfileService.list(function(profiles){
      res.json(profiles);
    });
  },
  getOne: function(req, res){
    ProfileService.getOne(function(success){
      res.json(success)
    });
  },
  create: function(req, res){
    var profileVals = (req.body) ? req.body.profile : undefined
    ProfileService.create(profileVals, function(success){
      res.json(success);
    });
  },
  remove: function(req, res){
    var profileVals = (req.body) ? req.body.profile : undefined
    ProfileService.remove(profileVals, function(success){
      res.json(success);
    });
  },
  setActive: function(req, res){
    var profile = (req.body) ? req.body.profile : undefined
    ProfileService.setActive(profile, function(success){
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


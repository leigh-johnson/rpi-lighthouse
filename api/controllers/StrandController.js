/**
 * StrandController
 *
 * @description :: Server-side logic for managing strands
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	getStrands: function(req, res){
    EventService.getStrands(function(events){
      res.json(events);
    });
  },
  addStrand: function(req, res){
    var strandVals = (req.body) ? req.body : undefined
    EventService.addStrand(strandVals, function(success){
      res.json(success);
    });
  },
  removeEvent: function(req, res){
    var strandVals = (req.body) ? req.body : undefined
    EventService.removeStrand(strandVals, function(success){
      res.json(success);
    });
  }
};


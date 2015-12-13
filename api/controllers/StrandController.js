/**
 * StrandController
 *
 * @description :: Server-side logic for managing strands
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	getStrands: function(req, res){
    StrandService.getStrands(function(strands){
      res.json(strands);
    });
  },
  addStrand: function(req, res){
    var strandVals = (req.body) ? req.body : undefined
    StrandService.addStrand(strandVals, function(success){
      res.json(success);
    });
  },
  removeStrand: function(req, res){
    var strandVals = (req.body) ? req.body : undefined
    StrandService.removeStrand(strandVals, function(success){
      res.json(success);
    });
  },
  setActiveStrand: function(req, res){
    var strand = (req.body) ? req.body.strand : undefined
    StrandService.setActiveStrand(strand, function(success){
      res.json(success);
    });
  },
  getActiveStrand: function(req, res){
    StrandService.getActiveStrand(function(success){
      res.json(success)
    });
  }
};


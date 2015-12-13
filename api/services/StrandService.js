module.exports = {
  getStrands: function(next){
    Strand.find().exec(function(err, strands){
      if(err) throw err;
      next(strands);
    });
  },
  addStrand: function(strandVals, next){
    Strand.create(strandVals).exec(function(err, strand){
      if (err) throw err;
      next(strand)
    });
  },
  removeStrand: function(strandVals, next){
    Strand.destroy(strandVals).exec(function(err, strand){
      if (error) throw err;
      next(strand);
    });
  },
  setActiveStrand: function(strand, next){
    Strand.update({id: strand.id}, {active: true}).exec(function(err, strand){
      if (err) throw err;
      next(strand);
    });
  },
  getActiveStrand: function(next){
    Strand.findOne({active: true}).exec(function(err, strand){
      if (err) throw err;
      next(strand);
    });
  }
};
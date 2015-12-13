module.exports = {
  getStrands: function(next){
    Event.find().exec(function(err, strands){
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
    Event.destroy(strandVals).exec(function(err, strand){
      if (error) throw err;
      next(strand);
    });
  }
};
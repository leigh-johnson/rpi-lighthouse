module.exports = {
  list: function(next){
    Strand.find().exec(function(err, strands){
      if(err) throw err;
      next(strands);
    });
  },
  create: function(strandVals, next){
    Strand.create(strandVals).exec(function(err, strand){
      if (err) throw err;
      next(strand)
    });
  },
  remove: function(strandVals, next){
    Strand.destroy(strandVals).exec(function(err, strand){
      if (error) throw err;
      next(strand);
    });
  },
  setActive: function(strand, next){
    Strand.update({id: strand.id}, {active: true}).exec(function(err, strand){
      if (err) throw err;
      next(strand);
    });
  },
  getActive: function(next){
    Strand.findOne({active: true}).exec(function(err, strand){
      if (err) throw err;
      next(strand);
    });
  }
};
module.exports = {
  list: function(next){
    Profile.find().exec(function(err, strands){
      if(err) throw err;
      next(strands);
    });
  },
  create: function(strandVals, next){
    Profile.create(strandVals).exec(function(err, strand){
      if (err) throw err;
      next(strand)
    });
  },
  remove: function(id, next){
    Profile.destroy({id: id}).exec(function(err, strand){
      if (err) throw err;
      next(strand);
    });
  },
  setActive: function(strand, next){
    Profile.update({id: strand.id}, {active: true}).exec(function(err, strand){
      if (err) throw err;
      next(strand);
    });
  },
  getActive: function(next){
    Profile.findOne({active: true}).exec(function(err, strand){
      if (err) throw err;
      next(strand);
    });
  }
};
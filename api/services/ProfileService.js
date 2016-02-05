module.exports = {
  list: function(next){
    Profile.find().exec(function(err, profiles){
      if(err) throw err;
      next(profiles);
    });
  },
  getOne: function(id, next){
    Profile.find({id: id}).exec(function(err, profile){
      if (err) throw err;
      next(profile);
    });
  },
  create: function(profileVals, next){
    console.log(profileVals)
    Profile.create(profileVals).exec(function(err, profile){
      if (err) {console.log(err)};
      next(profile)
    });
  },
  update: function(profileVals, next){
    Profile.update(profileVals).exec(function(err, profile){
      if (err) throw err;
      next(profile)
    });
  },
  remove: function(id, next){
    Profile.destroy({id: id}).exec(function(err, profile){
      if (err) throw err;
      next(profile);
    });
  },
  setActive: function(id, next){
    Profile.update({id: id}, {active: true}).exec(function(err, profile){
      if (err) throw err;
      next(profile);
    });
  },
  getActive: function(next){
    Profile.findOne({active: true}).exec(function(err, profile){
      if (err) throw err;
      next(profile);
    });
  }
};
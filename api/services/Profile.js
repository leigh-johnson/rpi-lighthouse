module.exports = {
  list: function(next){
    Profile.find().exec(function(err, profiles){
      if(err) throw err;
      next(profiles);
    });
  },
  create: function(profileVals, next){
    Profile.create(profileVals).exec(function(err, profile){
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
  setActive: function(profile, next){
    Profile.update({id: profile.id}, {active: true}).exec(function(err, profile){
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
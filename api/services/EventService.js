module.exports = {
  getEvents: function(next) {
    Event.find().exec(function(err, events) {
      if(err) throw err;
      next(events);
    });
  },
  addEvent: function(eventVal, next) {
    Event.create({value: eventVal}).exec(function(err, event) {
      if(err) throw err;
      next(event);
    });
  },
  removeEvent: function(eventVal, next) {
    Event.destroy({value: eventVal}).exec(function(err, event) {
      if(err) throw err;
      next(event);
    });
  }
};
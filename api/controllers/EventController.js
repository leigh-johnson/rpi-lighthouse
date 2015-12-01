/**
 * EventController
 *
 * @description :: Server-side logic for managing Eventes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    getEvents: function(req, res) {
        EventService.getEvents(function(events) {
            res.json(events);
        });
    },
    addEvent: function(req, res) {
        var eventVal = (req.body.value) ? req.body.value : undefined
        EventService.addEvent(eventVal, function(success) {
            res.json(success);
        });
    },
    removeEvent: function(req, res) {
       var eventVal = (req.body.value) ? req.body.value : undefined
        EventService.removeEvent(eventVal, function(success) {
            res.json(success);
        });
    }
};

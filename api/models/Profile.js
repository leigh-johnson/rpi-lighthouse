/**
* Profile.js
*
* @description :: A Profile is a preset light pattern of stored LED values
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    name: {
        type: 'string'
    },
    leds: {
        type: 'collection',
        via: 'profiles',
        dominant: true
    },
    events: {
        type: 'collection',
        via: 'profile'
    }
  }
};


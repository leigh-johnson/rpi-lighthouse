/**
* Strand.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    numLEDs: {
      type: 'integer',
      required: true
    },
    leds: {
      type: 'array',
      required: true,
    },
    pattern: {
      type: 'string',
      enum: ['gradient', 'solid'],
      defaultsTo: 'solid'
    },
    animation: {
      type: 'string',
      enum: ['blink', 'loop']
    },
    active: {
      type: 'boolean',
      defaultsTo: false
    }
  }
};


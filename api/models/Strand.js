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
    pattern: {
      type: 'string',
      enum: ['gradient', 'solid']
    },
    animation: {
      type: 'string',
      enum: ['blink', 'loop']
    },
    solidColor: {
      type: 'string'
    },
    gradientStops: {
      type: 'json'
    },
    active: {
      type: 'boolean',
      defaultsTo: true
    }
  }
};


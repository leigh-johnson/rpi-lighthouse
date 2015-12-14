var mp = {};
require('angular');
require('angular-route');
require('angular-ui-bootstrap');
require('angular-ui-calendar');
mp.colorPicker = require('angular-color-picker');

'use strict';

var EventService = require('./services/EventService');
var EventController = require('./controllers/EventController');

var eventApp = angular.module('eventApp', ['ngRoute', 'ui.bootstrap'])
    .service('EventService', EventService)
    .controller('EventCtrl', ['$scope', '$rootScope', 'EventService', EventController]);

eventApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: '/partials/event',
      controller: 'EventCtrl'
    }).otherwise({
      redirectTo: '/',
      caseInsensitiveMatch: true
    })
  }]);

require('fullcalendar');
require('./dependencies/gcal');

var CalendarController = require('./controllers/CalendarController');
var CalendarService = require('./services/CalendarService');
var calendarApp = angular.module('calendarApp', ['ui.calendar', 'ui.bootstrap'])
    .controller('CalendarCtrl', CalendarController)
    .service('CalendarService', CalendarService);

var StrandService = require('./services/StrandService');
var StrandController = require('./controllers/StrandController');

var strandApp = angular.module('strandApp', ['ngRoute', 'ui.bootstrap','ui.utils', 'mp.colorPicker'])
    .service('StrandService', StrandService)
    .controller('StrandCtrl', ['$scope', '$rootScope', 'StrandService', StrandController]);
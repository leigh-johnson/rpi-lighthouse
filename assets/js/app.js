require('angular');
require('angular-route');
require('angular-ui-bootstrap');
require('angular-ui-calendar');


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
// /require('gcal');
var CalendarController = require('./controllers/CalendarController');
var calendarApp = angular.module('calendarApp', ['ui.calendar', 'ui.bootstrap'])
    .controller('CalendarCtrl', CalendarController);
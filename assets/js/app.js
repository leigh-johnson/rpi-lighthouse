var mp = {};
require('angular');
require('angular-route');
require('angular-ui-bootstrap');
require('angular-ui-calendar');
mp.colorPicker = require('angular-color-picker');

'use strict';
/*
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
*/
/*
require('fullcalendar');
require('./dependencies/gcal');

var CalendarController = require('./controllers/CalendarController');
var CalendarService = require('./services/CalendarService');
var calendarApp = angular.module('calendarApp', ['ui.calendar', 'ui.bootstrap'])
    .controller('CalendarCtrl', CalendarController)
    .service('CalendarService', CalendarService);
*/

// Interact with Profile API

var ProfileService = require('./services/ProfileService');
var EditController = require('./controllers/EditController');
var CreateController = require('./controllers/CreateController');
var DashboardController = require('./controllers/DashboardController');

var dashboardApp = angular.module('dashboardApp', ['ngRoute', 'ui.bootstrap'])
    .service('ProfileService', ProfileService)
    .controller('DashboardCtrl', ['$scope', '$rootScope', '$window', 'ProfileService', DashboardController])

var createApp = angular.module('createApp', ['ngRoute', 'ui.bootstrap', 'mp.colorPicker'])
    .service('ProfileService', ProfileService)
    .controller('CreateCtrl', ['$scope', '$rootScope', 'ProfileService', CreateController]);

var editApp = angular.module('editApp', ['ngRoute', 'ui.bootstrap', 'mp.colorPicker'])
    .service('ProfileService', ProfileService)
    .controller('EditCtrl', ['$scope', '$rootScope', '$window', 'ProfileService', EditController]);

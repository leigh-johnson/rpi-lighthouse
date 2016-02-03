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

var StrandService = require('./services/StrandService');
var EditController = require('./controllers/StrandController');

var DashboardController = require('./controllers/DashboardController');

var dashboardApp = angular.module('dashboardApp', ['ngRoute', 'ui.bootstrap'])
    .service('StrandService', StrandService)
    .controller('DashboardCtrl', ['$scope', '$rootScope', 'StrandService', DashboardController])

var createApp = angular.module('strandApp', ['ngRoute', 'ui.bootstrap', 'mp.colorPicker'])
    .service('StrandService', StrandService)
    .controller('StrandCtrl', ['$scope', '$rootScope', 'StrandService', StrandController]);

var editApp = angular.module('listStrandApp', ['ngRoute', 'ui.bootstrap'])
    .service('StrandService', StrandService)
    .controller('ListStrandCtrl', ['$scope', '$rootScope', 'StrandService', StrandController]);

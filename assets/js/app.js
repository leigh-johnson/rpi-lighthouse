//var mp = {};
var color = {};
require('angular');
require('angular-route');
require('angular-ui-bootstrap');
window.tinycolor = require('tinycolor2');

//mp.colorPicker = require('angular-color-picker');
color.picker = require('angularjs-color-picker');
'use strict';


// Interact with Profile API
var ProfileService = require('./services/ProfileService');

// View Controllers
var EditControllerVarLEDs = require('./controllers/EditControllerVarLEDs');
var EditControllerLantern = require('./controllers/EditControllerLantern');
var CreateControllerVarLEDs = require('./controllers/CreateControllerVarLEDs');
var CreateControllerLantern = require('./controllers/CreateControllerLantern');
var DashboardController = require('./controllers/DashboardController');

// App routines
var dashboardApp = angular.module('dashboardApp', ['ngRoute', 'ui.bootstrap'])
    .service('ProfileService', ProfileService)
    .controller('DashboardCtrl', ['$scope', '$rootScope', '$window', 'ProfileService', DashboardController])

var createApp = angular.module('createApp', ['ngRoute', 'ui.bootstrap', 'color.picker'])
    .service('ProfileService', ProfileService)
    .controller('CreateCtrl', ['$scope', '$rootScope', 'ProfileService', CreateControllerLantern]);

var editApp = angular.module('editApp', ['ngRoute', 'ui.bootstrap', 'color.picker'])
    .service('ProfileService', ProfileService)
    .controller('EditCtrl', ['$scope', '$rootScope', '$window', 'ProfileService', EditControllerLantern]);

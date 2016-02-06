var mp = {};
require('angular');
require('angular-route');
require('angular-ui-bootstrap');
mp.colorPicker = require('angular-color-picker');

'use strict';

// Interact with Profile API
var ProfileService = require('./services/ProfileService');

// View Controllers
var EditController = require('./controllers/EditController');
var CreateControllerVarLEDs = require('./controllers/CreateControllerVarLEDs');
var CreateControllerLantern = require('./controllers/CreateControllerLantern');
var DashboardController = require('./controllers/DashboardController');

// App routines
var dashboardApp = angular.module('dashboardApp', ['ngRoute', 'ui.bootstrap'])
    .service('ProfileService', ProfileService)
    .controller('DashboardCtrl', ['$scope', '$rootScope', '$window', 'ProfileService', DashboardController])

var createApp = angular.module('createApp', ['ngRoute', 'ui.bootstrap', 'mp.colorPicker'])
    .service('ProfileService', ProfileService)
    .controller('CreateCtrl', ['$scope', '$rootScope', 'ProfileService', CreateController]);

var editApp = angular.module('editApp', ['ngRoute', 'ui.bootstrap', 'mp.colorPicker'])
    .service('ProfileService', ProfileService)
    .controller('EditCtrl', ['$scope', '$rootScope', '$window', 'ProfileService', EditController]);

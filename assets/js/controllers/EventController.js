var EventController = function($scope, $rootScope, EventService) {
  $scope.formData = {};
  $scope.events = [];

  EventService.getEvents().then(function(response) {
    $scope.events = response;
  });

  $scope.addEvent = function() {
    EventService.addEvent($scope.formData).then(function(response) {
      $scope.events.push($scope.formData)
      $scope.formData = {};
    });
  }

  $scope.removeEvent = function(event) {
    EventService.removeEvent(event).then(function(response) {
      $scope.events.splice($scope.events.indexOf(event), 1)
    });
  }
};
module.exports = EventController;
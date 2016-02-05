var DashboardController = function($scope, $rootScope, $window, ProfileService){
  // init routines
  $scope.init = function(){
    ProfileService.list().then(function(res){
      $scope.profiles = res;
    });
  };
  $scope.init();

  $scope.edit = function(profile){
    $window.location.href = '/profile/edit/'+profile.id;
  }
  $scope.remove = function(profile){
    ProfileService.remove(profile).then(function(res){
      $scope.init();
    });
  }
}

module.exports = DashboardController;
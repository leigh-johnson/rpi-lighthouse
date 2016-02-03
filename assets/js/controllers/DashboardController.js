var DashboardController = function($scope, $rootScope, StrandService){
  // init routines
  $scope.init = function(){
    StrandService.list().then(function(res){
      $scope.profiles = res;
    });
  };
  $scope.init();
}

module.exports = DashboardController;
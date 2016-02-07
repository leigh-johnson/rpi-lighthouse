var EditController = function($scope, $rootScope, $window, ProfileService){
 
  var getProfileId = function($window){
    var path = $window.location.pathname;
    path = path.split('/')
    if (path[path.length - 1] == ''){
      id = path[path.length - 2]
    }
    else{
      id = path[path.length - 1]
    }
    return id
  };

 $scope.init = function(){
  var id = getProfileId($window);
  ProfileService.getOne({id:id}).then(function(res){
    $scope.profile = res;
  });
 $scope.activeLED = 0;

 // selected pattern
 $scope.pattern = 'solid';
 // pattern dictionary
 $scope.patterns = {
    'solid' : {
      displayName: 'Solid',
      'description': 'Choose a solid color for each bulb'
    },
    'gradient' : { 
      displayName: 'gradient',
      'description' : 'Set gradient stops along the strand',
      'disabled': true
    },
    'rainbow': {
      displayName: 'Rainbow',
      'description' : 'Rainbow gradient preset',
      'disabled': true
    }
  };
 };

 $scope.init();

 $scope.update= function(){
   profile = {};
   profile.leds = $scope.leds;
   profile.numLEDs = $scope.numLEDs;
   profile.pattern = $scope.pattern;
   ProfileService.update(profile).then(function(res){
    console.log(res);
    $window.location.href ='/';
   });
 };
 $scope.remove = function(profile){
  StrandService.remove(strand).then(function(res){
      console.log(res);
      $window.location.href='/';
    });
 };
 $scope.applyAllColor = function(color){
  for (i=0; i < $scope.leds.length; i++){
    ($scope.leds[i]) = color;
  }
  return
 };
 $scope.setActiveLED = function(index){
  $scope.activeLED = index;
 }
 $scope.updateNumLEDs = function(){
  if ( $scope.leds.length < $scope.numLEDs){
     diff = $scope.numLEDs - $scope.leds.length ;
    // init empty led objects in numLEDs array
    for (i=0; i < diff; i++){
        obj = {};
        $scope.leds.push(obj);
      }
  }
  else {
      $scope.leds.length = $scope.numLEDs;
  }
 };

 $scope.removeProfile = function(){
  ProfileService.removeProfile(profile)(function(res){
    // splice strand from $scope.strands
    // or recall list();
  });
 };
};
module.exports = EditController;
var ProfileController = function($scope, $rootScope, ProfileService){
 $scope.init = function(){
  ProfileService.list().then(function(res){
    $scope.strands = res;
  });
 // current working model
 //$scope.strands.active = {};
 $scope.numLEDs = 30;
 // @todo  1d matrix (for now...)
 $scope.leds = [];
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
  for (i=0; i < $scope.numLEDs; i++){
  $scope.leds[i] ='#f7f7f7';
  }
 };

 $scope.init();

 $scope.create = function(){
   strand = {};
   strand.leds = $scope.leds;
   strand.numLEDs = $scope.numLEDs;
   strand.pattern = $scope.pattern;
   ProfileService.create(strand).then(function(res){
    console.log(res);
    $scope.init();
   });
 };
 $scope.remove = function(strand){
  ProfileService.remove(strand).then(function(res){
    ProfileService.list().then(function(res){
      console.log(res);
      $scope.strands = res;
    });
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
};
module.exports = ProfileController;
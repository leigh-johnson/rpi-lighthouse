var CreateController = function($scope, $rootScope, ProfileService){
 $scope.init = function(){
  $scope.profile = {}
 // current working model
 //$scope.strands.active = {};
 $scope.profile.numLEDs = 30;
 // @todo  1d matrix (for now...)
 $scope.profile.leds = [];
 $scope.activeLED = 0;


 // selected pattern
 $scope.pattern = 'solid';
 /*
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
 */
  for (i=0; i < $scope.profile.numLEDs; i++){
  $scope.profile.leds[i] ='#1e1e1e';
  }
 };

 $scope.init();

 $scope.create = function(){
  console.log('client: ', $scope.profile)
   ProfileService.create($scope.profile).then(function(res){
    console.log(res);
    $scope.init();
   });
 };
 $scope.applyAllColor = function(color){
  for (i=0; i < $scope.profile.leds.length; i++){
    ($scope.profile.leds[i]) = color;
  }
  return
 };
 $scope.setActiveLED = function(index){
  $scope.activeLED = index;
 }
 $scope.updateNumLEDs = function(){
  if ( $scope.profile.leds.length < $scope.profile.numLEDs){
     diff = $scope.profile.numLEDs - $scope.profile.leds.length ;
    // init empty led objects in numLEDs array
    for (i=0; i < diff; i++){
        obj = {};
        $scope.profile.leds.push(obj);
      }
  }
  else {
      $scope.profile.leds.length = $scope.profile.numLEDs;
  }
 };
};
module.exports = CreateController;
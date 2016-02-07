// 

var CreateControllerLantern = function($scope, $rootScope, ProfileService){
 $scope.init = function(){
 // color picker defaults
 $scope.profile = {}
 $scope.profile.numLEDs = 44;
 $scope.profile.leds = [];
 $scope.activeLED = 0;
 // key of LEDs per lantern
 // Example Bootstrap UI rows (left to right, top to bottom):
 /* sm
  0| |5
  1| |4
  2| |3
*/
/* md
  0| |9
  1| |8
  2| |7
  3| |6
  4  |5
*/
/* lg
  0| |11
  1| |10
  2| |9
  3| |8
  4| |7
  5| |6
*/
 $scope.lanterns = {
    0: {
      label: 'Small Left',
      size: 'sm',
      leds: [0,5,1,4,2,3]
    },
    1: {
      label: 'Medium Left',
      size: 'md',
      leds: [6, 15, 7, 14, 8, 13, 9, 12, 10, 11]
    },    
    2: {
      label: 'Large Center',
      size: 'lg',
      leds: [16, 27, 17, 26, 18, 25, 19, 24, 20, 23, 21, 22]
    },
    3: {
      label: 'Medium Right',
      size: 'md', 
      leds: [28, 37, 29, 36, 30, 35, 31, 34, 32, 33]
    },
    4: {
      label: 'Medium Right',
      size: 'sm', 
      leds: [38, 43, 39, 42, 40, 41]
    }
 };


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
    $scope.success();
   });
 };

 $scope.success = function(){
  success = true;
 }
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
module.exports = CreateControllerLantern;
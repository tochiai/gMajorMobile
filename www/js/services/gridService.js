angular.module('gmajor.gridService', [])

.factory('Grid', function(){

  var toggle = function(key, module, profile){
    // add note to grid
    // makes any noise
    playSounds(profile, module, 300, 1, 44100, 1, 0 );

  };

  // var playTrack = function(){};
  // var loopGrid = function(){};
  // var setTempo = function(){};
  // var playGroup = function(){};
  return {
    toggle: toggle
  }

});

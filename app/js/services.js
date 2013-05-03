'use strict';

/* Services */

angular.module('injusticeApp.services', ['ngResource']).
    factory('Character', function($resource){
  		return $resource('/bios/:characterName.json', {}, {
    query: {method:'GET', params:{characterName:'characters'}, isArray:true}
  });
});

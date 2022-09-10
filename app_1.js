
(function(){

'use strict';
//Use this one to avoid global 

angular.module('MyFirstApp', [])

.controller('MyFirstController', function($scope){
    //$ stadns for something angularJS provided
    $scope.name = "Apple";
    $scope.sayHello = function(){
        return "Hello World";
    }
})

})();

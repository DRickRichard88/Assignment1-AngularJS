(function () {
'use strict';
//seting up a controller
angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    $scope.dishes = '';
    $scope.msg = '';
    $scope.inputClass = '';
    $scope.msgClass = 'text-success';
  
    $scope.checkMeal = function(){
      $scope.msg = msgForDishes($scope.dishes);
      $scope.inputClass = classForInput($scope.dishes)
      $scope.msgClass = classForMsg($scope.dishes)
    };

//reset function

    $scope.reset = function(){
      $scope.msg = '';
      $scope.inputClass = '';
      $scope.msgClass = 'text-success';
    };

//message 

    function msgForDishes(dishes){
      if(dishes.trim()=='') return 'Enter your meal';
      
      else if(numberOfDishes(dishes) <= 3) return 'Yuummy , Enjoy !';

      else return 'Ouch, too much !'  
    };

// class for input and message 

    function classForInput(dishes){
      if(dishes.trim()=='') return 'has-error';

      else return 'has-success'; 
    };

    function classForMsg(dishes){
      if(dishes.trim()=='') return 'text-danger';

      else return 'text-success';  
    };

//countung dishes

    function numberOfDishes(dishes){
      var input = dishes.split(',');
      var numberOfInputs = 0;

      for(var i=0;i<input.length;i++){
        if(input[i].trim() != '')
          numberOfInputs++;
      }
      return numberOfInputs;
    }

  };


})();

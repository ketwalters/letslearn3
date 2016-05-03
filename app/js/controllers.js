'use strict';

var eduApp = angular.module('eduApp', []); 

eduApp.controller('EduAppCtrl', function($scope){
    var rand = Math.floor(Math.random() * 10) + 1;
    var rand1 = Math.floor(Math.random() * 10) + 1; 
    var rand2 = Math.floor(Math.random() * 10) + 1; 
    var rand3 = Math.floor(Math.random() * 10) + 1; 
    
    $scope.first = document.getElementById("first").innerHTML = rand;
    $scope.result = document.getElementById("result").innerHTML = rand1;

    //if first > than result then sign must be - or /
    
    if ($scope.first > $scope.result) {
      var signs = ["-","/"];
      var randSign = signs[Math.floor(Math.random() * signs.length)];
      $scope.sign = document.getElementById("sign").innerHTML = randSign;
    }
    else {
      var signs2 = ["+","*"];
      var randSign2 = signs2[Math.floor(Math.random() * signs2.length)];
      $scope.sign = document.getElementById("sign").innerHTML = randSign2;
    }

    if ($scope.sign === "*") {
      var num = Math.floor(Math.random() * 10) + 1;
      var a = $scope.first * num;
      $scope.result = a;
    }

    if ($scope.sign === "/") {
      var num2 = Math.floor(Math.random() * 10) + 1;
      var a2 = $scope.result * num2;
      $scope.first = a2;  
    }
    $scope.score = 0;
    
    $scope.correct = function() {
      var rand2 = Math.floor(Math.random() * 10) + 1;
      var rand3 = Math.floor(Math.random() * 10) + 1;
      var second = Number(document.mathForm.second.value);
      if ($scope.sign === "-") {
        var modifier = -1;
      } else {
        var modifier = 1;
      }

      if ($scope.sign === "*") {
        if ($scope.first * (second * modifier) === $scope.result) {
          $scope.Message = "Correct!"
        } else {
          $scope.Message = "Try Again"
        }
      }

      if ($scope.sign === "-") {
        if ($scope.first + (second * modifier) === $scope.result) {
          $scope.Message = "Correct!"
        } else {
          $scope.Message = "Try Again"
        }
      }

      if ($scope.sign === "+") {
        if ($scope.first + (second * modifier) === $scope.result) {
          $scope.Message = "Correct!"
        } else {
          $scope.Message = "Try Again"
        }
      }

      if ($scope.sign === "/") {
        if ($scope.first / (second * modifier) === $scope.result) {
          $scope.Message = "Correct!"
        } else {
          $scope.Message = "Try Again"
        }
      }

      if ($scope.Message === "Correct!") {
        $scope.first = document.getElementById("first").innerHTML = rand2;
        $scope.result = document.getElementById("result").innerHTML = rand3;

        if ($scope.first > $scope.result) {
          var signs = ["-","/"];
          var randSign = signs[Math.floor(Math.random() * signs.length)];
          $scope.sign = document.getElementById("sign").innerHTML = randSign;
        }
        else {
          var signs2 = ["+","*"];
          var randSign2 = signs2[Math.floor(Math.random() * signs2.length)];
          $scope.sign = document.getElementById("sign").innerHTML = randSign2;
        }

        if ($scope.sign === "*") {
          var num = Math.floor(Math.random() * 10) + 1;
          var a = $scope.first * num;
          $scope.result = a;
        }

        if ($scope.sign === "/") {
          var num2 = Math.floor(Math.random() * 10) + 1
          var a2 = $scope.result * num2;
          $scope.first = a2;  
        }
        $scope.score++;
      }
      $scope.second = null;
    }
});
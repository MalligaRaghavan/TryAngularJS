'use strict';

/* Controllers */

var todosApp = angular.module('todoApp', []);

	todosApp.controller('TodoListCtrl', ['$scope', '$http', function ($scope, $http) {
    $http.get('todos.json').success(function(data) {
      $scope.todos = data;
    });

    $scope.orderProp = 'title';
  }]);

var candidateControllers = angular.module('candidateControllers', []);

candidateControllers.controller('ListController', ['$scope', '$http', function($scope, $http) {
  $http.get('js/data.json').success(function(data) {
    $scope.candidates = data;
    $scope.candidateOrder = "firstName";
    console.log(data);
  });
}]);
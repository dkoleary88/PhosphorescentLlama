app.controller('currentMatchesController', ['httpFactory', '$state', '$scope', function (httpFactory, $state, $scope) {
  $scope.refresh = function () {
    httpFactory.getMatches()
      .then(function (data) {
        $scope.matches = data;
      });
  };

  $scope.newMatch = function () {
    $state.go('/new-match');
  };

}]);

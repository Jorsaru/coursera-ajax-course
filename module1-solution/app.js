(function () {
  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);
  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
    $scope.message = "";
    $scope.list = "";

    $scope.clickIfTooMuch = function () {
      var list = $scope.list;
      var string = list.split(/\s*(?:,|$)\s*/);

      if (string.length <= 3) {
        $scope.message = "Enjoy!";
        $scope.color = 'green';
        $scope.border = '1px solid green';
        $scope.warning = '';
      }

      else {
        $scope.message = "Too much!";
        $scope.color = 'green';
        $scope.border = '1px solid green';
        $scope.warning = '';
      }

      if (list == '') {
        $scope.message = "Please enter data first.";
        $scope.color = 'red';
        $scope.border = '1px solid red';
        $scope.warning = '';
      }

      for (var i = 0; i < string.length; i++) {
        if (string[i] === "") {
          $scope.warning = "Empty strings doesn't count";
          $scope.message = "";
          $scope.color = '';
          $scope.border = '';
        }
      }
    }
  }
})();

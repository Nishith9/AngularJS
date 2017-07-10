var app = angular.module("nestedctrl",[]);
app.controller("ctrl1",ctrl1);
app.controller("ctrl2",ctrl2);
function ctrl1($scope) {
	$scope.testProp="From ctrl 1";
}
function ctrl2($scope) {
	$scope.testProp="From ctrl 2";
}
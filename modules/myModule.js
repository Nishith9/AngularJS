var myHelloModule = angular.module("myHelloModule",[]);
myHelloModule.controller("helloctrl", helloctrl);
function helloctrl(){
	this.helloMsg = "Message";
}
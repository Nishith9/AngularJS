angular.module("DirApps",[])
.controller("dirctrl", dirctrl);

function dirctrl() {
	this.myList = [
		{'name':"ab",'age':"12"},
		{'name':"cd",'age':"34"},
		{'name':"ef",'age':"45"},
		{'name':"gh",'age':"67"},
		
	];
}
var app = angular.module("todoApp",[])
app.controller("todoCtrl", todoCtrl);

function todoCtrl() {
	this.editMode = false;
	this.todos = [
			"todo1","todo2","todo3" ];
	this.addNewTodo = function() {
		this.todos.push(this.newTodo);
		this.newTodo = "";
	}
	this.triggerEditMode= function (){
		this.editMode = !this.editMode;
	}
	this.delete = function(index){
		this.todos.splice(index,1);
	}
}
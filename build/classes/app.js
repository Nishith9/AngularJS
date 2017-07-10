var app = angular.module("CalcApp",[]);
app.controller("Calcctrl",Calcctrl);
function Calcctrl(){
	this.resultValue=0;
	this.clickButton = function(button){
		this.selectedOp= button;
	}
	this.result=function() {
		var num1 = parseFloat(this.input1);
		var num2 = parseFloat(this.input2);
		if(this.selectedOp === '+') {
			this.resultValue = num1 + num2;
		}
		else if(this.selectedOp === '*') {
			this.resultValue = num1 * num2;
		}
		else if(this.selectedOp === '/') {
			this.resultValue = num1 / num2;
		}
		else if(this.selectedOp === '-') {
			this.resultValue = num1 - num2;
		}
	}
}
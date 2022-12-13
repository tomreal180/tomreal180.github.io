var name="Minh Duc Dep trai";
console.log(name);
function caculateAge(yearBorn) {
	var currentTime= new Date();
	var curentYear=currentTime.getFullYear();
	return curentYear-yearBorn;
}
var name1=prompt("Enter your name");
var yearBorn=prompt("Enter the year you born");
var age=caculateAge(yearBorn);

console.log(name1 + " ist " + age + " years old");

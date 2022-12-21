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

var message="";
if (age<18){
	message+="You are"
	var i=0;
	while(i<5){
		message+=" very";
		i++;
	}
	message += " young";
	if ((age>5) && (age<10)){
		message="You are a kid";
	}

}else if(age<50){
	message="You are quite young";
}else{
	message="You are over 50 years old";
}

console.log(message);



var isClosed= confirm("abc");

if (isClosed===true){
	console.log("Bye Bye");
}else{
	console.log("Thanks");
}
function init(){
	var sum_html=document.getElementById("btn");
	sum_html.onclick = averageCaculation;
	var scores=document.getElementsByTagName("td");
	var i=0;
	while (i<scores.length){
		scores[i].onclick = changeValue;
		i++
	}
}

function changeValue(){
	while (true){
		var newValue= prompt("Which Scores is it?");
		if ((typeof Number(newValue)==="number") && (Number(newValue)<=10&&Number(newValue)>=0)){
			break
		}else{
			alert("Input Value isn't number.Please try again");
		}
	}
	this.textContent = newValue;
}
function averageCaculation(){
	var scores=document.getElementsByTagName("td");
	var average=0;
	for(var i=0;i<scores.length;i++){
		var value=scores[i].textContent*1;
		average+=value;
	}
	average=average/scores.length;
	document.getElementById("res").innerText=average;
	this.textContent= "Caculate again";
}

window.onload = init ;
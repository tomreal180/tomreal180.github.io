function init(){
var sum_html=document.getElementById("btn");
sum_html.onclick = averageCaculation;
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
}

window.onload = init ;
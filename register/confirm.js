function loadData(){
    var name= document.getElementById("confirm-name");
    var email= document.getElementById("confirm-mail");
    var phonenumber= document.getElementById("confirm-phonenumber");
    var age= document.getElementById("confirm-age");
    var degree= document.getElementById("confirm-degree");
    
    
    lastname=sessionStorage.getItem("lastname");
    name.textContent = sessionStorage.firstname+" "+lastname;
    email.textContent = sessionStorage.email;
    phonenumber.textContent = sessionStorage.phonenumber;
    age.textContent = sessionStorage.age;
    degree.textContent= sessionStorage.degree;}

function returnregis(){
    window.location= "register.html";
}


function init(){
    loadData();
    var cancel=document.getElementById("cancelButton");
    cancel.onclick = returnregis;
}

window.onload =init;
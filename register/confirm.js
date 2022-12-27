function loadData(){
    //call tags which need to be edited
    var name= document.getElementById("confirm-name");
    var email= document.getElementById("confirm-mail");
    var phonenumber= document.getElementById("confirm-phonenumber");
    var age= document.getElementById("confirm-age");
    var degree= document.getElementById("confirm-degree");
    var requirement=document.getElementById("confirm-requirement");
    var major= document.getElementById("confirm-major");
    var result= document.getElementById("confirm-result");

    //change a text content
    lastname=sessionStorage.getItem("lastname");
    name.textContent = sessionStorage.firstname+" "+lastname;
    email.textContent = sessionStorage.email;
    phonenumber.textContent = sessionStorage.phonenumber;
    age.textContent = sessionStorage.age;
    degree.textContent= sessionStorage.degree;
    major.textContent= sessionStorage.major;
    //change radio requirement
    var text="";
    var allrequire= sessionStorage.getItem("allrequirement").split(",");
    var i=0;
    var score=0;
    while(i<allrequire.length){
        if (sessionStorage.getItem(allrequire[i]) == "true"){
            text+=allrequire[i]+", ";
            score+=1;
        }
        i++;
    }
    text= text.substring(0,text.length-2);
    requirement.textContent = text;
    if(score ==4){
        result.textContent = "Passed";
    }else{
        result.textContent = "Not Passed";
    }
}


function returnregis(){
    window.location= "register.html";
}


function init(){
    loadData();
    var cancel=document.getElementById("cancelButton");
    cancel.onclick = returnregis;

}

window.onload =init;
function saveData(){
    var firstname= document.getElementById("firstname").value;
    var lastname= document.getElementById("lastname").value;
    var email= document.getElementById("email").value;
    var phonenumber= document.getElementById("phonenumber").value;
    var age= document.getElementById("age").value;

    sessionStorage.firstname= firstname;
    sessionStorage.setItem("lastname", lastname);
    sessionStorage.email= email;
    sessionStorage.phonenumber= phonenumber;
    sessionStorage.age= age;
    var degreeArray = document.getElementById("radioDegree").getElementsByTagName("input");
    for(var i=0; i< degreeArray.length; i++){
        if( degreeArray[i].checked == true){
            sessionStorage.degree= degreeArray[i].value;
        }
    }

    var requireArray=document.getElementById("radioRequire").getElementsByTagName("input");
    var i=0;
    while(i<requireArray.length){
        if (requireArray[i].checked ==true){
            sessionStorage.setItem(requireArray[i].name,requireArray[i].value);
        }else{
            if (sessionStorage.getItem(requireArray[i].name) != null){
                sessionStorage.setItem(requireArray[i].name,null);
            }
        }
        i+=1;
    }

}

function prefill(){
    if (sessionStorage.firstname != null){
        document.getElementById("firstname").value= sessionStorage.firstname;
        document.getElementById("lastname").value= sessionStorage.lastname;
        document.getElementById("email").value= sessionStorage.email;
        document.getElementById("phonenumber").value= sessionStorage.phonenumber;
        document.getElementById("age").value= sessionStorage.age;

        var degreeArray= document.getElementById("radioDegree").getElementsByTagName("input");
        for(var i=0; i< degreeArray.length; i++){
            if( degreeArray[i].value == sessionStorage.degree){
                degreeArray[i].checked=true;
            }
        }

        var requireArray=document.getElementById("radioRequire").getElementsByTagName("input");
        var i=0;
        while(i<requireArray.length){
            if (requireArray[i].value == sessionStorage.getItem(requireArray[i].name)){
                requireArray[i].checked = true;
            }
            i+=1;
        }

    }
}

function init(){
    var regForm= document.getElementById("registerForm");
    regForm.onsubmit= saveData;
    prefill();
}

window.onload=init;
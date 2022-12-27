function saveData(){
    //save date in information box
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
    //save data in radio degree
    var degreeArray = document.getElementById("radioDegree").getElementsByTagName("input");
    for(var i=0; i< degreeArray.length; i++){
        if( degreeArray[i].checked == true){
            sessionStorage.degree= degreeArray[i].value;
        }
    }
    //save data in radio Requirement 
    var requireArray=document.getElementById("radioRequire").getElementsByTagName("input");
    var i=0;
    var allrequirement=[];
    while(i<requireArray.length){
        console.log("123");
        if (requireArray[i].checked ==true){
            sessionStorage.setItem(requireArray[i].name,true);
        }else{
            if (sessionStorage.getItem(requireArray[i].name) != " true"){
                sessionStorage.setItem(requireArray[i].name,false);
            }
        }
        allrequirement.push(requireArray[i].name);
        i+=1;
    }
    sessionStorage.allrequirement = allrequirement;
    //save data in major dropbox
    var majorselect=document.getElementById("major");
    sessionStorage.setItem("major",majorselect.value);
}

function prefill(){
    if (sessionStorage.firstname != null){
        //prefill information box 
        document.getElementById("firstname").value= sessionStorage.firstname;
        document.getElementById("lastname").value= sessionStorage.lastname;
        document.getElementById("email").value= sessionStorage.email;
        document.getElementById("phonenumber").value= sessionStorage.phonenumber;
        document.getElementById("age").value= sessionStorage.age;
        //prefill radio degree
        var degreeArray= document.getElementById("radioDegree").getElementsByTagName("input");
        for(var i=0; i< degreeArray.length; i++){
            if( degreeArray[i].value == sessionStorage.degree){
                degreeArray[i].checked=true;
            }
        }
        //prefill radio requirement 
        var requireArray=document.getElementById("radioRequire").getElementsByTagName("input");
        var i=0;
        while(i<requireArray.length){
            if (sessionStorage.getItem(requireArray[i].name)=="true"){
                requireArray[i].checked = true;
            }
            i+=1;
        }
        //prefill dropbox major
        var majorselect=document.getElementById("major");
        if(sessionStorage.major!= null){
            majorselect.value = sessionStorage.major;
        }

    }
}

function init(){
    var regForm= document.getElementById("registerForm");
    regForm.onsubmit= saveData;
    prefill();
}

window.onload=init;
function validate(){
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

    //validate
   errorMsg="";
    // logic 1
    if (firstname.match("^[A-Z a-z]{1,30}$") == null){
        errorMsg += "First name has to contain only characters and between 1 or 30 characters <br>";
    }

    // logic 2
    if (lastname.match("^[A-Za-z]{1,30}$") == null){
        errorMsg += "Last name has to contain only characters and between 1 or 30 characters <br>";
    }

    // logic 3
    if (email.match("^[^ ]*@[^ ]*[.][^ ]*$") == null){
        errorMsg += "Email has to contain @<br>";
    }

    // logic 4
    if (phonenumber.match("((\\+84)|0)\\d{9,10}") == null){
        errorMsg += "Phone Number has to start with +84 0r 0 and is between 9 or 10 digits<br>";
    }

    // logic 5
    if (age.match("^((\\d)|(\\d\\d)|([1][0-4][0-9])|(150))$") == null){
        errorMsg += "Age has to be a number less than 150<br>";
    }

    // logic 6
    if (sessionStorage.degree=="Ph.D"){
        if (parseInt(age)<27){
            errorMsg += "if Ph.D then age need to be greater than or equal to 27<br>";

        }

        
    }
    if (errorMsg ==""){
        return true
    }else{
        document.getElementById("error").innerHTML=errorMsg;
        return false
    }

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
    regForm.onsubmit= validate;
    prefill();
}

window.onload=init;
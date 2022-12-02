function validate(){
    if(document.myForm.fullname.value==""){
    document.getElementById("nameErr").innerHTML = "Please enter name";
    return false;
    }


if(document.myForm.email.value==""){
    document.getElementById("emailErr").innerHTML = "Please enter your email";
    return false;
} else {
    var regex = /^\S+@\S+\.\S+$/;
    if(regex.test(document.myForm.email.value)==false){
        alert("Please enter a valid email address");
        return false;
    }
 }
}
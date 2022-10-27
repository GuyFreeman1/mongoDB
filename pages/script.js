

const checkErrors = ()=>{
    var firstName = document.forms['registerName']['firstName'].value;
    var lastName = document.forms['registerName']['lastName'].value;
    var emailAddress = document.forms['registerName']['userEmail'].value;
    var password = document.forms['registerName']['Pass'].value;
    var passwordCom = document.forms['registerName']['conPass'].value;
    var Error = false;
    if(firstName.length < 2 || firstName.length > 20){
        alert('First Name Error')
        return false;
    }
    else{
        Error = true;
    }
    if(lastName.length < 2 || lastName.length > 20){
        alert('Last Name Error')
        return false;
    }
    else{
        Error = true;
    }
    if(emailAddress.includes('@') && emailAddress.includes('gmail.com') || emailAddress.includes('yahoo.com')){
        Error = true;
    }
    else{
        alert("Email Error");
        return false;
    }
    if(password.length >5 && password.length <8 && password.includes('$')){
        Error = true;
    }
    else{
        alert(" Password Error");
        return false;
    }
    if(passwordCom == password){
        Error = true;
    }
    else{
        alert("Confirm Password Error");
        return false
    }

    if(Error == true){
        return true;
    }

   
     

};
function validation(){
    var email = document.getElementById("email").value;
    var error_message = document.getElementById("error_message");
    var text;

     if (email.length < 6){
        text = "Please Enter Valid Email";
        error_message.innerHTML = text;
        return false;
     }
        alert ("Form Submitted Successfully!")
        return true;
      }
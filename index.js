function processDetails() {
 
    //Get text boxes.    
    var name = document.getElementById("nameTextBox");
    var emailAddress = document.getElementById("addressTextBox");
  
    //Log the current text box values
    console.log("Name : " + name.value + ". Address : "  + emailAddress.value);
  
    //Validate email address, if valid alert with values. If invalid alert with invalid email address.
    if(validEmail(emailAddress.value)){
         alert("Name : " + name.value + ". Address : "  + emailAddress.value + " Submitted.");
         //Clear text boxes for nexy use.
            name.value = '';
            emailAddress.value = '';
    } else {
            alert("Invalid e-mail address.");
    }
 }
  
 function validEmail(emailAddress){
     if (/^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/.test(emailAddress)){
         return true;
     } else {
         return true;
     }
     // needs fixing 
 }
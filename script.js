function validateForm(){
    let name=document.getElementByld("name").value.trim();
    let email=document.getElementByld("email").value.trim();
    let message=document.getElementByld("message").value.trim();

    if(name ===""|| email === ""|| message ===""){
        alert("All fields are required!");
        return false;
    }
alert("Message sent successfully!");
return true;
}
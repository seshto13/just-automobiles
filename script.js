function showMessage() {
  alert("Your order was successful");
}

function submitForm() {
  alert("We will respond to you shortly");
}

function isValidEmail(email) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return email.match(mailformat);
}

function validateContact(event) {
  event.preventDefault();

  var name = document.getElementById("contactName").value;
  var email = document.getElementById("contactEmail").value;
  var message = document.getElementById("contactMessage").value;

  var nameError = document.getElementById("contactNameError");
  var emailError = document.getElementById("contactEmailError");
  var messageError = document.getElementById("contactMessageError");

 

  nameError.innerHTML = "";
  emailError.innerHTML = "";
  contactMessageError.innerHTML = "";



  if (name.trim() === "") {
    contactNameError.innerHTML = "Enter name";
    return;
  }



  if (email.trim() === "") {
    contactEmailError.innerHTML = "Enter your email";
    return;
  } else if (!isValidEmail(email)) {
    emailError.innerHTML = "Invalid Email Address";
    return;
  }



  if (message.trim() === "") {
    contactMessageError.innerHTML = "Message is required";
    return;
  }

  alert("You've submitted the Form");
}

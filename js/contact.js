function submitForm() {
  const formatName = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~0123456789]/;
  const formatEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("feedback").value;
  
  if ((name.length === 0) & (email.length === 0) & (message.length === 0)) {
    alert("Please fill all the fields to submit the form");
  } else if (name === "" || name.match(formatName)) {
    console.log("Invalid Name");
    alert("Please enter a valid Name");
  } else if (email === "" || !email.match(formatEmail)) {
    console.log("Invalid Email");
    alert("Please enter a valid Email");
  } else if (message.length < 15) {
    alert("Please give us atleast one sentence of feedback")
  } 
  else {
    alert("Thank you for your response!");
    document.getElementById("form").reset();
  }
}
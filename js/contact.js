let form = document.querySelector("#form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  if (form.name.value.length > 0 && form.email.value.length > 0) {
    console.log("========= Form Submission =========");
    console.log("Name: " + form.name.value);
    console.log("Email: " + form.email.value);
    console.log("Message: " + form.message.value);
    event.preventDefault();
  } else {
    console.warn("You must enter name and email to submit this form");
    alert("Please enter a name and email to submit!");
  }
}
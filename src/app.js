function validateForm() {
    const check = document.querySelector("#validate");
    const valid = document.querySelector('#valid');
    const error = document.querySelector('#valid');
    if (check == "") {
      console.log()
    return false;
  }
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!check.match(emailRegex)) {
    alert("Email format is incorrect");
    return false;
  }
}
validateForm()
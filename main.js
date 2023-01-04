function sendEmail() {
  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "skripteditor@gmail.com",
    Password : "70B692DDC35AEBF5F6723EDBBF0582E8747F",
    To : 'skripteditor@gmail.com',
    From : document.getElementById("email").value,
    Subject : document.getElementById("subject").value,
    Body : document.getElementById("message").value
  }).then(
  message => alert(message)
  );
}
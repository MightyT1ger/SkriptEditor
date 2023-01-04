function sendEmail() {
  Email.send({
    SecureToken : "24e2a136-ced9-410c-ba16-f9d5fb51ac68",
    To : 'skripteditor@gmail.com',
    From : document.getElementById("email").value,
    Subject : document.getElementById("subject").value,
    Body : document.getElementById("message").value
  }).then(
  message => alert(message)
  );
}
function sendEmail() {
  Email.send({
    Host : "smtp.gmail.com",
    Username : "skripteditor@gmail.com",
    Password : "#Krokodil2005",
    To : 'skripteditor@gmail.com',
    From : document.getElementById("email").value,
    Subject : document.getElementById("subject").value,
    Body : document.getElementById("message").value
  }).then(
  message => alert(message)
  );
}
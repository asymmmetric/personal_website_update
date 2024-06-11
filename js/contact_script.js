document.getElementById("sendEmailButton").addEventListener("click", function() {
    const name = document.getElementById("idName").value;
    const email = document.getElementById("idEmail").value;
    const message = document.getElementById("idMessage").value;
    

    if (!name || !email || !message) {
        alert("Please review the fields in the form.");
        alert
        return;
    }

    Email.send({
        SecureToken: "7AD7819FC63EFAE9F40F2148DD9B9F04D4F2",
        To: "symonenkoartur@gmail.com",
        From: "symonenkoartur@gmail.com",
        Subject: `New contact from ${name}`,
        Body: `Name: ${name} <br> Email: ${email} <br> Message: ${message}`
    }).then(
        message => alert("Email sent!")
    ).catch(
        error => alert("Failed to send email: " + error)
    );
});

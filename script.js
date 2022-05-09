var firstName = document.querySelector('#name').value;
var lastName = document.querySelector('#lastname').value;
var fullName = firstName + ' ' + lastName;
var mail = document.querySelector("#inputEmail4");
var address = document.querySelector("#inputAddress");
var order = document.querySelector("#floatingTextarea2");
var btn = document.querySelector(".btn")


var data = {
    "FullName": fullName,
    "Email": mail.value,
    "Address": address.value,
    "Order": order.value
}


btn.addEventListener("click", function (e) {
    e.preventDefault();
    Email.send({
        Host: "smtp.gmail.com",
        Username: "@gmail.com",//use your gmail id here
        Password: "Sasni@1234567",//use your gmail id password
        To: '@gmail.com',//receiver gmail
        From: "@gmail.com",
        Subject: "New order",
        Body: (data)
    }).then(
        message => {
            if (message == "OK") {
                alert("your order has been placed")
            } else {
                console.error(message);
                alert("error occured, please try again later ");
            }
        }
    );
})
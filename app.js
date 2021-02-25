const buttons = document.querySelectorAll(".btn");
const emails = document.querySelectorAll(".email");
const alertMsg = document.querySelectorAll(".alert");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", (e) => {
        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(emails[i].value)) {
            alertMsg[i].style.visibility = "hidden";

        } else {
            alertMsg[i].style.visibility = "visible";
        }
        e.preventDefault();
    });
}
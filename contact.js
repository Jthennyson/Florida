function validateForm() {
    email = document.getElementById("email").value;
    confirm_email = document.getElementById("confirm_email").value;
    form = document.getElementById("form");
}
form.addEventListener("submit", function(e) {
    e.preventDefault();
    if (email === "") {
        alert("Please enter your email");
        return false;
    }
    if (email !== confirm_email) {
        alert("The emails do not match");
        return false;
    }
    else {
        return true;
    }
    ;
});

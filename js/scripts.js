function validation() {
    var data = document.getElementById("email").value;
    let pattern = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
    let result = pattern.exec(data);

    var ok = true;
    var message = "";

    if (data == "") {
        ok = false;
        message = "Please provide a email";
    }
    else if (result == null) {
        ok = false;
        message = "Please provide a valid email";
    }

    if (!ok) {
        document.getElementById("email").style.border = "1px solid hsl(0, 93%, 68%)";
        document.getElementById("error").style.visibility = "visible";
        document.getElementById("error-message").innerHTML = message;
        return false;
    }
}
check = () => {
    var num1 = document.getElementById("body__login-email").value;
    var num2 = document.getElementById("body__login-comment").value;
    var num3 = document.getElementById("body__login-rating").value;
    if (num1 === '' || num2 === '' || num3 === '') {
        document.getElementById("body__login-result").innerHTML = "Please enter it completely";
        return;
    }
    var x = document.getElementById("body__login-email").value;
    var atposition = x.indexOf("@");
    var dotposition = x.lastIndexOf(".");
    if (atposition < 1 || dotposition < (atposition + 2) || (dotposition + 2) >= x.length) {
        document.getElementById("body__login-result").innerHTML = "False";
        return;
    } else
        document.getElementById("body__login-result").innerHTML = "";
}
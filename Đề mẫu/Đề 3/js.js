check = () => {
    var num1 = document.getElementById("price1").value;
    var num2 = document.getElementById("price2").value;
    if(num1 == '' || num2 == '')
    {
        document.getElementById("numloc").innerHTML="Please enter it completely";
        document.getElementById("button").style.marginTop = "0";
        return;
    }
    else if(isNaN(num1) || isNaN(num2))
    {
        document.getElementById("numloc").innerHTML="Enter Number value only";
        document.getElementById("button").style.marginTop = "0";
        return;
    }
    else
    {
        document.getElementById("numloc").innerHTML="";
        document.getElementById("button").style.marginTop = "20px";
    }
}

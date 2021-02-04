var month = document.getElementById("monthly");
var annually = document.getElementById("annually");
var check = document.getElementById("toggle");

function myFunction() {
    if (check.checked == false) {
        month.style.fontWeight = "bold";
        month.style.color = "hsl(233, 13%, 49%)";
        annually.style.fontWeight = "300";
    } else if (check.checked == true) {
        month.style.fontWeight = "300";
        annually.style.fontWeight = "bold";
        annually.style.color = "hsl(233, 13%, 49%)";
    }
}
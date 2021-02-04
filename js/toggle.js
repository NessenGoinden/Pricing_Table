var month = document.getElementById("monthly");
var annually = document.getElementById("annually");
var check = document.getElementById("toggle");

function myFunction() {
    if (check.checked == false) {
        month.style.fontWeight = "bold";
        month.style.color = "rgba(33,44,202,1)";
        annually.style.fontWeight = "300";
        annually.style.color = "hsl(233, 13%, 49%)"
    } else if (check.checked == true) {
        month.style.fontWeight = "300";
        month.style.color = "hsl(233, 13%, 49%)"
        annually.style.fontWeight = "bold";
        annually.style.color = "rgba(33,44,202,1)";
    }
}
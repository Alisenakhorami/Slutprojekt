function showTextfield() {
    var x = document.getElementById("country");
    var y = document.getElementById("otherCountry");
    if (x.value === "sverige") {
        y.style.display = "none";
    } else {
        y.style.display = "block" ;
    } 
}
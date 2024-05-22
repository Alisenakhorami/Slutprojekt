function submitButton(){
    var name = document.getElementById("fname");
    var lastname = document.getElementById("lname");
    var pnummer = document.getElementById("pnummer")
    var adress = document.getElementById("adress")
    var postnummer = document.getElementById("postnummer")
    var ort = document.getElementById("ort")
    var telefon = document.getElementById("telefon")
    var epost = document.getElementById("e-post")
    var kontakt = document.getElementById("kontakt")
    var okMessage = "Your registeration was successful!";
    var noOkMessage = "Something is wrong!";
    if(name.value == "" || lastname.value == "" || pnummer.value== "" || adress.value == "" || postnummer.value == "" || ort.value == "" || telefon.value == "" || epost.value == "" || sms.value == "" ){
        alert(noOkMessage);
    }
    else{
        alert(okMessage);
    }
}

function showTextfield() {
    var x = document.getElementById("country");
    var y = document.getElementById("otherCountry");
    if (x.value === "sverige") {
        y.style.display = "none";
    } else {
        y.style.display = "block" ;
    }  
  }
document.getElementById("addHome1").addEventListener("click", addHome1);
document.getElementById("addHome2").addEventListener("click", addHome2);
document.getElementById("addHome3").addEventListener("click", addHome3);
document.getElementById("addGuest1").addEventListener("click", addGuest1);
document.getElementById("addGuest2").addEventListener("click", addGuest2);
document.getElementById("addGuest3").addEventListener("click", addGuest3);

let homeScore = document.getElementById("homeScore").innerHTML;
let guestScore = document.getElementById("guestScore").innerHTML;

function addHome1(){
    homeScore++;    
}
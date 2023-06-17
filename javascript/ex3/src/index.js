const homeScore = document.getElementById("homeScore");
const guestScore = document.getElementById("guestScore");

document.getElementById("addHome1").addEventListener("click", () => addScore(1));
document.getElementById("addHome2").addEventListener("click", () => addScore(2));
document.getElementById("addHome3").addEventListener("click", () => addScore(3));
document.getElementById("addGuest1").addEventListener("click", () => addScore(1, guestScore));
document.getElementById("addGuest2").addEventListener("click", () => addScore(2, guestScore));
document.getElementById("addGuest3").addEventListener("click", () => addScore(3, guestScore));

function addScore(point, team = homeScore) {
    team.innerHTML = Number(team.innerHTML) + point;
}

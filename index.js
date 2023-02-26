let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")

let guestScore = 0
let homeScore = 0

//      Home Score

function addHome1(){
    homeScore += 1
    homeScoreEl.textContent = homeScore
}
function addHome2(){
    homeScore += 2
    homeScoreEl.textContent = homeScore
}function addHome3(){
    homeScore += 3
    homeScoreEl.textContent = homeScore
}

//      Guest Score

function addGuest1(){
    guestScore += 1
    guestScoreEl.textContent = guestScore
}function addGuest2(){
    guestScore += 2
    guestScoreEl.textContent = guestScore
}function addGuest3(){
    guestScore += 3
    guestScoreEl.textContent = guestScore
}

//      The reset button

function reset(){
    guestScore = 0
    guestScoreEl.textContent = guestScore

    homeScore = 0
    homeScoreEl.textContent = homeScore
}
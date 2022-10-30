let homeScoreButton1 = document.getElementById("home-score-butoon1");
let homeScoreButton2 = document.getElementById("home-score-butoon2");
let homeScoreButton3 = document.getElementById("home-score-butoon3");
let homeScoreEl = document.getElementById("home-score");
let homeScore = 0;

let guestScoreButton1 = document.getElementById("guest-score-butoon1");
let guestScoreButton2 = document.getElementById("guest-score-butoon2");
let guestScoreButton3 = document.getElementById("guest-score-butoon3");
let guestScoreEl = document.getElementById("guest-score");
let guestScore = 0;

function increaseHomeScore1() {
    homeScore += 1;
    homeScoreEl.textContent = homeScore;
}

function increaseHomeScore2() {
    homeScore += 2;
    homeScoreEl.textContent = homeScore;
}

function increaseHomeScore3() {
    homeScore += 3;
    homeScoreEl.textContent = homeScore;
}

function increaseGuestScore1() {
    guestScore += 1;
    guestScoreEl.textContent = guestScore;
}

function increaseGuestScore2() {
    guestScore += 2;
    guestScoreEl.textContent = guestScore;
}

function increaseGuestScore3() {
    guestScore += 3;
    guestScoreEl.textContent = guestScore;
}









//TEAM 1
let runs = 0
let ball = 0
let over = 0
function onerun() {
    runs += 1
    document.getElementById('score').innerText = runs;
    const noballs = document.getElementById('noballs').checked;
    if (!noballs) {
        ball += 1
        document.getElementById('ball').innerText = ball;
        over = ball / 6
        document.getElementById('over').innerHTML = parseInt(sover) + "." + parseInt(sball % 6)
    }
    document.getElementById('noballs').checked = false;
}
function tworun() {
    runs += 2
    document.getElementById('score').innerText = runs;
    const noballs = document.getElementById('noballs').checked;
    if (!noballs) {
        ball += 1
        document.getElementById('ball').innerText = ball;
        over = ball / 6
        document.getElementById('over').innerHTML = parseInt(sover) + "." + parseInt(sball % 6)
    }
    document.getElementById('noballs').checked = false;
}
function threerun() {
    runs += 3
    document.getElementById('score').innerText = runs;
    const noballs = document.getElementById('noballs').checked;
    if (!noballs) {
        ball += 1
        document.getElementById('ball').innerText = ball;
        over = ball / 6
        document.getElementById('over').innerHTML = parseInt(sover) + "." + parseInt(sball % 6)
    }
    document.getElementById('noballs').checked = false;
}
function fourrun() {
    runs += 4
    document.getElementById('score').innerText = runs;
    const noballs = document.getElementById('noballs').checked;
    if (!noballs) {
        ball += 1
        document.getElementById('ball').innerText = ball;
        over = ball / 6
        document.getElementById('over').innerHTML = parseInt(sover) + "." + parseInt(sball % 6)
    }
    document.getElementById('noballs').checked = false;
}
function sixrun() {
    runs += 6
    document.getElementById('score').innerText = runs;
    const noballs = document.getElementById('noballs').checked;
    if (!noballs) {
        ball += 1
        document.getElementById('ball').innerText = ball;
        over = ball / 6
        document.getElementById('over').innerHTML = parseInt(sover) + "." + parseInt(sball % 6)
    }
    document.getElementById('noballs').checked = false;
}
function wide() {
    runs += 1;
    document.getElementById('score').innerText = runs;
}

//TEAM 2
let sruns = 0
let sball = 0
let sover = 0
function sonerun() {
    sruns += 1
    document.getElementById('score1').innerText = sruns;
    const noball = document.getElementById('noball').checked;
    if (!noball) {
        sball += 1
        document.getElementById('ball1').innerText = sball;
        sover = sball / 6
        document.getElementById('over1').innerHTML = parseInt(sover) + "." + parseInt(sball % 6)
    }
    document.getElementById('noaball').checked = false;
}
function stworun() {
    sruns += 2
    document.getElementById('score1').innerText = sruns;
    const noball = document.getElementById('noball').checked;
    if (!noball) {
        sball += 1
        document.getElementById('ball1').innerText = sball;
        sover = sball / 6
        document.getElementById('over1').innerHTML = parseInt(sover) + "." + parseInt(sball % 6)
    }
    document.getElementById('noaball').checked = false;

}
function sthreerun() {
    sruns += 3
    document.getElementById('score1').innerText = sruns;
    const noball = document.getElementById('noball').checked;
    if (!noball) {
        sball += 1
        document.getElementById('ball1').innerText = sball;
        sover = sball / 6
        document.getElementById('over1').innerHTML = parseInt(sover) + "." + parseInt(sball % 6)
    }
    document.getElementById('noaball').checked = false;
}
function sfourrun() {
    sruns += 4
    document.getElementById('score1').innerText = sruns;
    const noball = document.getElementById('noball').checked;
    if (!noball) {
        sball += 1
        document.getElementById('ball1').innerText = sball;
        sover = sball / 6
        document.getElementById('over1').innerHTML = parseInt(sover) + "." + parseInt(sball % 6)
    }
    document.getElementById('noaball').checked = false;
}
function ssixrun() {
    sruns += 6
    document.getElementById('score1').innerText = sruns;

    const noball = document.getElementById('noball').checked;
    if (!noball) {
        sball += 1
        document.getElementById('ball1').innerText = sball;
        sover = sball / 6
        document.getElementById('over1').innerHTML = parseInt(sover) + "." + parseInt(sball % 6)
    }
    document.getElementById('noball').checked = false;
}
function wide() {
    sruns += 1;
    document.getElementById('score').innerText = sruns;
}

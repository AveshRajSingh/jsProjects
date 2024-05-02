let timer = 60;
let score = 0;
let hitRn = 0;


function increaseScore() {
    score += 10;
    document.querySelector("#scoreVal").textContent = score;
}

function hitValue() {
    hitRn = Math.floor(Math.random() * 10)
    document.querySelector("#hitVal").textContent = hitRn;
}

function makeBubble() {
    let clutter = "";
    for (let i = 0; i < 50; i++) {
        let rn = Math.floor(Math.random() * 10)
        clutter += `<div class="bubble">${rn}</div>`
    }
    document.querySelector(".pbottem").innerHTML = clutter;
}
function genNew() {
    let GenNew = document.querySelector(".pbottem");
    GenNew.addEventListener('click', function (dets) {
        let clickedBtn = Number(dets.target.textContent);

        if (clickedBtn === hitRn) {
            makeBubble();
            hitValue();
            increaseScore();
        }
    })

}

let timeOut = function () {
    setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timeVal").textContent = timer;
        }
        else {
            clearInterval(timeOut);
            document.querySelector(".pbottem").innerHTML = `<h1>Game Over And Score is ${score}</h1>`
                                                             

        }
    }, 1000)
}

makeBubble();
timeOut();
hitValue();
genNew();
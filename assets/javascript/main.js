let round = 1;
let croix;
let circle;
let pointcroix = 0
let pointrond = 0
let cells = document.querySelectorAll(".cell");
let buttongame = document.querySelector("#cpu");
let numberplayer = document.querySelector("#player");
let alone = "Jouer avec un robot";
let twoplayer = "Jouer à deux";
let gameover = false;
let versuscpu = false;
let message = document.querySelector("#message");
let victorycroix = "Les croix ont gagné";
let victorycircle = "Les ronds ont gagné"
let equal = "Egalité!"
let replay = document.querySelector("#replay")
let scorecircle = 0;
let scorecroix = 0;

let gridvictory = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [0, 4, 8],
];

function jesus() {
  if (versuscpu == false) {
    versuscpu = true
    buttongame.innerHTML = twoplayer
    numberplayer.innerHTML = "Vous jouez avec un Robot !A vous de commencer !"
  } else {
    versuscpu = false
    buttongame.innerHTML = alone
    numberplayer.innerHTML = "Vous jouez a deux joueur ! Premier joueur vous avez les croix!"
  }
}


function yourchoice(elem) {
  if (!gameover) {
    if (round % 2 != 0) {
      if (elem.innerHTML == "") {
        croix = document.createElement("IMG");
        croix.setAttribute("src", "assets/css/image/croix.png");
        croix.setAttribute("width", "45");
        croix.setAttribute("heigth", "45");
        elem.appendChild(croix);
        pointcroix++
        round++;

      }
    } else {
      if (versuscpu == false) {
        if (elem.innerHTML == "") {
          circle = document.createElement("IMG");
          circle.setAttribute("src", "assets/css/image/rond.png");
          circle.setAttribute("width", "45");
          circle.setAttribute("heigth", "45");
          elem.appendChild(circle);
          pointrond++
          round++;
        }
      }
    } checkvictory()
    if (!gameover) {
      if (round <= 9) {

        cpugame()
        checkvictory()
      }
    }
  }
}
function cpugame() {
  if (versuscpu == true) {
    let cpu = randomNumber(0, cells.length - 1)
    while (cells[cpu].innerHTML != "") {
      cpu++
      if (cpu == cells.length - 1) {
        cpu = 0
      }
    }
    circle = document.createElement("IMG");
    circle.setAttribute("src", "assets/css/image/rond.png");
    circle.setAttribute("width", "45");
    circle.setAttribute("heigth", "45");
    cells[cpu].appendChild(circle);
    pointrond++
    round++;
  }
}




function checkvictory() {
  let cells = document.querySelectorAll(".cell");
  for (let i = 0; i < gridvictory.length; i++) {

    if (cells[gridvictory[i][0]].innerHTML == cells[gridvictory[i][1]].innerHTML &&
      cells[gridvictory[i][1]].innerHTML == cells[gridvictory[i][2]].innerHTML && 
      cells[gridvictory[i][0]].innerHTML == cells[gridvictory[i][2]].innerHTML) {

      if (cells[gridvictory[i][0]].innerHTML == "") {

        continue

      } else if (pointcroix > pointrond) {
        let scorecroixdom = document.querySelector("#croix")
        scorecroix++
        scorecroixdom.innerHTML = scorecroix
        message.innerHTML = victorycroix
        message.style.display = "block"
        gameover = true


      } else if (pointcroix = pointrond) {
        let scorecircledom = document.querySelector("#rond")
        scorecircle++
        scorecircledom.innerHTML = scorecircle
        message.innerHTML = victorycircle
        message.style.display = "block"
        gameover = true

      }



    } else if (round == 10) {
      
      if (cells[gridvictory[i][0]].innerHTML != cells[gridvictory[i][1]].innerHTML &&
        cells[gridvictory[i][1]].innerHTML != cells[gridvictory[i][2]].innerHTML) {

        message.innerHTML = equal
        message.style.display = "block"
        gameover = true

      }

    }
    if (gameover) {
      replay.style.display = "block"
    }
  }
}

function replaygame() {
  if (gameover) {
    for (let i = 0; i < cells.length; i++) {
      cells[i].innerHTML = ""
    }

    round = 1
    pointcroix = 0;
    pointrond = 0;
    message.style.display = "none"
    replay.style.display = "none"
    gameover = false
  }
}


function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

particlesJS("particles-js", {"particles":{"number":{"value":80,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; 
requestAnimationFrame(update);
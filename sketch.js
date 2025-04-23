let xJogador1 = 0;
let xJogador2 = 0;
let xJogador3 = 0;
let xJogador4 = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  ativaJogo();
  desenharJogador();
  desenhaLinhadeChegada();
  checarquemganhou();
}

function ativaJogo() {
  if (focused == true) {
    background(0, 205, 0);
  } else {
    background(245, 0, 0);
  }
}

function desenharJogador() {
  fill("black");
  textSize(20);
  text("ō͡≡о", xJogador1, 70);
  text("ō͡≡о", xJogador2, 250);
  text("ō͡≡о", xJogador3, 170);
  text("ō͡≡о", xJogador4, 350); // Corrigido: xJogador4
}

function desenhaLinhadeChegada() {
  fill("white");
  rect(350, 0, 20, 400);
  fill("black");
  rect(350, 0, 10, 400);
  for (let yAtual = 0; yAtual < 400; yAtual += 20) {
    fill("white");
    rect(350, yAtual, 10, 10);
    fill("black");
    rect(360, yAtual, 10, 10);
  }
}

function checarquemganhou() {
  if (xJogador1 > 350) {
    text("Jogador 1 Venceu", 100, 200);
    noLoop();
  }
  if (xJogador2 > 350) {
    text("Jogador 3 Venceu", 100, 200);
    noLoop();
  }
  if (xJogador3 > 350) {
    text("Jogador 2 Venceu", 100, 200);
    noLoop();
  }
  if (xJogador4 > 350) {
    text("Jogador 4 Venceu", 100, 200);
    noLoop();
  }
}

function keyReleased() {
  if (key === "a") {
    xJogador1 += random(10, 20);
  } else if (key === "d") {
    xJogador2 += random(10, 20);
  } else if (key === "s") {
    xJogador3 += random(10, 20);
  } else if (key === "w") {
    xJogador4 += random(10, 20); // Corrigido: xJogador4 no lugar de xJogador3
  }
}

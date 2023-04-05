//Variaveis da Bola
let xBola = 300;
let yBola = 200;
let Diametro = 15;
let Raio = Diametro / 2;
//Velocidade da Bola
let VelocidadexBola = 6;
let VelocidadeyBola = 6;
//Raquete Jogador1
let xRaquete = 0;
let yRaquete = 150;
//Raquete Jogador2
let xRaquete2 = 590;
let yRaquete2 = 150;
//Comprimento e altura das duas raquetes
let ComprimentoRaquete = 10;
let AlturaRaquete = 100;
//
let VelocidadeYRaquete2;
//Sistema de pontos do jogo
let colidiu = false;
let MeusPontos = 0;
let PontosOponente = 0;
//Chance da raquete errar
let chanceDeErrar = 0;
//Sons
let Raquetada;
let Ponto;
let Trilha;



function preload(){
  Trilha = loadSound("trilha.mp3");
  Ponto = loadSound("ponto.mp3");
  Raquetada = loadSound("raquetada.mp3")
}


//Nossa tela
function setup() {
  createCanvas(600, 400);
  Trilha.loop();
}
//Funções

function draw() {
  background(0);
  MostraBola();
  MovimentaBola();
  VerificaBorda();
  MostraRaquete(xRaquete, yRaquete);
  MovimentaRaquete();
  //VerificaColisaoRaquete();
  MostraRaquete2(xRaquete2, yRaquete2);
  MovimentaRaquete2();
  //VerificaColisaoRaquete2();
  colisaoMinhaRaqueteBiblioteca();
  colisaoMinhaRaqueteBiblioteca2()
  IncluiPlacar();
  MarcaPonto();
  calculaChanceDeErrar();


  

}
function colisaoMinhaRaqueteBiblioteca() {
    collideRectCircle(200, 200, 100, 150, mouseX, mouseY, 100);
}



function MostraBola(){
  circle(xBola,yBola,Diametro);
}

function MovimentaBola(){
    xBola = xBola += VelocidadexBola;
    yBola = yBola += VelocidadeyBola;
}

function VerificaBorda(){
  if (xBola + Raio > width || xBola - Raio < 0){   
  VelocidadexBola *= -1
 } 
  if (yBola + Raio > height ||yBola - Raio < 0){    
    VelocidadeyBola *= -1
    
    
  }
}

function MostraRaquete(x,y){
  rect(x, y, ComprimentoRaquete, AlturaRaquete)
  
}

function MovimentaRaquete(){
  if(keyIsDown(UP_ARROW)){
     yRaquete -= 10
  }
  if(keyIsDown(DOWN_ARROW)){
    yRaquete += 10
  }
     
     
     
     }
function colisaoMinhaRaqueteBiblioteca() {
    colidiu = collideRectCircle(xRaquete, yRaquete, ComprimentoRaquete, AlturaRaquete, xBola, yBola, Raio);
    if (colidiu) {
        VelocidadexBola *= -1;
      Raquetada.play();
    }

}
function MostraRaquete2(x,y){
  rect(x, y, ComprimentoRaquete, AlturaRaquete)
}

function MovimentaRaquete2(){
  VelocidadeYRaquete = yBola -yRaquete2 - ComprimentoRaquete / 2 - 30;
  yRaquete2 += VelocidadeYRaquete + chanceDeErrar
  calculaChanceDeErrar()
}
//function MovimentaRaquete2(){
//VelocidadeYRaquete = yBola - yRaquete2 - ComprimentoRaquete /2 -30;
//yRaquete2 += VelocidadeYRaquete  
//  calculaChanceDeErrar();
//}

//function MovimentaRaquete2(){
//  if(keyIsDown(87)){
 //    yRaquete2 -= 10
 // }
//  if(keyIsDown(83)){
  //  yRaquete2 += 10
  //}
//}
     

function colisaoMinhaRaqueteBiblioteca2() {
    colidiu = collideRectCircle(xRaquete2, yRaquete2, ComprimentoRaquete, AlturaRaquete, xBola, yBola, Raio);
    if (colidiu) {
        VelocidadexBola *= -1;
        Raquetada.play();
    }
  
}

function IncluiPlacar(){
  
  textAlign(CENTER);
  textSize(20);
  stroke(255);
  
  fill(color (255, 140, 0))
  rect(130,10,40,20);
  rect(430,10,40,20)
  fill(255);
  text(MeusPontos, 150, 26);
  fill(255);
  text(PontosOponente, 450, 26)
  
}
function MarcaPonto(){
  if (xBola > 590 ){
    MeusPontos += 1;
    Ponto.play();
  }
  if(xBola <= 7 ){
    PontosOponente += 1;
    Ponto.play();
  }
  
}


function calculaChanceDeErrar() {
  if (PontosOponente >= MeusPontos) {
    chanceDeErrar += 1
    if (chanceDeErrar >= 39){
    chanceDeErrar = 40
    }
  } else {
    chanceDeErrar -= 1
    if (chanceDeErrar <= 35){
    chanceDeErrar = 35
    }
  }
}

function bolinhanaoficapresa(){
  if (xBola - Raio < 0){
    
    xBola = 23
  }
  
  
}



    
  


     
     
  


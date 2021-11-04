
/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */

const SPELEN = 1;
const GAMEOVER = 2;
var spelStatus = SPELEN;

var spelerX = 50; // x-positie van speler
var spelerY = 50; // y-positie van speler

var vijandX = 350;
var vijandY = 50;

/* ********************************************* */
/* functies die je gebruikt in je game           */
/* ********************************************* */

/**
 * Updatet globale variabelen met posities van speler, vijanden en kogels
 */
var beweegAlles = function () {
  // vijand
 vijandY = vijandY + 5;
if (vijandY > 700) {
  vijandY=0;
}

  // kogel

  // speler
 if (spelerX>=25) {
if (keyIsDown(37)) { // left
    spelerX = spelerX - 12;
}
  }
  if (spelerX<=1250) {

  
  if (keyIsDown(39)) { // right
    spelerX = spelerX + 12;
   }
  }
  if (spelerY<=690) {
  if (keyIsDown(40)) {
    spelerY = spelerY + 12;
   }
  }
  if (spelerY>=30) {
  if (keyIsDown(38)) {
    spelerY = spelerY - 12;
   }
  }

  
};

/**
 * Checkt botsingen
 * Verwijdert neergeschoten vijanden
 * Updatet globale variabelen punten en health
 */
// botsing speler tegen vijand
var verwerkBotsing = function () { 
if (vijandX - spelerX < 50 && 
      vijandX - spelerX > -50 &&
      vijandY - spelerY <50 &&
      vijandY - spelerY > -50) {
    console.log("botsing");
  }
 
  // botsing kogel tegen vijand

};

/**
 * Tekent spelscherm
 */
var tekenAlles = function () {
  // achtergrond
  fill("black");

  rect(0, 0, 1280, 720);
  // vijand
fill("white");
  rect(vijandX - 25, vijandY - 25, 50, 50);
  fill("black");
  ellipse(vijandX, vijandY, 10, 10);

  // kogel

  // speler
  fill("red");
  rect(spelerX - 25, spelerY - 25, 50, 50);
  fill("black");
  ellipse(spelerX, spelerY, 10, 10)


};

/**
 * return true als het gameover is
 * anders return false
 */
var checkGameOver = function () {
  return false;
};

/* ********************************************* */
/* setup() en draw() functies / hoofdprogramma   */
/* ********************************************* */

/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);

  // Kleur de achtergrond blauw, zodat je het kunt zien
  background('black');
}

/**
 * draw
 * de code in deze functie wordt 50 keer per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {


  if (spelStatus === SPELEN) {
    beweegAlles();
    verwerkBotsing();
    tekenAlles();
    if (checkGameOver()) {
      spelStatus = GAMEOVER;
    }
  }
  if (spelStatus === GAMEOVER) {
    // teken game-over scherm

  }
}


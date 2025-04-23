// #hoverklovn
const klovn = document.querySelector("#hoverklovn");
if (klovn) {
  klovn.addEventListener("mouseover", headHighLight1);
  klovn.addEventListener("mouseout", headUnHighlight1);
  klovn.addEventListener("click", headInfo1);
  klovn.addEventListener("click", infoBox1);
  klovn.addEventListener("click", infoBox2);
}

// #hoverkniv
const kniv = document.querySelector("#hoverkniv");
if (kniv) {
  kniv.addEventListener("mouseover", headHighLight2);
  kniv.addEventListener("mouseout", headUnHighlight2);
  kniv.addEventListener("click", headInfo2);
  kniv.addEventListener("click", infoBox3);
  kniv.addEventListener("click", infoBox4);
}

// #hovertekst
const tekst = document.querySelector("#hovertekst");
if (tekst) {
  tekst.addEventListener("mouseover", headHighLight3);
  tekst.addEventListener("mouseout", headUnHighlight3);
  tekst.addEventListener("click", headInfo3);
  tekst.addEventListener("click", infoBox5);
  tekst.addEventListener("click", infoBox6);
}

// #hovertelefon
const telefon = document.querySelector("#hovertelefon");
if (telefon) {
  telefon.addEventListener("mouseover", headHighLight4);
  telefon.addEventListener("mouseout", headUnHighlight4);
  telefon.addEventListener("click", headInfo4);
  telefon.addEventListener("click", infoBox7);
  telefon.addEventListener("click", infoBox8);
}

// #hoverblod
const blod = document.querySelector("#hoverblod");
if (blod) {
  blod.addEventListener("mouseover", headHighLight);
  blod.addEventListener("mouseout", headUnHighlight);
  blod.addEventListener("click", headInfo5);
  blod.addEventListener("click", infoBox9);
  blod.addEventListener("click", infoBox10);
}

//funktioner på hoverknapperne

function headHighLight1() {
  console.log("headHighLight1");
  document.querySelector("#hoverklovn").style.fill = "#FF0000";
}

function headUnHighlight1() {
  console.log("headHighLight");
  document.querySelector("#hoverklovn").style.fill = "#fff";
}

//Trapper

function headInfo1() {
  console.log("headInfo");
  animateBoxes();

  document.querySelector(".info-text > h2").textContent =
    "ALDRIG LØB OP AF EN TRAPPE ELLER NED I EN KÆLDER";
  document.querySelector(".info-text > article > p").textContent =
    "Når du er et gyser offer, er trapper og kældre ofte fælder. Undgå at løbe op eller ned ad trapper, da dette ofte fører til at du bliver fanget eller overrasket af en skurk.";
}

function infoBox1() {
  console.log("headInfo");
  document.querySelector("#efficiency").innerHTML =
    "<h3>Fare-niveau:</h3> Høj. Trapper og kældre er klassiske steder, hvor ofre bliver fanget i gyserfilm.";
}

function infoBox2() {
  console.log("headInfo");
  document.querySelector("#requirement").innerHTML =
    "<h3>Husk:</h3> Hold dig til åbne områder, hvor du kan se, hvad der sker omkring dig.";
}

function headHighLight2() {
  console.log("headHighLight2");
  document.querySelector("#hoverkniv").style.fill = "#FF0000";
}

function headUnHighlight2() {
  console.log("headHighLight2");
  document.querySelector("#hoverkniv").style.fill = "#fff";
}

// Telefon

function headInfo2() {
  console.log("headInfo");
  animateBoxes();

  document.querySelector(".info-text > h2").textContent = "IKKE TAG TELEFONEN!";
  document.querySelector(".info-text > article > p").textContent =
    "Telefoner er ofte ustabile i gyserfilm og kan være en kilde til forstyrrelser eller sporing. Undgå at tage telefonen, da det kan afsløre din position eller give dig falske sikkerhedsfornemmelser.";
}

function infoBox3() {
  console.log("headInfo");
  document.querySelector("#efficiency").innerHTML =
    "<h3>Fare-niveau:</h3> Middel. Telefoner kan være nyttige, men de kan også være risikable, hvis de bliver sporet.";
}

function infoBox4() {
  console.log("headInfo");
  document.querySelector("#requirement").innerHTML =
    "<h3>Husk:</h3> Brug en gammeldags radio eller walkie-talkie for at kommunikere, hvis nødvendigt.";
}

function headHighLight3() {
  console.log("headHighLight3");
  document.querySelector("#hovertekst").style.fill = "#FF0000";
}

function headUnHighlight3() {
  console.log("headHighLight3");
  document.querySelector("#hovertekst").style.fill = "#fff";
}

//Huse

function headInfo3() {
  console.log("headInfo");
  animateBoxes();
  document.querySelector(".info-text > h2").textContent =
    "HOLD DIG FRA GAMLE, MÅSKE HJEMSØGTE, HUSE!";
  document.querySelector(".info-text > article > p").textContent =
    "Gamle, hjemsøgte huse er aldrig et godt sted at være i et gyserfilms univers. Undgå at gå ind i sådanne steder, da de ofte er fyldt med fælder og overnaturlige trusler.";
}

function infoBox5() {
  console.log("headInfo");
  document.querySelector("#efficiency").innerHTML =
    "<h3>Fare-niveau:</h3> Meget høj. Hjemsøgte huse er klassiske scenarier for gyserfilm, hvor ofre ofte mister livet.";
}

function infoBox6() {
  console.log("headInfo");
  document.querySelector("#requirement").innerHTML =
    "<h3>Husk:</h3> Find et sikkert, velbelyst sted at opholde dig, fremfor at undersøge mystiske bygninger.";
}

//Bagsædet

function headHighLight4() {
  console.log("headHighLight");
  document.querySelector("#hovertelefon").style.fill = "#FF0000";
}

function headUnHighlight4() {
  console.log("headHighLight4");
  document.querySelector("#hovertelefon").style.fill = "#fff";
}

function headInfo4() {
  console.log("headInfo");
  animateBoxes();
  document.querySelector(".info-text > h2").textContent =
    "ALTID TJEK BAGSÆDET I DIN BIL!";
  document.querySelector(".info-text > article > p").textContent =
    "Før du sætter dig ind i din bil og kører afsted, tjek altid bagsædet for at sikre dig, at der ikke er nogen skjult der. Dette kan forhindre overraskelser på vejen.";
}

function infoBox7() {
  console.log("headInfo");
  document.querySelector("#efficiency").innerHTML =
    "<h3>Fare-niveau:</h3> Høj. Bagsæder er ofte steder, hvor skurke gemmer sig i gyserfilm.";
}

function infoBox8() {
  console.log("headInfo");
  document.querySelector("#requirement").innerHTML =
    "<h3>Husk:</h3> Lås altid dine bilporte, når du ikke er i bilen, for at forhindre uønsket adgang.";
}

function headHighLight() {
  console.log("headHighLight");
  document.querySelector("#hoverblod").style.fill = "#FF0000";
}

function headUnHighlight() {
  console.log("headHighLight");
  document.querySelector("#hoverblod").style.fill = "#fff";
}

function headInfo5() {
  console.log("headInfo");
  animateBoxes();
  document.querySelector(".info-text > h2").textContent =
    "ALDRIG SIG 'JEG KOMMER STRAKS TILBAGE'";
  document.querySelector(".info-text > article > p").textContent =
    "At sige 'Jeg kommer straks tilbage' er et klassisk ord for de tabte karakterer i gyserfilm. Undgå at sige dette, da det ofte signalerer, at noget skal gå galt.";
}

function infoBox9() {
  console.log("headInfo");
  document.querySelector("#efficiency").innerHTML =
    "<h3>Fare-niveau:</h3> Middel. Selvom det ikke direkte forårsager fare, kan det være et tegn på, at du er for selvsikker.";
}

function infoBox10() {
  console.log("headInfo");
  document.querySelector("#requirement").innerHTML =
    "<h3>Husk:</h3> Hold din plan for dig selv eller del den kun med personer, du stoler på fuldt ud.";
}

function animateBoxes() {
  document.querySelector("#efficiency").classList.remove("hide");
  document.querySelector("#efficiency").classList.add("fadeIn");
  document.querySelector("#requirement").classList.remove("hide");
  document.querySelector("#requirement").classList.add("fadeIn");

  document
    .querySelector("#requirement")
    .addEventListener("animationend", cleanup);
}

function cleanup() {
  console.log("cleanup");
  document
    .querySelector("#requirement")
    .removeEventListener("animationend", cleanup);
  document.querySelector("#efficiency").classList.remove("fadeIn");
  document.querySelector("#requirement").classList.remove("fadeIn");
}

//panorama

const pan = document.querySelector("#pan");

if (pan) {
  // Tilføj animation én gang
  pan.classList.add("pan_animation");

  // Start animation ved hover
  pan.addEventListener("mouseover", () => {
    pan.classList.add("running");
  });

  // Stop animation når musen fjernes
  pan.addEventListener("mouseout", () => {
    pan.classList.remove("running");
  });
}

// //Dialog buttons

function setupArticle(article) {
  const openBtn = article.querySelector(".openBtn");
  const dialog = article.querySelector("dialog");
  const closeBtn = dialog.querySelector("#closeBtn");

  openBtn.addEventListener("click", function (event) {
    event.preventDefault();
    dialog.showModal();
  });

  closeBtn.addEventListener("click", function () {
    dialog.close();
  });
}

const articles = document.querySelectorAll(".news_card");

articles.forEach(setupArticle);

// DARK MODE //

const css = document.querySelector("#lightmode");

const btn3 = document.querySelector("#changeBtn3");
btn3.addEventListener("click", changeMode3);
const switchtext3 = document.querySelector("#switchtext1");

function changeMode3() {
  if (css.href.includes("css/dark.css")) {
    css.href = "css/custom.css";
    switchtext3.textContent = "Dark Mode";
  } else {
    css.href = "css/dark.css";
    switchtext3.textContent = "Light Mode";
  }
}

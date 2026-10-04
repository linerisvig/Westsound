/**
 * file: js/js.js
 * purpose: Behaviors
 **/
console.log("Success: JavaScript sender noget usynligt til konsollen!");


// Finder burgerknappen i HTML.
const menuButton = document.querySelector(".menu-toggle");

// Finder navigationen med id="hovedmenu".
const navigation = document.querySelector("#hovedmenu");

// Samler ændringerne, så knap og menu altid følges ad.
function setMenuOpen(isOpen) {
  // Tilføjer klassen, hvis isOpen er true, og fjerner den ellers.
  navigation.classList.toggle("is-open", isOpen);

  // Fortæller skærmlæsere, om menuen er åben eller lukket.
  menuButton.setAttribute("aria-expanded", String(isOpen));

  // Opdaterer knappens navn, så det passer til handlingen.
  menuButton.setAttribute(
    "aria-label",
    isOpen ? "Luk menu" : "Åbn menu"
  );
}

// Reagerer, når brugeren klikker på burgerknappen.
menuButton.addEventListener("click", () => {
  // Undersøger, om menuen allerede er åben.
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";

  // Skifter til den modsatte tilstand.
  setMenuOpen(!isOpen);
});

// Lukker menuen, når brugeren vælger et menupunkt.
navigation.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    setMenuOpen(false);
  });
});

// Gør det muligt at lukke menuen med Escape-tasten.
document.addEventListener("keydown", (event) => {
  if (
    event.key === "Escape" &&
    menuButton.getAttribute("aria-expanded") === "true"
  ) {
    setMenuOpen(false);
    menuButton.focus(); // Flytter tastaturfokus tilbage til knappen.
  }
});



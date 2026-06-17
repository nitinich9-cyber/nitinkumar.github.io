let currentLang = "en";

function toggleLanguage() {
  const elements = document.querySelectorAll("[data-en]");

  elements.forEach(el => {
    if (currentLang === "en") {
      el.innerText = el.getAttribute("data-de");
    } else {
      el.innerText = el.getAttribute("data-en");
    }
  });

  currentLang = currentLang === "en" ? "de" : "en";
}

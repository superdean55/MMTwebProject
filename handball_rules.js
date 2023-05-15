const onTopButton = document.getElementById("onTopButton");
onTopButton.addEventListener("click", () => {
  document.documentElement.scrollTop = 0;
});

// prikazati gumb kada se korisnik pomakne prema dolje za 20 piksela
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    onTopButton.style.display = "block";
  } else {
    onTopButton.style.display = "none";
  }
}
// pozvati funkciju kada se stranica učita
window.onload = function () {
  document.documentElement.scrollTop = 0;
};

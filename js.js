var click = new Audio("sound_efect/663762__saha213131__click.wav");
var audio = new Audio(
  "sound_efect/657947__matrixxx__horror-inspect-sound-ui-or-in-game-notification-01.wav"
);
const showMoreFirstAuthor = document.getElementById("show-more-first");
const firstAuthorDetails = document.getElementById("firstAuthorDetails");
const firstAUthorContainer = document.getElementById("firstAUthorContainer");
showMoreFirstAuthor.addEventListener("click", (event) => {
  click.currentTime = 0;
  click.play();
  if (firstAuthorDetails.classList.contains("activate")) {
    firstAuthorDetails.classList.remove("activate");
    firstAUthorContainer.classList.remove("activate");
  } else {
    firstAuthorDetails.classList.add("activate");
    firstAUthorContainer.classList.add("activate");
  }
});

const showMoreSecondAuthor = document.getElementById("show-more-second");
const secondAuthorDetails = document.getElementById("secondAuthorDetails");
const secondAUthorContainer = document.getElementById("secondAUthorContainer");
showMoreSecondAuthor.addEventListener("click", (event) => {
  click.currentTime = 0;
  click.play();
  if (secondAuthorDetails.classList.contains("activate")) {
    secondAuthorDetails.classList.remove("activate");
    secondAUthorContainer.classList.remove("activate");
  } else {
    secondAuthorDetails.classList.add("activate");
    secondAUthorContainer.classList.add("activate");
  }
});
/* Scrol on top implementation */
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

/* var video = document.getElementById("fullscreen-video");
video.addEventListener("timeupdate", function () {
  if (this.currentTime >= 5) {
    var interval = setInterval(function () {
      if (video.style.opacity <= 0.1) {
        clearInterval(interval);
      }
      video.style.opacity -= 0.1;
    }, 200);
  }
  if (this.currentTime > 8) {
    video.style.display = "none";
    this.pause();
  }
}); */

/* var isPaused = false;
video.addEventListener("timeupdate", function () {
  if (this.currentTime >= 5 && !isPaused) {
    this.muted = true;
    this.style.zIndex = -2;
    this.style.opacity = "0";
    isPaused = true;
  }
}); */

const mouseOverElements = document.getElementsByClassName("mouse-over-sound");
for (var i = 0; i < mouseOverElements.length; i++) {
  var mouseOverElement = [];
  mouseOverElement[i] = document.getElementById(mouseOverElements[i].id);

  mouseOverElement[i].addEventListener("mouseenter", (event) => {
    audio.currentTime = 0;
    audio.play();
  });
  mouseOverElement[i].addEventListener("mouseleave", (event) => {
    audio.pause();
  });
  mouseOverElement[i].addEventListener("click", (event) => {
    if (event.currentTarget.id == "mo1") {
      window.location.href = "history.html";
    } else if (event.currentTarget.id == "mo2") {
      window.location.href = "rules.html";
    } else if (event.currentTarget.id == "mo3") {
      window.location.href = "var.html";
    }
  });
}
/* const footballHistory = document.getElementById("mo1");
footballHistory.addEventListener("click", () => {
  var url = "football_history.html";
  window.location.href = url;
}); */

const showMoreButtons = document.getElementsByClassName("show-more-button");
for (var i = 0; i < showMoreButtons.length; i++) {
  var showMoreButton = [];
  showMoreButton[i] = document.getElementById(showMoreButtons[i].id);

  showMoreButton[i].addEventListener("click", (event) => {
    click.currentTime = 0;
    click.play();

    if (
      event.currentTarget.parentElement.parentElement.classList.contains(
        "activate"
      )
    ) {
      event.currentTarget.parentElement.parentElement.classList.remove(
        "activate"
      );
      event.currentTarget.innerHTML =
        "Show more <i class='fa-solid fa-chevron-down'>";
    } else {
      event.currentTarget.parentElement.parentElement.classList.add("activate");
      event.currentTarget.innerHTML =
        "Show less <i class='fa-solid fa-chevron-up'></i>";
    }
  });
  showMoreButton[i].addEventListener("mouseenter", (event) => {
    audio.currentTime = 0;
    audio.play();
  });
}

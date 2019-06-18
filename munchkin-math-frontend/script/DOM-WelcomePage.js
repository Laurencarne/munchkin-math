const form = document.querySelector("form");
const balloonDiv = document.querySelector(".balloonDiv");
const body = document.querySelector("body");
const enterSiteDiv = document.querySelector(".enterSite");

function sayHello() {
  event.preventDefault();

  const nameDiv = document.querySelector(".nameBounce");

  let splitName = event.target[0].value.split("");

  splitName.forEach(letter => {
    const span = document.createElement("span");
    span.innerText = letter;
    span.className = "letterBounce";
    nameDiv.appendChild(span);
  });

  event.target.reset();
}

function enterSite() {
  setTimeout(() => {
    const img = document.createElement("img");
    img.src = "https://i.imgur.com/3u67mk8.png";
    img.className = "enterImg";
    enterSiteDiv.append(img);
  }, 6000);
}

function enterPage() {
  landingPage();
}

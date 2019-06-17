const form = document.querySelector("form");
const balloonDiv = document.querySelector(".balloonDiv");
///////////////////////
form.addEventListener("submit", sayHello);
form.addEventListener("submit", flyBalloon);
form.addEventListener("submit", enterSite);
///////////////////////
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
///////////////////////
function flyBalloon() {
  form.style.display = "none";

  let int1 = setInterval(function() {
    const img1 = document.createElement("img");
    img1.src = "https://media-public.canva.com/MADZbPBp-pU/1/screen.svg";
    img1.className = "balloon1";
    balloonDiv.append(img1);
    setTimeout(() => {
      balloonDiv.removeChild(img1);
    }, 4300);
  }, 1000);

  let int2 = setInterval(() => {
    const img2 = document.createElement("img");
    img2.src = "https://media-public.canva.com/MADZbNX3BTU/1/screen.svg";
    img2.className = "balloon2";
    balloonDiv.append(img2);
    setTimeout(() => {
      balloonDiv.removeChild(img2);
    }, 4300);
  }, 1300);

  let int3 = setInterval(() => {
    const img3 = document.createElement("img");
    img3.src = "https://media-public.canva.com/MADZbOXV3RI/1/screen.svg";
    img3.className = "balloon3";
    balloonDiv.append(img3);
    setTimeout(() => {
      balloonDiv.removeChild(img3);
    }, 4300);
  }, 1700);

  let int4 = setInterval(() => {
    const img4 = document.createElement("img");
    img4.src = "https://media-public.canva.com/MADZbI2uSjA/1/screen.svg";
    img4.className = "balloon4";
    balloonDiv.append(img4);
    setTimeout(() => {
      balloonDiv.removeChild(img4);
    }, 4300);
  }, 1300);

  let int5 = setInterval(() => {
    const img5 = document.createElement("img");
    img5.src = "https://media-public.canva.com/MADZbP_94iI/1/screen.svg";
    img5.className = "balloon5";
    balloonDiv.append(img5);
    setTimeout(() => {
      balloonDiv.removeChild(img5);
    }, 4300);
  }, 1000);

  let int6 = setInterval(() => {
    const img6 = document.createElement("img");
    img6.src = "https://media-public.canva.com/MADZbBBEn0M/1/screen.svg";
    img6.className = "balloon6";
    balloonDiv.append(img6);
    setTimeout(() => {
      balloonDiv.removeChild(img6);
    }, 4300);
  }, 1300);

  setInterval(() => {
    clearInterval(int1);
  }, 5000);

  setInterval(() => {
    clearInterval(int2);
  }, 6000);

  setInterval(() => {
    clearInterval(int3);
  }, 6500);

  setInterval(() => {
    clearInterval(int4);
  }, 7000);

  setInterval(() => {
    clearInterval(int5);
  }, 8000);

  setInterval(() => {
    clearInterval(int6);
  }, 8500);
}
///////////////////////
function enterSite() {
  setTimeout(() => {
    const enterSiteDiv = document.querySelector(".enterSite");

    const enterBtn = document.createElement("button");
    enterBtn.innerText = "Enter Site";
    enterBtn.className = "enterBtn";

    enterSiteDiv.appendChild(enterBtn);
  }, 4000);
}
///////////////////////

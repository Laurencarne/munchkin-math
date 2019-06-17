const form = document.querySelector("form");
const balloonDiv = document.querySelector(".balloonDiv");
const body = document.querySelector("body");
const enterSiteDiv = document.querySelector(".enterSite");
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
  }, 4000);

  setInterval(() => {
    clearInterval(int2);
  }, 4500);

  setInterval(() => {
    clearInterval(int3);
  }, 5000);

  setInterval(() => {
    clearInterval(int4);
  }, 5500);

  setInterval(() => {
    clearInterval(int5);
  }, 6000);

  setInterval(() => {
    clearInterval(int6);
  }, 6500);
}
///////////////////////
function enterSite() {
  setTimeout(() => {
    const img = document.createElement("img");
    img.src =
      "https://media-private.canva.com/MACPw4r7vnc/1/screen-1.png?response-expires=Mon%2C%2017%20Jun%202019%2011%3A03%3A10%20GMT&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20190617T082711Z&X-Amz-SignedHeaders=host&X-Amz-Expires=9358&X-Amz-Credential=AKIAJWF6QO3UH4PAAJ6Q%2F20190617%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=99924990b9e2f9f9f71e3267be2ec2731fc3ae16353f41c0937e1058fd388e62";
    img.className = "enterImg";

    const enterP = document.createElement("span");
    enterP.className = "enterP";
    enterP.innerText = "Enter Site...";

    enterSiteDiv.append(img, enterP);
  }, 6000);
}
///////////////////////
enterSiteDiv.addEventListener("click", enterPage);
///////////////////////
function enterPage() {
  body.innerHTML = "";
}
///////////////////////
function dragAndDropPage() {
  const div1 = document.createElement("div");
  const div2 = document.createElement("div");
  const div3 = document.createElement("div");
  const div4 = document.createElement("div");

  const innerDiv = document.createElement("div");

  div1.className = "empty";
  div2.className = "empty";
  div3.className = "empty";
  div4.className = "empty";

  innerDiv.className = "fill";
  innerDiv.draggable = true;
}

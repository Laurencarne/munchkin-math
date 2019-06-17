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
    img.src =
      "https://media-private.canva.com/MACPw4r7vnc/1/screen-1.png?response-expires=Mon%2C%2017%20Jun%202019%2011%3A03%3A10%20GMT&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20190617T082711Z&X-Amz-SignedHeaders=host&X-Amz-Expires=9358&X-Amz-Credential=AKIAJWF6QO3UH4PAAJ6Q%2F20190617%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=99924990b9e2f9f9f71e3267be2ec2731fc3ae16353f41c0937e1058fd388e62";
    img.className = "enterImg";

    const enterP = document.createElement("span");
    enterP.className = "enterP";
    enterP.innerText = "Enter Site...";

    enterSiteDiv.append(img, enterP);
  }, 6000);
}

function enterPage() {
  body.innerHTML = "";
}

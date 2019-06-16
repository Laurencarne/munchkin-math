const form = document.querySelector("form");
const balloonDiv = document.querySelector(".balloonDiv");

form.addEventListener("submit", sayHello);
form.addEventListener("submit", flyBalloon);

function sayHello() {
  event.preventDefault();

  const nameH3 = document.createElement("h3");
  nameH3.innerText = ` Hello ${event.target[0].value}`;
  nameH3.className = "bounce";

  const nameDiv = document.querySelector(".nameBounce");
  nameDiv.appendChild(nameH3);

  console.log(event.target[0].value);

  event.target.reset();
}

function flyBalloon() {
  form.style.display = "none";

  setInterval(function() {
    const img1 = document.createElement("img");
    img1.src = "http://clipart-library.com/data_images/19399.png";
    img1.className = "balloon1";
    balloonDiv.append(img1);
    setTimeout(() => {
      balloonDiv.removeChild(img1);
    }, 4300);
  }, 1000);

  setInterval(() => {
    const img2 = document.createElement("img");
    img2.src =
      "https://i1.wp.com/freepngimages.com/wp-content/uploads/2016/04/yellow-balloon-transparent-background.png?fit=491%2C752";
    img2.className = "balloon2";
    balloonDiv.append(img2);
    setTimeout(() => {
      balloonDiv.removeChild(img2);
    }, 4300);
  }, 1300);

  setInterval(() => {
    const img3 = document.createElement("img");
    img3.src =
      "https://i2.wp.com/freepngimages.com/wp-content/uploads/2016/04/red-balloon-transparent-background.png?fit=491%2C752";
    img3.className = "balloon3";
    balloonDiv.append(img3);
    setTimeout(() => {
      balloonDiv.removeChild(img3);
    }, 4300);
  }, 1700);
}

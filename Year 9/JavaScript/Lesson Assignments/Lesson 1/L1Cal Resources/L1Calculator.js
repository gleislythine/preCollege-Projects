var inX = document.getElementById("inputX"),
  inY = document.getElementById("inputY"),
  res = document.getElementById("result");

function adn() {
  res.value = Number(inX.value) + Number(inY.value);
}

function sub() {
  res.value = inX.value - inY.value;
}

function mul() {
  res.value = inX.value * inY.value;
}

function div() {
  res.value = inX.value / inY.value;
}

function pwr() {
  res.value = Math.pow(inX.value, inY.value);
}

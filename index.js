let body = document.querySelector("body");
let counter = document.createElement("div");
let time = document.createElement("div");
let value = 0;
counter.innerText = value;

let add = document.createElement("button");
let remove = document.createElement("button");
let reset = document.createElement("button");

add.innerText = "+";
add.className = "add";

remove.innerText = "-";
remove.className = "remove";

reset.innerText = "Reset";
reset.className = "reset";

body.appendChild(time);
body.appendChild(counter);
body.appendChild(add);
body.appendChild(remove);
body.appendChild(reset);

const newDate = new Date();
window.addEventListener("click", (e) => {
  (e.target.className === "remove") & (value > 0) ? value-- : value;
  e.target.className === "add" ? (value = value + 1) : value;
  if (e.target.className === "reset") {
    value = 0;
    localStorage.setItem("date", `${newDate.toLocaleDateString('de-DE')} - ${newDate.toLocaleTimeString()}`);
  window.location.reload()}
  counter.innerText = value;
});
const getTime = localStorage.getItem("date");
time.className = "time";
time.innerText = getTime;

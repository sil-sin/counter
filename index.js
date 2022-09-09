let body = document.querySelector("body");
let counter = document.createElement("div");
let value = 0;
counter.innerText = value;

let add = document.createElement("button");
let remove = document.createElement("button");
let reset = document.createElement("div");
let bottle1 = document.createElement("button");
let bottle2 = document.createElement("button");

add.innerText = "+";
add.className = "add";

remove.innerText = "-";
remove.className = "remove";

const newDate = new Date();
const getTime1 = localStorage.getItem("date1");
const getTime2 = localStorage.getItem("date2");

bottle1.innerHTML =  `<h4>Bottle 1</h4>
<h6 class="bottle b1">${getTime1}</h6>`
bottle1.className = "bottle b1";
bottle2.innerHTML = `<h4>Bottle 2</h4>
<h6 class="bottle b2">${getTime2}</h6>`;
bottle2.className = "bottle b2";
reset.className = "reset";

body.appendChild(counter);
body.appendChild(add);
body.appendChild(remove);
body.appendChild(reset);
reset.appendChild(bottle1);
reset.appendChild(bottle2);

window.addEventListener("click", (e) => {
  (e.target.className === "remove") & (value > 0) ? value-- : value;
  e.target.className === "add" ? (value = value + 1) : value;
  if (e.target.className === "bottle b1") {
    console.log("here");
    value = 0;
    localStorage.setItem(
      "date1",
      `${newDate.toLocaleDateString("de-DE")} - ${newDate.toLocaleTimeString()}`
    );
    window.location.reload();
  }
  if (e.target.className === "bottle b2") {
    console.log("here");
    value = 0;
    localStorage.setItem(
      "date2",
      `${newDate.toLocaleDateString("de-DE")} - ${newDate.toLocaleTimeString()}`
    );
    window.location.reload();
  }
  counter.innerText = value;
});

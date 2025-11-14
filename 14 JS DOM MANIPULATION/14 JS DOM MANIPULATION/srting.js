

document.getElementById("para").textContent =
  "this is para changed using script";



document.getElementsByClassName("para2")[0].innerHTML =
  "<h1>this is class paragraph</h1>";


document.querySelector("h4").textContent =
  "this is changed query selector paragraph";

const newPara = document.querySelector(".style");

newPara.style.color = "red";


const paragraph = document.querySelectorAll("p");

console.log(paragraph);

for (p of paragraph) {

  p.innerHTML = "<h1>this is changed  paragraph using query Selector all</h1>";
}


document.querySelector("#form").addEventListener("submit", (e) => {
  e.preventDefault();
  const task = document.getElementById("task").value;
  const description = document.getElementById("description").value;

  console.log("data", { task, description });
});
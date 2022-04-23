// Bài Tập 1

const colorList = [
  "pallet",
  "viridian",
  "pewter",
  "cerulean",
  "vermillion",
  "lavender",
  "celadon",
  "saffron",
  "fuschia",
  "cinnabar",
];

const colorButton = () => {
  let content = "";
  for (let i in colorList) {
    content += `<button class="color-button ${colorList[i]}"   ></button>`;
  }
  document.getElementById("colorContainer").innerHTML = content;
};
colorButton();

let house = document.getElementById("house");
let pickColors = document.getElementsByClassName("color-button");
for (let i = 0; i < pickColors.length; i++) {
  pickColors[i].addEventListener("click", () => {
    changeColor(colorList[i], i);
  });
}

const changeColor = (i, e) => {
  for (let i = 0; i < pickColors.length; i++) {
    pickColors[i].classList.remove("active");
    pickColors[e].classList.add("active");
  }
  house.className = "house " + i;
};

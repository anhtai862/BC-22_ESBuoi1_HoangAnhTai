const heading = document.querySelector(".heading");
const char = heading.innerText;
console.log(char);
const textJump = (char) => {
  return [...char].map((char) => {
    return `<span>${char}</span>`;
  });
};
heading.innerHTML = textJump(char);

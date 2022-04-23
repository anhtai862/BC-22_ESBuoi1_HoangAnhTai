const getTotal = (...numbers) => {
  console.log(numbers);
  let total = 0;
  for (let i in numbers) {
    total += numbers[i];
  }
  return total / numbers.length;
};

getEle("btnKhoi1").addEventListener("click", () => {
  let toan = getEle("inpToan").value * 1;
  let ly = getEle("inpLy").value * 1;
  let hoa = getEle("inpHoa").value * 1;
  getEle("tbKhoi1").innerHTML = getTotal(toan, ly, hoa);
});

getEle("btnKhoi2").addEventListener("click", () => {
  let van = getEle("inpVan").value * 1;
  let su = getEle("inpSu").value * 1;
  let dia = getEle("inpDia").value * 1;
  let eng = getEle("inpEnglish").value * 1;
  getEle("tbKhoi2").innerHTML = getTotal(van, su, dia, eng);
});

function getEle(id) {
  return document.getElementById(id);
}

let display = document.getElementById("display");

const digitsToDisplay = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  zero: 0,
  doublezero: "00",
  point: ".",
  divide: "/",
  multiplication: "*",
  substract: "-",
  add: "+",
  clear: "",
  del: "del",
  equal: "=",
  button: "darkmode",
};

Object.entries(digitsToDisplay).forEach(([id, digit]) => {
  let elem = document.getElementById(id);

  elem.addEventListener("click", function () {
    switch (id) {
      case "clear":
        display.value = "";
        break;

      case "del":
        display.value = display.value.toString().slice(0, -1);
        break;

      case "equal":
        display.value = eval(display.value);
        break;

      case "button":
        document.body.classList.toggle(digit);
        break;

      default:
        display.value += digit;
        break;
    }
  });
});

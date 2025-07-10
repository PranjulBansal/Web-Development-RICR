function submit() {
  const abcd = document.getElementById("abcd");
  abcd.style.backgroundColor = "yellow";
}
function on() {
  const gola = document.getElementById("gola");
  // gola.style.backgroundColor="yellow"
  gola.classList.add("jalgya");
  gola.classList.remove("bhujgya");
}
function off() {
  const gola = document.getElementById("gola");
  // gola.style.backgroundColor="white"
  gola.classList.add("bhujgya");
  gola.classList.remove("jalgya");
}
function onOff() {
  const bulb = document.getElementById("dusraGola");
  bulb.classList.toggle("eksaath ");
}
function disco(color) {
  const bulb = document.getElementById("thirdGola");
  bulb.style.backgroundColor = color;
}
function off1() {
  const bulb = document.getElementById("thirdGola");
  bulb.style.backgroundColor = "white";

  // bulb.classList.remove()
}

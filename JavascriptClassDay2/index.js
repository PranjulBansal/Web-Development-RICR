function submit() {
  const f = document.getElementById("fullName").value;
  console.log(f);
  const data = document.getElementById("data");
  data.innerText = f;
  data.innerHTML = "<b>" + f + "<b>";
}
const sampleText = document.getElementById("sampleText");
console.log(sampleText);
console.log(sampleText.innerHTML);
console.log(sampleText.innerText); //with all space and flow of content
console.log(sampleText.textContent); //only print

function login() {
  const DOB = document.getElementById("DOB");
  console.log(DOB.value);
  // console.log(DOB);
  console.log(DOB.innerHTML); //input havent inner html
  console.log(DOB.innerText); //input havent inner text
}
function spanClick() {
  const spanName = document.getElementById("spanName");
  const span = document.getElementById("span");
  span.value = spanName.value;
  console.log(span.value);
  console.log(span.innerHTML);
  console.log(span.innerText);
}

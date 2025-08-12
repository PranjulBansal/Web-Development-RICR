function submit() {
  const f = document.getElementById("fullName").value;
  // console.log(f);
  const data = document.getElementById("data");
  // data.innerText = f;
  data.innerHTML = "<br>" + f + "<br>";
  console.log(data.innerHTML); 
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
  const login=document.getElementById("login")
  console.log(login.innerHTML); //input havent inner html
  console.log(login.innerText); //input havent inner text
}
function spanClick() {
  const spanName = document.getElementById("spanName");
  const span = document.getElementById("span");
  span.value = spanName.value;
  console.log(span.value);
  console.log(span.innerHTML);
  console.log(span.innerText);
  console.log(span.textContent)
}

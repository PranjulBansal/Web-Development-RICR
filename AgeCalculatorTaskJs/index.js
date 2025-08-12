function calculate() {
  const yd = Number(document.getElementById("yourDate").value.split("-")[0]);
  const cd = Number(document.getElementById("currentDate").value.split("-")[0]);
  const age1 = cd - yd;
  const yd1 = Number(document.getElementById("yourDate").value.split("-")[1]);
  const cd1 = Number(
    document.getElementById("currentDate").value.split("-")[1]
  );
  const age2 = cd1 - yd1;
  const yd2 = Number(document.getElementById("yourDate").value.split("-")[2]);
  const cd2 = Number(
    document.getElementById("currentDate").value.split("-")[2]
  );
  const age3 = cd2 - yd2;
  document.getElementById("age").innerText =
    "Your age is : " + age1 + " Years " + age2 + " Months " + age3 + " Days";
}

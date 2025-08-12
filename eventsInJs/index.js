const CG1=document.getElementById("chotaGola1");
const CG2=document.getElementById("chotaGola2");
const CG3=document.getElementById("chotaGola3");
const BG=document.getElementById("badaGola")
CG1.addEventListener("mouseover",changeColor1);
CG2.addEventListener("mouseover",changeColor2);
CG3.addEventListener("mouseover",changeColor3); 

CG1.addEventListener("mouseout",changeColor);
CG2.addEventListener("mouseout",changeColor);
CG3.addEventListener("mouseout",changeColor);

function changeColor1(){
    BG.style.backgroundColor="blueviolet";
}
function changeColor2(){
    BG.style.backgroundColor="rgb(198, 226, 43)"
}
function changeColor3(){
    BG.style.backgroundColor="rgb(226, 43, 43)";
}
function changeColor()
{
    BG.style.backgroundColor="white"
}
function submit() {
  const click = document.getElementById("container");
  console.log(click.innerHTML);
  console.log(click.innerText); //HTML tag work
  console.log(click.textContent);

  const span2 = document.getElementById("span2");
  console.log(span2.innerText);

  const span = document.getElementById("span");
  //   console.log(span.innerText);

  span.innerText = span2.innerText;
  console.log(span.innerText);

  const text = document.getElementById("text").value;
  console.log(text);

  const emdata = document.getElementById("emptydata");
//   console.log(emdata);
  emdata.innerHTML = "<br>"+ text + "<br>";//br is treat as a tag
  console.log(emdata.innerHTML);
  console.log(emdata.innerText);
}



//Style With JS
function play()
{
    const play=document.getElementById('firstCircle')
    play.style.backgroundColor="yellow"
}
function againPlay()
{
   const play=document.getElementById('firstCircle')
    play.style.backgroundColor="red"

}
function on()
{
    const on=document.getElementById("secondCircle")
    on.style.backgroundColor="blue"
}
function off()
{
    const off=document.getElementById("secondCircle")
    off.style.backgroundColor="white"
}
function onoff()
{
    let isFirstColor=true; 
    const onOff=document.getElementById("thirdCircle")

    if(isFirstColor)
    {
        onOff.style.backgroundColor="pink"
    }
    else
    {
        onOff.style.backgroundColor="green"
    }
    isFirstColor =! isFirstColor
}
function choose(color)
{
    const stop=document.getElementById("fourCircle")
    stop.style.backgroundColor=color
}
function stop()
{
    const stop=document.getElementById("fourCircle")
    stop.style.backgroundColor="white"
}



//Event Listner in JS with CallBack Function
const first=document.getElementById('smallCircle')
const second=document.getElementById('small2Circle')
const third=document.getElementById('small3Circle')
const big=document.getElementById('bigCircle')

first.addEventListener("mouseover",colorChange1)
second.addEventListener("mouseover",colorChange2)
third.addEventListener("mouseover",colorChange3)

first.addEventListener("mouseout",colorChange)
second.addEventListener("mouseout",colorChange)
third.addEventListener("mouseout",colorChange)

function colorChange1()
{
    big.style.backgroundColor="rgb(20, 3, 136)"
}
function colorChange2()
{
    big.style.backgroundColor="rgb(118, 218, 10)"
}
function colorChange3()
{
    big.style.backgroundColor="rgb(241, 15, 75)"
}
function colorChange()
{
    big.style.backgroundColor="white"
}


//Event Listener Task 
function choose(color1)
{
const h=document.getElementById("heading");
h.style.color=color1
}

function choose1(color2)
{
const p1=document.getElementById("para");
p1.style.color=color2
}

function choose3 (color3)
{
const bg=document.getElementById("box");
bg.style.backgroundColor=color3
}






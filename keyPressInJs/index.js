document.addEventListener("keydown",handlePressKey);
 function handlePressKey(event)
 {
    const key=event.key;
    const code=event.code;
 
 document.getElementById("output").textContent= `you have presses key ${key} with code ${code}`;
//  key==="r"?(document)
 }
myitem = document.getElementById("firsttest");

myitem.addEventListener("click", onClick);

function onClick() {  
    myitem.style.color = "blue";  
}
thebutton = document.getElementById("thebutton");  
otheritem = document.getElementById("buttontest");
thebutton.addEventListener("click", onButtonClick);
function onButtonClick() {  
    otheritem.style.color = "brown";  
}
textentry = document.getElementById("myinput");  
textentry.addEventListener("change", onChange);
function onChange() {  
    newtext = myinput.value;  
    otheritem.innerHTML = newtext;  
}
<strong>Look at this bold text!</strong>
/* when user clicks on the button, the text color of the button changes to brown */
/* when user clicks on the firsttest text, the text color changes to blue */
/* when user types in the text entry box, the text of the buttontest changes to the text entered */




// Path: index.html




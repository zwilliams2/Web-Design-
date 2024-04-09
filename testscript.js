myitem = document.getElementById("firsttest");

myitem.addEventListener("click", onClick);

function onClick() {  
    myitem.style.color = "black";  
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
function expandImage() {
    var image = document.getElementById("Naruto_logo.jpg");
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    
    // Calculate the maximum size the image can expand to without overflowing the window
    var maxImageWidth = windowWidth * 1.8;
    var maxImageHeight = windowHeight * 1.8;
    
    // Check if the image is already expanded
    if (image.classList.contains("expanded")) {
      // If already expanded, reset to original size
      image.style.width = "";
      image.style.height = "";
      image.classList.remove("expanded");
    } else {
      // If not expanded, calculate new size and apply it
      var imageWidth = image.width;
      var imageHeight = image.height;
      var scaleFactor = Math.min(maxImageWidth / imageWidth, maxImageHeight / imageHeight);
      var newWidth = imageWidth * scaleFactor;
      var newHeight = imageHeight * scaleFactor;
      image.style.width = newWidth + "px";
      image.style.height = newHeight + "px";
      image.classList.add("expanded");
    }
  }
/* when user clicks on the button, the text color of the button changes to brown */
/* when user clicks on the firsttest text, the text color changes to blue */
/* when user types in the text entry box, the text of the buttontest changes to the text entered */




// Path: index.html




//connect, withdraw and pending buttons
function change() {
  // no ';' here
  var elem = document.getElementByClass("connectButton");
  if (elem.innerHTML == "Connect") elem.innerHTML = "Pending Request";
  else if (elem.innerHTML == "Pending Request")
    elem.innerHTML = "Withdraw Request";
  else elem.innerHTML = "Connect";
}

//Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

// Dropzone class:
var myDropzone = new Dropzone("div#dropZone", {
  url: "/file/post",
});

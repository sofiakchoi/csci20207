document.addEventListener('scroll', function() {
  var scrollPosition = window.pageYOffset;
  var zoomLevel = Math.min(3, 1 + scrollPosition / 35);

  var zoomText = document.getElementById('zoom-text');
  zoomText.style.transform = 'translate(-50%, -50%) scale(' + zoomLevel + ')';
});


// document.getElementById('ticketleft').addEventListener('mousedown', function() {
//   document.getElementById('myDiv').style.display = 'block';
// });

// document.getElementById('ticketleft').addEventListener('mouseup', function() {
//   document.getElementById('myDiv').style.display = 'none';
// });

// document.getElementById('ticketcenter').addEventListener('mousedown', function() {
//   document.getElementById('myDiv2').style.display = 'block';
// });

// document.getElementById('ticketcenter').addEventListener('mouseup', function() {
//   document.getElementById('myDiv2').style.display = 'none';
// });

// document.getElementById('ticketright').addEventListener('mousedown', function() {
//   document.getElementById('myDiv3').style.display = 'block';
// });

// document.getElementById('ticketright').addEventListener('mouseup', function() {
//   document.getElementById('myDiv3').style.display = 'none';
// });



//Make the DIV element draggagle:
var offset = 5;
var mydivs = document.getElementsByClassName("mydiv");
for (var i = 0; i < mydivs.length; i++) {
  dragElement(mydivs[i]);
  mydivs[i].style.left = offset + "px";
  offset = offset + mydivs[i].offsetWidth + 5;
}

function dragElement(elmnt) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  if (elmnt.getElementsByClassName("mydivheader")[0]) {
    /* if present, the header is where you move the DIV from:*/
    elmnt.getElementsByClassName(
      "mydivheader"
    )[0].onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = elmnt.offsetTop - pos2 + "px";
    elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
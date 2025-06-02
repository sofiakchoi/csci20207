document.addEventListener('scroll', function() {
  var scrollPosition = window.pageYOffset;
  var zoomLevel = Math.min(3, 1 + scrollPosition / 35);

  var zoomText = document.getElementById('zoom-text');
  zoomText.style.transform = 'translate(-50%, -50%) scale(' + zoomLevel + ')';
});

// ticket

document.getElementById('hover01').addEventListener('mouseover', function() {
  document.getElementById('img01').style.display = 'block';
});

document.getElementById('hover01').addEventListener('mouseout', function() {
  document.getElementById('img01').style.display = 'none';
});

document.getElementById('ticketleft').addEventListener('mousedown', function() {
  document.getElementById('myDiv').style.display = 'block';
});

document.getElementById('ticketleft').addEventListener('mouseup', function() {
  document.getElementById('myDiv').style.display = 'none';
});

document.getElementById('ticketcenter').addEventListener('mousedown', function() {
  document.getElementById('myDiv2').style.display = 'block';
});

document.getElementById('ticketcenter').addEventListener('mouseup', function() {
  document.getElementById('myDiv2').style.display = 'none';
});

document.getElementById('ticketright').addEventListener('mousedown', function() {
  document.getElementById('myDiv3').style.display = 'block';
});

document.getElementById('ticketright').addEventListener('mouseup', function() {
  document.getElementById('myDiv3').style.display = 'none';
});

// hotel
document.getElementById('hover02').addEventListener('mouseover', function() {
  document.getElementById('img02').style.display = 'block';
});

document.getElementById('hover02').addEventListener('mouseout', function() {
  document.getElementById('img02').style.display = 'none';
});

document.getElementById('hotelright').addEventListener('mousedown', function() {
  document.getElementById('myDiv5').style.display = 'block';
});

document.getElementById('hotelright').addEventListener('mouseup', function() {
  document.getElementById('myDiv5').style.display = 'none';
});

document.getElementById('hotelleft').addEventListener('mousedown', function() {
  document.getElementById('myDiv4').style.display = 'block';
});

document.getElementById('hotelleft').addEventListener('mouseup', function() {
  document.getElementById('myDiv4').style.display = 'none';
});

document.getElementById('hotelcenter').addEventListener('mousedown', function() {
  document.getElementById('myDiv6').style.display = 'block';
});

document.getElementById('hotelcenter').addEventListener('mouseup', function() {
  document.getElementById('myDiv6').style.display = 'none';
});

// pharmacy

document.getElementById('hover03').addEventListener('mouseover', function() {
  document.getElementById('img03').style.display = 'block';
});

document.getElementById('hover03').addEventListener('mouseout', function() {
  document.getElementById('img03').style.display = 'none';
});

document.getElementById('pharmacyright').addEventListener('mousedown', function() {
  document.getElementById('myDiv8').style.display = 'block';
});

document.getElementById('pharmacyright').addEventListener('mouseup', function() {
  document.getElementById('myDiv8').style.display = 'none';
});

document.getElementById('pharmacyleft').addEventListener('mousedown', function() {
  document.getElementById('myDiv7').style.display = 'block';
});

document.getElementById('pharmacyleft').addEventListener('mouseup', function() {
  document.getElementById('myDiv7').style.display = 'none';
});

document.getElementById('pharmacycenter').addEventListener('mousedown', function() {
  document.getElementById('myDiv9').style.display = 'block';
});

document.getElementById('pharmacycenter').addEventListener('mouseup', function() {
  document.getElementById('myDiv9').style.display = 'none';
});

// fruits

document.getElementById('hover04').addEventListener('mouseover', function() {
  document.getElementById('img04').style.display = 'block';
});

document.getElementById('hover04').addEventListener('mouseout', function() {
  document.getElementById('img04').style.display = 'none';
});

document.getElementById('fruitsright').addEventListener('mousedown', function() {
  document.getElementById('myDiv11').style.display = 'block';
});

document.getElementById('fruitsright').addEventListener('mouseup', function() {
  document.getElementById('myDiv11').style.display = 'none';
});

document.getElementById('fruitsleft').addEventListener('mousedown', function() {
  document.getElementById('myDiv10').style.display = 'block';
});

document.getElementById('fruitsleft').addEventListener('mouseup', function() {
  document.getElementById('myDiv10').style.display = 'none';
});

document.getElementById('fruitscenter').addEventListener('mousedown', function() {
  document.getElementById('myDiv12').style.display = 'block';
});

document.getElementById('fruitscenter').addEventListener('mouseup', function() {
  document.getElementById('myDiv12').style.display = 'none';
});

// postcard

document.getElementById('postcardright').addEventListener('mousedown', function() {
  document.getElementById('myDiv14').style.display = 'block';
});

document.getElementById('postcardright').addEventListener('mouseup', function() {
  document.getElementById('myDiv14').style.display = 'none';
});

document.getElementById('postcardleft').addEventListener('mousedown', function() {
  document.getElementById('myDiv13').style.display = 'block';
});

document.getElementById('postcardleft').addEventListener('mouseup', function() {
  document.getElementById('myDiv13').style.display = 'none';
});



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
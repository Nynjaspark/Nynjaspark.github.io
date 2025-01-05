document.addEventListener("DOMContentLoaded", function() {
  dragElement(document.getElementById("sticker1"));
});

function dragElement(container) {
  let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

  container.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
      e.preventDefault();
      // Get the current mouse position:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
      e.preventDefault();
      // Calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      // Set the element's new position:
      container.style.top = (container.offsetTop - pos2) + "px";
      container.style.left = (container.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
      // Stop moving when mouse button is released:
      document.onmouseup = null;
      document.onmousemove = null;
  }
}
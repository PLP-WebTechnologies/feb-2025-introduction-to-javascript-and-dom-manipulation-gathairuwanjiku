function changeText() {
    const text = document.getElementById("dynamicText");
    text.textContent = "The text content has been changed!";
  }
  
  function changeStyle() {
    const text = document.getElementById("dynamicText");
    text.classList.toggle("highlight");
  }
  
  function toggleElement() {
    const container = document.getElementById("extraContainer");
    const existing = document.getElementById("newElement");
  
    if (existing) {
      container.removeChild(existing);
    } else {
      const newEl = document.createElement("p");
      newEl.id = "newElement";
      newEl.textContent = "This is a new paragraph added by JavaScript.";
      container.appendChild(newEl);
    }
  }
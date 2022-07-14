// Create random colors
function randomColors() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export default randomColors;

// Language: javascript
// Path: plugins\colors.js
// Create random colors

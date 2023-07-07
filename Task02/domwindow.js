function show() {
  var h = window.innerHeight;
  var w = window.innerWidth;
  var l = window.location;
  var c = window.closed;
  document.getElementById("prop").innerHTML =
    "Frame's Height: " +
    h +
    "<br>" +
    "Frame's Width: " +
    w +
    "<br>" +
    "Window location:" +
    l +
    "<br>" +
    "Window Closed: " +
    c;
}

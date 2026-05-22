
var link1 = document.querySelectorAll(".nav-links a")[0]; // Home
var link2 = document.querySelectorAll(".nav-links a")[1]; // About
var link3 = document.querySelectorAll(".nav-links a")[2]; // Projects
var link4 = document.querySelectorAll(".nav-links a")[3]; // Contact

// When Home is clicked
link1.onclick = function () {
  link1.classList.add("active");
  link2.classList.remove("active");
  link3.classList.remove("active");
  link4.classList.remove("active");
};

// When About is clicked
link2.onclick = function () {
  link1.classList.remove("active");
  link2.classList.add("active");
  link3.classList.remove("active");
  link4.classList.remove("active");
};

// When Projects is clicked
link3.onclick = function () {
  link1.classList.remove("active");
  link2.classList.remove("active");
  link3.classList.add("active");
  link4.classList.remove("active");
};

// When Contact is clicked
link4.onclick = function () {
  link1.classList.remove("active");
  link2.classList.remove("active");
  link3.classList.remove("active");
  link4.classList.add("active");
};

function playPause() {
  var video = document.getElementById("myVideo");
  var btn = document.getElementById("playButton");

  if (video.paused) {
    video.play();
    btn.textContent = "Pause";
  } else {
    video.pause();
    btn.textContent = "Play";
  }
}
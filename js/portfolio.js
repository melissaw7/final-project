// Resume Button
var modal = document.querySelector("#resumeModal");
var button = document.querySelector("#resumeButton");
var close = document.querySelector(".close");
function openModal() {
    modal.style.display = "block";
}
function closeModal() {
    modal.style.display = "none";
}
window.onclick = function(event) {
if (event.target == modal) {
    modal.style.display = "none";
}
}

// Learn More Buttons
function visitWebsite1() {
    window.location.href = 'https://www.michiganrcg.com/';
  }
document.getElementById('link-btn1').addEventListener('click', visitWebsite1);

function visitWebsite2() {
    window.location.href = 'https://www.mproduct.org/';
  }
document.getElementById('link-btn2').addEventListener('click', visitWebsite2);

function visitWebsite3() {
    window.location.href = 'https://www.mamclub.org/';
  }
document.getElementById('link-btn3').addEventListener('click', visitWebsite3);
const timer =  document.querySelector('#timer');

function countdown () { 
    let seconds = document.getElementById("seconds").value;
    function tick() {
        seconds = seconds
        timer.innerHTML = seconds;  
        var time = setTimeout (tick, 1000);
        if(seconds == -1 ) {
            alert("Times up");
            clearTimeout(time);
            timer.innerHTML = "";
        }
    }
    tick();
}

let slideIndex = 1; // initial pslideindex starts at 1
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides"); // selects elements with a classname of myslides
  let dots = document.getElementsByClassName("dot"); // selects elements with a classname of dot
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; //changes display to block
  dots[slideIndex-1].className += " active"; //gives it a class name of actibe
}
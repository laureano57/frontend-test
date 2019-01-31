var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function selectSlide(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var slides = document.getElementsByClassName("banner-slide");
  var dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideIndex = 1;
  };

  if (n < 1) {
    slideIndex = slides.length;
  };

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  };

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" dot-white", "");
  };

  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " dot-white";
}

$(document).ready(function() {
  $(".banner").removeClass("hide");
  $(".banner-footer-img").click(function(){
    $.ajax({url: "http://remote.fizzmod.com/ajax.php",
      success: function(result){
        $(".banner-footer")
          .html(`<p class="banner-footer-response">`+result+`</p>`);
      }});
  });
})

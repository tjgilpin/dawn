var sliders = document.querySelectorAll(".hero-slider");

sliders.forEach((slider, i) => {
  var autoplayId = "#" + slider.getAttribute('id') + '-autoplay'

  var autoplay = document.querySelector(autoplayId)

  var options = {
    autoplay: false
  }

  if (autoplay.value !== false && autoplay.value !== "false") {
    options.autoplay = autoplay.value;
  }
  var glide = new Glide(slider, options);
  glide.mount();
})



$(document).ready(function () {
  // Initial styles
  $(".lottie, .hero-bullet-points, iframe").css("opacity", 0);

  const vh = $(window).height();
  const vw = $(window).width();
  const scaleRatio = vw / 1600;

  $(".explore").css("-webkit-transform", `scale(${scaleRatio})`);
  $("iframe").css("opacity", 1);
  $("#tableauViz-1").css("margin-bottom", `-${(1 - scaleRatio) * 2300}px`);
  $("#tableauViz-2").css("margin-bottom", `-${(1 - scaleRatio) * 900}px`);

  // Define fade durations for each bullet point
  const fadeDurations = [
    1500, 3000, 1000, 2000, 2000, 2000, 2000, 2000, 2000, 4000, 3000,
  ];

  $(window).scroll(function () {
    const scrollPosition = $(window).scrollTop() - vh;

    let fadeOutEnd = 0;
    fadeDurations.forEach((fadeDuration, index) => {
      const fadeInStart = fadeOutEnd;
      fadeOutEnd += fadeDuration; // Next fade out end is the current duration added

      const fadeInEnd = fadeInStart + 300;
      const fadeOutStart = fadeOutEnd - 300;
      const className = `._${index + 1}`;

      if (scrollPosition >= fadeInStart && scrollPosition <= fadeOutEnd) {
        // Adjust opacity and z-index during fade-in, visible, or fade-out
        $(className).css("z-index", 2);

        if (scrollPosition <= fadeInEnd) {
          // Fading in
          $(className).css(
            "opacity",
            (scrollPosition - fadeInStart) / fadeDuration
          );
        } else if (scrollPosition >= fadeOutStart) {
          // Fading out
          $(className).css(
            "opacity",
            1 - (scrollPosition - fadeOutStart) / fadeDuration
          );
        } else {
          // Fully visible
          $(className).css("opacity", 1);
        }
      } else {
        // Reset opacity and z-index if out of range
        $(className).css({ opacity: 0, "z-index": -1 });
        $(".lottie").css("z-index", -1);
      }
    });
  });
});

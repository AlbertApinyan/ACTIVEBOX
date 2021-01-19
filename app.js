$(function() {

  let header = $("#header");
  let firstblock = $("#firstblock");
  let firstblockH = firstblock.innerHeight();
  let scrollPos = $(window).scrollTop();
  let nav = $("#nav");
  let navToggle = $("#navToggle");


  checkScroll(scrollPos, firstblockH);

  $(window).on("scroll load resize", function() {
    firstblockH = firstblock.innerHeight();
    scrollPos = $(this).scrollTop();

    checkScroll(scrollPos, firstblockH);
  });


  function checkScroll(scrollPos, firstblockH) {
    if( scrollPos > firstblockH ) {
      header.addClass("fixed");
    } else {
      header.removeClass("fixed")
    }
  }

  $("[data-scroll]").on("click", function(event) {
    event.preventDefault();

    let elementId = $(this).data('scroll');
    let elementOffset = $(elementId).offset().top;

    nav.removeClass("show");

    $("html, body").animate({
      scrollTop: elementOffset - 70
    }, 700);
  });



  navToggle.on("click", function(event) {
    event.preventDefault();

    nav.toggleClass("show");
  });


  let slider = $("#clientsSlider")

    slider.slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      arrows: false,
      dots: true
    });

});

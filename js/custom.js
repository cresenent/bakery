$(function () {
  $(window).scroll(function () {
    if ($(document).scrollTop() > 70) {
      $(".menu").addClass("affix");
    } else {
      $(".menu").removeClass("affix");
    }
  });

  $('[data-toggle="tooltip"]').tooltip();

  $(".animate-toggler").click(function () {
    $(this).toggleClass("active");
  });

  // carousel
  $("#banner .carousel").carousel({
    interval: 4500,
    pause: "false",
  });

  $("#banner .carousel").swipe({
    swipe: function (
      event,
      direction,
      distance,
      duration,
      fingerCount,
      fingerData
    ) {
      if (direction == "left") $(this).carousel("next");
      if (direction == "right") $(this).carousel("prev");
    },
    allowPageScroll: "vertical",
  });

  // owlcarousel
  var owl = $(".owl-carousel");
  owl.owlCarousel({
    loop: true,
    nav: true,
    margin: 10,
    items: 1,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    smartSpeed: 100, // slow and smooth transition
    // responsive: {
    //   1200: { items: 4 },
    //   991: { items: 3 },
    //   500: { items: 2 },
    //   300: { items: 1 },
    // },
  });
  // Smooth and customizable mousewheel navigation for owl-carousel
  owl.on("wheel", ".owl-stage", function (e) {
    e.preventDefault();
    const delta = e.originalEvent.deltaY;
    const scrollThreshold = 28; // Lower for more sensitivity
    const transitionSpeed = 1000; // ms, adjust for smoothness

    if (delta > scrollThreshold) {
      owl.trigger("next.owl.carousel", [transitionSpeed]);
    } else if (delta < -scrollThreshold) {
      owl.trigger("prev.owl.carousel", [transitionSpeed]);
    }
  });

  // review carousel
  $("#review .carousel").carousel({
    interval: 6000,
    touch: true,
  });

  // faq arrow down up animation (not still static)

  $(".btn-accordion").click(function () {
    let arrow = ".arrow" + $(this).data("id");
    $(arrow).toggleClass("down");

    if (arrow != ".arrow1") {
      $(".arrow1").removeClass("down");
    }
    if (arrow != ".arrow2") {
      $(".arrow2").removeClass("down");
    }
    if (arrow != ".arrow3") {
      $(".arrow3").removeClass("down");
    }
    if (arrow != ".arrow4") {
      $(".arrow4").removeClass("down");
    }
  });

  // filter price
  $("#slider-range").slider({
    range: true,
    min: 0,
    max: 15000,
    values: [1000, 10000],
    slide: function (event, ui) {
      $("#amount").val("Rs." + ui.values[0] + " - Rs." + ui.values[1]);
    },
  });
  $("#amount").val(
    "Rs." +
      $("#slider-range").slider("values", 0) +
      " - Rs." +
      $("#slider-range").slider("values", 1)
  );

  // load more button
  $(".btn-load").click(function () {
    $(this).hide();
    $("#div-loaded").slideDown("slow");
  });

  // aos
  AOS.init({
    easing: "ease-out-back",
    once: true,
  });
});

// Cart functionality
let cart = [];

// Initialize Bootstrap toast
const toastElement = document.getElementById("cartToast");
const toast = new bootstrap.Toast(toastElement);

// Add to cart functionality
document.querySelectorAll(".  btn-addtocart d-none").forEach((button) => {
  button.addEventListener("click", function (e) {
    e.preventDefault();

    const id = this.getAttribute("data-id");
    const name = this.getAttribute("data-name");
    const price = this.getAttribute("data-price");

    // Add to cart
    cart.push({ id, name, price });

    // Update toast message
    document.getElementById(
      "toastMessage"
    ).textContent = `${name} added to cart!`;

    // Show toast
    toast.show();

    // Optional: Store in localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    console.log("Cart:", cart);
  });
});

/* Removed duplicate toast and add-to-cart code block to fix syntax error */

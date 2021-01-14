(function () {
  "use strict";
  window.addEventListener("load", function () {

    addAndRemoveFadeAnimation(document.querySelector(".hero-wrap .firstText") , "fadeInLeftBig");
    addAndRemoveFadeAnimation(document.querySelector(".hero-wrap .secondText") , "fadeInRightBig");
    
    // Loader Function
    setTimeout(() => {
      document.querySelector("#cf-loader.show").classList.remove("show");
    }, 500);

    var navLineBar = document.querySelector(".menu .line");
    var navy_bar = document.querySelectorAll(".container_wrap .menu li");
    let navbar = document.querySelector("nav");
    var scrollPrev = window.pageYOffset;

    // Particle.JS 
    particlesJS("particles-js", {
      particles: {
        number: {
          value: 100,
          density: { enable: true, value_area: 599 },
        },
        color: { value: ["#0069d9"] },
        shape: {
          type: "circle",
          stroke: { width: 0, color: "#000000" },
          polygon: { nb_sides: 8 },
          image: { src: "img/github.svg", width: 100, height: 100 },
        },
        opacity: {
          value: 0.5,
          random: false,
          anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
        },
        size: {
          value: 2,
          random: true,
          anim: { enable: false, speed: 40, size_min: 0.4, sync: false },
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#0069d9",
          opacity: 0.4,
          width: 1.5,
        },
        move: {
          enable: true,
          speed: 5,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: { enable: false, rotateX: 600, rotateY: 1200 },
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: { enable: false, mode: "push" },
          onclick: { enable: true, mode: "repulse" },
          resize: true,
        },
        modes: {
          grab: { distance: 400, line_linked: { opacity: 1 } },
          bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
          repulse: { distance: 200, duration: 0.4 },
          push: { particles_nb: 4 },
          remove: { particles_nb: 2 },
        },
      },
      retina_detect: true,
    });

    var animatedLetters = document.querySelectorAll(".hero-wrap h1 span");
    animatedLetters.forEach(element => {
      addAndRemoveRubberBandAnimation(element ,"rubberBand");
    });
    
    navLineBar.style.left = `${
      document.querySelector(".menu li.active").getAttribute("data-index") * 20
    }%`;

    // NavyBar Active Animation
    navy_bar.forEach((element, index) => {
      element.addEventListener("click", function () {
        navy_bar.forEach((e) => {
          e.classList.remove("active");
          navLineBar.style.left = `${index * 20}%`;
        });
        this.classList.add("active");
      });
    });

    // Navbar Sticky
    window.addEventListener('scroll', function(){
      var header = document.querySelector('.header');
      header.classList.toggle('sticky', window.scrollY > 0);
      var scrollCur = window.pageYOffset;
      if (scrollPrev > scrollCur) {
        navbar.style.top = "0";
      } else {
        navbar.style.top = "-90px";
      }
      scrollPrev = scrollCur;
    });

    // Typed.JS
    var typed = new Typed(".txt-wrap .txt-typed", {
      strings: [
        "Designer.",
        "FreeLancer.",
        "Developer.",
        "Blogger.",
        "Pentester.",
      ],
      typeSpeed: 80,
      loop: true,
      backDelay: 1000,
      startDelay: 400,
      backSpeed: 30,
      loop: true,
      showCursor: false,
    });
    
    function addAndRemoveRubberBandAnimation(element , animation) {
      element.addEventListener("mouseover", function () {
        element.classList.add("animated");
        element.classList.add(animation);
      });
      element.addEventListener("animationend", function () {
        element.classList.remove("animated");
        element.classList.remove(animation);
      });
    }
    function addAndRemoveFadeAnimation(element , animation) {
      element.classList.add("animated");
      element.classList.add(animation);
      setTimeout(() => {
        element.addEventListener("animationend", function () {
          element.classList.remove("animated");
          element.classList.remove(animation);
        });
      }, 500);
    }
  });
})();

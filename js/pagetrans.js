gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

const lenis = new Lenis();

lenis.on("scroll", (e) => {});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// new kursor({
//   type: 2,
//   removeDefaultCursor: true,
//   color: "#f5deb3",
// });

// ===================================

// ===================================

const logo = document.querySelector(".ani_heading");

const letters = logo.textContent.split("");

logo.textContent = "";

letters.forEach((letter) => {
  logo.innerHTML += '<span class="letter">' + letter + "</span>";
});

gsap.set(".letter", { display: "inline-block" });
gsap.set(".ani_heading", { x: 0 });
gsap.set(".ani_heading_1", { x: 0 });
gsap.to(".ani_heading", { opacity: 1 });

// gsap.set(".full_section", { display: "none" });

const ani_tl = gsap.timeline({
  default: { duration: 0.75, ease: "Power.easeOut" },
});

ani_tl.fromTo(
  ".letter",
  { y: "-150%", opacity: 0 },
  { y: 0, stagger: 0.05, ease: "back.out(3)", opacity: 1 }
),
  ani_tl.to(".img_ani_div", { opacity: 1 });
ani_tl.fromTo(
  ".ani_heading_1",
  { y: "-110%" },
  { x: 350, ease: "power4.out", opacity: 1, delay: 0.5 }
);
ani_tl.to(".ani_heading_1", { y: 10, ease: "back.out(3)", opacity: 1 });
ani_tl.fromTo(
  ".ani_heading_1",
  { y: 10 },
  { x: 0, ease: "back.out(3)", opacity: 1 }
);
ani_tl.fromTo(
  ".ani_img_container",
  { display: "none", opacity: 0, height: "0%" },
  { display: "block", opacity: 1, transformOrigin: " center", height: "50%" }
);

ani_tl.to(".img_ani_div", { stagger: 0.05, "--clip": "100%" });
ani_tl.fromTo(
  ".img_ani_div",
  { stagger: 0.05, "--clip": "100%" },
  { "--clip": "0%" }
);

ani_tl.to(".ani_img_container", {
  display: "none",
  opacity: 0,
  transformOrigin: " center",
  height: "0%",
});

ani_tl.to(".hero-animation", {
  display: "none",
});
// ani_tl.to(".full_section", {
//   display: "block",
// });

TweenMax.staggerFrom(
  ".ani_img_container > .img_ani_div",
  1,
  {
    y: "110%",
    ease: Expo.easeInOut,
    delay: 1,
  },
  0.3
);

ani_tl.fromTo(".hero-animation", { opacity: 1 }, { opacity: 0 });
ani_tl.to(".hero-animation", {
  display: "none",
});

function delay(n) {
  n = n || 2000;
  return new Promise((done) => {
    setTimeout(() => {
      done();
    }, n);
  });
}

function pageTransition() {
  var tl = gsap.timeline();
  tl.to(".loading-screen", {
    duration: 1.2,
    width: "100%",
    left: "0%",
    ease: "Expo.easeInOut",
  });

  tl.to(".loading-screen", {
    duration: 1,
    width: "100%",
    left: "100%",
    ease: "Expo.easeInOut",
    delay: 0.3,
  });
  tl.set(".loading-screen", { left: "-100%" });
}

function initSplitAnimation() {
  const splitTypes = document.querySelectorAll(".reveal");

  splitTypes.forEach((char, i) => {
    if (window.innerWidth >= 900) {
      const text = new SplitType(char, { types: "chars" });

      gsap.from(text.chars, {
        scrollTrigger: {
          trigger: char,
          start: "top 800",
          end: "top 40%",
          scrub: 2,
        },
        opacity: 0.2,
        stagger: 0.1,
      });
    }
  });
}

function initImagechangeAnimation() {
  const images = {
    fest: [
      "./assets/filtered/festival-image-two.jpg",
      "./assets/filtered/festival-image-three.jpg",
      "./assets/filtered/festival-image-four.jpg",
    ],
    sport: [
      "./assets/filtered/sports-image-two.jpg",
      "./assets/filtered/sports-image-three.jpg",
      "./assets/filtered/sports-image-one.jpg",
    ],
    party: [
      "./assets/filtered/party-image-two.jpg",
      "./assets/filtered/party-image-three.jpg",
    ],
    wedd: [
      "./assets/filtered/wedding-image-two.jpg",
      "./assets/filtered/wedding-image-one.jpg",
    ],
    grad: [
      "./assets/filtered/graduation-image-two.jpg",
      "./assets/filtered/graduation-image-one.jpg",
    ],
  };

  const elements = {
    fest: document.getElementById("Festimage"),
    sport: document.getElementById("sportimage"),
    party: document.getElementById("partyimage"),
    wedd: document.getElementById("wedimage"),
    grad: document.getElementById("gradimage"),
  };

  const timelines = {
    fest: gsap.timeline({ repeat: -1 }),
    sport: gsap.timeline({ repeat: -1 }),
    party: gsap.timeline({ repeat: -1 }),
    wedd: gsap.timeline({ repeat: -1 }),
    grad: gsap.timeline({ repeat: -1 }),
  };

  const currentIndexes = {
    fest: 0,
    sport: 0,
    party: 0,
    wedd: 0,
    grad: 0,
  };

  const changeImage = (category) => {
    elements[category].src = images[category][currentIndexes[category]];
    currentIndexes[category] =
      (currentIndexes[category] + 1) % images[category].length;
  };

  timelines.fest.to("#Festimage", {
    duration: 5,
    onComplete: () => changeImage("fest"),
  });
  timelines.sport.to("#sportimage", {
    duration: 4.2,
    onComplete: () => changeImage("sport"),
  });
  timelines.party.to("#partyimage", {
    duration: 3.2,
    onComplete: () => changeImage("party"),
  });
  timelines.wedd.to("#wedimage", {
    duration: 3,
    onComplete: () => changeImage("wedd"),
  });
  timelines.grad.to("#gradimage", {
    duration: 2.2,
    onComplete: () => changeImage("grad"),
  });

  timelines.fest.play();
  timelines.sport.play();
  timelines.party.play();
  timelines.wedd.play();
  timelines.grad.play();

  if (window.innerWidth >= 900) {
    var texttl = gsap.timeline({
      scrollTrigger: {
        trigger: ".ani_type_text",
        start: "top 10%",
        end: "bottom top",
        scrub: 4,
        // markers: true,
      },
      default: { stagger: true, delay: 1, ease: " forwards", duration: 3 },
    });

    texttl.fromTo(
      "#festival_arrow",
      { strokeDasharray: "2300px", strokeDashoffset: "2300px" },
      { strokeDashoffset: 0, ease: " forwards", duration: 2 },
      0
    );
    texttl.fromTo(
      "#Festivals_event",
      {
        opacity: 0,
      },
      {
        opacity: 1,
      }
    );
    texttl.fromTo(
      "#Vector",
      { strokeDasharray: "2300px", strokeDashoffset: "2300px" },
      { strokeDashoffset: 0, ease: " forwards", duration: 2 },
      0
    );
    texttl.fromTo(
      "#Fashion",
      {
        opacity: 0,
      },
      {
        opacity: 1,
      }
    );
    texttl.fromTo(
      "#Music_arrow",
      { strokeDasharray: "2300px", strokeDashoffset: "2300px" },
      { strokeDashoffset: 0, ease: " forwards", duration: 2 },
      0
    );
    texttl.fromTo(
      "#music_event",
      {
        opacity: 0,
      },
      {
        opacity: 1,
      }
    );
    texttl.fromTo(
      "#graduation_arrow",
      { strokeDasharray: "2300px", strokeDashoffset: "2300px" },
      { strokeDashoffset: 0, ease: " forwards", duration: 2 },
      0
    );
    texttl.fromTo(
      "#Graduation_event",
      {
        opacity: 0,
      },
      {
        opacity: 1,
      }
    );
    texttl.fromTo(
      "#wedding_arrow",
      { strokeDasharray: "2300px", strokeDashoffset: "2300px" },
      { strokeDashoffset: 0, ease: " forwards", duration: 2 },
      0
    );
    texttl.fromTo(
      "#Wedding_event",
      {
        opacity: 0,
      },
      {
        opacity: 1,
      }
    );

    var textt2 = gsap.timeline({
      scrollTrigger: {
        trigger: "#wedimage",
        start: "top 10%",
        end: "bottom 50%",
        scrub: 4,
        // markers: true,
      },
      default: { stagger: true, delay: 1, ease: " forwards", duration: 3 },
    });

    textt2.fromTo(
      "#sports_arrow",
      { strokeDasharray: "2300px", strokeDashoffset: "2300px" },
      { strokeDashoffset: 0, ease: " forwards", duration: 2 },
      0
    );
    textt2.fromTo(
      "#Sports_event",
      {
        opacity: 0,
      },
      {
        opacity: 1,
      }
    );

    textt2.fromTo(
      "#celebration_arrow",
      { strokeDasharray: "12300px", strokeDashoffset: "12300px" },
      { strokeDashoffset: 0, ease: " forwards", duration: 2 },
      0
    );
    textt2.fromTo(
      "#in_arrow",
      { strokeDasharray: "12300px", strokeDashoffset: "12300px" },
      { strokeDashoffset: 0, ease: " forwards", duration: 2 },
      0
    );
    textt2.fromTo(
      "#celebrations_text",
      {
        opacity: 0,
      },
      {
        opacity: 1,
      }
    );
    textt2.fromTo(
      "#Parties_arrow",
      { strokeDasharray: "12300px", strokeDashoffset: "12300px" },
      { strokeDashoffset: 0, ease: " forwards", duration: 2 },
      0
    );
    textt2.fromTo(
      "#Parties",
      {
        opacity: 0,
      },
      {
        opacity: 1,
      }
    );

    var textt3 = gsap.timeline({
      scrollTrigger: {
        trigger: "#sportimage",
        start: "bottom 50%",
        end: "party_img",
        scrub: 4,
        // markers: true,
      },
      default: { stagger: true, delay: 1, ease: " forwards", duration: 3 },
    });

    textt3.fromTo(
      "#marathon_arrow",
      { strokeDasharray: "2300px", strokeDashoffset: "2300px" },
      { strokeDashoffset: 0, ease: " forwards", duration: 2 },
      0
    );
    textt3.fromTo(
      "#inner_line",
      { strokeDasharray: "12300px", strokeDashoffset: "12300px" },
      { strokeDashoffset: 0, ease: " forwards", duration: 2 },
      0
    );
    textt3.fromTo(
      "#marathon",
      {
        opacity: 0,
      },
      {
        opacity: 1,
      }
    );
    textt3.fromTo(
      "#travel_arrow",
      { strokeDasharray: "12300px", strokeDashoffset: "12300px" },
      { strokeDashoffset: 0, ease: " forwards", duration: 2 },
      0
    );
    textt3.fromTo(
      "#travel_event",
      {
        opacity: 0,
      },
      {
        opacity: 1,
      }
    );
  }
}
function initHeroSplitAnimation() {
  ani_tl.to(".split", {
    duration: 4,
    text: "Share All Your Photos In OneSpot With The Power Of AI !",
    ease: "none",
  });
}
function initRoadmapAnimation() {
  var broos = gsap.timeline({
    scrollTrigger: {
      trigger: ".main_road_map",
      start: "top 50%",
      end: "bottom",
      // scrub: 4,
      // markers: true,
    },
    default: { stagger: true, delay: 1, ease: " forwards", duration: 3 },
  });

  broos
    .fromTo(".cir_one", 1, {}, { "--clip": "100%" }, "<1%")

    .fromTo(
      "#brro",
      { strokeDasharray: "1300px", strokeDashoffset: "1300px" },
      { strokeDashoffset: 0, ease: " forwards", duration: 15 },
      "<"
    )
    .fromTo(".cir_two", 1, {}, { "--clip": "100%" }, "<10%")

    .fromTo(
      "#Brro_1",
      { strokeDasharray: "1300px", strokeDashoffset: "1300px" },
      { strokeDashoffset: 0, ease: " forwards", duration: 15 },
      "<"
    )
    .fromTo(".cir_three", 1, {}, { "--clip": "100%" }, "<10%")

    .fromTo(
      "#brro_2",
      { strokeDasharray: "1300px", strokeDashoffset: "1300px" },
      { strokeDashoffset: 0, ease: " forwards", duration: 15 },
      "<"
    )
    .fromTo(".cir_four", 1, {}, { "--clip": "100%" }, "<10%");
}
function initFeatureAnimation() {
  var feature = gsap.timeline({
    scrollTrigger: {
      trigger: ".feature_div",
      start: "top 50%",
      end: "bottom",
      // scrub: 4,
      // markers: true,
    },
    default: { stagger: true, duration: 1, ease: "circ.out" },
  });

  feature.fromTo(".feature_box1", { x: 0, y: 0 }, { y: "-120%" }, "<40%");
  feature.fromTo(".feature_box2", { x: 0, y: 0 }, { x: "120%" }, "<40%");
  feature.fromTo(".feature_box3", { x: 0, y: 0 }, { y: "120%" }, "<40%");
  feature.fromTo(".feature_box4", { x: 0, y: 0 }, { x: "-120%" }, "<40%");

  feature.to(".feature_box1", { x: "120%" }, "<10%");
  feature.to(".feature_box2", { y: "120%" }, "<10%");
  feature.to(".feature_box3", { x: "-120%" }, "<10%");
  feature.to(".feature_box4", { y: "-120%" }, "<10%");
  feature.to(".feature_box1", { y: 1 }, "<5%");
  feature.to(".feature_box2", { x: -1 }, "<5%");
  feature.to(".feature_box3", { y: -1 }, "<5%");
  feature.to(".feature_box4", { x: 1 }, "<5%");

  feature.fromTo(".feature_center", { x: 0, y: 0 }, { scale: 0 });

  feature.to(".feature_logo_box", { opacity: 1 }, "<");
  feature.to(".feature_text_box", { opacity: 1 }, "<");

  feature.fromTo(".feature_logo_box", { x: 0, y: 0 }, { rotate: 360 }, "<");
  feature.fromTo(".feature_text_box", { x: 0, y: 0 }, { rotate: 360 }, "<");
  feature.fromTo(
    ".feature_logo_box",
    { scale: 0.67 },
    { scale: 1, duration: 1 }
  );
  feature.fromTo(".feature_logo_box", { x: 0, y: 0 }, { scale: 0 }, "<50%");

  feature.fromTo(
    ".feature_text_box",
    { x: 0, y: 0, scale: 0 },
    { scale: 1, x: 0 },
    "<10%"
  );
}
function initScanAnimation() {
  const scan = gsap.timeline({
    ease: "bounce.out",
    yoyo: true,
    repeat: -1,
  });

  scan.fromTo(
    "#scanline",
    {
      y: 0,
    },

    { duration: 1.5, y: 250 }
  );
}
function initHomeImageAnimation() {
  const time = gsap.timeline({
    repeat: -1,
    duration: 0.3,
    stagger: true,
    default: { ease: "Power.easeOut" },
  });

  time.to(".sec_round", { display: "none" }),
    time.to(".text_selfie", { duration: 1, "--clip": "100%" }),
    time.fromTo(".selfie_photo", { opacity: 0 }, { opacity: 1 }),
    time.to(".selfie_photo", { duration: 2.5, "--clip": "33%" });

  time.to(".text_selfie", { duration: 0.55, "--clip": "0%" }),
    time.to(".selfie_photo", { duration: 1.5, opacity: 0 });

  time.to(".side_text", { duration: 1, "--clip": "100%" }),
    time.fromTo(
      ".one",
      { scale: 0 },
      { duration: 0.2, opacity: 1, scale: 1.2 }
    ),
    time.fromTo(".one", { x: 0 }, { duration: 0.4, x: -80, y: -15 }),
    time.fromTo(
      ".two",
      { scale: 0 },
      { duration: 0.4, opacity: 1, scale: 1.5 }
    ),
    time.fromTo(".two", { x: 0 }, { duration: 0.4, x: 5, y: -20 }),
    time.fromTo(
      ".three",
      { scale: 0 },
      { duration: 0.4, opacity: 1, scale: 2.5 }
    ),
    time.fromTo(".three", { x: 0 }, { duration: 0.4, x: -60, y: 20 }),
    time.fromTo(
      ".four",
      { scale: 0 },
      { duration: 0.4, opacity: 1, scale: 1.3 }
    ),
    time.fromTo(".four", { x: 0 }, { duration: 0.4, x: 55, y: 40 }),
    time.fromTo(".five", { scale: 0 }, { duration: 0.4, opacity: 1, scale: 1 }),
    time.fromTo(".five", { x: 0 }, { duration: 0.4, x: -70, y: 40 }),
    time.fromTo(
      ".six",
      { scale: 0 },
      { duration: 0.4, opacity: 1, scale: 2.5 }
    ),
    time.fromTo(".six", { x: 0 }, { duration: 0.4, x: 40, y: 80 }),
    time.fromTo(
      ".seven",
      { scale: 0 },
      { duration: 0.4, opacity: 1, scale: 1.5 }
    ),
    time.fromTo(".seven", { x: 0 }, { duration: 0.4, x: 70, y: 110 }),
    time.fromTo(
      ".eight",
      { scale: 0 },
      { duration: 0.4, opacity: 1, scale: 1.9 }
    ),
    time.fromTo(".eight", { x: 0 }, { duration: 0.4, x: -220, y: 80 }),
    time.fromTo(".green_border", { opacity: 0 }, { opacity: 1 }, "<"),
    time.fromTo(".green_border_one", { opacity: 0 }, { opacity: 1 }, "<"),
    time.fromTo(".green_border_two", { opacity: 0 }, { opacity: 1 }, "<"),
    time.fromTo(".green_border_three", { opacity: 0 }, { opacity: 1 }, "<"),
    time.fromTo(".two", {}, { filter: "grayscale(95%)" }),
    time.fromTo(".three", {}, { filter: "grayscale(95%)" }),
    time.fromTo(".six", {}, { filter: "grayscale(95%)" }),
    time.fromTo(".eight", {}, { filter: "grayscale(95%)" }),
    time.fromTo(".two", {}, { clipPath: " inset(0% 0% 0% 100%)" }),
    time.fromTo(".three", {}, { clipPath: " inset(0% 0% 0% 100%)" }),
    time.fromTo(".six", {}, { clipPath: " inset(0% 0% 0% 100%)" }),
    time.fromTo(".eight", {}, { clipPath: " inset(0% 0% 0% 100%)" }),
    time.fromTo("#first_text", { opacity: 0 }, { opacity: 1 }),
    time.fromTo("#sec_text", { opacity: 0 }, { opacity: 1 }),
    time.to(".one", { x: 50, y: 50, scale: 1.4 });
  time.to(".four", { x: -50, y: 80, scale: 1.4 });
  time.to(".five", { x: 50, y: 110, scale: 1.4 });
  time.to(".seven", { x: 50, y: 140, scale: 1.4 });
  time.fromTo(".link_photo", { opacity: 0 }, { opacity: 1 });
  time.fromTo(".one", { scale: 1.4 }, { scale: 0 });
  time.fromTo(".four", { scale: 1.4 }, { scale: 0, y: -50 });
  time.fromTo(".five", { scale: 1.4 }, { scale: 0, y: -80 });
  time.fromTo(".seven", { scale: 1.4 }, { scale: 0, y: -180 });
  time.to(".link_photo", { opacity: 0 });

  time.fromTo("#first_text", { opacity: 1 }, { opacity: 0 }),
    time.fromTo("#sec_text", { opacity: 1 }, { opacity: 0 }),
    time.to(".side_text", { duration: 1, "--clip": "0%" }),
    time.to(".second_ani", { display: "none" }),
    time.to(".sec_round", { display: "inline" }),
    time.to(".text_selfie", { duration: 1, "--clip": "100%" }),
    time.fromTo(".sec_round_selfie_photo", { opacity: 0 }, { opacity: 1 }),
    time.to(".sec_round_selfie_photo", { duration: 2.5, "--clip": "28%" });

  time.to(".text_selfie", { duration: 0.55, "--clip": "0%" }),
    time.to(".sec_round_selfie_photo", { duration: 1.5, opacity: 0 });

  time.to(".side_text", { duration: 1, "--clip": "100%" }),
    time.fromTo(
      ".sec_one",
      { scale: 0 },
      { duration: 0.2, opacity: 1, scale: 1.2 }
    ),
    time.fromTo(".sec_one", { x: 0 }, { duration: 0.4, x: -80, y: 25 }),
    time.fromTo(
      ".sec_two",
      { scale: 0 },
      { duration: 0.4, opacity: 1, scale: 2 }
    ),
    time.fromTo(".sec_two", { x: 0 }, { duration: 0.4, x: 55, y: 5 }),
    time.fromTo(
      ".sec_three",
      { scale: 0 },
      { duration: 0.4, opacity: 1, scale: 2 }
    ),
    time.fromTo(".sec_three", { x: 0 }, { duration: 0.4, x: -60, y: 20 }),
    time.fromTo(
      ".sec_four",
      { scale: 0 },
      { duration: 0.4, opacity: 1, scale: 1.5 }
    ),
    time.fromTo(".sec_four", { x: 0 }, { duration: 0.4, x: 65, y: 30 }),
    time.fromTo(
      ".sec_five",
      { scale: 0 },
      { duration: 0.4, opacity: 1, scale: 1.9 }
    ),
    time.fromTo(".sec_five", { x: 0 }, { duration: 0.4, x: -90, y: 40 }),
    time.fromTo(
      ".sec_six",
      { scale: 0 },
      { duration: 0.4, opacity: 1, scale: 2.5 }
    ),
    time.fromTo(".sec_six", { x: 0 }, { duration: 0.4, x: 40, y: 50 }),
    time.fromTo(
      ".sec_seven",
      { scale: 0 },
      { duration: 0.4, opacity: 1, scale: 1.9 }
    ),
    time.fromTo(".sec_seven", { x: 0 }, { duration: 0.4, x: 70, y: 15 }),
    time.fromTo(
      ".sec_eight",
      { scale: 0 },
      { duration: 0.4, opacity: 1, scale: 1.9 }
    ),
    time.fromTo(".sec_eight", { x: 0 }, { duration: 0.4, x: -120, y: -20 });

  time.fromTo(".green_border_four", { opacity: 0 }, { opacity: 1 }, "<"),
    time.fromTo(".green_border_five", { opacity: 0 }, { opacity: 1 }, "<"),
    time.fromTo(".green_border_six", { opacity: 0 }, { opacity: 1 }, "<"),
    time.fromTo(".green_border_seven", { opacity: 0 }, { opacity: 1 }, "<"),
    time.fromTo(".sec_two", {}, { filter: "grayscale(95%)" }),
    time.fromTo(".sec_three", {}, { filter: "grayscale(95%)" }),
    time.fromTo(".sec_six", {}, { filter: "grayscale(95%)" }),
    time.fromTo(".sec_eight", {}, { filter: "grayscale(95%)" }),
    time.fromTo(".sec_two", {}, { clipPath: " inset(0% 0% 0% 100%)" }),
    time.fromTo(".sec_three", {}, { clipPath: " inset(0% 0% 0% 100%)" }),
    time.fromTo(".sec_six", {}, { clipPath: " inset(0% 0% 0% 100%)" }),
    time.fromTo(".sec_eight", {}, { clipPath: " inset(0% 0% 0% 100%)" }),
    time.fromTo("#first_text", { opacity: 0 }, { opacity: 1 }),
    time.fromTo("#sec_text", { opacity: 0 }, { opacity: 1 }),
    time.to(".sec_one", { x: -1, y: 175, scale: 1.5 }),
    time.to(".sec_four", { x: -1, y: 60, scale: 1.5 }),
    time.to(".sec_five", { x: -1, y: 80, scale: 1.5 }),
    time.to(".sec_seven", { x: -1, y: 55, scale: 1.8 });
  time.fromTo(".link_photo_two", { opacity: 0 }, { opacity: 1 });
  time.fromTo(".sec_one", { scale: 1.4 }, { scale: 0 });
  time.fromTo(".sec_four", { scale: 1.4 }, { scale: 0, y: -50 });
  time.fromTo(".sec_five", { scale: 1.4 }, { scale: 0, y: -80 });
  time.fromTo(".sec_seven", { scale: 1.4 }, { scale: 0, y: -180 });
  time.to(".link_photo_two", { opacity: 0 });
}

document.addEventListener("DOMContentLoaded", function () {
  barba.init({
    sync: true,
    transitions: [
      {
        async leave(data) {
          const done = this.async();
          pageTransition();
          await delay(1000);
          done();
        },
        async enter(data) {
          console.log("Entering page:", data);
          initHomeImageAnimation();
          initSplitAnimation();
          initImagechangeAnimation();
          // initHeroSplitAnimation();
          initRoadmapAnimation();
          initFeatureAnimation();
          initScanAnimation();
        },
        async once(data) {
          console.log("Once transition:", data);
          initHomeImageAnimation();
          initSplitAnimation();
          initImagechangeAnimation();
          // initHeroSplitAnimation();
          initRoadmapAnimation();
          initFeatureAnimation();
          initScanAnimation();
        },
      },
    ],
  });

  barba.hooks.after(() => {
    initSplitAnimation();
  });
});

// document.addEventListener("DOMContentLoaded", function () {
//   document.querySelectorAll(".brand_marquee").forEach((scroller) => {
//     scroller.setAttribute("data-animated", true);

//     const scrollerInner = scroller.querySelector(".brand_marquee_container");
//     const duplicatedContent = [...scrollerInner.children].map((item) =>
//       item.cloneNode(true)
//     );

//     scrollerInner.append(...duplicatedContent);
//   });
// });

// function startOdometerAnimation(odometerClass, targetValue) {
//   var odometer = document.querySelector("." + odometerClass);
//   odometer.innerHTML = targetValue;
// }

// var odometerData = [
//   { class: "photographer", value: 22 },
//   { class: "events", value: 40 },
//   { class: "photos-shared", value: 10 },
//   { class: "data", value: 8 },
// ];

// odometerData.forEach(function (data) {
//   ScrollTrigger.create({
//     trigger: "." + data.class,
//     start: "top 80%",
//     onEnter: function () {
//       startOdometerAnimation(data.class, data.value);
//     },
//     // markers: true,
//   });
// });

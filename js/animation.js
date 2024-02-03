gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

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

ani_tl.to(".split", {
  duration: 4,
  text: "Share All Your Photos In OneSpot With The Power Of AI !",
  ease: "none",
});

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
        // markers: true,
      },
      opacity: 0.2,
      stagger: 0.1,
    });
  }
});

const horie = document.querySelector(".hori");

function getScrollAmount() {
  let horiWidth = horie.scrollWidth;
  return -(horiWidth - window.innerWidth);
}

const tween = gsap.to(horie, {
  x: getScrollAmount,
  duration: 3,
  ease: "none",
});

ScrollTrigger.create({
  trigger: ".testimonials_section",
  start: "top 10%",
  end: () => `+=${getScrollAmount() * -1}`,
  pin: true,
  animation: tween,
  scrub: 2,
  invalidateOnRefresh: true,
  // markers: true,
});

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
feature.fromTo(".feature_logo_box", { scale: 0.67 }, { scale: 1, duration: 1 });
feature.fromTo(".feature_logo_box", { x: 0, y: 0 }, { scale: 0 }, "<50%");

feature.fromTo(
  ".feature_text_box",
  { x: 0, y: 0, scale: 0 },
  { scale: 1, x: 0 },
  "<10%"
);

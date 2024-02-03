gsap.registerPlugin(ScrollTrigger);

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
  time.fromTo(".one", { scale: 0 }, { duration: 0.2, opacity: 1, scale: 1.2 }),
  time.fromTo(".one", { x: 0 }, { duration: 0.4, x: -80, y: -15 }),
  time.fromTo(".two", { scale: 0 }, { duration: 0.4, opacity: 1, scale: 1.5 }),
  time.fromTo(".two", { x: 0 }, { duration: 0.4, x: 5, y: -20 }),
  time.fromTo(
    ".three",
    { scale: 0 },
    { duration: 0.4, opacity: 1, scale: 2.5 }
  ),
  time.fromTo(".three", { x: 0 }, { duration: 0.4, x: -60, y: 20 }),
  time.fromTo(".four", { scale: 0 }, { duration: 0.4, opacity: 1, scale: 1.3 }),
  time.fromTo(".four", { x: 0 }, { duration: 0.4, x: 55, y: 40 }),
  time.fromTo(".five", { scale: 0 }, { duration: 0.4, opacity: 1, scale: 1 }),
  time.fromTo(".five", { x: 0 }, { duration: 0.4, x: -70, y: 40 }),
  time.fromTo(".six", { scale: 0 }, { duration: 0.4, opacity: 1, scale: 2.5 }),
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

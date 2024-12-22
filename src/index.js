// Test import of styles
import "flowbite";

// Test import of tailwind
import "@/styles/index.css";

import { gsap } from "gsap";

const l = console.log.bind(window.console);

l("init", gsap);

gsap.to(".ctn-overlay > div", {
  opacity: 0.1,
  duration: 3,
  stagger: {
    // wrap advanced options in an object
    each: 0.1,
    // from: 'center',
    from: "random",
    grid: "auto",
    ease: "power2.inOut",
    yoyo: true,
    repeat: -1, // Repeats immediately, not waiting for the other staggered animations to finish
  },
});

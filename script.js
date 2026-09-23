(() => {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  const carousel = document.querySelector(".signal-carousel");
  const slides = Array.from(document.querySelectorAll(".signal-slide"));
  const counter = document.querySelector("#current-slide");
  let activeSlide = 0;

  function showSlide(nextIndex) {
    if (!slides.length || nextIndex === activeSlide) return;

    const current = slides[activeSlide];
    const next = slides[nextIndex];
    next.hidden = false;
    next.classList.add("is-active");

    if (window.gsap && !reducedMotion.matches) {
      window.gsap.killTweensOf([current, next]);
      window.gsap.set(next, { opacity: 0, y: 20 });
      window.gsap.to(current, {
        opacity: 0,
        y: -16,
        duration: .28,
        ease: "power2.in",
        onComplete: () => {
          current.hidden = true;
          current.classList.remove("is-active");
          window.gsap.set(current, { clearProps: "all" });
        }
      });
      window.gsap.to(next, {
        opacity: 1,
        y: 0,
        duration: .52,
        delay: .12,
        ease: "power3.out",
        clearProps: "all"
      });
    } else {
      current.hidden = true;
      current.classList.remove("is-active");
    }

    activeSlide = nextIndex;
    if (counter) counter.textContent = String(activeSlide + 1);
  }

  if (carousel) {
    carousel.querySelectorAll("[data-direction]").forEach((button) => {
      button.addEventListener("click", () => {
        const direction = button.dataset.direction === "next" ? 1 : -1;
        const nextIndex = (activeSlide + direction + slides.length) % slides.length;
        showSlide(nextIndex);
      });
    });
  }

  const questionPanels = Array.from(document.querySelectorAll(".question-panel"));

  questionPanels.forEach((panel) => {
    const button = panel.querySelector("button");
    const answer = panel.querySelector(".question-answer");
    if (!button || !answer) return;

    button.addEventListener("click", () => {
      questionPanels.forEach((otherPanel) => {
        const otherButton = otherPanel.querySelector("button");
        const otherAnswer = otherPanel.querySelector(".question-answer");
        const isSelected = otherPanel === panel;

        otherPanel.classList.toggle("is-active", isSelected);
        otherButton?.setAttribute("aria-expanded", String(isSelected));

        if (!otherAnswer) return;
        if (isSelected) {
          otherAnswer.hidden = false;
          if (window.gsap && !reducedMotion.matches) {
            window.gsap.fromTo(
              otherAnswer,
              { opacity: 0, y: 12 },
              { opacity: 1, y: 0, duration: .42, ease: "power3.out", clearProps: "all" }
            );
          }
        } else {
          otherAnswer.hidden = true;
        }
      });
    });
  });

  document.querySelectorAll(".mobile-menu a").forEach((link) => {
    link.addEventListener("click", () => {
      const menu = link.closest("details");
      if (menu) menu.open = false;
    });
  });

  if (!window.gsap || !window.ScrollTrigger || reducedMotion.matches) return;

  const { gsap, ScrollTrigger } = window;
  gsap.registerPlugin(ScrollTrigger);

  const context = gsap.context(() => {
    gsap.from(".hero-copy > *", {
      opacity: 0,
      y: 30,
      duration: 1.05,
      stagger: .09,
      ease: "power4.out",
      clearProps: "all"
    });

    gsap.utils.toArray(".reveal").forEach((element) => {
      gsap.from(element, {
        opacity: 0,
        y: 44,
        duration: .9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 86%",
          once: true
        }
      });
    });

    const words = gsap.utils.toArray(".scrub-word");
    if (words.length) {
      gsap.fromTo(
        words,
        { opacity: .14 },
        {
          opacity: 1,
          stagger: .08,
          ease: "none",
          scrollTrigger: {
            trigger: ".statement",
            start: "top 74%",
            end: "bottom 48%",
            scrub: .7
          }
        }
      );
    }
  }, document.body);

  const media = gsap.matchMedia();
  media.add("(min-width: 901px) and (prefers-reduced-motion: no-preference)", () => {
    const grid = document.querySelector(".process-grid");
    const intro = document.querySelector(".process-intro");
    if (!grid || !intro) return undefined;

    const pin = ScrollTrigger.create({
      trigger: grid,
      start: "top top",
      end: "bottom bottom",
      pin: intro,
      pinSpacing: false,
      anticipatePin: 1
    });

    return () => pin.kill();
  });

  document.fonts.ready.then(() => ScrollTrigger.refresh());

  window.addEventListener("pagehide", () => {
    media.revert();
    context.revert();
  }, { once: true });
})();

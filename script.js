(function () {
  var yearText = String(new Date().getFullYear());
  ["year", "cover-year", "thanks-year"].forEach(function (id) {
    var node = document.getElementById(id);
    if (node) node.textContent = yearText;
  });

  var header = document.querySelector(".site-header");
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  var cover = document.querySelector(".cover");
  var mq = window.matchMedia("(max-width: 1099px)");

  function setInert() {
    if (!nav) return;
    if (mq.matches && header && !header.classList.contains("is-open")) {
      nav.setAttribute("inert", "");
    } else {
      nav.removeAttribute("inert");
    }
  }

  function closeMenu() {
    if (!header || !toggle) return;
    header.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.textContent = "Menu";
    document.body.classList.remove("nav-open");
    setInert();
  }

  function openMenu() {
    header.classList.add("is-open");
    toggle.setAttribute("aria-expanded", "true");
    toggle.textContent = "Close";
    document.body.classList.add("nav-open");
    setInert();
    var first = nav.querySelector("a");
    if (first) first.focus();
  }

  if (header && toggle && nav) {
    toggle.addEventListener("click", function () {
      if (header.classList.contains("is-open")) closeMenu();
      else openMenu();
    });

    nav.addEventListener("click", function (event) {
      if (event.target.closest("a")) closeMenu();
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && header.classList.contains("is-open")) {
        closeMenu();
        toggle.focus();
      }
    });

    if (typeof mq.addEventListener === "function") {
      mq.addEventListener("change", function () {
        if (!mq.matches) closeMenu();
        else setInert();
      });
    }
    setInert();
  }

  function onScroll() {
    if (!header || !cover) return;
    var limit = cover.offsetTop + cover.offsetHeight - header.offsetHeight - 4;
    header.classList.toggle("is-scrolled", window.scrollY > limit);
  }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);

  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var nodes = document.querySelectorAll(".reveal");
  if (reduce || !("IntersectionObserver" in window)) {
    nodes.forEach(function (node) { node.classList.add("is-in"); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14, rootMargin: "0px 0px -6% 0px" });
    nodes.forEach(function (node) { io.observe(node); });
  }
})();

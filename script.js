(function () {
  var year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  var header = document.querySelector(".site-header");
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  if (!header || !toggle || !nav) return;

  var mq = window.matchMedia("(max-width: 1099px)");

  function setInert() {
    if (mq.matches && !header.classList.contains("is-open")) {
      nav.setAttribute("inert", "");
    } else {
      nav.removeAttribute("inert");
    }
  }

  function closeMenu() {
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
})();

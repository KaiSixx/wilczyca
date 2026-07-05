/* Biała Wilczyca — main.js (bez zależności, ~1.5 KB) */
(function () {
  "use strict";

  /* Menu mobilne */
  var toggle = document.querySelector(".nav-toggle");
  var list = document.getElementById("nav-list");
  if (toggle && list) {
    toggle.addEventListener("click", function () {
      var open = list.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.textContent = open ? "Zamknij" : "Menu";
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && list.classList.contains("is-open")) {
        list.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.textContent = "Menu";
        toggle.focus();
      }
    });
  }

  /* Ujawnianie sekcji przy przewijaniu (z poszanowaniem reduced motion) */
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var revealed = document.querySelectorAll(".reveal");
  if (!reduced && "IntersectionObserver" in window && revealed.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.1 });
    revealed.forEach(function (el) { io.observe(el); });
  } else {
    revealed.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* Automatyczne wygaszanie minionych koncertów (data w atrybucie datetime) */
  var today = new Date(); today.setHours(0, 0, 0, 0);
  document.querySelectorAll(".gig time[datetime]").forEach(function (t) {
    var d = new Date(t.getAttribute("datetime"));
    if (!isNaN(d) && d < today) { t.closest(".gig").classList.add("gig--past"); }
  });

  /* Rok w stopce */
  var y = document.getElementById("year");
  if (y) { y.textContent = new Date().getFullYear(); }
})();

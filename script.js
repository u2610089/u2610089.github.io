(function () {
  var root = document.documentElement;
  var button = document.getElementById("theme-toggle");
  var icon = document.getElementById("theme-icon");

  function saved() {
    try { return localStorage.getItem("theme"); } catch (e) { return null; }
  }

  function apply(theme) {
    root.setAttribute("data-theme", theme);
    icon.textContent = theme === "dark" ? "☀" : "☾";
    try { localStorage.setItem("theme", theme); } catch (e) { /* storage unavailable */ }
  }

  var start = saved();
  if (!start) {
    start = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  apply(start);

  button.addEventListener("click", function () {
    apply(root.getAttribute("data-theme") === "dark" ? "light" : "dark");
  });

  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();

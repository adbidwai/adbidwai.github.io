(function () {
  var DARK_KEY = 'dark-mode';

  function applyTheme(dark) {
    document.documentElement.classList.toggle('dark', dark);
    var btn = document.getElementById('dark-mode-btn');
    if (btn) btn.textContent = dark ? '\u2600' : '\u263E'; // ☀ : ☾
  }

  document.addEventListener('DOMContentLoaded', function () {
    var dark = localStorage.getItem(DARK_KEY) === 'true';
    applyTheme(dark);

    var btn = document.getElementById('dark-mode-btn');
    if (btn) {
      btn.addEventListener('click', function () {
        var isDark = document.documentElement.classList.toggle('dark');
        localStorage.setItem(DARK_KEY, isDark);
        btn.textContent = isDark ? '\u2600' : '\u263E';
      });
    }
  });
})();

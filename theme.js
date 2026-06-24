/* 두리종중 — 다크/라이트 모드 토글 */
(function () {
  const KEY = 'duri-theme';

  function apply(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    const btn = document.getElementById('theme-toggle');
    if (!btn) return;
    const icon = btn.querySelector('.ti');
    if (icon) icon.textContent = theme === 'dark' ? '☀' : '☾';
    btn.title = theme === 'dark' ? '라이트 모드' : '다크 모드';
  }

  function toggle() {
    const next = (localStorage.getItem(KEY) || 'light') === 'dark' ? 'light' : 'dark';
    localStorage.setItem(KEY, next);
    apply(next);
  }

  window.__duriThemeToggle = toggle;

  document.addEventListener('DOMContentLoaded', function () {
    apply(localStorage.getItem(KEY) || 'light');
    const btn = document.getElementById('theme-toggle');
    if (btn) btn.addEventListener('click', toggle);
  });
})();

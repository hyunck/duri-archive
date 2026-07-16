/* 두리종중 — 모바일 햄버거 메뉴 (오른쪽 슬라이드 패널) */
(function () {
  document.addEventListener('DOMContentLoaded', function () {
    const openBtn = document.getElementById('mobile-menu-open');
    const closeBtn = document.getElementById('mobile-menu-close');
    const overlay = document.getElementById('mobile-menu-overlay');
    const panel = document.getElementById('mobile-menu-panel');
    if (!openBtn || !panel || !overlay) return;

    function open() {
      panel.classList.add('open');
      overlay.classList.add('open');
      document.body.classList.add('mobile-menu-locked');
    }
    function close() {
      panel.classList.remove('open');
      overlay.classList.remove('open');
      document.body.classList.remove('mobile-menu-locked');
    }

    openBtn.addEventListener('click', open);
    if (closeBtn) closeBtn.addEventListener('click', close);
    overlay.addEventListener('click', close);
    panel.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', close);
    });
  });
})();

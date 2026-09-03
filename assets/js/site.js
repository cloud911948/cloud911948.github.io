// 글 본문 h2/h3 로 목차 생성 + 현재 위치 표시. 의존성 없음.
(function () {
  var content = document.querySelector('.content'); var toc = document.getElementById('toc'); var list = document.getElementById('toc-list');
  if (!content || !toc || !list) return;
  var heads = content.querySelectorAll('h2, h3'); if (heads.length < 2) return;
  heads.forEach(function (h, i) {
    if (!h.id) h.id = 'h-' + i;
    var li = document.createElement('li'); li.className = h.tagName.toLowerCase();
    var a = document.createElement('a'); a.href = '#' + h.id; a.textContent = h.textContent; li.appendChild(a); list.appendChild(li);
  });
  toc.hidden = false;
  var links = list.querySelectorAll('a');
  var obs = new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { links.forEach(function (l) { l.classList.toggle('on', l.hash === '#' + e.target.id); }); } });
  }, { rootMargin: '0px 0px -70% 0px' });
  heads.forEach(function (h) { obs.observe(h); });
})();

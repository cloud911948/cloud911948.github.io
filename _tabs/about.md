---
icon: fas fa-info-circle
order: 4
---

12년차 자바 백엔드 개발자입니다. 결제·포인트·통합 ID 플랫폼을 만들고 운영해 왔고, 요즘은 JVM 런타임 이행과 운영 도구에 관심이 있습니다.

## 만든 것

{% for p in site.data.projects %}
- **[{{ p.name }}]({{ p.url }})** — {{ p.desc }}{% if p.status %} `{{ p.status }}`{% endif %}
{% endfor %}

## 글 시리즈

{% for s in site.data.series %}
{% assign n = site.tags[s.tag] | size %}- **{{ s.name }}** — {{ s.desc }}{% if n > 0 %} ([글 {{ n }}편](/tags/{{ s.tag }}/)){% else %} (준비 중){% endif %}
{% endfor %}

## 연락

- GitHub: [cloud911948](https://github.com/cloud911948)

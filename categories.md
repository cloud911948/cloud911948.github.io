---
layout: page
title: categories/
permalink: /categories/
---

{% if site.categories.size == 0 %}<p class="empty">// 글이 쌓이면 카테고리가 생깁니다</p>{% endif %}
{% assign sorted = site.categories | sort %}
{% for c in sorted %}
<section class="group" id="{{ c[0] | slugify }}">
<h2>{{ c[0] }} <span class="count">{{ c[1].size }}</span></h2>
<ol class="plain">{% for p in c[1] %}<li><time>{{ p.date | date: '%Y-%m-%d' }}</time> <a href="{{ p.url | relative_url }}">{{ p.title }}</a></li>{% endfor %}</ol>
</section>
{% endfor %}

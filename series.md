---
layout: page
title: series/
permalink: /series/
---

{% for s in site.data.series %}{% assign posts = site.posts | where: 'series', s.id | sort: 'date' %}
<section class="group" id="{{ s.id }}">
<h2>{{ s.name }} <span class="count">{{ posts.size }}</span></h2>
<p class="muted">{{ s.desc }}</p>
{% if posts.size == 0 %}<p class="empty">// 준비 중</p>{% else %}<ol class="plain">{% for p in posts %}<li><time>{{ p.date | date: '%Y-%m-%d' }}</time> <a href="{{ p.url | relative_url }}">{{ p.title }}</a></li>{% endfor %}</ol>{% endif %}
</section>
{% endfor %}

---
layout: page
title: tags/
permalink: /tags/
---

{% if site.tags.size == 0 %}<p class="empty">// 아직 태그가 없습니다</p>{% endif %}
{% assign sorted = site.tags | sort %}
<div class="tag-cloud">{% for t in sorted %}<a href="#{{ t[0] | slugify }}">#{{ t[0] }} <span class="count">{{ t[1].size }}</span></a>{% endfor %}</div>
{% for t in sorted %}
<section class="group" id="{{ t[0] | slugify }}">
<h2>#{{ t[0] }}</h2>
<ol class="plain">{% for p in t[1] %}<li><time>{{ p.date | date: '%Y-%m-%d' }}</time> <a href="{{ p.url | relative_url }}">{{ p.title }}</a></li>{% endfor %}</ol>
</section>
{% endfor %}

---
layout: template
title: Marcelo (publications)
---

Below you will find pre-print versions of my publications. If you don't have access to any of my papers, please [write to me](index.html). You can also check the full list of my publications at [Google Scholar][scholar]{:target="_blank"} or [ResearchGate][research-gate]{:target="_blank"}.

Go to: [[theses](#theses)] [[book chapters](#book-chapters)] [[journal papers](#journal-papers)] [[conference papers](#conference-papers)] [[other](#other)] [[talks](#talks)]

***
## Theses

{% assign content = site.data.publications | where:"type","thesis" %}
{% for item in content %}
> <span class="paper-title">{{ item.title }}</span>\\
{{ item.authors }}\\
{{ item.description }}\\
{% if item.pdf != "none" %}<!--
--><a href="/assets/publications/{{ item.pdf }}.pdf" target="_blank"><span class="fa fa-file-pdf-o pub-icon"></span></a><!--
-->{% endif %}<!--
-->{% if item.presentation != "none" %}<!--
--><a href="/assets/publications/{{ item.presentation }}.pdf" target="_blank"><span class="fa fa-slideshare pub-icon"></span></a><!--
-->{% endif %}<!--
-->{% if item.poster != "none" %}<!--
--><a href="/assets/publications/{{ item.poster }}.pdf" target="_blank"><span class="fa fa-area-chart pub-icon"></span></a><!--
-->{% endif %}<!--
-->{% if item.link != "none" %}<!--
--><a href="{{ item.link }}" target="_blank"><span class="fa fa-external-link pub-icon"></span></a><!--
-->{% endif %}

{% endfor %}


***
## Book chapters

{% assign content = site.data.publications | where:"type","chapter" %}
{% for item in content %}
> <span class="paper-title">{{ item.title }}</span>\\
{{ item.authors }}\\
{{ item.description }}\\
{% if item.pdf != "none" %}<!--
--><a href="/assets/publications/{{ item.pdf }}.pdf" target="_blank"><span class="fa fa-file-pdf-o pub-icon"></span></a><!--
-->{% endif %}<!--
-->{% if item.presentation != "none" %}<!--
--><a href="/assets/publications/{{ item.presentation }}.pdf" target="_blank"><span class="fa fa-slideshare pub-icon"></span></a><!--
-->{% endif %}<!--
-->{% if item.poster != "none" %}<!--
--><a href="/assets/publications/{{ item.poster }}.pdf" target="_blank"><span class="fa fa-area-chart pub-icon"></span></a><!--
-->{% endif %}<!--
-->{% if item.link != "none" %}<!--
--><a href="{{ item.link }}" target="_blank"><span class="fa fa-external-link pub-icon"></span></a><!--
-->{% endif %}

{% endfor %}


***
## Journal papers

{% assign content = site.data.publications | where:"type","journal" %}
{% for item in content %}
> <span class="paper-title">{{ item.title }}</span>\\
{{ item.authors }}\\
{{ item.description }}\\
{% if item.pdf != "none" %}<!--
--><a href="/assets/publications/{{ item.pdf }}.pdf" target="_blank"><span class="fa fa-file-pdf-o pub-icon"></span></a><!--
-->{% endif %}<!--
-->{% if item.presentation != "none" %}<!--
--><a href="/assets/publications/{{ item.presentation }}.pdf" target="_blank"><span class="fa fa-slideshare pub-icon"></span></a><!--
-->{% endif %}<!--
-->{% if item.poster != "none" %}<!--
--><a href="/assets/publications/{{ item.poster }}.pdf" target="_blank"><span class="fa fa-area-chart pub-icon"></span></a><!--
-->{% endif %}<!--
-->{% if item.link != "none" %}<!--
--><a href="{{ item.link }}" target="_blank"><span class="fa fa-external-link pub-icon"></span></a><!--
-->{% endif %}

{% endfor %}


***
## Conference papers

{% assign content = site.data.publications | where:"type","conference" %}
{% for item in content %}
> <span class="paper-title">{{ item.title }}</span>\\
{{ item.authors }}\\
{{ item.description }}\\
{% if item.pdf != "none" %}<!--
--><a href="/assets/publications/{{ item.pdf }}.pdf" target="_blank"><span class="fa fa-file-pdf-o pub-icon"></span></a><!--
-->{% endif %}<!--
-->{% if item.presentation != "none" %}<!--
--><a href="/assets/publications/{{ item.presentation }}.pdf" target="_blank"><span class="fa fa-slideshare pub-icon"></span></a><!--
-->{% endif %}<!--
-->{% if item.poster != "none" %}<!--
--><a href="/assets/publications/{{ item.poster }}.pdf" target="_blank"><span class="fa fa-area-chart pub-icon"></span></a><!--
-->{% endif %}<!--
-->{% if item.link != "none" %}<!--
--><a href="{{ item.link }}" target="_blank"><span class="fa fa-external-link pub-icon"></span></a><!--
-->{% endif %}

{% endfor %}

***
## Other

{% assign content = site.data.publications | where:"type","other" %}
{% for item in content %}
> <span class="paper-title">{{ item.title }}</span>\\
{{ item.authors }}\\
{{ item.description }}\\
{% if item.pdf != "none" %}<!--
--><a href="/assets/publications/{{ item.pdf }}.pdf" target="_blank"><span class="fa fa-file-pdf-o pub-icon"></span></a><!--
-->{% endif %}<!--
-->{% if item.presentation != "none" %}<!--
--><a href="/assets/publications/{{ item.presentation }}.pdf" target="_blank"><span class="fa fa-slideshare pub-icon"></span></a><!--
-->{% endif %}<!--
-->{% if item.poster != "none" %}<!--
--><a href="/assets/publications/{{ item.poster }}.pdf" target="_blank"><span class="fa fa-area-chart pub-icon"></span></a><!--
-->{% endif %}<!--
-->{% if item.link != "none" %}<!--
--><a href="{{ item.link }}" target="_blank"><span class="fa fa-external-link pub-icon"></span></a><!--
-->{% endif %}

{% endfor %}

***
## Talks

> (2017) <span class="paper-title">Oficina de Engenharia de Software para o Ensino Médio</span>\\
> Universidade do Estado de Santa Catarina. Ibirama, SC, Brasil 

> (2016) <span class="paper-title">Apresentação do curso de Engenharia de Software da UDESC</span>\\
> Universidade do Estado de Santa Catarina. Ibirama, SC, Brasil

> (2013) <span class="paper-title">Ensino de Algoritmos Apoiado pelo Uso de Jogos Digitais Educativos</span>\\
> XXII Ciclo de Palestras sobre Novas Tecnologias na Educação. Ibirama, SC, Brasil

> (2013) <span class="paper-title">Aprendizado e Desafios de Estudo no Exterior</span>\\
> Universidade do Estado de Santa Catarina. Ibirama, SC, Brasil

[scholar]: https://scholar.google.com.br/citations?user=Mwsvl0MAAAAJ&hl=pt-BR
[research-gate]: https://www.researchgate.net/profile/Marcelo_De_Souza5
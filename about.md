---
layout: page
title: About
---

<div class="about-item">
    <div class="about-personal-info">
      <div class="about-personal-info-section">
        <a href="https://avatars2.githubusercontent.com/u/{{ site.author.gravatar }}?v=4&s=350">
          <img src="https://avatars2.githubusercontent.com/u/{{ site.author.gravatar }}?v=4&s=350" />
        </a>
      </div>
      <div class="about-personal-info-section">
        <p>{{ site.author.description }}</p>
      </div>
      {% if site.author.contact %}
      {% assign len = site.author.contact | size %}
      {% assign current_index = 0 %}
      <div class="about-personal-info-section">
        <p> Follow me: 
        {% for contact in site.author.contact %}
        {% assign iconname = contact[0] %}
        {% if contact[0] == 'email' %}
        {% assign iconname = 'envelope' %}
        {% endif %}
        <a href="{{ contact[1] }}">
          <i class="fa fa-{{ iconname }}" aria-hidden="true"></i>
        </a>
        {% assign current_index = current_index | plus: 1 %}
        {% if current_index != len %}|{% endif %}
        {% endfor %}
        </p>
      </div>
      {% endif %}
    </div>
  </div>
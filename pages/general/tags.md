---
title: Tags
permalink: /tags/
layout: page
mytags:
- title: Linux
  url: /tech/linux/
- title: DevOps
  url: /tech/devops/
- title: Ansible
  url: /tech/ansible/
- title: Airflow
  url: /tech/airflow/
---

{% for item in page.mytags %}
* [{{item.title}}]({{item.url}})
{% endfor %}

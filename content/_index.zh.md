---
title: ''
type: landing
# 与 content/_index.md 结构一一对应；改动时两边同步。
sections:
  - block: hero-scene
    content:
      eyebrow: EIES-Lab · 香港理工大学
      title: '[能源具身智能]<br>实验室'
      text: '**能源塑造智能，智能重塑能源系统。**'
      primary_action:
        text: 了解我们的研究
        url: /zh/research/
      secondary_action:
        text: 团队成员
        url: /zh/team/
      # Live 3D background (scenes/ project). theme: research theme in scenes/src/themes/; place: scenes/src/places/;
      # poster: shown first and on phones / reduced motion. act: pin one act (0–5), omit to loop.
      scene:
        theme: pv
        place: polyu
        dim: 0.15
        poster: media/scenes/pv-polyu.jpg
        video: media/scenes/pv-polyu.mp4   # recorded loop (+ pv-polyu-av1.mp4, pv-polyu.json); remove to embed the live scene

  - block: markdown
    id: mission
    content:
      eyebrow: 我们的使命
      title: 理解能源与具身智能的耦合动态
      subtitle: 底层机制：能量–信息–行动耦合
      text: |-
        > 我们研究能源约束与物理动态如何塑造智能感知、决策与自主适应，以及具身智能如何通过物理行动与反馈，改变能源系统的运行方式。
    design:
      layout: split

  - block: loop-diagram
    id: approach
    content:
      eyebrow: 研究路径
      title: 打通能源感知与物理行动的闭环
      text: |-
        > 我们将能源系统感知、基于物理的世界模型和能源约束下的决策，与物理行动和反馈相结合，使复杂、动态的能源系统能够自主适应。

  - block: focus-areas
    id: thrusts
    content:
      title: '<span class="sec-eyebrow">研究内容</span>研究方向'
      text: '同一闭环中相互衔接的三个环节。<a class="section-link" href="/zh/research/">了解更多研究内容 →</a>'
      items:
        - name: 能源系统感知与可观测性
          image: home/thrust-perception.jpg
          description: '能源智能体能知道什么？它需要哪些信息？'
        - name: 基于物理的能源世界模型
          image: home/thrust-world-model.jpg
          description: '能源系统会如何响应变化与行动？'
        - name: 能源约束下的具身决策与控制
          image: home/thrust-control.jpg
          description: '能源智能体如何在物理世界中安全、自适应地行动？'

  - block: focus-areas
    id: cases
    # The three Active scenarios from /research/ (titles only here; all five with descriptions on the Research page).
    content:
      title: '<span class="sec-eyebrow">旗舰研究场景</span>能源系统中的具身智能'
      text: '从物理能源动态到自主智能行动。<a class="section-link" href="/zh/research/#scenarios-intro">了解更多研究场景 →</a>'
      items:
        - name: 城市自主光伏建筑一体化（BIPV）与光储系统
          image: home/case-solar.jpg
          status: active
        - name: 面向数据中心能源与冷却的具身智能
          image: home/case-buildings.jpg  # TODO: data center photo
          status: active
        - name: 气候韧性城市可再生能源网络
          image: home/area-resilience.jpg
          status: active

  - block: collection
    id: news
    content:
      title: '<span class="sec-eyebrow">最新动态</span>新闻'
      text: '<a class="section-link" href="/zh/news/">全部新闻 →</a>'
      count: 3
      filters: { folders: [news] }
    design: { view: date-title-summary }

  - block: markdown
    id: join
    content:
      eyebrow: 加入我们
      title: 共建未来
      subtitle: '<a class="section-link" href="/zh/team/">认识团队 →</a> &nbsp; <a class="section-link" href="/zh/contact/">联系我们 →</a>'
      text: |-
        欢迎对能源系统科学、地理人工智能（GeoAI）、物理人工智能（Physical AI）、基于物理的建模以及真实场景验证与部署感兴趣的学生、研究人员和合作者加入我们。
    design:
      layout: split
---

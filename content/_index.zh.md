---
title: ''
type: landing
# 与 content/_index.md 结构一一对应；改动时两边同步。
sections:
  - block: hero
    content:
      eyebrow: EIES Lab · Laboratory for Embodied Intelligence in Energy Systems
      title: '[能源具身智能]<br>实验室'
      text: '**能源塑造智能，智能重塑能源系统。** 致力于推进可再生与互联能源系统自主适应的科学研究。'
      primary_action:
        text: 了解我们的研究
        url: /zh/research/
      secondary_action:
        text: 团队成员
        url: /zh/team/
      media:
        src: /media/emblem.png
        alt: EIES Lab 标志
    design:
      layout: split-left
      size: compact

  - block: markdown
    id: mission
    content:
      eyebrow: 我们的使命
      title: 理解能源与智能之间的双向关系
      subtitle: 科学聚焦：能源约束下的具身智能与自主适应
      text: |-
        > 我们研究能源动态与物理约束如何塑造具身智能，以及闭环物理交互如何使能源系统实现自主适应。

        能源系统是动态的、相互关联的，且只能被部分观测。其不断演化的物理状态和运行约束，决定了智能体能够观测什么、预测什么以及能安全地做什么。反过来，智能体的行动又会改变能量流动、设备运行和系统性能。我们的研究致力于理解并实现这种双向交互，以提升真实能源系统的效率、可靠性与韧性。
    design:
      layout: split

  - block: markdown
    id: approach
    content:
      eyebrow: 研究路径
      title: 从感知到能源系统中的物理行动
      subtitle: 核心机制：能量–信息–行动耦合
      text: |-
        我们研究的核心，是**物理能源系统**与**具身智能体**之间的闭环交互。物理系统在环境扰动和能源约束下不断演化；智能体利用不完整的观测估计系统状态，建立基于物理的模型来预测系统对可能行动的响应，并选择可通过物理设备执行的行动。实测结果再反馈到后续的感知、建模与决策中。
    design:
      layout: split
  - block: markdown
    id: approach-figure
    content:
      text: |-
        <figure class="eia-figure"><img src="/media/eia-loop.svg" alt="能量–信息–行动耦合闭环：物理能源环境与具身智能体通过传感器和执行器相连，并形成闭环反馈。" loading="lazy"><figcaption>能量–信息–行动闭环示意图（图中标注为英文）。</figcaption></figure>

  - block: focus-areas
    id: thrusts
    content:
      title: 研究方向
      text: '同一闭环中相互衔接的三个环节。<a class="section-link" href="/zh/research/">了解更多研究内容 →</a>'
      items:
        - name: 能源系统感知与可观测性
          icon: hero/eye
          description: 能源智能体能知道什么？它需要哪些信息？
        - name: 基于物理的能源世界模型
          icon: hero/cube-transparent
          description: 能源系统会如何响应变化与行动？
        - name: 能源约束下的具身决策与控制
          icon: hero/arrow-path
          description: 能源智能体如何在物理世界中安全、自适应地行动？

  # 只放真实案例。每张卡片把 TODO 换成核实过的项目（图片 + 一句话结果 + 链接）。
  - block: focus-areas
    id: cases
    content:
      title: 能源系统与物理验证
      text: 我们所研究能源系统中的精选案例。Active = 已有基础；Emerging = 开发中。
      items:
        - name: 可再生能源与城市环境
          icon: hero/sun
          status: active
          description: TODO：一个核实过的案例，例如太阳能资源或三维城市能源评估项目，附结果与链接。
        - name: 建筑、储能与能源网络
          icon: hero/building-office-2
          status: active
          description: TODO：一个关于需求–发电–储能耦合建模的核实案例，附结果与链接。
        - name: 电动交通与充电
          icon: hero/bolt
          status: emerging
          description: TODO：说明该应用目前所处阶段，避免暗示已有投入运行的试验平台。

  - block: collection
    id: papers
    content:
      title: 精选论文
      text: '<a class="section-link" href="/zh/publications/">全部论文 →</a>'
      count: 3
      filters: { folders: [publications], featured_only: true }
    design: { view: citation }

  - block: cta-card
    id: join
    content:
      title: 共建能源系统具身智能的未来
      text: 欢迎对能源系统科学、人工智能、物理建模、智能控制与真实场景验证感兴趣的学生、研究人员和合作者加入我们。[加入我们](/zh/contact/)
      button:
        text: 认识团队
        url: /zh/team/
---

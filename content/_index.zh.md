---
title: ''
type: landing
# 与 content/_index.md 结构一一对应；改动时两边同步。
sections:
  # 01 Hero
  - block: hero
    content:
      eyebrow: EIES Lab · Laboratory for Embodied Intelligence in Energy Systems
      title: '[能源具身智能]实验室'
      text: '**能源塑造智能，智能重塑能源系统。** 致力于推进可再生与互联能源系统自主适应的科学研究。'
      primary_action:
        text: 了解我们的研究
        url: '#thrusts'
      secondary_action:
        text: 团队成员
        url: /zh/team/
    design:
      alignment: center
      size: compact

  # 02 使命
  - block: markdown
    id: mission
    content:
      title: 理解能源与智能之间的双向关系
      subtitle: 科学聚焦：能源约束下的具身智能与自主适应
      text: |-
        > 我们研究能源动态与物理约束如何塑造具身智能，以及闭环物理交互如何使能源系统实现自主适应。

        能源系统是动态的、相互关联的，且只能被部分观测。其不断演化的物理状态和运行约束，决定了智能体能够观测什么、预测什么以及能安全地做什么。反过来，智能体的行动又会改变能量流动、设备运行和系统性能。我们的研究致力于理解并实现这种双向交互，以提升真实能源系统的效率、可靠性与韧性。
    design:
      columns: '1'

  # 03 研究路径：能量–信息–行动耦合
  - block: markdown
    id: approach
    content:
      title: 从感知到能源系统中的物理行动
      subtitle: 核心机制：能量–信息–行动耦合
      text: |-
        我们研究的核心，是**物理能源系统**与**具身智能体**之间的闭环交互。物理系统在环境扰动和能源约束下不断演化；智能体利用不完整的观测估计系统状态，建立基于物理的模型来预测系统对可能行动的响应，并选择可通过物理设备执行的行动。实测结果再反馈到后续的感知、建模与决策中。

        <figure class="eia-figure"><img src="/media/eia-loop.svg" alt="能量–信息–行动耦合闭环：物理能源环境与具身智能体通过传感器和执行器相连，并形成闭环反馈。" loading="lazy"><figcaption>能量–信息–行动闭环示意图（图中标注为英文）。</figcaption></figure>
    design:
      columns: '1'

  # 04 三个相互关联的研究方向
  - block: focus-areas
    id: thrusts
    content:
      title: 三个相互关联的研究方向
      text: 感知、世界模型与具身决策构成一个相互衔接的闭环。
      items:
        - name: 01 · 能源系统感知与可观测性
          icon: hero/eye
          description: "**能源智能体能知道什么？它需要哪些信息？** 我们研究如何从不完整、不确定且异构的观测中推断与能源相关的状态和环境条件，将地理空间人工智能、遥感、三维城市表征和观测质量分析，与面向任务的感知和状态估计结合起来，识别对可靠能源决策真正重要的信息。"
        - name: 02 · 基于物理的能源世界模型
          icon: hero/cube-transparent
          description: "**能源系统会如何响应变化与行动？** 我们构建基于物理的能源系统动态表征，涵盖太阳能资源、能量转换、储能、建筑负荷与网络交互；并研究以行动为条件的预测，即在物理定律、不确定性和运行限制下，不同干预会如何影响未来的能量流动与系统性能。"
        - name: 03 · 能源约束下的具身决策与控制
          icon: hero/arrow-path
          description: "**能源智能体如何在物理世界中安全、自适应地行动？** 我们研究在信息不完整、能源资源变化和物理安全约束下的自主决策与控制，将感知与世界模型转化为可执行的行动，评估其真实物理后果，并通过闭环反馈持续改进决策。"

  # 05 能源系统与物理验证
  - block: focus-areas
    id: energy-systems
    content:
      title: 立足能源，以物理交互验证
      text: 我们的科学问题根植于能源系统，而非通用机器人。我们研究智能的物理交互如何提升可再生能源利用率、能源效率、运行可靠性与韧性。
      items:
        - name: 可再生能源与城市环境
          icon: hero/sun
          status: active
          description: 太阳能资源感知、三维城市能源评估，以及可再生资源的物理变异性。
        - name: 建筑、储能与能源网络
          icon: hero/building-office-2
          status: active
          description: 能源系统建模、需求–发电–储能耦合动态，以及物理约束下的运行。
        - name: 电动交通与充电
          icon: hero/bolt
          status: emerging
          description: 能源感知的充电，以及交通出行、电池与能源网络之间的相互作用。
        - name: 低空 / eVTOL 能源与智慧能源农业
          icon: hero/sparkles
          status: planning
          description: 远期研究兴趣，并非现有试验平台。未来可能作为检验同一科学机制的应用场景。

  - block: markdown
    id: validation
    content:
      title: 物理具身与验证路径
      text: |-
        我们研究的物理具身，体现在连接智能决策与真实能源系统的**感知与执行接口**上，例如能源传感器、可控负荷、电池与逆变器接口、充电控制，以及在合适场景下的移动感知或巡检设备。

        我们设想一条循序渐进的验证路径。这是一条研究与基础设施建设路径，规划中的设施目前尚未投入运行。
    design:
      columns: '1'
  - block: steps
    content:
      steps:
        - { title: 数据与物理仿真, icon: hero/circle-stack }
        - { title: 闭环数字实验, icon: hero/arrow-path }
        - { title: 硬件在环 / 器件级测试, icon: hero/cpu-chip }
        - { title: 真实物理反馈与实地验证, icon: hero/globe-asia-australia }
    design:
      layout: horizontal

  # 06 研究成果
  - block: collection
    id: papers
    content:
      title: 从科学问题到研究证据
      text: 精选太阳能评估、地理空间感知与能源仿真方面的论文、数据集、软件与演示，展示现有工作如何支撑实验室的长期使命。
      filters: { folders: [publications], featured_only: true }
    design: { view: article-grid, columns: 2 }

  # 07 加入我们
  - block: cta-card
    id: join
    content:
      title: 共建能源系统具身智能的未来
      text: 欢迎对能源系统科学、人工智能、物理建模、智能控制与真实场景验证感兴趣的学生、研究人员和合作者加入我们。[加入我们](/zh/contact/) · [联系我们](/zh/contact/)
      button:
        text: 认识团队
        url: /zh/team/
    design:
      card:
        text_color: light
      background:
        gradient: { start: primary-900, end: primary-600, direction: 135 }
---

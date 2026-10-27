---
title: 研究方向
type: landing
# 与 _index.md 结构一一对应。
sections:
  - block: markdown
    id: overview
    content:
      eyebrow: 研究方向
      title: 三个相互关联的研究方向
      subtitle: 感知、世界模型与具身决策构成一个相互衔接的闭环，而不是三个互不相关的项目类别。
      text: |-
        每个方向回答能量–信息–行动闭环中的一个问题：能源智能体能知道什么，系统会如何响应它的行动，以及它如何在物理世界中安全地行动。
    design:
      layout: split

  - block: focus-areas
    id: thrusts
    content:
      items:
        - name: 01 · 能源系统感知与可观测性
          icon: hero/eye
          description: "**能源智能体能知道什么？它需要哪些信息？** 我们研究如何从不完整、不确定且异构的观测中推断与能源相关的状态和环境条件，将地理空间人工智能、遥感、三维城市表征和观测质量分析，与面向任务的感知和状态估计结合起来，识别对可靠能源决策真正重要的信息。"
        - name: 02 · 基于物理的能源世界模型
          icon: hero/cube-transparent
          description: "**能源系统会如何响应变化与行动？** 我们构建基于物理的能源系统动态表征，涵盖太阳能资源、能量转换、储能、建筑负荷与网络交互。除预测系统状态外，我们还研究以行动为条件的预测：在物理定律、不确定性和运行限制下，不同干预会如何影响未来的能量流动与系统性能。"
        - name: 03 · 能源约束下的具身决策与控制
          icon: hero/arrow-path
          description: "**能源智能体如何在物理世界中安全、自适应地行动？** 我们研究在信息不完整、能源资源变化和物理安全约束下的自主决策与控制，重点是将感知与世界模型转化为可执行的行动，评估其真实物理后果，并通过闭环反馈持续改进决策。"

  - block: focus-areas
    id: energy-systems
    content:
      title: 立足能源
      text: 我们的科学问题根植于能源系统，而非通用机器人。标签表示成熟度：Active = 已有基础，Emerging = 开发中，Planning = 远期兴趣。
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
          description: 研究兴趣，并非现有试验平台。未来可能作为检验同一科学机制的应用场景。

  - block: markdown
    id: validation
    content:
      eyebrow: 验证
      title: 物理具身与验证路径
      text: |-
        我们研究的物理具身，体现在连接智能决策与真实能源系统的**感知与执行接口**上，例如能源传感器、可控负荷、电池与逆变器接口、充电控制，以及在合适场景下的移动感知或巡检设备。

        我们设想一条循序渐进的验证路径：**数据与物理仿真 → 闭环数字实验 → 硬件在环 / 器件级测试 → 真实物理反馈与实地验证。** 这是一条研究与基础设施建设路径，规划中的设施目前尚未投入运行。
    design:
      layout: split
---

---
title: 研究方向
type: landing
# 与 _index.md 结构一一对应。
sections:
  - block: markdown
    id: overview
    content:
      eyebrow: 研究
      title: 研究方向
      subtitle: 同一闭环中相互衔接的三个环节。
      text: |-
        能源系统是动态的、相互关联的，且只能被部分观测。其不断演化的物理状态和运行约束，决定了智能体能够观测什么、预测什么以及能安全地做什么；反过来，智能体的行动又会改变能量流动、设备运行和系统性能。
    design:
      layout: split

  - block: focus-areas
    id: thrusts
    content:
      items:
        - name: 能源系统感知与可观测性
          image: home/thrust-perception.jpg
          description: "**能源智能体能知道什么？它需要哪些信息？** 我们研究如何从不完整、不确定且异构的观测中推断与能源相关的状态和环境条件，将地理空间人工智能、遥感、三维城市表征和观测质量分析，与面向任务的感知和状态估计结合起来，识别对可靠能源决策真正重要的信息。"
        - name: 基于物理的能源世界模型
          image: home/thrust-world-model.jpg
          description: "**能源系统会如何响应变化与行动？** 我们构建基于物理的能源系统动态表征，涵盖太阳能资源、能量转换、储能、建筑负荷与网络交互。除预测系统状态外，我们还研究以行动为条件的预测：在物理定律、不确定性和运行限制下，不同干预会如何影响未来的能量流动与系统性能。"
        - name: 能源约束下的具身决策与控制
          image: home/thrust-control.jpg
          description: "**能源智能体如何在物理世界中安全、自适应地行动？** 我们研究在信息不完整、能源资源变化和物理安全约束下的自主决策与控制，重点是将感知与世界模型转化为可执行的行动，评估其真实物理后果，并通过闭环反馈持续改进决策。"

  - block: markdown
    id: scenarios-intro
    content:
      eyebrow: 旗舰研究场景
      title: 能源系统中的具身智能
      subtitle: 一个贯通多样能源系统、物理约束与反馈动态的统一具身智能框架。
      text: |-
        我们研究智能体如何感知、建模并作用于物理能源系统。在多个相互补充的研究场景中，我们探索能源约束、不完整观测与物理反馈如何塑造自主适应与协同行动。
    design:
      layout: split

  - block: focus-areas
    id: energy-systems
    content:
      items:
        - name: 城市自主光伏建筑一体化（BIPV）与光储系统
          status: active
          image: home/case-solar-twin.jpg
          description: 整合城市主动感知、基于物理的太阳能评估、光伏建筑一体化与自适应能源管理。我们研究智能感知、物理世界模型与自主控制如何在复杂城市环境中，实现更可靠的可再生能源评估、部署与运行。
        - name: 面向数据中心能源与冷却的具身智能
          status: active
          image: home/case-datacenter.jpg
          description: 整合室内空间感知、基于 BIM 的能量–热世界模型、自主巡检与自适应冷却控制。我们研究智能体如何与数据中心的物理环境交互，以提升能源效率、热管理水平与运行可靠性。
        - name: 气候韧性城市可再生能源网络
          status: active
          image: home/case-resilience.jpg
          description: 研究极端气候下分布式可再生能源发电、建筑、储能、电动汽车与城市能源网络之间的自主协同。我们探讨多智能体智能、物理能量交互与自适应控制如何增强能源韧性、保障服务连续性并加快系统恢复。
        - name: 低空能源与交通系统
          status: emerging
          image: home/case-low-altitude.jpg
          description: 探索低空交通、机载能源约束与地面能源基础设施之间的耦合。我们研究面向无人机、未来 eVTOL 系统与低空交通网络的能源感知自主任务、智能充电与储能协同，以及自适应能源管理。
        - name: 能源融合的智慧农业
          status: emerging
          image: home/case-greenhouse.jpg
          description: 探索农业能源、环境与生物耦合系统中的具身智能。我们研究智能感知、基于物理的世界模型与自主物理控制如何协调能源供给、环境调控、用水与作物生长，实现高效、自适应的农业运行。

---

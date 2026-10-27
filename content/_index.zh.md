---
title: ''
type: landing
sections:
  - block: hero
    content:
      eyebrow: DigiEnergy Lab · 香港理工大学
      title: 以数字智能驱动<br>[城市感知与能源系统]
      text: 我们研究清洁能源资源的制图、评估、模拟与可视化，并推动其融入可持续、有韧性的城市能源系统。
      primary_action:
        text: 研究方向
        url: /zh/research/
      secondary_action:
        text: 加入我们
        url: /zh/contact/
    design:
      alignment: center
      size: compact
  - block: markdown
    content:
      title: 欢迎来到 DigiEnergy Lab
      text: |-
        实验室由 [Zhiling Guo 博士](/zh/team/zhiling-guo/) 领导，致力于发展数字化、智能化、高效的城市能源系统，
        支撑可持续、有韧性的城市。我们与城市能源纽带国际中心（UEX）合作，研发清洁能源资源的制图、评估、
        模拟与可视化方法和工具，推动其融入城市能源系统。

        欢迎合作研究、访问学者、研究助理、博士后及博士申请者联系我们。
    design:
      columns: '1'
  - block: focus-areas
    id: research
    content:
      title: 研究方向
      items:
        - { name: 时空数据智能, icon: hero/globe-asia-australia, description: "多源时空数据的智能处理。" }
        - { name: 可再生能源资源制图, icon: hero/sun, description: "太阳能、风能等可再生能源的大尺度制图。" }
        - { name: 能源潜力评估, icon: hero/chart-bar, description: "能源潜力与性能的时空评估。" }
        - { name: 跨部门耦合, icon: hero/link, description: "建筑、交通与能源部门的耦合机制。" }
        - { name: 模拟与可视化, icon: hero/computer-desktop, description: "交互式模拟与可视化平台。" }
        - { name: 气候韧性, icon: hero/shield-check, description: "沿海城市气候韧性基础设施。" }
  - block: collection
    id: papers
    content:
      title: 代表论文
      filters: { folders: [publications], featured_only: true }
    design: { view: article-grid, columns: 2 }
  - block: collection
    id: news
    content:
      title: 最新动态
      count: 6
      filters: { folders: [news] }
    design: { view: card }
---

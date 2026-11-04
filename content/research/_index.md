---
title: Research
type: landing
# Detailed research page; the homepage only previews these. Keep in sync with _index.zh.md.
sections:
  - block: markdown
    id: overview
    content:
      eyebrow: Research
      title: Research Thrusts
      subtitle: Three connected steps of one loop.
      text: |-
        Energy systems are dynamic, interconnected and only partially observable. Their evolving physical states and operational constraints shape what an intelligent agent can observe, predict and safely do. In turn, the agent's actions can change energy flows, equipment operation and system performance.
    design:
      layout: split

  - block: focus-areas
    id: thrusts
    content:
      items:
        - name: Energy-System Perception & Observability
          image: home/thrust-perception.jpg
          description: "**What can an energy agent know, and what information does it need?** We study how energy-relevant states and environmental conditions can be inferred from incomplete, uncertain and heterogeneous observations. Our work connects geospatial AI, remote sensing, 3D urban representations and observation-quality analysis with task-aware sensing and state estimation, aiming to identify the information that matters for reliable energy decisions."
        - name: Physics-Grounded Energy World Models
          image: home/thrust-world-model.jpg
          description: "**How will an energy system respond to changes and actions?** We develop physically grounded representations of energy-system dynamics, spanning solar resources, energy conversion, storage, building demand and network interactions. Beyond forecasting system states, we investigate action-conditioned prediction: how possible interventions affect future energy flows and performance, subject to physical laws, uncertainty and operating limits."
        - name: Energy-Constrained Embodied Decision & Control
          image: home/thrust-control.jpg
          description: "**How can an energy agent act safely and adaptively in the physical world?** We investigate autonomous decision-making and control under incomplete information, changing energy resources and physical safety constraints. The focus is on translating perception and world models into executable actions, evaluating their real physical consequences and improving decisions through closed-loop feedback."

  - block: markdown
    id: scenarios-intro
    content:
      eyebrow: Flagship Research Scenarios
      title: Embodied Intelligence in Energy Systems
      subtitle: A unified embodied intelligence framework across diverse energy systems, physical constraints, and feedback dynamics.
      text: |-
        We investigate how intelligent agents perceive, model, and interact with physical energy systems. Across complementary research scenarios, we explore how energy constraints, incomplete observations, and physical feedback shape autonomous adaptation and coordinated action.
    design:
      layout: split

  - block: focus-areas
    id: energy-systems
    content:
      items:
        - name: Autonomous Urban BIPV & Solar–Storage Systems
          status: active
          image: home/case-solar-twin.jpg
          description: Integrating active urban sensing, physics-grounded solar assessment, building-integrated photovoltaics, and adaptive energy management. We investigate how intelligent sensing, physical world models, and autonomous control enable more reliable renewable energy assessment, deployment, and operation in complex urban environments.
        - name: Embodied Intelligence for Data Center Energy & Cooling
          status: active
          image: home/case-datacenter.jpg
          description: Integrating indoor spatial perception, BIM-informed energy–thermal world models, autonomous inspection, and adaptive cooling control. We investigate how intelligent agents interact with physical data center environments to improve energy efficiency, thermal management, and operational reliability.
        - name: Climate-Resilient Urban Renewable Energy Networks
          status: active
          image: home/case-resilience.jpg
          description: Investigating autonomous coordination among distributed renewable generation, buildings, energy storage, electric vehicles, and urban energy networks under climate extremes. We study how multi-agent intelligence, physical energy interactions, and adaptive control enhance energy resilience, service continuity, and system recovery.
        - name: Low-Altitude Energy & Mobility Systems
          status: emerging
          image: home/case-low-altitude.jpg
          description: Exploring the coupling among low-altitude mobility, onboard energy constraints, and ground-based energy infrastructure. We investigate energy-aware autonomous missions, intelligent charging and storage coordination, and adaptive energy management for UAVs, future eVTOL systems, and low-altitude mobility networks.
        - name: Energy-Integrated Smart Agriculture
          status: emerging
          image: home/case-greenhouse.jpg
          description: Exploring embodied intelligence in coupled agricultural energy, environmental, and biological systems. We investigate how intelligent perception, physics-grounded world models, and autonomous physical control can coordinate energy supply, environmental regulation, water use, and crop growth for efficient and adaptive agricultural operations.

---

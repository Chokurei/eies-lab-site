---
title: ''
type: landing
# Homepage copy source: EIES_Lab_Homepage_Revised.md (Oct 2026). Order: Hero → Mission → Approach → Thrusts → Validation → Evidence → Join.
sections:
  # 01 Hero: vision appears prominently only here
  - block: hero
    content:
      eyebrow: EIES Lab · 能源具身智能实验室
      title: Energy Shapes Intelligence.<br>[Intelligence Reshapes Energy Systems.]
      text: Laboratory for Embodied Intelligence in Energy Systems. Advancing the science of autonomous adaptation in renewable and interconnected energy systems.
      primary_action:
        text: Explore Our Research
        url: '#thrusts'
      secondary_action:
        text: Our Team
        url: /team/
    design:
      alignment: center
      size: compact

  # 02 Mission
  - block: markdown
    id: mission
    content:
      title: Understanding the Two-Way Relationship Between Energy and Intelligence
      subtitle: 'Scientific focus: Energy-Constrained Embodied Intelligence & Autonomous Adaptation'
      text: |-
        > We investigate how energy dynamics and physical constraints shape embodied intelligence, and how closed-loop physical interaction enables energy systems to adapt autonomously.

        Energy systems are dynamic, interconnected and only partially observable. Their evolving physical states and operational constraints shape what an intelligent agent can observe, predict and safely do. In turn, the agent's actions can change energy flows, equipment operation and system performance. Our research seeks to understand and enable this two-way interaction, with the goal of improving the efficiency, reliability and resilience of real-world energy systems.
    design:
      columns: '1'

  # 03 Approach: Energy–Information–Action coupling
  - block: markdown
    id: approach
    content:
      title: From Perception to Physical Action in Energy Systems
      subtitle: 'Core mechanism: Energy–Information–Action Coupling'
      text: |-
        At the heart of our research is a closed-loop interaction between **physical energy systems** and **embodied intelligent agents**. The physical system evolves under environmental disturbances and energy constraints. An agent uses imperfect observations to estimate its state, forms physics-grounded models of how the system responds to possible actions, and selects actions that can be implemented through physical devices. The measured consequences feed back into subsequent perception, modeling and decisions.

        <figure class="eia-figure"><img src="/media/eia-loop.svg" alt="Energy–Information–Action coupling loop between a physical energy environment and an embodied agent, connected by sensors and actuators, with closed-loop feedback." loading="lazy"><figcaption>Schematic of the Energy–Information–Action loop.</figcaption></figure>
    design:
      columns: '1'

  # 04 Three interconnected thrusts (one connected process)
  - block: focus-areas
    id: thrusts
    content:
      title: Three Interconnected Research Thrusts
      text: Perception, world models and embodied decision-making form one connected loop.
      items:
        - name: 01 · Energy-System Perception & Observability
          icon: hero/eye
          description: "**What can an energy agent know, and what information does it need?** We study how energy-relevant states and environmental conditions can be inferred from incomplete, uncertain and heterogeneous observations, connecting geospatial AI, remote sensing, 3D urban representations and observation-quality analysis with task-aware sensing and state estimation."
        - name: 02 · Physics-Grounded Energy World Models
          icon: hero/cube-transparent
          description: "**How will an energy system respond to changes and actions?** We develop physically grounded representations of energy-system dynamics, spanning solar resources, energy conversion, storage, building demand and network interactions, and investigate action-conditioned prediction subject to physical laws, uncertainty and operating limits."
        - name: 03 · Energy-Constrained Embodied Decision & Control
          icon: hero/arrow-path
          description: "**How can an energy agent act safely and adaptively in the physical world?** We investigate autonomous decision-making and control under incomplete information, changing energy resources and physical safety constraints, translating perception and world models into executable actions and improving them through closed-loop feedback."

  # 05 Energy systems & physical validation, with truthful maturity labels
  - block: focus-areas
    id: energy-systems
    content:
      title: Grounded in Energy. Validated Through Physical Interaction.
      text: Our scientific questions are rooted in energy systems, not in general-purpose robotics. We study how intelligent physical interaction can improve renewable-energy utilization, energy efficiency, operational reliability and resilience.
      items:
        - name: Renewable Energy & Urban Environments
          icon: hero/sun
          status: active
          description: Solar-resource sensing, 3D urban energy assessment and the physical variability of renewable resources.
        - name: Buildings, Storage & Energy Networks
          icon: hero/building-office-2
          status: active
          description: Energy-system modeling, coupled demand–generation–storage dynamics and physically constrained operation.
        - name: Electric Mobility & Charging
          icon: hero/bolt
          status: emerging
          description: Energy-aware charging and the interaction among mobility, batteries and energy networks.
        - name: Low-Altitude / eVTOL & Smart Energy Agriculture
          icon: hero/sparkles
          status: planning
          description: Longer-term research interests, not existing testbeds. Possible future contexts for testing the same scientific mechanisms.

  - block: markdown
    id: validation
    content:
      title: Physical Embodiment & Validation Pathway
      text: |-
        The physical embodiment of our research lies in the **sensing and actuation interfaces** that connect intelligent decisions with real energy systems: energy sensors, controllable loads, battery and inverter interfaces, charging controls and, where appropriate, mobile sensing or inspection devices.

        We envision a progressive validation pathway. This is a research and infrastructure development pathway; planned facilities are not yet operational.
    design:
      columns: '1'
  - block: steps
    content:
      steps:
        - { title: Data & physics-based simulation, icon: hero/circle-stack }
        - { title: Closed-loop digital experiments, icon: hero/arrow-path }
        - { title: Hardware-in-the-loop / device-level tests, icon: hero/cpu-chip }
        - { title: Real-world physical feedback & field validation, icon: hero/globe-asia-australia }
    design:
      layout: horizontal

  # 06 Evidence: populate only from verified lab records
  - block: collection
    id: papers
    content:
      title: From Scientific Questions to Research Evidence
      text: Selected publications, datasets, software and demonstrations in solar assessment, geospatial sensing and energy simulation that support the lab's longer-term mission.
      filters: { folders: [publications], featured_only: true }
    design: { view: article-grid, columns: 2 }

  # 07 People & opportunities
  - block: cta-card
    id: join
    content:
      title: Build the Future of Embodied Intelligence in Energy Systems
      text: We welcome students, researchers and collaborators interested in energy-system science, AI, physical modeling, intelligent control and real-world validation. [Join us](/contact/) · [Contact](/contact/)
      button:
        text: Meet the Team
        url: /team/
    design:
      card:
        text_color: light
      background:
        gradient: { start: primary-900, end: primary-600, direction: 135 }
---

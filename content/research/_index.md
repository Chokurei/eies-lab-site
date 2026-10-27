---
title: Research
type: landing
# Detailed research page; the homepage only previews these. Keep in sync with _index.zh.md.
sections:
  - block: markdown
    id: overview
    content:
      eyebrow: Research
      title: Three Interconnected Research Thrusts
      subtitle: Perception, world models and embodied decision-making form one connected loop, not three separate project categories.
      text: |-
        Each thrust answers one question in the Energy–Information–Action loop: what an energy agent can know, how the system will respond to its actions, and how it can act safely in the physical world.
    design:
      layout: split

  - block: focus-areas
    id: thrusts
    content:
      items:
        - name: 01 · Energy-System Perception & Observability
          icon: hero/eye
          description: "**What can an energy agent know, and what information does it need?** We study how energy-relevant states and environmental conditions can be inferred from incomplete, uncertain and heterogeneous observations. Our work connects geospatial AI, remote sensing, 3D urban representations and observation-quality analysis with task-aware sensing and state estimation, aiming to identify the information that matters for reliable energy decisions."
        - name: 02 · Physics-Grounded Energy World Models
          icon: hero/cube-transparent
          description: "**How will an energy system respond to changes and actions?** We develop physically grounded representations of energy-system dynamics, spanning solar resources, energy conversion, storage, building demand and network interactions. Beyond forecasting system states, we investigate action-conditioned prediction: how possible interventions affect future energy flows and performance, subject to physical laws, uncertainty and operating limits."
        - name: 03 · Energy-Constrained Embodied Decision & Control
          icon: hero/arrow-path
          description: "**How can an energy agent act safely and adaptively in the physical world?** We investigate autonomous decision-making and control under incomplete information, changing energy resources and physical safety constraints. The focus is on translating perception and world models into executable actions, evaluating their real physical consequences and improving decisions through closed-loop feedback."

  - block: focus-areas
    id: energy-systems
    content:
      title: Grounded in Energy
      text: Our scientific questions are rooted in energy systems, not in general-purpose robotics. Labels mark maturity — Active = existing foundation, Emerging = in development, Planning = longer-term interest.
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
          description: Research interests, not existing testbeds. Possible future contexts for testing the same scientific mechanisms.

  - block: markdown
    id: validation
    content:
      eyebrow: Validation
      title: Physical Embodiment & Validation Pathway
      text: |-
        The physical embodiment of our research lies in the **sensing and actuation interfaces** that connect intelligent decisions with real energy systems: energy sensors, controllable loads, battery and inverter interfaces, charging controls and, where appropriate, mobile sensing or inspection devices.

        We envision a progressive validation pathway: **data and physics-based simulation → closed-loop digital experiments → hardware-in-the-loop / device-level tests → real-world physical feedback and field validation.** This is a research and infrastructure development pathway; planned facilities are not yet operational.
    design:
      layout: split
---

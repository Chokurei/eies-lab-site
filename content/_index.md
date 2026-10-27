---
title: ''
type: landing
# Restrained homepage: Hero + Mission + Approach carry the narrative; thrusts as short cards;
# validation as real cases; publications/team as selected previews. Details live on /research/, /publications/, /team/.
# Keep in sync with content/_index.zh.md.
sections:
  - block: hero
    content:
      eyebrow: EIES Lab · 能源具身智能实验室
      title: Laboratory for<br>[Embodied Intelligence<br>in Energy Systems]
      text: '**Energy Shapes Intelligence. Intelligence Reshapes Energy Systems.** Advancing the science of autonomous adaptation in renewable and interconnected energy systems.'
      primary_action:
        text: Explore Our Research
        url: /research/
      secondary_action:
        text: Our Team
        url: /team/
      media:
        src: logo.png
        alt: EIES Lab emblem
    design:
      layout: split-left
      size: compact

  - block: markdown
    id: mission
    content:
      eyebrow: Our Mission
      title: Understanding the Two-Way Relationship Between Energy and Intelligence
      subtitle: 'Scientific focus: Energy-Constrained Embodied Intelligence & Autonomous Adaptation'
      text: |-
        > We investigate how energy dynamics and physical constraints shape embodied intelligence, and how closed-loop physical interaction enables energy systems to adapt autonomously.

        Energy systems are dynamic, interconnected and only partially observable. Their evolving physical states and operational constraints shape what an intelligent agent can observe, predict and safely do. In turn, the agent's actions can change energy flows, equipment operation and system performance. Our research seeks to understand and enable this two-way interaction, with the goal of improving the efficiency, reliability and resilience of real-world energy systems.
    design:
      layout: split

  - block: markdown
    id: approach
    content:
      eyebrow: Our Approach
      title: From Perception to Physical Action in Energy Systems
      subtitle: 'Core mechanism: Energy–Information–Action Coupling'
      text: |-
        At the heart of our research is a closed-loop interaction between **physical energy systems** and **embodied intelligent agents**. The physical system evolves under environmental disturbances and energy constraints. An agent uses imperfect observations to estimate its state, forms physics-grounded models of how the system responds to possible actions, and selects actions that can be implemented through physical devices. The measured consequences feed back into subsequent perception, modeling and decisions.
    design:
      layout: split
  - block: markdown
    id: approach-figure
    content:
      text: |-
        <figure class="eia-figure"><img src="/media/eia-loop.svg" alt="Energy–Information–Action coupling loop between a physical energy environment and an embodied agent, connected by sensors and actuators, with closed-loop feedback." loading="lazy"><figcaption>Energy–Information–Action loop (schematic).</figcaption></figure>

  - block: focus-areas
    id: thrusts
    content:
      title: Research Thrusts
      text: 'Three connected steps of one loop. <a class="section-link" href="/research/">Read more about our research →</a>'
      items:
        - name: Energy-System Perception & Observability
          icon: hero/eye
          description: What can an energy agent know, and what information does it need?
        - name: Physics-Grounded Energy World Models
          icon: hero/cube-transparent
          description: How will an energy system respond to changes and actions?
        - name: Energy-Constrained Embodied Decision & Control
          icon: hero/arrow-path
          description: How can an energy agent act safely and adaptively in the physical world?

  # Real cases only. Each card: replace TODO with a verified project (image + one-line result + link).
  - block: focus-areas
    id: cases
    content:
      title: Energy Systems & Physical Validation
      text: 'Selected cases from the energy systems we study. Active = existing foundation; Emerging = in development.'
      items:
        - name: Renewable Energy & Urban Environments
          icon: hero/sun
          status: active
          description: 'TODO: one verified case, e.g. a solar-resource or 3D urban energy assessment project, with its result and link.'
        - name: Buildings, Storage & Energy Networks
          icon: hero/building-office-2
          status: active
          description: 'TODO: one verified case on coupled demand–generation–storage modeling, with its result and link.'
        - name: Electric Mobility & Charging
          icon: hero/bolt
          status: emerging
          description: 'TODO: describe the current stage of this application; avoid implying a deployed testbed.'

  - block: collection
    id: papers
    content:
      title: Selected Publications
      text: '<a class="section-link" href="/publications/">All publications →</a>'
      count: 3
      filters: { folders: [publications], featured_only: true }
    design: { view: citation }

  - block: cta-card
    id: join
    content:
      title: Build the Future of Embodied Intelligence in Energy Systems
      text: We welcome students, researchers and collaborators interested in energy-system science, AI, physical modeling, intelligent control and real-world validation. [Join us](/contact/)
      button:
        text: Meet the Team
        url: /team/
---

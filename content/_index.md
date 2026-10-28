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
      text: '**Energy Shapes Intelligence. Intelligence Reshapes Energy Systems.** Advancing the science of autonomous adaptation in renewable and interconnected urban energy systems.'
      primary_action:
        text: Explore Our Research
        url: /research/
      secondary_action:
        text: Our Team
        url: /team/
      media:
        src: /media/emblem.png
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
        > We investigate how energy dynamics and physical constraints ground embodied intelligence, enabling closed-loop interaction and autonomous adaptation for efficient, reliable, and resilient urban energy systems.
    design:
      layout: split

  - block: markdown
    id: approach
    content:
      eyebrow: Our Approach
      title: From Perception to Physical Action in Energy Systems
      subtitle: 'Core mechanism: Energy–Information–Action Coupling'
      text: |-
        <a class="eies-figure" href="/media/eies-framework.jpg" target="_blank" rel="noopener"><img src="/media/eies-framework.jpg" alt="Energy embodied intelligence as a model-based reinforcement learning framework: a physical energy environment and an embodied agent (perception, world model, decision policy) linked by observations, physical actions and feedback." loading="lazy"></a><p class="fig-note">Energy embodied intelligence as a model-based RL framework. Click to enlarge.</p>
    design:
      layout: split
  - block: focus-areas
    id: thrusts
    content:
      title: '<span class="sec-eyebrow">Our Research</span>Research Thrusts'
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

  - block: focus-areas
    id: cases
    content:
      title: '<span class="sec-eyebrow">Validation</span>Energy Systems & Physical Validation'
      items:
        - name: Renewable Energy & Urban Environments
          icon: hero/sun
          status: active
          description: Agents sense solar resources and urban form from remote sensing and 3D city models, predict how PV output responds to weather and siting, and turn this into placement and operation decisions that are checked against measured generation.
        - name: Buildings, Storage & Energy Networks
          icon: hero/building-office-2
          status: active
          description: Agents estimate building demand and storage states, use physics-grounded models to predict how scheduling actions shift energy flows, and act through controllable loads, batteries and inverters within operating limits.
        - name: Electric Mobility & Low-Altitude Energy
          icon: hero/bolt
          status: emerging
          description: Vehicles, chargers and eVTOL platforms are energy-constrained embodied agents. We study how they perceive grid and battery states, plan charging and flight energy, and adapt under limited energy and safety constraints.

  - block: collection
    id: news
    content:
      title: '<span class="sec-eyebrow">Latest</span>News'
      text: '<a class="section-link" href="/news/">All news →</a>'
      count: 3
      filters: { folders: [news] }
    design: { view: date-title-summary }

  - block: markdown
    id: join
    content:
      eyebrow: Join Us
      title: Build the Future
      subtitle: '<a class="section-link" href="/team/">Meet the team →</a> &nbsp; <a class="section-link" href="/contact/">Contact us →</a>'
      text: |-
        We welcome students, researchers, and collaborators with interests in energy systems science, GeoAI, physical AI, physics-based modeling, and real-world validation and deployment.
    design:
      layout: split
---

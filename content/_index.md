---
title: ''
# For search engines: browser-tab / Google result title and snippet (not shown on the page).
seo:
  title: DigiEnergy Lab | Digital & Embodied Intelligence in Energy Systems, PolyU
summary: DigiEnergy Lab is part of the International Centre of Urban Energy Nexus (UEX) at PolyU. We study digital and embodied intelligence in energy systems, from digital perception and prediction to embodied decision and action.
type: landing
# Restrained homepage: Hero (live 3D scene) + Mission + Approach carry the narrative; thrusts as short cards;
# validation as real cases; publications/team as selected previews. Details live on /research/, /publications/, /team/.
# Keep in sync with content/_index.zh.md.
sections:
  # Internal links are written like research/ (no leading slash, no /zh/) so they work both locally
  # and under the GitHub Pages subpath (/eies-lab-site/).
  - block: hero-scene
    content:
      eyebrow: DigiEnergy Lab · UEX · The Hong Kong Polytechnic University
      title: '[From Digital to<br>Embodied Intelligence]'
      text: '**Energy Shapes Intelligence. Intelligence Reshapes Energy Systems.**'
      primary_action:
        text: Explore Our Research
        url: research/
      secondary_action:
        text: Our Team
        url: team/
      # Live 3D background (scenes/ project). theme: research theme in scenes/src/themes/; place: scenes/src/places/;
      # poster: shown first and on phones / reduced motion. act: pin one act (0–5), omit to loop.
      scene:
        theme: pv
        place: polyu
        dim: 0.15
        poster: media/scenes/pv-polyu.jpg
        video: media/scenes/pv-polyu.mp4   # recorded loop (+ pv-polyu-av1.mp4, pv-polyu.json); remove to embed the live scene

  - block: markdown
    id: mission
    content:
      eyebrow: Our Mission
      title: Understanding the Coupled Dynamics of Energy and Intelligence
      subtitle: 'Underlying Mechanism: Energy–Information–Action Coupling'
      text: |-
        > Intelligence is moving from digital perception and prediction to embodied decision and action. We investigate how energy constraints and physical dynamics shape this transition, and how intelligence, through physical actions and feedback, transforms the operation of energy systems.
    design:
      layout: split

  - block: loop-diagram
    id: approach
    content:
      eyebrow: Our Approach
      title: Closing the Loop Between Energy Perception and Physical Action
      text: |-
        > We integrate energy-system perception, physics-grounded world models, and energy-constrained decision-making with physical action and feedback, enabling autonomous adaptation in complex and dynamic energy systems.

  - block: focus-areas
    id: thrusts
    content:
      title: '<span class="sec-eyebrow">Our Research</span>Research Thrusts'
      text: 'Three connected steps of one loop, from digital perception and modeling to embodied action. <a class="section-link" href="research/">Read more about our research →</a>'
      items:
        - name: Energy-System Perception & Observability
          image: home/thrust-perception.jpg
          description: 'What information is sufficient for reliable energy decisions?'
        - name: Physics-Grounded Energy World Models
          image: home/thrust-world-model.jpg
          description: 'How do energy systems respond to changes and actions?'
        - name: Energy-Constrained Embodied Decision & Control
          image: home/thrust-control.jpg
          description: 'How can energy agents act safely and adaptively?'

  - block: focus-areas
    id: cases
    # The three Active scenarios from /research/ (titles only here; all five with descriptions on the Research page).
    content:
      title: '<span class="sec-eyebrow">Flagship Research Scenarios</span>Digital & Embodied Intelligence in Energy Systems'
      text: 'A unified digital and embodied intelligence framework across diverse energy systems, physical constraints, and feedback dynamics. <a class="section-link" href="research/#scenarios-intro">Read more about our scenarios →</a>'
      items:
        - name: Autonomous Urban BIPV & Solar–Storage Systems
          image: home/case-solar-twin.jpg
          status: active
        - name: Embodied Intelligence for Data Center Energy & Cooling
          image: home/case-datacenter.jpg
          status: active
        - name: Climate-Resilient Urban Renewable Energy Networks
          image: home/case-resilience.jpg
          status: active

  - block: collection
    id: news
    content:
      title: '<span class="sec-eyebrow">Latest</span>News'
      text: '<a class="section-link" href="news/">All news →</a>'
      count: 3
      filters: { folders: [news] }
    design: { view: date-title-summary }

  - block: markdown
    id: join
    content:
      eyebrow: Join Us
      title: Build the Future
      subtitle: '<a class="section-link" href="team/">Meet the team →</a> &nbsp; <a class="section-link" href="contact/">Contact us →</a>'
      text: |-
        We welcome students, researchers, and collaborators with interests in energy systems science, GeoAI, physical AI, physics-based modeling, and real-world validation and deployment.
    design:
      layout: split
---

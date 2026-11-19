/* ============================================================================
   PROJECTS
   Each project appears on research.html under the research direction named
   by `direction`, which must match an `id` in data/research.js. Within a
   direction, projects show in the order listed here. A card shows only the
   image, the title and the links (paper, arxiv, code, video, project).
   Images live in assets/img/projects/, named after the project's `id`:
   16:9, about 1200x675 px, and well under 200 KB. The card crops anything
   that is not 16:9, so crop a taller figure to its most telling part first.
   ========================================================================== */

window.PROJECTS = [
  /* Radio Frequency Perception */
  {
    id: "mmnorm",
    direction: "rf-perception",
    title: "mmNorm",
    image: "assets/img/projects/mmnorm.jpg",
    year: 2025,
    links: {
      paper: "https://dl.acm.org/doi/10.1145/3711875.3729138",
      code: "https://github.com/signalkinetics/mmNorm",
      video: "https://www.youtube.com/watch?v=OQrsuXaoddY",
    },
  },
  {
    id: "x-ar",
    direction: "rf-perception",
    title: "X-AR",
    image: "assets/img/projects/x-ar.jpg",
    year: 2023,
    links: {
      paper: "https://www.usenix.org/system/files/nsdi23-boroushaki.pdf",
      video: "https://www.youtube.com/watch?v=bdUN21ft7G0",
    },
  },

  /* Multi-Modal Sensing & Fusion */
  {
    id: "mito",
    direction: "multimodal-sensing",
    title: "MITO",
    image: "assets/img/projects/mito.png",
    year: 2025,
    links: {
      arxiv: "https://arxiv.org/abs/2502.10259",
      code: "https://github.com/signalkinetics/MITO_Codebase",
      video: "https://www.youtube.com/watch?v=TyySRwsUpbY",
    },
  },
  {
    id: "fusebot",
    direction: "multimodal-sensing",
    title: "FuseBot",
    image: "assets/img/projects/fusebot.jpg",
    year: 2022,
    links: {
      paper: "https://www.roboticsproceedings.org/rss18/p067.pdf",
      video: "https://www.youtube.com/watch?v=TFqz263uPN0",
    },
  },

  /* Robotics & Cyber-Physical Systems */
  {
    id: "ceilbot",
    direction: "robotics",
    title: "Ceilbot",
    image: "assets/img/projects/ceilbot.jpg",
    year: 2025,
    links: { paper: "https://ieeexplore.ieee.org/abstract/document/11023525" },
  },
  {
    id: "rfusion",
    direction: "robotics",
    title: "RFusion",
    image: "assets/img/projects/rfusion.jpg",
    year: 2021,
    links: {
      paper: "https://dl.acm.org/doi/pdf/10.1145/3485730.3485944",
      video: "https://www.youtube.com/watch?v=iqehzw_aLc0",
    },
  },
  {
    id: "rf-grasp",
    direction: "robotics",
    title: "RF-Grasp",
    image: "assets/img/projects/rf-grasp.jpg",
    year: 2021,
    links: {
      project: "http://rfgrasp.media.mit.edu/",
      paper: "https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=9560956",
      video: "https://www.youtube.com/watch?v=ZAzeYPcTM78",
    },
  },
];

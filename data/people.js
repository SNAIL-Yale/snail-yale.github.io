/* ============================================================================
   PEOPLE

   Add a member by copying one entry and changing the fields. `group` must
   match one of the group keys below. `note` is optional and shows as a small
   line under the role (e.g. a co-advisor).

   `bio` is optional. The PI's bio is printed on the page. Everyone else's
   card has a "Read bio" button that opens a pop-up with their photo, links
   and bio; while `bio` is "" the pop-up simply has no bio text.

   Photos are square JPEGs in assets/img/people/, about 600x600 px and cropped
   around the face -- the site shows them in a circle. Shrink phone photos
   first: each file should be well under 200 KB.
   ========================================================================== */

window.PEOPLE = {
  groups: [
    { key: "pi", title: "Principal Investigator" },
    { key: "postdoc", title: "Postdoctoral Researchers" },
    { key: "phd", title: "PhD Students" },
    { key: "ms", title: "Masters Students" },
    { key: "undergrad", title: "Undergraduate Students" },
    { key: "visitor", title: "Visitors &amp; Collaborators" },
  ],

  members: [
    {
      name: "Tara Boroushaki",
      group: "pi",
      role: "Assistant Professor, Electrical &amp; Computer Engineering",
      photo: "assets/img/people/tara-boroushaki.jpg",
      bio:
        "Tara works on sensing and mobile technologies with applications in wireless networking, cyber-physical systems, and HCI. She received her PhD from MIT, and her work has been recognized with the Marconi Society Young Scholar Award, a Microsoft Research PhD Fellowship, a Best Paper Award at IEEE RFID, and Best Paper Finalist recognitions at ACM SenSys and ACM MobiSys.",
      interests: ["RF Perception", "Sensor Fusion", "Mixed Reality", "Robotic Manipulation"],
      email: "tara.boroushaki@yale.edu",
      website: "https://www.tara-boroushaki.com/",
      scholar: "https://scholar.google.com/citations?user=cHbx6vAAAAAJ",
      github: "",
      twitter: "https://x.com/Tara_Boroushaki",
      linkedin: "https://www.linkedin.com/in/tara-boroushaki-634a9ba8",
    },
    {
      name: "Jiacheng Cheng",
      group: "postdoc",
      role: "Postdoctoral Researcher, Electrical &amp; Computer Engineering",
      photo: "assets/img/people/jiacheng-cheng.jpg",
      bio:
        "Jiacheng Cheng is a Postdoctoral Researcher working with Tara Boroushaki at Yale University. Jiacheng obtained a PhD from the Statistical Visual Computing Lab at the University of California San Diego in 2025, under Nuno Vasconcelos, and received an undergraduate degree from the University of Science and Technology of China in 2018.",
      interests: ["Computer Vision", "Wireless systems", "Robotics"],
      email: "jiacheng.cheng@yale.edu",
      website: "https://jiacheng-cheng.github.io/",
      scholar: "https://scholar.google.com/citations?user=bWqc6Z8AAAAJ&hl=en",
      github: "",
      twitter: "",
    },
    {
      name: "Wenqian Zhang",
      group: "phd",
      role: "PhD Student, Electrical &amp; Computer Engineering",
      photo: "assets/img/people/wenqian-zhang.jpg",
      bio:
        "Wenqian Zhang is a first-year PhD student in Electrical and Computer Engineering at Yale University. Working in Prof. Tara Boroushaki’s lab, Wenqian focuses on wireless sensing and networking, with applications in robotics and computer vision. At UC San Diego, Wenqian was advised by Prof. Xinyu Zhang, working on metasurfaces and software-defined radios.",
      interests: ["Multi-Modal Sensing", "Wireless systems", "Robotics"],
      email: "wenqian.zhang@yale.edu",
      website: "https://wenqianzhang001.github.io/",
      scholar: "https://scholar.google.com/citations?user=sJJwFq0AAAAJ&hl=en&authuser=1",
      github: "",
      twitter: "",
      linkedin: "",
    },
    {
      name: "Shuyan Huang",
      group: "phd",
      role: "PhD Student, Electrical &amp; Computer Engineering",
      photo: "assets/img/people/shuyan-huang.jpg",
      bio:
        "Shuyan Huang is a PhD student in Electrical and Computer Engineering at Yale University, advised by Prof. Tara Boroushaki. Her research focuses on robot perception and learning, with the goal of building robots that understand people and assist them in everyday life. Outside the lab, she enjoys dancing, theatre, and playing music, and she also loves ball sports and baking.",
      interests: ["Multi-Modal Sensing", "Wireless systems", "Robotics"],
      email: "shuyan.huang@yale.edu",
      website: "",
      scholar: "",
      github: "",
      twitter: "",
      linkedin: "",
    },
    {
      name: "Tejas Bharadwaj",
      group: "phd",
      role: "PhD Student, Electrical &amp; Computer Engineering",
      photo: "assets/img/people/placeholder.svg",
      bio: "",
      interests: ["Multi-Modal Sensing", "Wireless systems", "Robotics"],
      email: "tejas.bharadwaj@yale.edu",
      website: "",
      scholar: "",
      github: "",
      twitter: "",
      linkedin: "",
    },
    {
      name: "Chaz Okada",
      group: "phd",
      role: "PhD Student, Electrical &amp; Computer Engineering",
      note: "Advised by Prof. Leandros Tassiulas",
      photo: "assets/img/people/chaz-okada.jpg",
      bio: "",
      interests: ["Multi-Modal Sensing", "Wireless systems", "Robotics"],
      email: "chaz.okada@yale.edu",
      website: "",
      scholar: "",
      github: "",
      twitter: "",
      linkedin: "",
    },
    {
      name: "Luke Huh",
      group: "undergrad",
      role: "Undergraduate Student, Electrical &amp; Computer Engineering",
      photo: "assets/img/people/luke-huh.jpg",
      bio:
        "Luke is a junior at Yale studying Electrical Engineering and Energy Studies. The lab has found him modeling dual-radar-camera mounts, integrating them into data-collection systems, and becoming a public spectacle when walking around outside collecting this data. Outside of the lab, you can find Luke dancing with Movement, Yale’s K-Pop dance group, pulling all-nighters building at hackathons, or cooking yummy foods for his friends.",
      interests: ["Multi-Modal Sensing", "Wireless systems", "Robotics"],
      email: "luke.huh@yale.edu",
      website: "https://lukehuh.netlify.app/",
      scholar: "",
      github: "",
      twitter: "",
      linkedin: "https://www.linkedin.com/in/lukehuh/",
    },
    {
      name: "Aliaa Mahgoub",
      group: "undergrad",
      role: "Undergraduate Student, Electrical &amp; Computer Engineering",
      photo: "assets/img/people/placeholder.svg",
      bio: "",
      interests: ["Multi-Modal Sensing", "Wireless systems", "Robotics"],
      email: "aliaa.mahgoub@yale.edu",
      website: "",
      scholar: "",
      github: "",
      twitter: "",
      linkedin: "",
    },
    {
      name: "Ethan Reynolds",
      group: "undergrad",
      role: "Undergraduate Student, Electrical &amp; Computer Engineering",
      photo: "assets/img/people/placeholder.svg",
      bio: "",
      interests: ["Multi-Modal Sensing", "Wireless systems", "Robotics"],
      email: "ethan.reynolds@yale.edu",
      website: "",
      scholar: "",
      github: "",
      twitter: "",
      linkedin: "",
    },
    {
      name: "Peter Yu",
      group: "undergrad",
      role: "Undergraduate Student, Electrical &amp; Computer Engineering",
      photo: "assets/img/people/peter-yu.jpg",
      bio:
        "Peter is a student at Pauli Murray College studying Electrical Engineering. He’s involved in Yale Triathlon and loves pasta.",
      interests: ["Multi-Modal Sensing", "Wireless systems", "Robotics"],
      email: "peter.yu@yale.edu",
      website: "",
      scholar: "https://scholar.google.com/citations?user=jQDzmE0AAAAJ&hl=en",
      github: "",
      twitter: "",
      linkedin: "",
    },
    {
      name: "Andy Cheng",
      group: "undergrad",
      role: "Undergraduate Student, Electrical &amp; Computer Engineering",
      photo: "assets/img/people/andy-cheng.jpg",
      bio:
        "Andy Cheng is a senior at Yale University studying Electrical Engineering and Computer Science. He previously conducted research at the Yale Social Robotics Lab and is interested in robotic perception, manipulation, and developing intelligent systems that can interact with the physical world. Outside of research, he loves traveling and playing volleyball.",
      interests: ["Multi-Modal Sensing", "Wireless systems", "Robotics"],
      email: "andy.cheng@yale.edu",
      website: "",
      scholar: "",
      github: "",
      twitter: "",
      linkedin: "https://www.linkedin.com/in/andycheng233/",
    },
    {
      name: "Iyanu Nafiu",
      group: "undergrad",
      role: "Undergraduate Student, Electrical &amp; Computer Engineering",
      photo: "assets/img/people/iyanu-nafiu.jpg",
      bio:
        "Iyanu Nafiu is a senior at Yale studying Electrical Engineering (Class of 2027). He’s writing his senior thesis in the lab on lateral grasping using mmWave radar and synthetic aperture radar (SAR) imaging. His broader technical interests include VLSI and chip design, RTL design, and signal integrity. Outside the lab, he enjoys crocheting, baking, and producing music.",
      interests: ["Multi-Modal Sensing", "Wireless systems", "Robotics"],
      email: "iyanu.nafiu@yale.edu",
      website: "",
      scholar: "",
      github: "",
      twitter: "",
      linkedin: "https://www.linkedin.com/in/iyanuoluwa-nafiu/",
    },
    {
      name: "Justin Chen",
      group: "visitor",
      role: "Visiting Undergraduate Student, UCSD",
      photo: "assets/img/people/placeholder.svg",
      bio: "",
      interests: ["Multi-Modal Sensing", "Wireless systems", "Robotics"],
      email: "justin.chen.jc4737@yale.edu",
      website: "",
      scholar: "",
      github: "",
      twitter: "",
      linkedin: "",
    },
  ],

  // Alumni are listed compactly, with where they went next. The Alumni section
  // stays hidden while this list is empty.
  alumni: [
    // { name: "Former Member", role: "MS 2026", next: "Now at Example Corp", website: "" },
  ],
};

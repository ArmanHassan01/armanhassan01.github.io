/*
=============================================================================
ARMAN'S PORTFOLIO — MAIN EDITABLE FILE
=============================================================================
This is the file you should edit most of the time.

You normally only need to:
1) edit text in this file,
2) add/replace images inside /images/,
3) replace the CV inside /documents/.

Tip: Keep quotation marks and commas intact when editing.
=============================================================================
*/

window.portfolioData = {
  // -------------------------------------------------------------------------
  // SITE SETTINGS
  // -------------------------------------------------------------------------
  site: {
    title: "Md. Arman Hassan | Mechanical Engineering Researcher",
    description: "Mechanical Engineering graduate from BUET researching molecular dynamics, thermal transport, polymer nanocomposites, programmable structures, and robotics.",
    phdCycle: "Fall 2027",
    featuredResearch: ["pdms-hbn", "mof-diffusion", "stanene-hbn"],
    featuredProjects: ["prosthetic-wrist", "rover-arm", "cycloidal-gearbox", "differential-wrist", "traffic-signal"],
    sections: {
      researchInterests: true,
      research: true,
      publications: true,
      bridge: true,
      projects: true,
      experience: true,
      skills: true,
      honors: true,
      about: true,
      contact: true
    }
  },

  // -------------------------------------------------------------------------
  // GOOGLE ANALYTICS
  // Paste your GA4 ID (starts with G-) into measurementId.
  // This ID is not a password/secret; it is visible in website source anyway.
  // Leave it blank until you create your Google Analytics property.
  // -------------------------------------------------------------------------
  analytics: {
    enabled: true,
    measurementId: "",
    trackCvDownloads: true,
    trackEmailClicks: true,
    trackPublicationClicks: true,
    trackProjectViews: true,
    trackSocialClicks: true
  },

  // -------------------------------------------------------------------------
  // PERSONAL INFORMATION
  // -------------------------------------------------------------------------
  personal: {
    name: "Md. Arman Hassan",
    shortName: "Arman Hassan",
    eyebrow: "MECHANICAL ENGINEER · RESEARCHER",
    title: "Mechanical Engineering Researcher",
    subtitle: "Thermal Transport · Advanced Materials · Robotics",
    institution: "Bangladesh University of Engineering and Technology (BUET)",
    location: "Dhaka, Bangladesh",
    email: "armanhassan10416@gmail.com",
    phdStatus: "Fall 2027 PhD Applicant",
    profileImage: "images/profile/arman.jpg",
    cv: "documents/Arman_Hassan_Academic_CV.pdf",
    heroText: "Mechanical Engineering graduate from BUET working on molecular dynamics, thermal transport in polymer nanocomposites and heterostructures, alongside mechanical and robotic system development. I am particularly interested in programmable materials, architected structures, mechanical metamaterials, adaptive systems, and material-enabled robotics."
  },

  // Add links later. Leave blank to hide an icon.
  links: {
    linkedin: "",
    googleScholar: "",
    github: "",
    orcid: ""
  },

  academicStats: [
    { value: "3.88 / 4.00", label: "CGPA" },
    { value: "12 / 186", label: "Class Rank" },
    { value: "2", label: "Publications" },
    { value: "2", label: "Ongoing Research" },
    { value: "Dean's List", label: "All Semesters" }
  ],

  // -------------------------------------------------------------------------
  // RESEARCH INTERESTS — reorder these to change priority visually
  // -------------------------------------------------------------------------
  researchInterests: [
    {
      label: "PRIMARY RESEARCH DIRECTION",
      title: "Metamaterial Robotics & Programmable Structures",
      description: "I am particularly interested in systems where geometry, structural architecture, and material properties participate directly in actuation, adaptation, sensing, or useful robotic behavior.",
      topics: ["Mechanical Metamaterials", "Programmable Materials", "Architected Materials", "Robotic Materials", "Morphing Structures", "Adaptive Structures", "Compliant Mechanisms", "Soft Robotics"],
      emphasis: "primary"
    },
    {
      label: "CURRENT RESEARCH FOUNDATION",
      title: "Thermal Transport & Polymer Nanocomposites",
      description: "My undergraduate and ongoing research provide a computational foundation in nanoscale thermal transport, polymer composites, interfaces, and molecular simulation.",
      topics: ["Polymer Nanocomposites", "Thermal Interface Materials", "PDMS", "hBN", "Graphene", "Interfacial Thermal Transport", "Molecular Dynamics", "Phonon Transport"],
      emphasis: "secondary"
    },
    {
      label: "COMPLEMENTARY ENGINEERING DIRECTION",
      title: "Robotics & Mechanical Systems",
      description: "My mechanical engineering background includes rover manipulation systems, custom actuation mechanisms, compliant prosthetic devices, prototyping, and fabrication-oriented engineering.",
      topics: ["Planetary Robotics", "Robotic Manipulation", "Mechanism Design", "Mechatronics", "Mechanical Actuation", "Field Robotics"],
      emphasis: "support"
    }
  ],

  // -------------------------------------------------------------------------
  // RESEARCH PROJECTS
  // Copy an object to add another project.
  // -------------------------------------------------------------------------
  researchProjects: [
    {
      id: "pdms-hbn",
      title: "Molecular Dynamics Simulation of PDMS–hBN Nanocomposites for Thermal Conductivity Enhancement",
      type: "Undergraduate Thesis",
      status: "Completed",
      institution: "Department of Mechanical Engineering, BUET",
      supervisor: "Dr. Md. Ashiqur Rahman — Professor, Department of Mechanical Engineering, BUET",
      summary: "Investigated thermal transport in PDMS–hBN nanocomposites using molecular dynamics simulations, evaluating the effects of aligned hBN filler fraction and examining carbon-doped hBN and graphene/hBN heterostructure fillers.",
      methods: ["LAMMPS", "NEMD", "PDOS", "Python post-processing", "OVITO", "VESTA", "Packmol", "Moltemplate"],
      tags: ["Polymer Nanocomposites", "Thermal Transport", "hBN", "Graphene", "Molecular Dynamics"],
      image: "images/research/pdms-hbn.svg",
      imageAlt: "Placeholder for PDMS-hBN molecular structure or thermal transport result",
      link: ""
    },
    {
      id: "mof-diffusion",
      title: "Molecular Dynamics Study of CO₂ Diffusion Slowdown in MOF Pores Under N₂ Gas Mixtures",
      type: "Ongoing Research",
      status: "Ongoing",
      institution: "Department of Mechanical Engineering, BUET",
      supervisor: "",
      summary: "Investigating CO₂ self-diffusivity in metal-organic-framework pores under co-adsorbed N₂ through molecular dynamics simulations using LAMMPS, comparing tight- and open-pore frameworks for carbon-capture and gas-separation applications.",
      methods: ["LAMMPS", "Molecular Dynamics", "Diffusion Analysis"],
      tags: ["MOF", "CO₂ Capture", "Gas Diffusion", "Molecular Dynamics"],
      image: "images/research/mof.svg",
      imageAlt: "Placeholder for MOF structure or diffusion visualization",
      link: ""
    },
    {
      id: "stanene-hbn",
      title: "Thermal Conductivity in Doped Stanene/hBN van der Waals Heterobilayers: A Molecular Dynamics Study",
      type: "Ongoing Research",
      status: "Ongoing",
      institution: "Department of Mechanical Engineering, BUET",
      supervisor: "",
      summary: "Investigating the effects of substitutional doping on thermal conductivity of stanene/hBN van der Waals heterobilayers using LAMMPS, with phonon density-of-states analysis to examine spectral overlap and interfacial phonon coupling.",
      methods: ["LAMMPS", "Thermal Conductivity", "PDOS", "Phonon Analysis"],
      tags: ["Stanene", "hBN", "2D Materials", "Thermal Transport", "Phonons"],
      image: "images/research/stanene-hbn.svg",
      imageAlt: "Placeholder for doped stanene-hBN heterobilayer or PDOS figure",
      link: ""
    }
  ],

  // -------------------------------------------------------------------------
  // PUBLICATIONS
  // -------------------------------------------------------------------------
  publications: [
    {
      title: "Design and Fabrication of a Versatile and Cost-Effective Myoelectric Prosthetic Wrist",
      authors: "Md. Arman Hassan, Tanjim Azad Jarif, Jubaer Al-Amin Emon, Lamia Tasnim Suhi",
      venue: "8th International Conference on Engineering Research, Innovation and Education (ICERIE 2025), SUST · Atlantis Press, Advances in Engineering Research, pp. 598–606",
      year: "2025",
      doi: "10.2991/978-94-6463-884-4_72",
      url: "https://doi.org/10.2991/978-94-6463-884-4_72",
      contribution: "Developed compliant TPU finger mechanisms with integrated living-hinge behavior and contributed to EMG-based grasp-control development."
    },
    {
      title: "Design and Performance Optimization of a Multi-Purpose Autonomous Rover for Planetary and Terrestrial Applications",
      authors: "Sahib U. Rauf, Safwan Sakib, Md. A. Hassan, Sk. F. Sabik, Nahian P. Jaman, Md. Arafath R. Nishat, Tawhidul I. Tahsif, Nafisa A. Tanisha, Salman R. Sunny, Kazi A. Rahman",
      venue: "15th International Conference on Mechanical Engineering (ICME 2025), BUET · Published on SSRN",
      year: "2025",
      doi: "10.2139/ssrn.6202378",
      url: "https://doi.org/10.2139/ssrn.6202378",
      contribution: "Contributed to the mechanical development of the Prochesta V3.0 rover, including mobility and robotic manipulation systems and a compact 5-DOF robotic arm."
    }
  ],

  researchBridge: {
    title: "Where Materials Meet Mechanisms",
    text: "My current research provides a foundation for understanding how composition, interfaces, and nanoscale structure influence material behavior, while my mechanical and robotics experience has shown how geometry and architecture determine system-level functionality. For doctoral research, I am particularly interested in bridging these perspectives through programmable and multifunctional mechanical systems.",
    stages: [
      { title: "Nanoscale Materials", items: ["Thermal Transport", "Polymer Nanocomposites", "2D Materials", "Interfaces", "Phonons"] },
      { title: "Programmable Structures", items: ["Architected Materials", "Mechanical Metamaterials", "Compliant Mechanisms", "Morphing Structures", "Adaptive Systems"] },
      { title: "Robotic Systems", items: ["Manipulation", "Soft Robotics", "Field Robotics", "Mechanical Actuation", "Planetary Robotics"] }
    ]
  },

  // -------------------------------------------------------------------------
  // ENGINEERING PROJECTS
  // Replace image paths or descriptions here.
  // -------------------------------------------------------------------------
  engineeringProjects: [
    {
      id: "prosthetic-wrist",
      title: "Cost-Effective Myoelectric Prosthetic Wrist",
      category: "Compliant Mechanisms · Biomedical Robotics",
      role: "Research & Development",
      description: "Developed a low-cost myoelectric prosthetic wrist using 3D-printed ABS components and flexible TPU fingers. The finger architecture incorporated living-hinge behavior and material flexibility to provide adaptive grasping without conventional articulated finger joints.",
      tags: ["Compliant Mechanisms", "TPU", "Soft Robotics", "3D Printing", "EMG"],
      image: "images/projects/prosthetic/grasp.png"
    },
    {
      id: "rover-arm",
      title: "Mars Rover Robotic Arm",
      category: "Robotic Manipulation · Mechanism Design",
      role: "Mechanical Subteam Lead & R&D Lead",
      description: "Led R&D and redesign activities for rover mechanical systems, including robotic arm architecture, actuator packaging, mechanism development, and design decisions constrained by locally available components and manufacturing capability.",
      tags: ["Robotic Manipulation", "Mechanism Design", "SolidWorks", "Actuation"],
      image: "images/projects/rover-arm/arm.png"
    },
    {
      id: "cycloidal-gearbox",
      title: "Cycloidal Gearbox Development",
      category: "Transmission Design · Robotics",
      role: "R&D Lead",
      description: "Led in-house R&D for a compact cycloidal gearbox concept for rover actuation, reviewing architecture, CAD iterations, assembly, mechanical feasibility, and manufacturability.",
      tags: ["Cycloidal Drive", "Transmission Design", "Actuation", "Robotics"],
      image: "images/projects/cycloidal/cycloidal-1.png"
    },
    {
      id: "differential-wrist",
      title: "Differential Wrist Development",
      category: "Mechanism Design · Robotic Wrist",
      role: "R&D Lead",
      description: "Led R&D of a differential wrist mechanism for rover end-effector orientation, guiding gear-layout decisions, actuator packaging, assembly fit, and mechanical feasibility.",
      tags: ["Differential Mechanism", "Robotic Wrist", "Actuation", "Mechanical Design"],
      image: "images/projects/differential-wrist/wrist.png"
    },
    {
      id: "traffic-signal",
      title: "Intelligent Traffic Signal Controller Enclosure",
      category: "Electromechanical Packaging · Product Development",
      role: "Junior Mechanical Engineer",
      description: "Design mechanical components, mounting systems, and IP65 enclosures for traffic signal controllers and associated electronics, considering environmental protection, serviceability, manufacturability, assembly, and electrical integration.",
      tags: ["Sheet Metal", "IP65", "Electronics Packaging", "DFM", "SolidWorks"],
      image: "images/projects/traffic-signal/enclosure.png"
    },
    {
      id: "suspension-fea",
      title: "Double Wishbone Suspension Structural Analysis",
      category: "Structural Simulation",
      role: "Academic Project",
      description: "Performed structural analysis under combined braking, cornering, and vertical loading, evaluating total deformation, equivalent stress, and factor of safety using ANSYS Mechanical.",
      tags: ["ANSYS Mechanical", "FEA", "Suspension", "Structural Analysis"],
      image: "images/projects/suspension/fea-1.png"
    }
  ],

  professionalExperience: [
    {
      role: "Junior Mechanical Engineer",
      organization: "Installation of Locally Developed Traffic Signal Project · Department of Civil Engineering, BUET",
      period: "June 2026 – Present",
      description: "Design mechanical components, mounting systems, and IP65 enclosures for traffic signal controllers and associated electronic equipment. Develop fabrication-ready CAD designs for sheet metal manufacturing, 3D printing, and injection molding and coordinate prototyping and fabrication in a multidisciplinary engineering environment."
    }
  ],

  leadershipExperience: [
    {
      role: "Mechanical Subteam Lead & R&D Lead",
      organization: "Team Interplanetar · BUET Mars Rover Team",
      period: "Student Engineering Team",
      description: "Led R&D and redesign of rover mechanical systems with emphasis on manufacturability, actuator development, robotic manipulation, and local fabrication constraints."
    },
    {
      role: "Manufacturing Subteam Lead & R&D Lead",
      organization: "Automaestro · BUET Formula Student Team",
      period: "Student Engineering Team",
      description: "Led manufacturing planning, design development, and fabrication execution for Formula Student vehicle components."
    }
  ],

  education: {
    degree: "B.Sc. in Mechanical Engineering",
    institution: "Bangladesh University of Engineering and Technology",
    graduation: "June 2026",
    cgpa: "3.88 / 4.00",
    rank: "12 / 186",
    honors: "Dean's List — All Semesters",
    thesis: "Molecular Dynamics Simulation of PDMS–hBN Nanocomposites for Thermal Conductivity Enhancement"
  },

  skills: {
    "Molecular Simulation": ["LAMMPS", "OVITO", "VESTA", "Packmol", "Moltemplate"],
    "Computational / Programming": ["Python", "MATLAB", "Simulink", "C++"],
    "Mechanical Design": ["SolidWorks", "Design for Manufacturing", "Mechanism Design", "Sheet Metal Design"],
    "Engineering Simulation": ["ANSYS Mechanical", "COMSOL Multiphysics", "HTRI Xchanger Suite", "SolidWorks Flow Simulation"],
    "Manufacturing & Prototyping": ["Sheet Metal Fabrication", "3D Printing", "Injection Molding", "Machining / Workshop Processes", "Rapid Prototyping"]
  },

  honors: [
    { title: "Dean's List", detail: "Bangladesh University of Engineering and Technology · All Semesters" },
    { title: "Champion — Mechathon", detail: "Mechanical Festival, BUET · 2026" },
    { title: "Bronze Medal", detail: "Global e-Competition in Astronomy and Astrophysics · 2020" }
  ],

  about: "Md. Arman Hassan is a Mechanical Engineering graduate from Bangladesh University of Engineering and Technology (BUET). His undergraduate research focused on molecular dynamics simulations of thermal transport in PDMS–hBN nanocomposites, including doped and graphene/hBN heterostructured fillers. He is continuing research involving molecular simulation of thermal transport and gas diffusion while working professionally on mechanical design for an intelligent traffic signal system. Alongside computational research, his background includes robotic manipulation, compliant prosthetic mechanisms, rover actuator development, engineering simulation, prototyping, and manufacturing. His long-term research interests center on programmable materials and mechanical architectures that combine material functionality with robotic behavior.",

  contact: {
    heading: "Interested in discussing research?",
    text: "I am preparing for Fall 2027 PhD applications and am interested in research opportunities involving mechanical metamaterials, programmable structures, multifunctional materials, thermal transport, and related robotic systems."
  }
};

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
    featuredProjects: ["prosthetic-wrist", "interplanetar", "traffic-signal", "suspension-fea"],
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
      gallery: [
        { src: "images/research/pdms-hbn.svg", alt: "PDMS-hBN research placeholder", caption: "Replace this placeholder with your molecular structure, temperature profile, or thermal-conductivity figure." }
      ],
      videos: [],
      links: [],
      detail: {
        question: "How do filler architecture and composition influence thermal transport in PDMS-based nanocomposites?",
        approach: "Molecular dynamics simulations were used to evaluate thermal transport in PDMS with aligned hBN fillers and to extend the study toward carbon-doped hBN and graphene/hBN heterostructured fillers.",
        contribution: "Built and analyzed polymer–filler simulation systems, carried out thermal-transport simulations, and performed post-processing and physical interpretation of the resulting conductivity trends.",
        highlights: ["PDMS–hBN nanocomposites", "Aligned filler architectures", "Doped hBN and graphene/hBN extensions", "LAMMPS-based molecular simulation"],
        sections: [
          { title: "What to add here", text: "This detail page is designed for your actual simulation snapshots, temperature profiles, conductivity plots, interface-geometry figures, and manuscript or thesis links. Replace the placeholder visual as you prepare the final professor-facing version." }
        ]
      },
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
      gallery: [
        { src: "images/research/mof.svg", alt: "MOF diffusion research placeholder", caption: "Replace with your MOF structure or CO₂/N₂ diffusion visualization." }
      ],
      videos: [],
      links: [],
      detail: {
        question: "How does co-adsorbed N₂ alter CO₂ self-diffusion inside different MOF pore environments?",
        approach: "Molecular dynamics simulations compare CO₂ mobility under N₂ co-adsorption in tight- and open-pore frameworks, with diffusion analysis aimed at quantifying slowdown relevant to separation and carbon-capture applications.",
        contribution: "Research work includes studying the physical and chemical basis of CO₂ diffusion in MOFs, reviewing prior work, and supporting interpretation of the molecular-dynamics study.",
        highlights: ["CO₂ self-diffusivity", "N₂ co-adsorption", "Tight vs open pores", "Carbon capture and gas separation"],
        sections: []
      },
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
      gallery: [
        { src: "images/research/stanene-hbn.svg", alt: "Stanene-hBN research placeholder", caption: "Replace with the heterobilayer structure, thermal-conductivity results, or PDOS figure." }
      ],
      videos: [],
      links: [],
      detail: {
        question: "How does substitutional doping modify thermal transport across a stanene/hBN van der Waals heterobilayer?",
        approach: "LAMMPS-based molecular dynamics is used to compare thermal conductivity across doped configurations, while phonon density-of-states analysis examines changes in spectral overlap and interfacial phonon coupling.",
        contribution: "The study combines atomistic thermal-transport simulation with phonon-spectrum analysis to investigate how doping changes interfacial transport behavior.",
        highlights: ["Stanene/hBN heterobilayer", "Substitutional doping", "Thermal conductivity", "PDOS and spectral overlap"],
        sections: []
      },
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
      image: "images/projects/prosthetic/grasp.png",
      gallery: [
        { src: "images/projects/prosthetic/grasp.png", alt: "Adaptive grasp demonstration", caption: "Adaptive grasp demonstration of the prosthetic wrist." },
        { src: "images/projects/prosthetic/prototype.png", alt: "Prosthetic wrist prototype and design", caption: "Prototype and mechanical design view." }
      ],
      videos: [],
      links: [
        { label: "Publication DOI", url: "https://doi.org/10.2991/978-94-6463-884-4_72" }
      ],
      detail: {
        question: "How can a low-cost prosthetic wrist achieve adaptive grasping with simple, manufacturable mechanical architecture?",
        approach: "The design combines 3D-printed structural components with flexible TPU fingers and living-hinge behavior, using material compliance to reduce dependence on conventional articulated finger joints.",
        contribution: "Contributed to the mechanical development of the prosthetic wrist, including compliant TPU finger structures and the overall prototype system, alongside EMG-based grasp-control development.",
        highlights: ["Flexible TPU fingers", "Living-hinge behavior", "Adaptive grasping", "Low-cost additive manufacturing"],
        sections: [
          { title: "Why it matters for my research direction", text: "This project is an early example in my work of using material flexibility and structural geometry to create useful mechanical behavior, which directly connects to my interest in compliant systems, programmable structures, and material-enabled robotics." }
        ]
      }
    },

    // -----------------------------------------------------------------------
    // TEAM INTERPLANETAR
    // Keep the rover work together as ONE top-level project.
    // Add or edit rover subsystems inside "subprojects".
    // -----------------------------------------------------------------------
    {
      id: "interplanetar",
      title: "Team Interplanetar — Mars Rover Mechanical Systems",
      category: "Planetary Robotics · Mechanical R&D",
      role: "Mechanical Subteam Lead & R&D Lead",
      description: "Led mechanical R&D and redesign activities for Team Interplanetar's planetary rover systems, covering robotic manipulation, compact actuation, transmission mechanisms, end-effector development, manufacturability, and integration around locally available components.",
      tags: ["Planetary Robotics", "Robotic Manipulation", "Mechanism Design", "Actuation", "R&D Leadership"],
      image: "images/projects/rover-arm/arm.png",
      gallery: [
        { src: "images/projects/rover-arm/arm.png", alt: "Mars rover robotic arm", caption: "Robotic arm development for Team Interplanetar." },
        { src: "images/projects/cycloidal/cycloidal-1.png", alt: "Cycloidal gearbox CAD", caption: "Cycloidal gearbox R&D." },
        { src: "images/projects/differential-wrist/wrist.png", alt: "Differential wrist mechanism", caption: "Differential wrist mechanism R&D." },
        { src: "images/projects/gripper/gripper-1.png", alt: "Rover gripper mechanism", caption: "Rover gripper development." }
      ],
      videos: [],
      links: [
        { label: "Rover Publication DOI", url: "https://doi.org/10.2139/ssrn.6202378" }
      ],
      detail: {
        question: "How can a competition-level planetary rover's mechanical systems be redesigned for reliable manipulation, compact actuation, manufacturability, and integration using practical local resources?",
        approach: "The work combined subsystem-level R&D with system integration. Robotic-arm architecture, transmission concepts, wrist mechanisms, and gripper actuation were iterated in CAD with attention to actuator availability, packaging, assembly, manufacturing constraints, and overall rover functionality.",
        contribution: "Led mechanical-subteam R&D and guided subsystem development, design reviews, feasibility decisions, and mechanical integration across several rover mechanisms.",
        highlights: ["Mechanical Subteam Lead", "R&D Lead", "Robotic manipulation", "Actuation and transmissions", "Design for local manufacture"],
        sections: [
          { title: "Program-level role", text: "Rather than treating each mechanism as an unrelated project, this case study groups the rover work under Team Interplanetar. The individual R&D efforts below represent subsystems developed within the larger planetary-rover program." }
        ]
      },

      subprojects: [
        {
          id: "rover-arm",
          title: "Robotic Arm Redesign",
          role: "Mechanical Subteam Lead & R&D Lead",
          description: "Redesigned the rover arm actuation and mechanical architecture around locally available high-torque components, comparing actuator placement and mechanism layouts with attention to manufacturability, packaging, reliability, and simpler integrated robotic operation.",
          tags: ["Robotic Manipulation", "Mechanism Design", "Actuator Packaging", "SolidWorks"],
          gallery: [
            { src: "images/projects/rover-arm/arm.png", alt: "Mars rover robotic arm", caption: "Robotic arm design and development work for Team Interplanetar." }
          ],
          videos: []
        },
        {
          id: "cycloidal-gearbox",
          title: "Cycloidal Gearbox Development",
          role: "R&D Lead",
          description: "Led in-house R&D for a compact cycloidal gearbox concept for rover actuation, reviewing architecture, CAD iterations, assembly, mechanical feasibility, and manufacturability.",
          tags: ["Cycloidal Drive", "Transmission Design", "Compact Actuation", "DFMA"],
          gallery: [
            { src: "images/projects/cycloidal/cycloidal-1.png", alt: "Cycloidal gearbox CAD", caption: "Cycloidal gearbox CAD concept." },
            { src: "images/projects/cycloidal/cycloidal-2.png", alt: "Cycloidal gearbox alternate view", caption: "Additional gearbox design view." }
          ],
          videos: []
        },
        {
          id: "differential-wrist",
          title: "Differential Wrist Development",
          role: "R&D Lead",
          description: "Led R&D of a differential wrist mechanism for rover end-effector orientation, guiding gear-layout decisions, actuator packaging, assembly fit, and mechanical feasibility.",
          tags: ["Differential Mechanism", "Robotic Wrist", "Gear Layout", "Actuator Packaging"],
          gallery: [
            { src: "images/projects/differential-wrist/wrist.png", alt: "Differential wrist mechanism", caption: "Differential wrist mechanism CAD." }
          ],
          videos: []
        },
        {
          id: "gripper",
          title: "Gripper Development",
          role: "R&D Lead",
          description: "Led redesign of the rover gripper actuation mechanism to achieve faster operation while remaining compatible with available actuators, compact packaging requirements, and fabrication constraints.",
          tags: ["End Effector", "Gripper", "Actuation", "Mechanism Design"],
          gallery: [
            { src: "images/projects/gripper/gripper-1.png", alt: "Rover gripper mechanism", caption: "Rover gripper development view." },
            { src: "images/projects/gripper/gripper-2.png", alt: "Rover gripper alternate view", caption: "Additional gripper design view." }
          ],
          videos: []
        }
      ]
    },

    {
      id: "traffic-signal",
      title: "Intelligent Traffic Signal Controller Enclosure",
      category: "Electromechanical Packaging · Product Development",
      role: "Junior Mechanical Engineer",
      description: "Design mechanical components, mounting systems, and IP65 enclosures for traffic signal controllers and associated electronics, considering environmental protection, serviceability, manufacturability, assembly, and electrical integration.",
      tags: ["Sheet Metal", "IP65", "Electronics Packaging", "DFM", "SolidWorks"],
      image: "images/projects/traffic-signal/enclosure.png",
      gallery: [
        { src: "images/projects/traffic-signal/enclosure.png", alt: "Traffic signal controller enclosure", caption: "Controller enclosure design." },
        { src: "images/projects/traffic-signal/assembly.png", alt: "Traffic signal controller assembly", caption: "Enclosure assembly view." },
        { src: "images/projects/traffic-signal/layout.png", alt: "Internal equipment layout", caption: "Internal relay, controller, mounting, and wiring-space layout." }
      ],
      videos: [],
      links: [],
      detail: {
        question: "How can outdoor controller hardware be packaged for environmental protection, serviceability, electrical integration, and manufacturability?",
        approach: "Mechanical components, mounting systems, internal layouts, and enclosure features are developed as fabrication-ready designs for sheet metal, additive manufacturing, and other production processes.",
        contribution: "Design mechanical components and IP65-oriented enclosure systems, develop fabrication-ready CAD, and coordinate mechanical implementation with the multidisciplinary project team.",
        highlights: ["Outdoor enclosure design", "Electronics packaging", "Sheet metal", "Serviceability and DFM"],
        sections: [
          { title: "Public portfolio note", text: "Only publish images and technical details that you are permitted to share publicly. Internal or confidential project information should remain outside this portfolio." }
        ]
      }
    },
    {
      id: "suspension-fea",
      title: "Double Wishbone Suspension Structural Analysis",
      category: "Structural Simulation",
      role: "Academic Project",
      description: "Performed structural analysis under combined braking, cornering, and vertical loading, evaluating total deformation, equivalent stress, and factor of safety using ANSYS Mechanical.",
      tags: ["ANSYS Mechanical", "FEA", "Suspension", "Structural Analysis"],
      image: "images/projects/suspension/fea-1.png",
      gallery: [
        { src: "images/projects/suspension/fea-1.png", alt: "Suspension structural analysis result", caption: "ANSYS structural-analysis result." },
        { src: "images/projects/suspension/fea-2.png", alt: "Suspension factor-of-safety result", caption: "Additional structural / factor-of-safety result." }
      ],
      videos: [],
      links: [],
      detail: {
        question: "Where are the critical stress and deformation regions of a double-wishbone suspension under combined vehicle loading?",
        approach: "Combined braking, cornering, and vertical loads were applied in ANSYS Mechanical, with total deformation, equivalent stress, and factor of safety evaluated and compared with analytical considerations.",
        contribution: "Built the structural-analysis setup, evaluated critical regions, and interpreted the stress, deformation, and safety-factor results.",
        highlights: ["Combined loading", "Equivalent stress", "Total deformation", "Factor of safety"],
        sections: []
      }
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

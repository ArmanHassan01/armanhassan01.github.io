# Arman's Portfolio — Editing Guide

You normally edit **one file only**:

`js/portfolio-data.js`

The HTML/CSS/JS files control the design and should usually be left alone.

## What changed in this version

The homepage is now shorter. Research and engineering cards are clickable:

- Research → `research.html?id=...`
- Projects → `project.html?id=...`

The detail pages automatically read the selected item from `portfolio-data.js`. You do **not** create a new HTML page for every project.

## 1. Change basic information

Open `js/portfolio-data.js` and edit the `personal` section.

## 2. Change which research/projects appear first

Edit:

```js
featuredResearch: ["pdms-hbn", "mof-diffusion", "stanene-hbn"],
featuredProjects: ["prosthetic-wrist", "rover-arm", "cycloidal-gearbox"]
```

The IDs must match the `id` fields of the corresponding items.

## 3. Add or edit a research project

Inside `researchProjects`, copy an existing object and edit it.

Useful fields:

```js
{
  id: "unique-project-id",
  title: "Project title",
  type: "Ongoing Research",
  status: "Ongoing",
  summary: "Short homepage summary",
  methods: ["LAMMPS", "Python"],
  tags: ["Thermal Transport", "Molecular Dynamics"],
  image: "images/research/example/main.jpg",

  gallery: [
    {
      src: "images/research/example/main.jpg",
      alt: "Description for accessibility",
      caption: "Figure caption"
    }
  ],

  videos: [],
  links: [],

  detail: {
    question: "Main research question",
    approach: "How you approached it",
    contribution: "Your contribution",
    highlights: ["Highlight 1", "Highlight 2"],
    sections: [
      { title: "Results", text: "Short result discussion" }
    ]
  }
}
```

## 4. Add or edit an engineering project

Use the same idea inside `engineeringProjects`.

The homepage uses the short `description`. The full project page uses `detail`, `gallery`, `videos`, and `links`.

## 5. Add photos

Put images under a sensible folder, for example:

`images/projects/prosthetic/new-photo.jpg`

Then add them to the item's `gallery`:

```js
gallery: [
  { src: "images/projects/prosthetic/new-photo.jpg", alt: "Prosthetic hand", caption: "Prototype test" }
]
```

Visitors can click gallery images to open the full-screen lightbox.

## 6. Add a local MP4 video

Upload an MP4 file, for example:

`videos/prosthetic/grasp-demo.mp4`

Then add:

```js
videos: [
  {
    title: "Adaptive grasp demonstration",
    src: "videos/prosthetic/grasp-demo.mp4",
    caption: "Prototype grasping test"
  }
]
```

The video section automatically appears only when `videos` is not empty.

## 7. Add a YouTube video

Use the **embed** URL rather than the normal watch URL:

```js
videos: [
  {
    title: "Rover arm demonstration",
    embed: "https://www.youtube.com/embed/VIDEO_ID",
    caption: "Arm motion test"
  }
]
```

## 8. Add links to a project/research page

```js
links: [
  { label: "Publication DOI", url: "https://doi.org/..." },
  { label: "Paper", url: "https://..." }
]
```

Blank URLs are hidden.

## 9. Replace your CV

Replace:

`documents/Arman_Hassan_Academic_CV.pdf`

with the new PDF using the same filename, or change the CV path inside `personal.cv`.

## 10. Google Analytics

Inside `analytics` add your GA4 Measurement ID:

```js
measurementId: "G-XXXXXXXXXX"
```

The site remains fully functional if this is blank.

## 11. Updating GitHub

You only need to update GitHub for the live site. Common updates are:

- `js/portfolio-data.js` for text/content
- `images/` for new images
- `videos/` for new videos
- `documents/` for a new CV/paper

GitHub Pages redeploys after you commit the changes.


---

## Grouping related projects under one main project

Team Interplanetar is now stored as **one top-level project** in `js/portfolio-data.js`.

Inside the object with:

```js
id: "interplanetar"
```

you will see:

```js
subprojects: [
  {
    id: "rover-arm",
    title: "Robotic Arm Redesign",
    ...
  },
  {
    id: "cycloidal-gearbox",
    title: "Cycloidal Gearbox Development",
    ...
  }
]
```

### To edit an Interplanetar subsystem

Edit the corresponding object inside `subprojects`.

### To add another rover subsystem

Copy one complete subproject object, paste it inside the `subprojects` array, and change:

- `id`
- `title`
- `role`
- `description`
- `tags`
- `gallery`
- `videos`

### To link directly to a rover subsystem

Use a URL like:

```text
project.html?id=interplanetar#cycloidal-gearbox
```

or:

```text
project.html?id=interplanetar#differential-wrist
```

This keeps the homepage clean while still allowing a professor to jump directly to the most relevant mechanism.


---

## Animation level

This version uses the **Intermediate Motion** layer.

It includes:
- scroll reveal and staggered cards
- top reading-progress indicator
- active navigation highlighting
- count-up animation for numeric academic stats
- subtle hero portrait parallax on desktop
- cursor-follow lighting on important cards
- richer project-card hover states
- short page transitions into research/project case studies
- animated case-study sections
- refined lightbox opening
- subtle motion on the Materials → Mechanisms → Robotics bridge
- grouped Interplanetar subsystem motion

The motion layer does not change any portfolio content. Normal content is still edited in:

`js/portfolio-data.js`

If a visitor has “Reduce Motion” enabled, the site automatically removes the non-essential animations.


---

## Visual hierarchy in this build

The public website intentionally does **not** use visible section numbers, subsection numbers,
or project codes. Structural hierarchy is communicated through:

- white / light-blue alternating section backgrounds
- animated section dividers
- typography and spacing
- descriptive labels such as `Research output`, `Capabilities`, and `Subsystem`
- accent rails and short rules

Meaningful content numbers such as years, CGPA, class rank, DOI identifiers, and technical
measurements are still shown normally.

The `Where Materials Meet Mechanisms` lists use short cyan rule markers instead of ordinary
round bullet points.

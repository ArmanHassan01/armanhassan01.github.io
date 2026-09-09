# Arman Portfolio — Editing Guide

You normally edit only `js/portfolio-data.js`.

## 1. Change text
Open `js/portfolio-data.js` and edit text between quotation marks. Keep commas and quotation marks intact.

## 2. Replace your CV
Replace:
`documents/Arman_Hassan_Academic_CV.pdf`

Keep the same file name and you do not need to edit any code.

## 3. Replace your profile photo
Replace:
`images/profile/arman.jpg`

## 4. Add a research project
In `portfolio-data.js`, find `researchProjects`. Copy one full `{ ... }` project object, paste it below another one, and edit it. Give it a unique `id`.

Then add that id to `site.featuredResearch` if you want it near the top.

## 5. Add an engineering project
Find `engineeringProjects`, copy one project object, edit it, and add your image under `images/projects/`.

Add its id to `site.featuredProjects` if you want it shown first.

## 6. Add a publication
Find `publications`. Copy a publication object and change the title/authors/venue/DOI/URL.

## 7. Add social links
Find `links`. Paste your full LinkedIn / Scholar / GitHub / ORCID URLs. Blank links stay hidden.

## 8. Hide a section
Find `site.sections` and change a value from `true` to `false`.

## 9. Change which projects appear first
Edit the order inside:
- `site.featuredResearch`
- `site.featuredProjects`

This is useful when sending the site to different professors.

## 10. Add Google Analytics
1. Create a Google Analytics 4 property.
2. Create a Web data stream.
3. Copy your Measurement ID beginning with `G-`.
4. Open `js/portfolio-data.js`.
5. Find:
   `measurementId: ""`
6. Paste your ID:
   `measurementId: "G-XXXXXXXXXX"`
7. Commit the change on GitHub.
8. Open Google Analytics Realtime and visit your site to test it.

The Measurement ID is not a secret/password; web visitors can normally see it in page source.

## 11. Professor-specific tracking links
Use UTM parameters. Example:

`https://YOUR-USERNAME.github.io/?utm_source=email&utm_medium=phd_outreach&utm_campaign=fall2027&utm_content=prof_a`

Use a different `utm_content` value for each outreach link.

Examples:
- `prof_a`
- `prof_b`
- `mit_lab_1`
- `purdue_materials`

Do not put sensitive/private information in the UTM text because the URL may be logged by analytics and email systems.

## 12. Where to see location in GA4
Google Analytics can report approximate geography (such as country/region/city when available). It does not give you an exact physical address.

## 13. Publish after editing
On GitHub, editing and committing a file to the publishing branch will trigger a new GitHub Pages deployment. It can take a few minutes before the public site updates.

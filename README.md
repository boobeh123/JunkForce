## Description
A static webpage for JunkForce, a local business that removes waste & construction debris on the island of Oahu. JunkForce reuses and repurposes items and offers them at discount

## Features
* Static webpage deployed with Netlify
* Responsive to mobile viewports
* Accessible to screen readers / Semantic HTML & ARIA
* SEO Meta tags
* Functional Contact Form w/ Success&Failure to send toast(s)
* WebP image format

## Optimizations
* (Need customer approval) Integrate a server witha database to submit images with contact form, incoming/outgoing email templates.
* Styling
* More accurate/human reading text content for the business

## Technologies
<img src="https://profilinator.rishav.dev/skills-assets/html5-original-wordmark.svg" alt="HTML5" height="50" /><img src="https://profilinator.rishav.dev/skills-assets/css3-original-wordmark.svg" alt="CSS3" height="50" /><img src="https://profilinator.rishav.dev/skills-assets/javascript-original.svg" alt="JavaScript" height="40" /><img src="https://img.shields.io/badge/bulma%20-00D1B2.svg?&style=for-the-badge&logo=bulma&logoColor=white">

## Version History
---------------------------------------------------------------------------------------------------------------------------
# 🛠️ JunkForce Patch 0.2 — Catching up
📅 **Release Date:** July 11th & 12th, 2025

---

## 📢 Developer's Notes - **Revert back to masonry gallery, logo updates, small detail/bug fixes**

- I liked how the masonry gallery filled the page more versus a carousel
    - I did keep the dynamic images from the carousel and used it to populated images randomly onto the masonry gallery
- I changed the color of the logo to green
    - The logo was rotated and flipped to face left
- I noticed early on that the skewing was a few degrees off, and if your viewport is wide enough you could see the overlapping background colors
    - I lowered the skew by a quarter and it looks much better, for a slight change
- I tried animating the wheels on our logo with `@keyframes` & the `rotate()` function
    
![I created something not from this planet](/tires.gif)

---------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------
# 🛠️ JunkForce Patch 0.1 — Frontend changes
📅 **Release Date:** July 9th & 10th, 2025

---

## 📢 Developer's Notes - **AOS Library, Font changes, gallery changes, organize stylesheets**

- My deadline for this project is coming up and I haven't done much since my initial commit
    - I forgot to mention this on the initial commmit, but I am using the <a href="https://bulma.io/">Bulma</a> framework to style this website
- Added AOS library for scrolling effects 
- Changed font from Inter to Roboto
- Changed masonry gallery format to a glider.js carousel
    - Carousel will display all photos randomly once, before replaying
- Added comments to the stylesheets to organize my sections
    - Still need to clean up media queries & apply DRY principles  

---------------------------------------------------------------------------------------------------------------------------
# 🛠️ JunkForce Patch 0 — First customer as a freelance web dev
📅 **Release Date:** July 8th, 2025

---

## 📢 Developer's Notes - **Initial commit, deploy to Netlify, seamless skew transitions & parallax**

- The text content on this webpage is what the customer emailed. This is the first iteration of many and the start of a freelancing web dev
- I changed the layout design to go from a 50/50 text/hero-img section to a full background hero image with parallax scrolling
- I took a try at seamless skew transitioning layouts. I like it and it's simple once you understand to skew the bottom with one color, and fill in the following section with the same color
- Contact Form is live and the business owner will receive user feedback
  

---------------------------------------------------------------------------------------------------------------------------

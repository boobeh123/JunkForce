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
# 🛠️ JunkForce Patch 0.4 — Cross-browser testing & Accessibility testing
📅 **Release Date:** July 13th, 2025

---

## 📢 Developer's Notes - **Using BrowserStack for cross-browser testing & Google LightHouse Scoring**

- The favicon/logo.svg files still had the blue logo and now it's green
- Signed up with BrowserStack to conduct Cross-Browser Testing using their free tier
    - May utilize SauceLabs & Lamdatest free tiers if needed with this/future projects
    - Testingss on latest Chrome, FireFox, Safari, Edge, Mobile Safari, Mobile Chrome
        - Test form submissions across these browsers
        - Test image loading & image clicks across these browsers
        - Test Mobile menu toggles across these browsers
        - Test Buttons across these browsers
        - Observe layout or image loading problems
- There's about 6 (small) optimizations I can make for a perfect score:
![lighthouse](/Junkforce-lighthouse-score.png)

---------------------------------------------------------------------------------------------------------------------------
# 🛠️ JunkForce Patch 0.3 — Caught up
📅 **Release Date:** July 12th, 2025

---

## 📢 Developer's Notes - **Semantic html, Form Input validation, Rename all images, privacy policy & terms of service page,**

- I am waiting for feedback from the customer and decided to leave this as my final-final draft
    - Updated Semantic HTML elements across all `.html` files
    - Updated ARIA labels/roles across all `.html` files
    - Added input validation to the contact form inputs
- Added a privacy policy & TOS page-- the only data collected is from our contact form
    - There is no backend & no database on this website, so no data/collected is being stored in that sense
- Cleaned up some comments so the code looks cleaner
- Fixed a bug with the hamburger menu
    - Clicking a link from the hamburger menu, didn't close the menu
- Made the font-color darker so it is more visible/legible
- I (manually) renamed most of the images as text that describes the photo
    - I am extracting the file name (description) and storing the description as the image's alt text
- Added a spinner to the submit button when submitting a form

---------------------------------------------------------------------------------------------------------------------------
# 🛠️ JunkForce Patch 0.2 — Catching up
📅 **Release Date:** July 11th & 12th, 2025

---

## 📢 Developer's Notes - **Revert back to masonry gallery, logo updates, small detail/bug fixes**

- I liked how the masonry gallery filled the page more versus a carousel
    - Kept the dynamic images from the carousel and used it to populate images randomly onto the masonry gallery
- Changed the color of the logo to green
    - The logo was rotated and flipped to face left
- Noticed early on that the skewing was a few degrees off, and if your viewport is wide enough you could see the overlapping background colors
    - Lowered the skew by a quarter and it looks much better, for a slight change
- Tried animating the wheels on our logo with `@keyframes` & the `rotate()` function
    
![I created something not from this planet](/tires.gif)

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

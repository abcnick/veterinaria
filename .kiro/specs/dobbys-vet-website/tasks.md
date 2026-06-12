# Implementation Plan: Dobby's Vet Portfolio Website

## Overview

Sitio web estático single-page profesional para Dobby's Vet utilizando HTML5, CSS3 y JavaScript vanilla. La implementación sigue un enfoque incremental: estructura base → estilos → interactividad → contenido final → validación.

## Tasks

- [x] 1. Set up project structure and base files
  - [x] 1.1 Create directory structure and base HTML document
    - Create `index.html` with HTML5 doctype, semantic structure, meta tags (viewport, charset, description), and links to `styles.css` and `main.js`
    - Create empty `styles.css` and `main.js` files
    - Create `images/` directory with a placeholder README
    - Create `ATTRIBUTIONS.md` with table template for image credits
    - Create `README.md` with deployment instructions for Netlify/Cloudflare Pages
    - All resource references must use relative paths
    - _Requirements: 6.1, 6.5_

  - [x] 1.2 Define CSS custom properties and base styles
    - Define color palette variables: `--color-primary: #4CAF50`, `--color-secondary: #64B5F6`, white, text, background
    - Define typography variables with Google Fonts (Inter) import and fallback font stack
    - Set `font-size-base: 16px` with clamp() for headings
    - Define transition speed, nav height, and breakpoint variables
    - Add CSS reset/normalize and base element styles
    - Set `scroll-behavior: smooth` on html
    - _Requirements: 1.2, 1.5, 7.2_

- [x] 2. Implement Header and Navigation
  - [x] 2.1 Create fixed navigation header HTML and CSS
    - Add `<header>` with `role="banner"` and `<nav>` with `role="navigation"` and `aria-label`
    - Include logo/brand link, hamburger toggle button with `aria-expanded`, `aria-controls`, `aria-label`
    - Add `<ul>` menu with links to #hero, #about, #services, #contact with `role="menubar"` and `role="menuitem"`
    - Style nav as fixed top with high z-index, responsive layout
    - At ≤768px: hide menu, show hamburger button
    - At >768px: show full horizontal menu, hide hamburger
    - Ensure keyboard navigation with visible focus styles on all interactive elements
    - _Requirements: 7.1, 7.4, 7.7, 1.3_

  - [x] 2.2 Implement hamburger menu toggle in JavaScript
    - In `main.js`, add event listener on hamburger button to toggle menu visibility
    - Toggle `aria-expanded` attribute between "true"/"false"
    - Add slide-down animation via CSS class toggle
    - Close menu when a nav link is clicked (mobile)
    - _Requirements: 7.5, 7.6_

- [x] 3. Implement Hero Section
  - [x] 3.1 Create Hero section HTML and CSS
    - Add `<section id="hero">` with overlay div and content container
    - Include `<h1>` for professional name, `<p>` for title (Médica Veterinaria)
    - Add specialty badge element for "Especialista en Bienestar Animal" with visual differentiator (background color/badge style)
    - Add CTA button linking to #contact
    - Style hero to 100vh on desktop (≥1366x768), background image with semitransparent overlay
    - Implement typographic hierarchy: name > titles > specialty
    - Ensure text is readable over background image
    - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5_

  - [x] 3.2 Add hero background image with proper optimization
    - Source a royalty-free image from Unsplash/Pexels related to veterinary/animal welfare
    - Optimize to WebP format, max 200KB, min 400x300px resolution
    - Use `<picture>` element or CSS background with fallback to JPEG
    - Add `alt` attribute or appropriate aria labeling
    - Document source, author, and license in `ATTRIBUTIONS.md`
    - _Requirements: 2.3, 5.1, 5.2, 5.3_

- [x] 4. Implement About Section
  - [x] 4.1 Create About Me section HTML and CSS
    - Add `<section id="about">` with heading and professional biography content
    - Structure content with semantic HTML (paragraphs, lists as appropriate)
    - Style with responsive layout, readable line length, proper spacing
    - Ensure section is part of the single-page navigation flow
    - _Requirements: 1.1, 1.3_

- [x] 5. Checkpoint - Verify base structure and navigation
  - Ensure all sections are accessible via navigation links, responsive layout works at 768px and 1024px breakpoints, and the hero is fully visible without scroll on 1366x768. Ask the user if questions arise.

- [x] 6. Implement Services Section with Accordion
  - [x] 6.1 Create Services section HTML structure
    - Add `<section id="services">` with heading and grid/list of service cards
    - Include veterinary services (icon: 🐾, class `--vet`)
    - Each service card has a `<button>` header with `aria-expanded="false"`, `aria-controls`, unique `id`
    - Each service card has a content `<div>` with `role="region"`, `aria-labelledby`, and `hidden` attribute
    - Add chevron indicator for expand/collapse state
    - Include descriptive content for each service
    - _Requirements: 3.1, 3.4, 3.5, 3.6_

  - [x] 6.2 Style Services section with responsive grid and visual differentiation
    - Style service cards with green accent (primary color) for all veterinary services
    - Add transition animations (max 300ms) for expand/collapse
    - Responsive grid: single column on mobile, multi-column on tablet/desktop
    - Style expanded vs collapsed states with chevron rotation
    - Ensure minimum touch target size for mobile
    - _Requirements: 3.2, 3.3, 3.5, 1.3_

  - [x] 6.3 Implement accordion JavaScript functionality
    - Create accordion module in `main.js` with init(), toggle(), expand(), collapse() functions
    - Add click event listeners on all service card buttons
    - Toggle `aria-expanded` and `hidden` attributes on click
    - Allow multiple services to be expanded simultaneously (independent accordion)
    - Support keyboard interaction: Enter and Space to toggle, Tab to navigate between services
    - Apply `hidden` attribute via JS after DOMContentLoaded (graceful degradation if JS disabled)
    - _Requirements: 3.2, 3.3, 3.4, 3.6_

- [x] 7. Implement Contact Section
  - [x] 7.1 Create Contact section HTML and CSS
    - Add `<section id="contact">` as last section before footer
    - Add email link with `href="mailto:"` and representative icon (✉️ or SVG)
    - Add phone link with `href="tel:"` and phone icon
    - Add social media links (Instagram, LinkedIn) with SVG icons and `aria-label` descriptors
    - Style with minimum 16px text, clear visual hierarchy, responsive layout
    - Position as last section before footer
    - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5_

- [x] 8. Implement Footer
  - [x] 8.1 Create footer with credits and attribution link
    - Add `<footer>` with copyright notice and optional link to credits/attributions
    - If any image requires visible attribution, include credit in footer or accessible section
    - Style consistently with site design
    - _Requirements: 5.3_

- [x] 9. Checkpoint - Verify all sections and interactivity
  - Ensure accordion works correctly (expand/collapse, multiple open, keyboard), contact links are functional (mailto, tel), and all ARIA attributes are correctly set. Ask the user if questions arise.

- [x] 10. Implement Intersection Observer for active navigation
  - [x] 10.1 Add Intersection Observer to highlight active nav link
    - Create navigation observer module in `main.js`
    - Observe all sections (hero, about, services, contact)
    - Update `nav__link--active` class on the corresponding menu link when a section enters the viewport
    - Add feature detection: if IntersectionObserver is not supported, skip (navigation still works without highlighting)
    - _Requirements: 7.3_

- [x] 11. Final polish and optimization
  - [x] 11.1 Add smooth scroll behavior and CTA functionality
    - Ensure CTA button in hero scrolls smoothly to contact section
    - Verify smooth scroll on all nav links works within 800ms
    - Add CSS `scroll-behavior: smooth` as primary mechanism with JS fallback
    - Add `scroll-margin-top` on sections to account for fixed nav height
    - _Requirements: 2.4, 7.2_

  - [x] 11.2 Verify responsive design and performance optimization
    - Test and adjust layout at 768px (tablet) and 1024px (desktop) breakpoints
    - Ensure no content loss at any breakpoint
    - Verify all images are optimized (WebP/JPEG, <200KB each, max 10 total)
    - Verify Google Fonts loads with proper fallback
    - Ensure all paths are relative for platform-agnostic deployment
    - _Requirements: 1.3, 1.4, 5.2, 5.4, 6.2, 6.4, 6.5_

  - [x] 11.3 Run accessibility and validation checks
    - Validate HTML with W3C validator (no errors)
    - Verify ARIA attributes are correct and complete
    - Check color contrast meets WCAG AA (4.5:1 for normal text)
    - Verify keyboard navigation through entire page
    - Run Lighthouse for performance (≥90) and accessibility (≥95) scores
    - _Requirements: 1.4, 3.4, 7.7_

- [x] 12. Final checkpoint - Ensure all tests pass
  - Ensure all sections render correctly, navigation is fully functional, accordion works on all devices, contact links work, images load properly, and the site is ready for static deployment. Ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP
- Each task references specific requirements for traceability
- Checkpoints ensure incremental validation
- No property-based tests are included as the design explicitly states PBT is not applicable for this static site project
- Unit/integration tests are recommended via Playwright or Cypress but are not blocking tasks since the project is a simple static site
- All images must be sourced from royalty-free platforms (Unsplash, Pexels) and documented in ATTRIBUTIONS.md

## Task Dependency Graph

```json
{
  "waves": [
    { "id": 0, "tasks": ["1.1"] },
    { "id": 1, "tasks": ["1.2"] },
    { "id": 2, "tasks": ["2.1", "4.1"] },
    { "id": 3, "tasks": ["2.2", "3.1"] },
    { "id": 4, "tasks": ["3.2", "6.1"] },
    { "id": 5, "tasks": ["6.2", "6.3", "7.1"] },
    { "id": 6, "tasks": ["8.1", "10.1"] },
    { "id": 7, "tasks": ["11.1", "11.2"] },
    { "id": 8, "tasks": ["11.3"] }
  ]
}
```

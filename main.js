// InstintiaVet — Main JavaScript

/**
 * Navigation Module
 * Handles mobile hamburger menu toggle and close-on-link-click behavior.
 */
const Navigation = (() => {
  let menuToggle;
  let navMenu;
  let navLinks;

  function init() {
    menuToggle = document.querySelector('.nav__toggle');
    navMenu = document.getElementById('nav-menu');
    navLinks = document.querySelectorAll('.nav__link');

    if (!menuToggle || !navMenu) return;

    menuToggle.addEventListener('click', toggleMobileMenu);

    navLinks.forEach((link) => {
      link.addEventListener('click', closeMobileMenu);
    });
  }

  function toggleMobileMenu() {
    const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';

    if (isExpanded) {
      closeMobileMenu();
    } else {
      menuToggle.setAttribute('aria-expanded', 'true');
      menuToggle.setAttribute('aria-label', 'Cerrar menú');
      navMenu.classList.add('nav__menu--open');
    }
  }

  function closeMobileMenu() {
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Abrir menú');
    navMenu.classList.remove('nav__menu--open');
  }

  return { init };
})();

/**
 * Accordion Module
 * Handles expand/collapse of service cards with independent accordion behavior.
 * Supports graceful degradation: if JS is disabled, content remains visible.
 */
const Accordion = (() => {
  let buttons;

  function init() {
    buttons = document.querySelectorAll('.service-card__header');

    if (!buttons.length) return;

    // Apply hidden attribute via JS for graceful degradation
    buttons.forEach((button) => {
      const contentId = button.getAttribute('aria-controls');
      const content = document.getElementById(contentId);
      if (content) {
        content.setAttribute('hidden', '');
        button.setAttribute('aria-expanded', 'false');
      }
    });

    // Add click listeners
    buttons.forEach((button) => {
      button.addEventListener('click', () => toggle(button));
    });
  }

  function toggle(button) {
    const contentId = button.getAttribute('aria-controls');
    const content = document.getElementById(contentId);
    if (!content) return;

    const isExpanded = button.getAttribute('aria-expanded') === 'true';

    if (isExpanded) {
      collapse(button, content);
    } else {
      expand(button, content);
    }
  }

  function expand(button, content) {
    button.setAttribute('aria-expanded', 'true');
    content.removeAttribute('hidden');
    content.classList.add('service-card__body--open');
  }

  function collapse(button, content) {
    button.setAttribute('aria-expanded', 'false');
    content.setAttribute('hidden', '');
    content.classList.remove('service-card__body--open');
  }

  return { init, toggle, expand, collapse };
})();

/**
 * ActiveNav Module
 * Highlights the corresponding navigation link when a section enters the viewport.
 * Uses IntersectionObserver with graceful degradation for unsupported browsers.
 */
const ActiveNav = (() => {
  function init() {
    // Feature detection: skip if IntersectionObserver is not supported
    if (!('IntersectionObserver' in window)) return;

    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav__link');

    if (!sections.length || !navLinks.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach((link) => {
            link.classList.remove('nav__link--active');
            if (link.getAttribute('href') === `#${id}`) {
              link.classList.add('nav__link--active');
            }
          });
        }
      });
    }, {
      rootMargin: '-20% 0px -70% 0px' // Active when section is in top ~30% of viewport
    });

    sections.forEach((section) => observer.observe(section));
  }

  return { init };
})();

/**
 * SmoothScroll Module
 * Provides JS-based smooth scrolling as a fallback for browsers that do not
 * support CSS scroll-behavior: smooth. Also ensures anchor clicks on nav links
 * and the CTA button scroll correctly accounting for fixed nav offset.
 */
const SmoothScroll = (() => {
  function init() {
    // Only apply JS fallback if CSS scroll-behavior is NOT supported
    if (cssScrollBehaviorSupported()) return;

    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach((anchor) => {
      anchor.addEventListener('click', handleAnchorClick);
    });
  }

  function cssScrollBehaviorSupported() {
    return 'scrollBehavior' in document.documentElement.style;
  }

  function handleAnchorClick(event) {
    const href = event.currentTarget.getAttribute('href');
    if (!href || href === '#') return;

    const target = document.querySelector(href);
    if (!target) return;

    event.preventDefault();

    const navHeight = parseInt(
      getComputedStyle(document.documentElement).getPropertyValue('--nav-height'),
      10
    ) || 64;

    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;

    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  }

  return { init };
})();

// Initialize all modules on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  Navigation.init();
  Accordion.init();
  ActiveNav.init();
  SmoothScroll.init();
});

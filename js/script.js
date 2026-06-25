/* ============================================
   DecodeLabs — Project 1
   Vanilla JavaScript — Interactivity & State
   ============================================ */

'use strict';

document.addEventListener('DOMContentLoaded', () => {

  /* ── Mobile Navigation Toggle ── */
  const navToggle = document.getElementById('nav-toggle');
  const mainNav = document.getElementById('main-nav');

  if (navToggle && mainNav) {
    navToggle.addEventListener('click', () => {
      const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!isOpen));
      mainNav.classList.toggle('is-open');
    });

    // Close nav when a link is clicked (mobile)
    mainNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navToggle.setAttribute('aria-expanded', 'false');
        mainNav.classList.remove('is-open');
      });
    });

    // Close nav on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mainNav.classList.contains('is-open')) {
        navToggle.setAttribute('aria-expanded', 'false');
        mainNav.classList.remove('is-open');
        navToggle.focus();
      }
    });
  }

  /* ── Active Navigation Link ── */
  const navLinks = document.querySelectorAll('.nav-list a');
  const sections = document.querySelectorAll('section[id]');

  const setActiveLink = () => {
    const scrollY = window.scrollY + 100;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollY >= top && scrollY < top + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  };

  if (sections.length > 0 && navLinks.length > 0) {
    window.addEventListener('scroll', setActiveLink, { passive: true });
    setActiveLink();
  }

  /* ── Scroll-based Header Shadow ── */
  const header = document.querySelector('.site-header');

  if (header) {
    const toggleHeaderShadow = () => {
      if (window.scrollY > 10) {
        header.style.boxShadow = '0 2px 12px rgba(0, 0, 0, 0.06)';
      } else {
        header.style.boxShadow = 'none';
      }
    };

    window.addEventListener('scroll', toggleHeaderShadow, { passive: true });
    toggleHeaderShadow();
  }

  /* ── Current Year in Footer ── */
  const yearElement = document.getElementById('current-year');

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

});

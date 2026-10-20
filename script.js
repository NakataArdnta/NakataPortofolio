/**
 * ==========================================================================
 * SCRIPT.JS - INTERAKSI VANILLA JAVASCRIPT UNTUK PORTFOLIO NAKATA ARDINATA
 * ==========================================================================
 * Berisi logika rendering data dari config.js, tema dark/light,
 * navigasi mobile, smooth scrolling, dan interaksi copy email.
 * ==========================================================================
 */

(function () {
  "use strict";

  // Pastikan konfigurasi tersedia
  const config = window.PORTFOLIO_CONFIG || {};

  // ------------------------------------------------------------------------
  // 1. IKON SVG SEDERHANA (TIDAK MEMERLUKAN LIBRARY EKSTERNAL)
  // ------------------------------------------------------------------------
  const ICONS = {
    moon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`,
    sun: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`,
    code: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
    palette: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>`,
    cpu: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/></svg>`,
    server: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect width="20" height="8" x="2" y="14" rx="2" ry="2"/><line x1="6" x2="6.01" y1="6" y2="6"/><line x1="6" x2="6.01" y1="18" y2="18"/></svg>`,
    box: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>`,
    terminal: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" x2="20" y1="19" y2="19"/></svg>`,
    project: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`,
    external: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>`,
    github: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>`,
    instagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>`,
    linkedin: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>`,
    copy: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>`,
    check: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
    mail: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,
    arrowUp: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"/></svg>`
  };

  // ------------------------------------------------------------------------
  // 2. SISTEM TEMA (DARK / LIGHT) & LOCALSTORAGE
  // ------------------------------------------------------------------------
  function initTheme() {
    const savedTheme = config.theme?.saveToLocalStorage ? localStorage.getItem("nakata_theme") : null;
    const initialTheme = savedTheme || config.theme?.defaultTheme || "dark";
    
    setTheme(initialTheme);

    const themeBtn = document.getElementById("theme-toggle-btn");
    if (themeBtn) {
      themeBtn.addEventListener("click", () => {
        const currentTheme = document.documentElement.getAttribute("data-theme") || "dark";
        const newTheme = currentTheme === "dark" ? "light" : "dark";
        setTheme(newTheme);
      });
    }
  }

  function setTheme(themeName) {
    document.documentElement.setAttribute("data-theme", themeName);
    
    if (config.theme?.saveToLocalStorage) {
      localStorage.setItem("nakata_theme", themeName);
    }

    const themeBtn = document.getElementById("theme-toggle-btn");
    if (themeBtn) {
      themeBtn.innerHTML = themeName === "dark" ? ICONS.sun : ICONS.moon;
      themeBtn.setAttribute("aria-label", themeName === "dark" ? "Ganti ke mode terang (Light)" : "Ganti ke mode gelap (Dark)");
      themeBtn.setAttribute("title", themeName === "dark" ? "Mode Terang" : "Mode Gelap");
    }

    // Aksen warna kustom jika ada
    if (config.theme?.accentColor) {
      document.documentElement.style.setProperty("--accent-primary", config.theme.accentColor);
    }
  }

  // ------------------------------------------------------------------------
  // 3. RENDERING KONTEN DINAMIS DARI CONFIG.JS
  // ------------------------------------------------------------------------
  function renderContent() {
    const personal = config.personal || {};
    const about = config.about || {};
    const contact = config.contact || {};
    const footer = config.footer || {};

    // A. Identitas Diri & Hero
    setText("logo-text", personal.username || "Nakata");
    setText("hero-name", personal.name || "Nakata Ardinata");
    setText("hero-tagline", personal.tagline || "Exploring Technology, Building Ideas.");
    setText("hero-subtitle", personal.subtitle || "");
    setText("status-badge-text", personal.statusBadge || "Open to Learn");

    // Foto Profil
    const avatarEl = document.getElementById("hero-avatar-img");
    if (avatarEl) {
      avatarEl.src = personal.avatarUrl || "assets/profile.svg";
      avatarEl.alt = "Foto profil " + (personal.name || "Nakata Ardinata");
      avatarEl.onerror = function () {
        // Fallback jika file gambar tidak ditemukan
        this.src = "assets/profile.svg";
      };
    }

    // B. About Me
    const aboutTextContainer = document.getElementById("about-text-container");
    if (aboutTextContainer && about.paragraphs) {
      aboutTextContainer.innerHTML = about.paragraphs
        .map(p => `<p>${escapeHTML(p)}</p>`)
        .join("");
    }

    // Quick Facts
    const factsContainer = document.getElementById("about-facts-container");
    if (factsContainer && about.quickFacts) {
      factsContainer.innerHTML = about.quickFacts
        .map(fact => `
          <div class="fact-item">
            <div class="fact-label">${escapeHTML(fact.label)}</div>
            <div class="fact-value">${escapeHTML(fact.value)}</div>
          </div>
        `).join("");
    }

    // C. Skills
    renderSkills();

    // D. Projects
    renderProjects();

    // E. Contact & Email
    const emailTextEl = document.getElementById("contact-email-text");
    const mailtoBtn = document.getElementById("contact-mailto-btn");
    const contactDescEl = document.getElementById("contact-desc");

    if (contactDescEl && contact.message) {
      contactDescEl.textContent = contact.message;
    }

    if (emailTextEl) {
      emailTextEl.textContent = contact.email || "Belum ada email yang diatur";
    }

    if (mailtoBtn && contact.email) {
      mailtoBtn.href = `mailto:${contact.email}?subject=Halo%20Nakata%20Ardinata`;
    }

    // Media Sosial
    renderSocials();

    // F. Footer
    const currentYear = new Date().getFullYear();
    const copyrightName = footer.copyrightName || personal.name || "Nakata Ardinata";
    setText("footer-copyright", `© ${currentYear} ${copyrightName}. All rights reserved.`);
    setText("footer-caption", footer.caption || "");
  }

  // ------------------------------------------------------------------------
  // 4. RENDER DAFTAR SKILLS
  // ------------------------------------------------------------------------
  function renderSkills() {
    const container = document.getElementById("skills-grid-container");
    if (!container) return;

    const skills = config.skills || [];
    if (skills.length === 0) {
      container.innerHTML = `<p class="empty-state">Belum ada skill yang ditambahkan di config.js</p>`;
      return;
    }

    container.innerHTML = skills.map(skill => {
      const iconSVG = ICONS[skill.icon] || ICONS.code;
      return `
        <div class="skill-card">
          <div class="skill-top">
            <div class="skill-icon-wrapper" aria-hidden="true">
              ${iconSVG}
            </div>
            <span class="skill-category">${escapeHTML(skill.category || "Skill")}</span>
          </div>
          <h3 class="skill-name">${escapeHTML(skill.name)}</h3>
          <p class="skill-note">${escapeHTML(skill.note || "")}</p>
        </div>
      `;
    }).join("");
  }

  // ------------------------------------------------------------------------
  // 5. RENDER DAFTAR PROJECTS (DENGAN SAFE DISABLE JIKA TIDAK ADA LINK)
  // ------------------------------------------------------------------------
  function renderProjects() {
    const container = document.getElementById("projects-grid-container");
    if (!container) return;

    const projects = config.projects || [];
    if (projects.length === 0) {
      container.innerHTML = `<p class="empty-state">Belum ada project yang ditambahkan di config.js</p>`;
      return;
    }

    container.innerHTML = projects.map(proj => {
      const hasDemo = Boolean(proj.demoUrl && proj.demoUrl.trim().length > 0);
      const hasSource = Boolean(proj.sourceUrl && proj.sourceUrl.trim().length > 0);

      const demoBtn = hasDemo
        ? `<a href="${escapeHTML(proj.demoUrl)}" class="btn btn-primary project-btn" target="${proj.demoUrl.startsWith('#') ? '_self' : '_blank'}" rel="noopener noreferrer">Demo</a>`
        : `<button class="btn btn-disabled project-btn" disabled title="Tautan demo belum tersedia">Demo</button>`;

      const sourceBtn = hasSource
        ? `<a href="${escapeHTML(proj.sourceUrl)}" class="btn btn-secondary project-btn" target="_blank" rel="noopener noreferrer">Source Code</a>`
        : `<button class="btn btn-disabled project-btn" disabled title="Repositori belum dipublikasikan">Source Code</button>`;

      const tagsHtml = (proj.tags || [])
        .map(tag => `<span class="project-tag">${escapeHTML(tag)}</span>`)
        .join("");

      return `
        <article class="project-card">
          <div class="project-preview">
            <div class="project-preview-icon" aria-hidden="true">${ICONS.project}</div>
            <span class="project-status-badge">${escapeHTML(proj.status || "Project")}</span>
          </div>
          <div class="project-body">
            <h3 class="project-title">${escapeHTML(proj.title)}</h3>
            <p class="project-desc">${escapeHTML(proj.description)}</p>
            <div class="project-tags">${tagsHtml}</div>
            <div class="project-actions">
              ${demoBtn}
              ${sourceBtn}
            </div>
          </div>
        </article>
      `;
    }).join("");
  }

  // ------------------------------------------------------------------------
  // 6. RENDER MEDIA SOSIAL
  // ------------------------------------------------------------------------
  function renderSocials() {
    const container = document.getElementById("socials-container");
    if (!container) return;

    const contact = config.contact || {};
    const items = [];

    if (contact.github) {
      items.push({ name: "GitHub", url: contact.github, icon: ICONS.github });
    }
    if (contact.instagram) {
      items.push({ name: "Instagram", url: contact.instagram, icon: ICONS.instagram });
    }
    if (contact.linkedin) {
      items.push({ name: "LinkedIn", url: contact.linkedin, icon: ICONS.linkedin });
    }

    if (items.length === 0) {
      container.innerHTML = "";
      return;
    }

    container.innerHTML = items.map(item => `
      <li>
        <a href="${escapeHTML(item.url)}" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="Kunjungi profil ${item.name} Nakata">
          ${item.icon}
        </a>
      </li>
    `).join("");
  }

  // ------------------------------------------------------------------------
  // 7. INTERAKSI: SALIN EMAIL KE CLIPBOARD
  // ------------------------------------------------------------------------
  function initCopyEmail() {
    const copyBtn = document.getElementById("copy-email-btn");
    if (!copyBtn) return;

    copyBtn.addEventListener("click", () => {
      const email = config.contact?.email;
      if (!email) return;

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(email).then(showCopiedState).catch(fallbackCopy);
      } else {
        fallbackCopy();
      }

      function showCopiedState() {
        copyBtn.innerHTML = `${ICONS.check} Tersalin!`;
        copyBtn.classList.add("copied");
        setTimeout(() => {
          copyBtn.innerHTML = `${ICONS.copy} Salin Email`;
          copyBtn.classList.remove("copied");
        }, 2200);
      }

      function fallbackCopy() {
        const tempInput = document.createElement("input");
        tempInput.value = email;
        document.body.appendChild(tempInput);
        tempInput.select();
        try {
          document.execCommand("copy");
          showCopiedState();
        } catch (e) {
          console.error("Gagal menyalin email", e);
        }
        document.body.removeChild(tempInput);
      }
    });
  }

  // ------------------------------------------------------------------------
  // 8. INTERAKSI: HAMBURGER & NAVIGASI MOBILE
  // ------------------------------------------------------------------------
  function initNavigation() {
    const hamburgerBtn = document.getElementById("hamburger-btn");
    const mobileNav = document.getElementById("mobile-nav");
    const navLinks = document.querySelectorAll(".nav-link, .mobile-nav-link");

    if (hamburgerBtn && mobileNav) {
      hamburgerBtn.addEventListener("click", () => {
        const isOpen = hamburgerBtn.classList.toggle("active");
        mobileNav.classList.toggle("open", isOpen);
        hamburgerBtn.setAttribute("aria-expanded", String(isOpen));
      });

      // Tutup saat link diklik
      navLinks.forEach(link => {
        link.addEventListener("click", () => {
          hamburgerBtn.classList.remove("active");
          mobileNav.classList.remove("open");
          hamburgerBtn.setAttribute("aria-expanded", "false");
        });
      });

      // Tutup dengan tombol Escape
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && mobileNav.classList.contains("open")) {
          hamburgerBtn.classList.remove("active");
          mobileNav.classList.remove("open");
          hamburgerBtn.setAttribute("aria-expanded", "false");
          hamburgerBtn.focus();
        }
      });
    }

    // ScrollSpy / Active indicator menggunakan IntersectionObserver
    initScrollSpy();

    // Tombol Kembali Ke Atas (Back to Top)
    const backToTopBtn = document.getElementById("back-to-top-btn");
    if (backToTopBtn) {
      backToTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }
  }

  function initScrollSpy() {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-link");

    if (!window.IntersectionObserver || sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            navLinks.forEach((link) => {
              const href = link.getAttribute("href");
              if (href === `#${id}`) {
                link.classList.add("active");
              } else {
                link.classList.remove("active");
              }
            });
          }
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );

    sections.forEach((sec) => observer.observe(sec));
  }

  // ------------------------------------------------------------------------
  // UTILITAS HELPER
  // ------------------------------------------------------------------------
  function setText(id, text) {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  }

  function escapeHTML(str) {
    if (!str) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  // ------------------------------------------------------------------------
  // INISIALISASI SAAT DOM SIAP
  // ------------------------------------------------------------------------
  document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    renderContent();
    initCopyEmail();
    initNavigation();
  });
})();

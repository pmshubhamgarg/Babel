/* ==========================================================================
   BABEL V2 — Shared application script
   Shell rendering, navigation, tabs, overlays, AI mock helpers
   ========================================================================== */

/* ---------- 1. SVG library ---------- */
const ICONS = {
  launch:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 17l4-4 3 3 7-8"/><circle cx="19" cy="5" r="1.5" fill="currentColor"/></svg>',
  brain:     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3"/><path d="M12 5a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3"/><path d="M9 10H7a2 2 0 0 0 0 4h2"/><path d="M15 10h2a2 2 0 0 1 0 4h-2"/></svg>',
  bolt:      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z"/></svg>',
  brief:     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 8h8M8 12h8M8 16h5"/></svg>',
  bell:      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10 21a2 2 0 0 0 4 0"/></svg>',
  search:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="m21 21-5-5"/></svg>',
  settings:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',
  caret:     '<svg viewBox="0 0 10 6" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M1 1l4 4 4-4"/></svg>',
  arrow:     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>',
  check:     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12l5 5L20 6"/></svg>',
  close:     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>',
  sparkles:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l1.8 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.2-1.8L12 3z"/><path d="M19 14l.9 2.1L22 17l-2.1.9L19 20l-.9-2.1L16 17l2.1-.9L19 14z"/></svg>',
  filter:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 5h18l-7 9v6l-4-2v-4z"/></svg>',
  refresh:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-3-6.7L21 8"/><path d="M21 3v5h-5"/></svg>',
  download:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4v12m0 0l-4-4m4 4l4-4"/><path d="M4 18v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"/></svg>',
  send:      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 2L11 13"/><path d="M22 2l-7 20-4-9-9-4 20-7z"/></svg>',
  edit:      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>',
  alert:     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 9v4m0 4h.01"/><path d="M10.3 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/></svg>',
  trend:     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M23 6l-9.5 9.5-5-5L1 18"/><path d="M17 6h6v6"/></svg>',
  user:      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21v-1a8 8 0 0 1 16 0v1"/></svg>',
};

/* ---------- 2. Babel logo (SVG) ---------- */
function babelLogoSVG(size = 32) {
  // 5 audio bars: blue, pink, purple, blue, yellow
  return `<svg class="brand-mark" viewBox="0 0 36 28" width="${size}" height="${size * 28/36}" xmlns="http://www.w3.org/2000/svg">
    <rect x="1"  y="9"  width="4" height="14" rx="2" fill="#5B8DEF"/>
    <rect x="8"  y="4"  width="4" height="20" rx="2" fill="#E879B0"/>
    <rect x="15" y="11" width="4" height="11" rx="2" fill="#A77BC4"/>
    <rect x="22" y="2"  width="4" height="24" rx="2" fill="#5B8DEF"/>
    <rect x="29" y="7"  width="4" height="16" rx="2" fill="#F5B842"/>
  </svg>`;
}

/* ---------- 3. Nav definitions ---------- */
const NAV = [
  { id: 'home',          href: 'index.html',                     label: 'Launch',         icon: 'launch', section: 'Workspace' },
  { id: 'intelligence',  href: 'intelligence.html',              label: 'Overview',       icon: 'brain' },
  { id: 'intel-social',  href: 'intelligence-social.html',       label: 'Social & News',  isChild: true, parentId: 'intelligence', count: '2,847' },
  { id: 'intel-llm',     href: 'intelligence-llm.html',          label: 'LLM Pulse',      isChild: true, parentId: 'intelligence', count: '247', countClass: 'new' },
  { id: 'intel-comp',    href: 'intelligence-competition.html',  label: 'Competition',    isChild: true, parentId: 'intelligence' },
  { id: 'actions',       href: 'actions.html',                   label: 'Action Center',  icon: 'bolt',   count: '12', countClass: 'urgent' },
  { id: 'track',         href: 'track-record.html',              label: 'Track Record',   icon: 'trend',  count: '81%', countClass: 'success' },
  { id: 'brief',         href: 'brief.html',                     label: 'CEO Brief',      icon: 'brief',  section: 'Deliverables' },
];

/* ---------- 4. Shell renderer ---------- */
function renderShell(activePage) {
  document.body.classList.add('has-shell');

  const activeItem = NAV.find(n => n.id === activePage) || NAV[0];
  const parentItem = activeItem.parentId ? NAV.find(n => n.id === activeItem.parentId) : null;

  // Breadcrumb: Mamaearth / [Parent] / Child
  const crumbs = ['<span>Mamaearth</span>'];
  if (parentItem) crumbs.push(`<a href="${parentItem.href}" style="color: var(--chrome-text-2);">${parentItem.label}</a>`);
  crumbs.push(`<strong>${activeItem.label}</strong>`);

  const top = `
    <nav class="topnav">
      <div class="topnav-left">
        <a href="index.html" class="brand">
          ${babelLogoSVG(22)}
          <span class="brand-text">Babel</span>
        </a>
        <span class="topnav-divider"></span>
        <div class="topnav-breadcrumb">
          ${crumbs.join('<span class="sep">/</span>')}
        </div>
      </div>
      <div class="topnav-right">
        <span class="topnav-breadcrumb" style="margin-right: 6px;">
          <span class="live-dot"></span>
          <span>Live · synced 2m ago</span>
        </span>
        <span class="topnav-divider"></span>
        <button class="client-switcher" title="Switch client">
          <span class="client-avatar">M</span>
          <strong>Mamaearth</strong>
          <span class="client-switcher-caret">▼</span>
        </button>
        <button class="icon-btn" title="Search">${ICONS.search}</button>
        <button class="icon-btn" title="Notifications">
          ${ICONS.bell}
          <span class="icon-btn-dot"></span>
        </button>
        <button class="icon-btn" title="Settings">${ICONS.settings}</button>
        <div class="avatar" title="Shubh Garg">SG</div>
      </div>
    </nav>
  `;

  // The parent's id, if the active page is a child — used to highlight the parent too
  const activeParentId = activeItem.parentId;

  let sideItems = '';
  let currentSection = null;
  NAV.forEach(item => {
    if (item.section && item.section !== currentSection) {
      sideItems += `<div class="sidenav-section">${item.section}</div>`;
      currentSection = item.section;
    }
    const isActive  = item.id === activePage;
    const isOpenParent = item.id === activeParentId;
    const cls = [
      'sidenav-item',
      item.isChild ? 'sidenav-child' : '',
      isActive ? 'active' : '',
      isOpenParent ? 'open' : '',
    ].filter(Boolean).join(' ');

    const count = item.count
      ? `<span class="sidenav-count ${item.countClass || ''}">${item.count}</span>`
      : '';
    const iconHtml = item.isChild
      ? `<span class="sidenav-child-bullet"></span>`
      : `<span class="sidenav-icon">${ICONS[item.icon]}</span>`;

    sideItems += `
      <a href="${item.href}" class="${cls}">
        ${iconHtml}
        <span>${item.label}</span>
        ${count}
      </a>
    `;
  });

  const side = `
    <aside class="sidenav">
      ${sideItems}
      <div class="sidenav-divider"></div>
      <div class="sidenav-footer">
        <div class="sidenav-footer-title">
          <span class="live-dot"></span>&nbsp;Live · ingesting
        </div>
        <div class="sidenav-footer-meta">Last sync 2 min ago</div>
        <div class="sidenav-footer-meta">1,247 events today</div>
      </div>
    </aside>
  `;

  // Inject app shell
  const main = document.getElementById('main-content');
  const mainHTML = main ? main.outerHTML : '<div id="main-content"></div>';
  if (main) main.remove();

  document.body.insertAdjacentHTML('afterbegin', `
    <div class="app-shell">
      ${top}
      <div class="app-body">
        ${side}
        ${mainHTML}
      </div>
    </div>
    <div class="toast-stack" id="toast-stack"></div>
  `);
}

/* ---------- 5. Tabs ---------- */
function initTabs(root = document) {
  root.querySelectorAll('[data-tabs]').forEach(group => {
    const buttons = group.querySelectorAll('[data-tab]');
    const panels  = document.querySelectorAll(`[data-tab-panel][data-tab-group="${group.dataset.tabs}"]`);
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        const target = btn.dataset.tab;
        buttons.forEach(b => b.classList.toggle('active', b === btn));
        panels.forEach(p  => p.classList.toggle('active', p.dataset.tabPanel === target));
        // Update URL hash so deep-linking works
        if (group.dataset.tabsHash !== 'false') {
          history.replaceState(null, '', '#' + target);
        }
      });
    });
    // Auto-activate from URL hash
    const hash = window.location.hash.slice(1);
    if (hash) {
      const target = group.querySelector(`[data-tab="${hash}"]`);
      if (target) target.click();
    }
  });
}

/* ---------- 6. Toast ---------- */
function toast(text, opts = {}) {
  const stack = document.getElementById('toast-stack');
  if (!stack) return;
  const variant = opts.variant || 'success';
  const icon = opts.icon || (variant === 'success' ? '✓' : variant === 'error' ? '!' : 'i');
  const meta = opts.meta ? `<div class="toast-meta">${opts.meta}</div>` : '';
  const el = document.createElement('div');
  el.className = `toast toast-${variant}`;
  el.innerHTML = `
    <span class="toast-icon">${icon}</span>
    <div style="flex:1">
      <div>${text}</div>
      ${meta}
    </div>
  `;
  stack.appendChild(el);
  setTimeout(() => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(8px)';
    el.style.transition = 'all 280ms';
    setTimeout(() => el.remove(), 320);
  }, opts.duration || 3600);
}

/* ---------- 7. Modal ---------- */
function openModal(id) {
  const scrim = document.getElementById(id);
  if (scrim) {
    scrim.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}
function closeModal(id) {
  const scrim = document.getElementById(id);
  if (scrim) {
    scrim.classList.remove('open');
    document.body.style.overflow = '';
  }
}

/* ---------- 8. Number animator ---------- */
function animateCount(el, end, opts = {}) {
  const start = opts.start || 0;
  const dur = opts.duration || 900;
  const prefix = opts.prefix || '';
  const suffix = opts.suffix || '';
  const startTime = performance.now();
  function tick(now) {
    const t = Math.min((now - startTime) / dur, 1);
    const eased = 1 - Math.pow(1 - t, 3);
    const val = Math.floor(start + (end - start) * eased);
    el.textContent = prefix + val.toLocaleString() + suffix;
    if (t < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

/* ---------- 9. Inline sparkline (SVG path) ---------- */
function spark(values, opts = {}) {
  const w = 100, h = 36;
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;
  const step = w / (values.length - 1);
  const pts = values.map((v, i) => {
    const x = i * step;
    const y = h - ((v - min) / range) * (h - 4) - 2;
    return [x, y];
  });
  const line = pts.map((p, i) => (i === 0 ? 'M' : 'L') + p[0].toFixed(1) + ' ' + p[1].toFixed(1)).join(' ');
  const fill = line + ` L${w} ${h} L0 ${h} Z`;
  const cls = opts.color ? ' ' + opts.color : '';
  return `<svg class="spark" viewBox="0 0 ${w} ${h}" preserveAspectRatio="none">
    <path d="${fill}" class="spark-fill"/>
    <path d="${line}" class="spark-line${cls}"/>
  </svg>`;
}

/* ---------- 10. Generate-insights overlay ---------- */
function runGenerate(redirectTo = 'intelligence.html') {
  const overlay = document.getElementById('gen-overlay');
  if (!overlay) return;
  overlay.classList.add('open');

  const sources = overlay.querySelectorAll('.gen-source');
  const stages  = overlay.querySelectorAll('.gen-stage-line');
  const bar     = overlay.querySelector('.gen-progress-bar');
  const status  = overlay.querySelector('.gen-status');

  let progress = 0;
  const setProgress = p => { progress = p; bar.style.width = p + '%'; };

  // 1) Connect sources one-by-one
  let i = 0;
  const connectNext = () => {
    if (i > 0) sources[i - 1].classList.add('connected');
    if (i >= sources.length) {
      setProgress(40);
      setTimeout(runStages, 240);
      return;
    }
    sources[i].classList.add('connecting');
    if (status) status.textContent = 'Connecting to ' + sources[i].dataset.label + '…';
    setProgress(5 + (i / sources.length) * 35);
    i++;
    setTimeout(connectNext, 380);
  };

  // 2) Run AI stages
  let j = 0;
  const runStages = () => {
    if (j > 0) {
      stages[j - 1].classList.remove('active');
      stages[j - 1].classList.add('done');
    }
    if (j >= stages.length) {
      setProgress(100);
      if (status) status.textContent = 'Done. Redirecting to your Intelligence Hub…';
      setTimeout(() => { window.location.href = redirectTo; }, 900);
      return;
    }
    stages[j].classList.add('active');
    if (status) status.textContent = stages[j].dataset.status || stages[j].textContent;
    setProgress(40 + ((j + 1) / stages.length) * 58);
    j++;
    setTimeout(runStages, 700);
  };

  setTimeout(connectNext, 200);
}

/* ---------- 11. Bulk reply-all AI personalization ---------- */
// Pre-baked per-city personalization templates so the demo feels real.
const BULK_TEMPLATES = {
  Bhubaneswar: { gripe: 'order stuck 6 days', open: 'Namaskar', signoff: 'and we owe you better.' },
  Patna:       { gripe: 'shipment marked delivered but not received', open: 'Hello', signoff: 'this is on us to fix.' },
  Indore:      { gripe: 'late by 4 days', open: 'Namaste', signoff: 'and thank you for being patient.' },
  Kanpur:      { gripe: 'no tracking update for 5 days', open: 'Hi', signoff: 'we appreciate you flagging this.' },
};

function personalizeReply(customer) {
  const t = BULK_TEMPLATES[customer.city] || { open: 'Hi', signoff: 'we appreciate you.', gripe: 'this delay' };
  const orderNum = (customer.order.match(/#M-\d+/) || [customer.order])[0];
  return `${t.open} ${customer.name.split(' ')[0]} — we're really sorry your order ${orderNum} has been ${t.gripe}; that's not the Mamaearth promise. Our team just escalated tracking on ${customer.awb}; you'll see movement within 24h, and we're adding a ₹150 credit to your account for the inconvenience, ${t.signoff} — Team Mamaearth`;
}

/* ---------- 12. Boot ---------- */
document.addEventListener('DOMContentLoaded', () => {
  initTabs();
  // Close modals on backdrop click / Esc
  document.querySelectorAll('.scrim').forEach(s => {
    s.addEventListener('click', e => { if (e.target === s) s.classList.remove('open'); });
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') document.querySelectorAll('.scrim.open').forEach(s => s.classList.remove('open'));
  });
});

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Peak Odyssey — Nepal's Premier Expedition Company</title>
  <meta name="description" content="Trekker-led Himalayan expeditions. Everest Base Camp, Annapurna Circuit, Langtang Valley & Upper Mustang — operated by a founder who has lived the trails."/>
  <link rel="preconnect" href="https://fonts.googleapis.com"/>
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;1,600&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet"/>
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --navy: #1C3D6E;
      --navy-dark: #112649;
      --navy-mid: #2a5298;
      --gold: #D4A017;
      --gold-light: #F0C040;
      --white: #FFFFFF;
      --off-white: #F7F5F0;
      --text: #1a1a1a;
      --text-muted: #666;
      --border: #e0dbd0;
    }

    html { scroll-behavior: smooth; }

    body {
      font-family: 'Inter', sans-serif;
      color: var(--text);
      background: var(--white);
      overflow-x: hidden;
    }

    /* ── NAVBAR ── */
    nav {
      position: fixed; top: 0; left: 0; right: 0; z-index: 100;
      background: rgba(28, 61, 110, 0.97);
      backdrop-filter: blur(8px);
      display: flex; align-items: center; justify-content: space-between;
      padding: 0 40px; height: 68px;
      border-bottom: 1px solid rgba(212,160,23,0.3);
    }

    .nav-logo {
      display: flex; align-items: center; gap: 12px; text-decoration: none;
    }

    .nav-logo-icon {
      width: 38px; height: 38px;
    }

    .nav-logo-text {
      display: flex; flex-direction: column; line-height: 1;
    }

    .nav-logo-text span:first-child {
      font-family: 'Playfair Display', serif;
      font-size: 17px; font-weight: 700;
      color: var(--white); letter-spacing: 1px;
    }

    .nav-logo-text span:last-child {
      font-size: 8px; color: var(--gold);
      letter-spacing: 3px; text-transform: uppercase; margin-top: 2px;
    }

    .nav-links {
      display: flex; align-items: center; gap: 4px; list-style: none;
    }

    .nav-links a {
      color: rgba(255,255,255,0.85); text-decoration: none;
      font-size: 13px; font-weight: 500; letter-spacing: 0.3px;
      padding: 8px 14px; border-radius: 4px;
      transition: color 0.2s, background 0.2s;
    }

    .nav-links a:hover { color: var(--gold); background: rgba(255,255,255,0.07); }

    .nav-cta {
      background: var(--gold) !important;
      color: var(--navy-dark) !important;
      font-weight: 600 !important;
      border-radius: 4px !important;
      padding: 8px 18px !important;
    }

    .nav-cta:hover { background: var(--gold-light) !important; }

    .hamburger { display: none; cursor: pointer; flex-direction: column; gap: 5px; }
    .hamburger span { display: block; width: 24px; height: 2px; background: white; border-radius: 2px; transition: all 0.3s; }

    /* ── HERO ── */
    #hero {
      position: relative; height: 100vh; min-height: 600px;
      display: flex; align-items: center; justify-content: center;
      overflow: hidden;
    }

    .hero-bg {
      position: absolute; inset: 0;
      background:
        linear-gradient(to bottom, rgba(10,25,50,0.72) 0%, rgba(10,25,50,0.45) 50%, rgba(10,25,50,0.75) 100%),
        url('https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1600&q=80') center/cover no-repeat;
    }

    .hero-content {
      position: relative; z-index: 2;
      text-align: center; padding: 0 24px; max-width: 900px;
    }

    .hero-eyebrow {
      display: inline-flex; align-items: center; gap: 10px;
      background: rgba(212,160,23,0.15); border: 1px solid rgba(212,160,23,0.5);
      color: var(--gold); font-size: 11px; font-weight: 600;
      letter-spacing: 3px; text-transform: uppercase;
      padding: 6px 18px; border-radius: 20px; margin-bottom: 28px;
    }

    .hero-eyebrow::before, .hero-eyebrow::after {
      content: ''; display: block; width: 20px; height: 1px; background: var(--gold);
    }

    .hero-title {
      font-family: 'Playfair Display', serif;
      font-size: clamp(44px, 7vw, 80px);
      font-weight: 700; color: var(--white);
      line-height: 1.08; margin-bottom: 24px;
    }

    .hero-title em {
      font-style: italic; color: var(--gold-light);
    }

    .hero-sub {
      font-size: clamp(15px, 2vw, 18px); color: rgba(255,255,255,0.8);
      line-height: 1.7; max-width: 600px; margin: 0 auto 40px;
      font-weight: 300;
    }

    .hero-buttons {
      display: flex; gap: 16px; justify-content: center; flex-wrap: wrap;
    }

    .btn-primary {
      background: var(--gold); color: var(--navy-dark);
      font-size: 14px; font-weight: 700; letter-spacing: 0.5px;
      padding: 14px 32px; border-radius: 4px; text-decoration: none;
      transition: background 0.2s, transform 0.2s;
      display: inline-block;
    }

    .btn-primary:hover { background: var(--gold-light); transform: translateY(-1px); }

    .btn-outline {
      background: transparent; color: white;
      border: 1.5px solid rgba(255,255,255,0.6);
      font-size: 14px; font-weight: 500; letter-spacing: 0.5px;
      padding: 14px 32px; border-radius: 4px; text-decoration: none;
      transition: border-color 0.2s, background 0.2s;
      display: inline-block;
    }

    .btn-outline:hover { border-color: white; background: rgba(255,255,255,0.08); }

    .hero-stats {
      position: absolute; bottom: 0; left: 0; right: 0; z-index: 2;
      display: flex; justify-content: center;
      background: rgba(28, 61, 110, 0.9);
      border-top: 2px solid var(--gold);
      padding: 0;
    }

    .hero-stat {
      padding: 20px 48px; text-align: center;
      border-right: 1px solid rgba(255,255,255,0.12);
      flex: 1; max-width: 200px;
    }

    .hero-stat:last-child { border-right: none; }

    .hero-stat strong {
      display: block; font-size: 26px; font-weight: 700;
      color: var(--gold); font-family: 'Playfair Display', serif;
    }

    .hero-stat span {
      font-size: 11px; color: rgba(255,255,255,0.65);
      letter-spacing: 1.5px; text-transform: uppercase; margin-top: 3px;
      display: block;
    }

    /* ── SECTIONS SHARED ── */
    section { padding: 90px 40px; }

    .section-label {
      font-size: 11px; font-weight: 600; letter-spacing: 3px;
      text-transform: uppercase; color: var(--gold);
      margin-bottom: 12px; display: block;
    }

    .section-title {
      font-family: 'Playfair Display', serif;
      font-size: clamp(30px, 4vw, 44px);
      font-weight: 700; color: var(--navy);
      line-height: 1.15; margin-bottom: 16px;
    }

    .section-body {
      font-size: 16px; color: var(--text-muted);
      line-height: 1.75; max-width: 600px;
    }

    /* ── TREKS SECTION ── */
    #treks { background: var(--off-white); }

    .treks-header {
      text-align: center; margin-bottom: 56px;
    }

    .treks-header .section-body { margin: 0 auto; }

    .treks-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 28px; max-width: 1200px; margin: 0 auto;
    }

    .trek-card {
      background: white; border-radius: 8px;
      overflow: hidden; box-shadow: 0 2px 16px rgba(0,0,0,0.08);
      transition: transform 0.25s, box-shadow 0.25s;
      text-decoration: none; color: inherit; display: block;
    }

    .trek-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 32px rgba(28,61,110,0.16);
    }

    .trek-img {
      height: 220px; position: relative; overflow: hidden;
    }

    .trek-img img {
      width: 100%; height: 100%; object-fit: cover;
      transition: transform 0.4s;
    }

    .trek-card:hover .trek-img img { transform: scale(1.05); }

    .trek-badge {
      position: absolute; top: 14px; left: 14px;
      background: var(--gold); color: var(--navy-dark);
      font-size: 10px; font-weight: 700; letter-spacing: 1.5px;
      text-transform: uppercase; padding: 4px 10px; border-radius: 3px;
    }

    .trek-home-badge {
      position: absolute; top: 14px; right: 14px;
      background: var(--navy); color: white;
      font-size: 9px; font-weight: 700; letter-spacing: 1px;
      padding: 4px 10px; border-radius: 3px;
    }

    .trek-body { padding: 22px 24px 26px; }

    .trek-meta {
      display: flex; gap: 16px; margin-bottom: 10px;
    }

    .trek-meta span {
      font-size: 11px; color: var(--text-muted);
      display: flex; align-items: center; gap: 5px;
    }

    .trek-meta svg { width: 13px; height: 13px; opacity: 0.6; }

    .trek-card h3 {
      font-family: 'Playfair Display', serif;
      font-size: 20px; font-weight: 700; color: var(--navy);
      margin-bottom: 10px; line-height: 1.2;
    }

    .trek-card p {
      font-size: 14px; color: var(--text-muted);
      line-height: 1.65; margin-bottom: 18px;
    }

    .trek-price {
      display: flex; align-items: center; justify-content: space-between;
      border-top: 1px solid var(--border); padding-top: 16px;
    }

    .trek-price strong {
      font-size: 18px; color: var(--navy);
    }

    .trek-price small { font-size: 11px; color: var(--text-muted); display: block; }

    .trek-link {
      font-size: 12px; font-weight: 600; color: var(--gold);
      letter-spacing: 0.5px; text-transform: uppercase;
      display: flex; align-items: center; gap: 5px;
    }

    /* ── WHY US ── */
    #why { background: var(--navy); }

    .why-inner {
      max-width: 1100px; margin: 0 auto;
      display: grid; grid-template-columns: 1fr 1fr; gap: 80px;
      align-items: center;
    }

    .why-text .section-title { color: white; }
    .why-text .section-body { color: rgba(255,255,255,0.7); max-width: 460px; margin-bottom: 40px; }

    .why-advantages { list-style: none; display: flex; flex-direction: column; gap: 22px; }

    .why-advantages li {
      display: flex; align-items: flex-start; gap: 16px;
    }

    .adv-icon {
      width: 44px; height: 44px; border-radius: 50%;
      background: rgba(212,160,23,0.15);
      border: 1px solid rgba(212,160,23,0.35);
      display: flex; align-items: center; justify-content: center;
      flex-shrink: 0; font-size: 18px;
    }

    .adv-text strong {
      display: block; color: white; font-size: 15px; font-weight: 600;
      margin-bottom: 3px;
    }

    .adv-text span {
      font-size: 13px; color: rgba(255,255,255,0.55); line-height: 1.5;
    }

    .why-visual {
      display: grid; grid-template-columns: 1fr 1fr; gap: 16px;
    }

    .why-stat-card {
      background: rgba(255,255,255,0.07);
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 8px; padding: 28px 22px; text-align: center;
    }

    .why-stat-card:first-child {
      grid-column: 1 / -1;
      background: rgba(212,160,23,0.12);
      border-color: rgba(212,160,23,0.3);
    }

    .why-stat-card strong {
      display: block; font-family: 'Playfair Display', serif;
      font-size: 40px; color: var(--gold); line-height: 1;
    }

    .why-stat-card span {
      font-size: 12px; color: rgba(255,255,255,0.55);
      letter-spacing: 1.5px; text-transform: uppercase; margin-top: 6px; display: block;
    }

    /* ── CULTURE ── */
    #culture { background: white; }

    .culture-inner { max-width: 1200px; margin: 0 auto; }

    .culture-header { margin-bottom: 52px; }

    .culture-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 24px;
    }

    .culture-card {
      border: 1px solid var(--border); border-radius: 8px;
      overflow: hidden; transition: box-shadow 0.2s;
    }

    .culture-card:hover { box-shadow: 0 4px 20px rgba(28,61,110,0.1); }

    .culture-card-img {
      height: 180px; overflow: hidden;
    }

    .culture-card-img img {
      width: 100%; height: 100%; object-fit: cover;
      transition: transform 0.4s;
    }

    .culture-card:hover .culture-card-img img { transform: scale(1.05); }

    .culture-card-body { padding: 18px 20px 22px; }

    .culture-card-body h3 {
      font-family: 'Playfair Display', serif;
      font-size: 17px; color: var(--navy); margin-bottom: 8px;
    }

    .culture-card-body p {
      font-size: 13px; color: var(--text-muted); line-height: 1.6;
    }

    /* ── LANGTANG ── */
    #langtang {
      background: var(--off-white);
      padding: 0;
    }

    .langtang-inner {
      display: grid; grid-template-columns: 1fr 1fr; min-height: 540px;
    }

    .langtang-img {
      position: relative; overflow: hidden;
    }

    .langtang-img img {
      width: 100%; height: 100%; object-fit: cover;
    }

    .langtang-img::after {
      content: '';
      position: absolute; inset: 0;
      background: linear-gradient(to right, transparent 60%, var(--off-white));
    }

    .langtang-text {
      padding: 80px 60px 80px 48px;
      display: flex; flex-direction: column; justify-content: center;
    }

    .langtang-text .section-body { margin-bottom: 28px; }

    .langtang-points { list-style: none; display: flex; flex-direction: column; gap: 14px; margin-bottom: 36px; }

    .langtang-points li {
      display: flex; align-items: flex-start; gap: 12px;
      font-size: 14px; color: var(--text-muted); line-height: 1.5;
    }

    .langtang-points li::before {
      content: '▸'; color: var(--gold); flex-shrink: 0; margin-top: 1px;
    }

    blockquote {
      border-left: 3px solid var(--gold);
      padding-left: 18px; margin-top: 28px;
      font-family: 'Playfair Display', serif;
      font-style: italic; font-size: 16px;
      color: var(--navy); line-height: 1.6;
    }

    blockquote cite {
      display: block; margin-top: 8px;
      font-family: 'Inter', sans-serif;
      font-style: normal; font-size: 12px;
      color: var(--text-muted); letter-spacing: 1px;
    }

    /* ── FESTIVALS ── */
    #festivals { background: var(--navy-dark); padding: 90px 40px; }

    .festivals-header { text-align: center; margin-bottom: 56px; }
    .festivals-header .section-title { color: white; }
    .festivals-header .section-body { color: rgba(255,255,255,0.6); margin: 0 auto; }

    .festivals-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 20px; max-width: 1100px; margin: 0 auto;
    }

    .festival-card {
      background: rgba(255,255,255,0.05);
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 8px; padding: 28px 22px; text-align: center;
      transition: background 0.2s, border-color 0.2s;
    }

    .festival-card:hover {
      background: rgba(212,160,23,0.1);
      border-color: rgba(212,160,23,0.4);
    }

    .festival-icon { font-size: 32px; margin-bottom: 14px; display: block; }

    .festival-card h3 {
      font-family: 'Playfair Display', serif;
      font-size: 16px; color: white; margin-bottom: 8px;
    }

    .festival-card p {
      font-size: 12px; color: rgba(255,255,255,0.5); line-height: 1.55;
    }

    /* ── SUSTAINABILITY ── */
    #sustainability { background: white; }

    .sust-inner {
      max-width: 1100px; margin: 0 auto;
      display: grid; grid-template-columns: 1fr 1fr; gap: 80px;
      align-items: center;
    }

    .sust-image { position: relative; }

    .sust-image img {
      width: 100%; border-radius: 8px;
      box-shadow: 0 8px 40px rgba(0,0,0,0.12);
    }

    .sust-badge {
      position: absolute; bottom: -20px; right: -20px;
      background: var(--gold); color: var(--navy-dark);
      border-radius: 50%; width: 110px; height: 110px;
      display: flex; flex-direction: column;
      align-items: center; justify-content: center;
      text-align: center; font-weight: 700;
      box-shadow: 0 4px 20px rgba(212,160,23,0.4);
    }

    .sust-badge strong { font-size: 26px; line-height: 1; }
    .sust-badge span { font-size: 9px; letter-spacing: 1px; text-transform: uppercase; margin-top: 4px; }

    .sust-points {
      display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 36px;
    }

    .sust-point {
      padding: 20px; background: var(--off-white);
      border-radius: 6px; border-left: 3px solid var(--gold);
    }

    .sust-point h4 { font-size: 14px; font-weight: 600; color: var(--navy); margin-bottom: 5px; }
    .sust-point p { font-size: 12px; color: var(--text-muted); line-height: 1.5; }

    /* ── ROADMAP ── */
    #roadmap { background: var(--off-white); }

    .roadmap-inner { max-width: 900px; margin: 0 auto; }
    .roadmap-header { text-align: center; margin-bottom: 56px; }

    .timeline {
      position: relative; padding-left: 48px;
      display: flex; flex-direction: column; gap: 0;
    }

    .timeline::before {
      content: ''; position: absolute; left: 14px; top: 8px; bottom: 8px;
      width: 2px; background: linear-gradient(to bottom, var(--gold), var(--navy));
    }

    .timeline-item { position: relative; padding-bottom: 44px; }
    .timeline-item:last-child { padding-bottom: 0; }

    .timeline-dot {
      position: absolute; left: -40px; top: 4px;
      width: 16px; height: 16px; border-radius: 50%;
      background: var(--gold); border: 3px solid var(--off-white);
      box-shadow: 0 0 0 2px var(--gold);
    }

    .timeline-phase {
      font-size: 10px; font-weight: 700; letter-spacing: 2px;
      text-transform: uppercase; color: var(--gold);
      margin-bottom: 4px;
    }

    .timeline-item h3 {
      font-family: 'Playfair Display', serif;
      font-size: 20px; color: var(--navy); margin-bottom: 12px;
    }

    .timeline-bullets { list-style: none; display: flex; flex-direction: column; gap: 6px; }

    .timeline-bullets li {
      font-size: 14px; color: var(--text-muted);
      display: flex; align-items: center; gap: 10px;
    }

    .timeline-bullets li::before { content: '•'; color: var(--gold); font-size: 18px; line-height: 1; }

    /* ── CONTACT ── */
    #contact {
      background: var(--navy);
      text-align: center;
    }

    #contact .section-title { color: white; margin-bottom: 12px; }
    #contact .section-body { color: rgba(255,255,255,0.65); margin: 0 auto 40px; }

    .contact-info {
      display: flex; gap: 32px; justify-content: center;
      flex-wrap: wrap; margin-bottom: 44px;
    }

    .contact-item {
      display: flex; flex-direction: column; align-items: center; gap: 6px;
    }

    .contact-item span:first-child {
      font-size: 11px; color: var(--gold); letter-spacing: 2px; text-transform: uppercase;
    }

    .contact-item a, .contact-item span:last-child {
      color: white; text-decoration: none; font-size: 15px; font-weight: 500;
    }

    .contact-item a:hover { color: var(--gold); }

    /* ── FOOTER ── */
    footer {
      background: var(--navy-dark);
      border-top: 1px solid rgba(255,255,255,0.08);
      padding: 28px 40px;
      display: flex; align-items: center; justify-content: space-between;
      flex-wrap: wrap; gap: 12px;
    }

    footer p { font-size: 12px; color: rgba(255,255,255,0.35); }

    footer .footer-links { display: flex; gap: 20px; }
    footer .footer-links a {
      font-size: 12px; color: rgba(255,255,255,0.4);
      text-decoration: none; transition: color 0.2s;
    }
    footer .footer-links a:hover { color: var(--gold); }

    /* ── MOBILE ── */
    @media (max-width: 768px) {
      nav { padding: 0 20px; }
      .nav-links { display: none; flex-direction: column; position: fixed; top: 68px; left: 0; right: 0; background: var(--navy); padding: 20px; gap: 4px; }
      .nav-links.open { display: flex; }
      .hamburger { display: flex; }

      section { padding: 64px 20px; }
      #hero { min-height: 100svh; }

      .why-inner, .sust-inner, .langtang-inner {
        grid-template-columns: 1fr;
        gap: 40px;
      }

      .langtang-img { height: 280px; }
      .langtang-img::after { background: linear-gradient(to bottom, transparent 60%, var(--off-white)); }
      .langtang-text { padding: 40px 20px; }

      .hero-stats { position: static; margin-top: 0; border-top: none; }
      .hero-stat { padding: 16px 20px; max-width: none; }
      .hero-stat strong { font-size: 20px; }

      .why-visual { grid-template-columns: 1fr 1fr; }

      .sust-badge { bottom: -16px; right: 0; width: 90px; height: 90px; }

      footer { flex-direction: column; text-align: center; }
    }

    @media (max-width: 480px) {
      .hero-title { font-size: 38px; }
      .hero-stats { flex-wrap: wrap; }
      .hero-stat { border-right: none; border-bottom: 1px solid rgba(255,255,255,0.1); }
    }
  </style>
</head>
<body>

<!-- NAVBAR -->
<nav>
  <a href="#hero" class="nav-logo">
    <svg class="nav-logo-icon" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
      <polygon points="10,32 19,8 28,32" fill="#1C3D6E" stroke="#D4A017" stroke-width="1.5"/>
      <polygon points="5,32 12,16 19,32" fill="#2a5298" opacity="0.7"/>
      <polygon points="19,32 26,18 33,32" fill="#2a5298" opacity="0.7"/>
      <polygon points="16,14 19,8 22,14 21,18 17,18" fill="white" opacity="0.9"/>
      <rect x="5" y="31" width="28" height="2" rx="1" fill="#D4A017"/>
    </svg>
    <div class="nav-logo-text">
      <span>Peak Odyssey</span>
      <span>Walk · Explore · Discover</span>
    </div>
  </a>

  <ul class="nav-links" id="navLinks">
    <li><a href="#treks">Treks</a></li>
    <li><a href="#culture">Culture</a></li>
    <li><a href="#langtang">Langtang</a></li>
    <li><a href="#festivals">Festivals</a></li>
    <li><a href="#sustainability">About</a></li>
    <li><a href="#roadmap">Launch</a></li>
    <li><a href="#contact" class="nav-cta">Book a Trek</a></li>
  </ul>

  <div class="hamburger" id="hamburger" onclick="toggleNav()" aria-label="Toggle menu">
    <span></span><span></span><span></span>
  </div>
</nav>

<!-- HERO -->
<section id="hero">
  <div class="hero-bg"></div>
  <div class="hero-content">
    <div class="hero-eyebrow">Est. 2027 · Sindhupalchowk, Nepal</div>
    <h1 class="hero-title">
      Nepal's Trails,<br>
      <em>Lived First-Hand</em>
    </h1>
    <p class="hero-sub">
      Peak Odyssey isn't a travel agency. It's a company built on years of trekking Nepal's mountains, forging real relationships with guides, and calling Langtang home.
    </p>
    <div class="hero-buttons">
      <a href="#treks" class="btn-primary">Explore Our Treks</a>
      <a href="#contact" class="btn-outline">Plan Your Expedition</a>
    </div>
  </div>

  <div class="hero-stats">
    <div class="hero-stat">
      <strong>$2.5B</strong>
      <span>Nepal tourism by 2027</span>
    </div>
    <div class="hero-stat">
      <strong>1.2M+</strong>
      <span>Trekkers annually</span>
    </div>
    <div class="hero-stat">
      <strong>4</strong>
      <span>Signature routes</span>
    </div>
    <div class="hero-stat">
      <strong>100%</strong>
      <span>Local guides</span>
    </div>
    <div class="hero-stat">
      <strong>50+</strong>
      <span>Village partnerships</span>
    </div>
  </div>
</section>

<!-- TREKS -->
<section id="treks">
  <div class="treks-header">
    <span class="section-label">Signature Routes</span>
    <h2 class="section-title">World-Class Himalayan Expeditions</h2>
    <p class="section-body">Every route is one we've walked ourselves. Not itineraries from a catalogue — trails we know by heart.</p>
  </div>

  <div class="treks-grid">

    <a href="#contact" class="trek-card">
      <div class="trek-img">
        <img src="https://images.unsplash.com/photo-1545572214-f927e05e9c7c?w=600&q=80" alt="Everest Base Camp Trek"/>
        <span class="trek-badge">Iconic</span>
      </div>
      <div class="trek-body">
        <div class="trek-meta">
          <span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            14 Days
          </span>
          <span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
            Challenging
          </span>
          <span>▲ 5,364m</span>
        </div>
        <h3>Everest Base Camp</h3>
        <p>The legendary Khumbu trail — Namche Bazaar, Tengboche Monastery, Kala Patthar. A journey that changes you.</p>
        <div class="trek-price">
          <div>
            <strong>From $1,800</strong>
            <small>per person</small>
          </div>
          <span class="trek-link">View trek →</span>
        </div>
      </div>
    </a>

    <a href="#contact" class="trek-card">
      <div class="trek-img">
        <img src="https://images.unsplash.com/photo-1589553416260-f586c8f1514f?w=600&q=80" alt="Annapurna Circuit Trek"/>
        <span class="trek-badge">Classic</span>
      </div>
      <div class="trek-body">
        <div class="trek-meta">
          <span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            18 Days
          </span>
          <span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
            Moderate
          </span>
          <span>▲ 5,416m</span>
        </div>
        <h3>Annapurna Circuit</h3>
        <p>One of Earth's greatest treks. Dramatic landscape diversity from jungle to high alpine desert via Thorong La Pass.</p>
        <div class="trek-price">
          <div>
            <strong>From $1,600</strong>
            <small>per person</small>
          </div>
          <span class="trek-link">View trek →</span>
        </div>
      </div>
    </a>

    <a href="#contact" class="trek-card">
      <div class="trek-img">
        <img src="https://images.unsplash.com/photo-1585016495481-91613cbcaed7?w=600&q=80" alt="Langtang Valley Trek"/>
        <span class="trek-badge">Home Base</span>
        <span class="trek-home-badge">★ Our Hotel</span>
      </div>
      <div class="trek-body">
        <div class="trek-meta">
          <span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            10 Days
          </span>
          <span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
            Moderate
          </span>
          <span>▲ 4,984m</span>
        </div>
        <h3>Langtang Valley</h3>
        <p>Our home territory — operated from our own gateway hotel. Authentic Tamang villages, glaciers and sacred lakes.</p>
        <div class="trek-price">
          <div>
            <strong>From $1,200</strong>
            <small>per person</small>
          </div>
          <span class="trek-link">View trek →</span>
        </div>
      </div>
    </a>

    <a href="#contact" class="trek-card">
      <div class="trek-img">
        <img src="https://images.unsplash.com/photo-1601794926405-59cead5f1e12?w=600&q=80" alt="Upper Mustang Trek"/>
        <span class="trek-badge">Exclusive</span>
      </div>
      <div class="trek-body">
        <div class="trek-meta">
          <span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            12 Days
          </span>
          <span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
            Moderate
          </span>
          <span>▲ 3,840m</span>
        </div>
        <h3>Upper Mustang</h3>
        <p>The Forbidden Kingdom. Ancient cave monasteries and dramatic Tibetan plateau landscapes unlike anywhere else.</p>
        <div class="trek-price">
          <div>
            <strong>From $2,400</strong>
            <small>per person</small>
          </div>
          <span class="trek-link">View trek →</span>
        </div>
      </div>
    </a>

  </div>
</section>

<!-- WHY US -->
<section id="why">
  <div class="why-inner">
    <div class="why-text">
      <span class="section-label" style="color:var(--gold)">Why Peak Odyssey</span>
      <h2 class="section-title">Built by a Trekker,<br>for Trekkers</h2>
      <p class="section-body">Most Nepal travel agencies are office-based operators who outsource everything. We're different — every trail we sell is a trail we've walked.</p>

      <ul class="why-advantages">
        <li>
          <div class="adv-icon">🥾</div>
          <div class="adv-text">
            <strong>Real Trekking Credentials</strong>
            <span>2–3 years personally trekking Nepal's major routes. Not a travel agent — a guide who became an entrepreneur.</span>
          </div>
        </li>
        <li>
          <div class="adv-icon">🏨</div>
          <div class="adv-text">
            <strong>Hotel at Langtang Gateway</strong>
            <span>We own a hotel at the entrance to Langtang National Park — built-in base, local credibility, accommodation partnerships.</span>
          </div>
        </li>
        <li>
          <div class="adv-icon">🤝</div>
          <div class="adv-text">
            <strong>Established Guide Network</strong>
            <span>Deep personal relationships with certified Nepali guides forged over years on the trails — not cold-call contractors.</span>
          </div>
        </li>
        <li>
          <div class="adv-icon">📡</div>
          <div class="adv-text">
            <strong>Digital-First & Ready</strong>
            <span>Website live, social presence built, bookings architecture in place. Launch-ready by 2027 without starting from scratch.</span>
          </div>
        </li>
      </ul>
    </div>

    <div class="why-visual">
      <div class="why-stat-card">
        <strong>2–3 yrs</strong>
        <span>Lived on Nepal's trails</span>
      </div>
      <div class="why-stat-card">
        <strong>$3,200</strong>
        <span>Avg tourist spend/trip</span>
      </div>
      <div class="why-stat-card">
        <strong>68%</strong>
        <span>Tourists seeking cultural immersion</span>
      </div>
      <div class="why-stat-card">
        <strong>2027</strong>
        <span>Official launch year</span>
      </div>
    </div>
  </div>
</section>

<!-- CULTURE -->
<section id="culture">
  <div class="culture-inner">
    <div class="culture-header">
      <span class="section-label">Culture & Heritage</span>
      <h2 class="section-title">Ancient Nepal, Lived First-Hand</h2>
      <p class="section-body">Trekking is only part of what we offer. Nepal's cultural depth is extraordinary — and we have the access to show you the real thing.</p>
    </div>

    <div class="culture-grid">
      <div class="culture-card">
        <div class="culture-card-img">
          <img src="https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=500&q=80" alt="Kathmandu Heritage Walk"/>
        </div>
        <div class="culture-card-body">
          <h3>Kathmandu Heritage Walks</h3>
          <p>7 UNESCO monument zones — Pashupatinath, Boudhanath, Swayambhunath and more with expert cultural guides.</p>
        </div>
      </div>

      <div class="culture-card">
        <div class="culture-card-img">
          <img src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=500&q=80" alt="Festival Immersion"/>
        </div>
        <div class="culture-card-body">
          <h3>Festival Immersion Tours</h3>
          <p>Dashain, Indra Jatra, Tihar, Mani Rimdu — witness living traditions most travellers never see.</p>
        </div>
      </div>

      <div class="culture-card">
        <div class="culture-card-img">
          <img src="https://images.unsplash.com/photo-1580502304784-8985b7eb7260?w=500&q=80" alt="Monastery Stay"/>
        </div>
        <div class="culture-card-body">
          <h3>Monastery & Temple Stays</h3>
          <p>Overnight in working Buddhist monasteries in the Khumbu and Langtang regions. Meditate, learn, connect.</p>
        </div>
      </div>

      <div class="culture-card">
        <div class="culture-card-img">
          <img src="https://images.unsplash.com/photo-1598394789564-7c9f8dfcfa97?w=500&q=80" alt="Village Homestay"/>
        </div>
        <div class="culture-card-body">
          <h3>Village Homestays</h3>
          <p>Stay with Sherpa, Tamang or Newari families. Eat local, learn customs, support communities directly.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- LANGTANG -->
<section id="langtang">
  <div class="langtang-inner">
    <div class="langtang-img">
      <img src="https://images.unsplash.com/photo-1585016495481-91613cbcaed7?w=900&q=80" alt="Langtang Valley"/>
    </div>
    <div class="langtang-text">
      <span class="section-label">Our Home Territory</span>
      <h2 class="section-title">We Don't Just Visit Langtang — We Live There</h2>
      <p class="section-body">Peak Odyssey has a unique advantage no other agency can claim in the Langtang region.</p>

      <ul class="langtang-points">
        <li>Hotel located at the gateway to Langtang National Park</li>
        <li>Long-term relationships with every major teahouse on the route</li>
        <li>Inside knowledge of trail conditions, seasonal changes & off-path gems</li>
        <li>Trusted by the local Tamang community through years of presence</li>
        <li>Ability to create exclusive Langtang experiences for our clients</li>
      </ul>

      <a href="#contact" class="btn-primary" style="align-self:flex-start">Book Langtang Trek</a>

      <blockquote>
        "The mountains were my classroom. Langtang was my home."
        <cite>— Founder, Peak Odyssey</cite>
      </blockquote>
    </div>
  </div>
</section>

<!-- FESTIVALS -->
<section id="festivals">
  <div class="festivals-header">
    <span class="section-label" style="color:var(--gold)">Living Traditions</span>
    <h2 class="section-title">Nepal's Festivals, Witnessed First-Hand</h2>
    <p class="section-body">Nepal celebrates more festivals per year than almost any country. We time your trip so you witness them, not just read about them.</p>
  </div>

  <div class="festivals-grid">
    <div class="festival-card">
      <span class="festival-icon">🎭</span>
      <h3>Indra Jatra</h3>
      <p>Kathmandu chariot festival — the living goddess Kumari revealed to thousands of devotees</p>
    </div>
    <div class="festival-card">
      <span class="festival-icon">🌸</span>
      <h3>Dashain</h3>
      <p>Nepal's greatest 15-day Hindu celebration of victory, family, and renewal</p>
    </div>
    <div class="festival-card">
      <span class="festival-icon">🙏</span>
      <h3>Mani Rimdu</h3>
      <p>Spectacular Sherpa Buddhist masked dance in the Everest region's sacred monasteries</p>
    </div>
    <div class="festival-card">
      <span class="festival-icon">🪔</span>
      <h3>Tihar</h3>
      <p>5-day Festival of Lights — Nepal's own Diwali, illuminating every village and city</p>
    </div>
    <div class="festival-card">
      <span class="festival-icon">🏔️</span>
      <h3>Losar</h3>
      <p>Tibetan New Year celebrated in the high Himalayas with vibrant colour and ritual</p>
    </div>
  </div>
</section>

<!-- SUSTAINABILITY -->
<section id="sustainability">
  <div class="sust-inner">
    <div class="sust-image">
      <img src="https://images.unsplash.com/photo-1573920111312-04f1b25c6b85?w=700&q=80" alt="Responsible trekking in Nepal"/>
      <div class="sust-badge">
        <strong>5%</strong>
        <span>Revenue to communities</span>
      </div>
    </div>

    <div>
      <span class="section-label">Responsible Tourism</span>
      <h2 class="section-title">We Operate Where We Live</h2>
      <p class="section-body" style="margin-bottom:0">We take responsibility for the places and people we profit from. Sustainability isn't a marketing checkbox — it's how we operate every single day.</p>

      <div class="sust-points">
        <div class="sust-point">
          <h4>🌿 Leave No Trace</h4>
          <p>Zero-waste protocols and zero single-use plastic on all treks</p>
        </div>
        <div class="sust-point">
          <h4>💰 Fair Local Wages</h4>
          <p>Above-market pay for every guide and porter on every route</p>
        </div>
        <div class="sust-point">
          <h4>🏫 Community Fund</h4>
          <p>5% of revenue into trail maintenance and local school funds</p>
        </div>
        <div class="sust-point">
          <h4>🏘️ Local Employment</h4>
          <p>Our Langtang hotel employs only local staff from the community</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ROADMAP -->
<section id="roadmap">
  <div class="roadmap-inner">
    <div class="roadmap-header">
      <span class="section-label">Launch Timeline</span>
      <h2 class="section-title">The Road to 2027</h2>
      <p class="section-body" style="margin:0 auto">The foundation is already in place — guides connected, hotel operational, digital infrastructure building now.</p>
    </div>

    <div class="timeline">
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-phase">Phase 1 · 2026–2027</div>
        <h3>Building Foundations</h3>
        <ul class="timeline-bullets">
          <li>Guide network established ✓</li>
          <li>Hotel base operational ✓</li>
          <li>Local maps & routes secured ✓</li>
          <li>Website & social media in progress</li>
        </ul>
      </div>

      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-phase">Phase 2 · Early 2027</div>
        <h3>Soft Launch</h3>
        <ul class="timeline-bullets">
          <li>Website goes live</li>
          <li>First test treks run with real clients</li>
          <li>Booking system activated</li>
          <li>Marketing campaigns begin</li>
        </ul>
      </div>

      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-phase">Phase 3 · End 2027</div>
        <h3>Official Public Launch</h3>
        <ul class="timeline-bullets">
          <li>Full seasonal schedule published</li>
          <li>International outreach begins</li>
          <li>Travel agent partnerships secured</li>
          <li>First full operating season</li>
        </ul>
      </div>

      <div class="timeline-item">
        <div class="timeline-dot" style="background:var(--navy)"></div>
        <div class="timeline-phase">Phase 4 · 2028–2030</div>
        <h3>Scale & Grow</h3>
        <ul class="timeline-bullets">
          <li>Target $280K revenue by Year 3</li>
          <li>New routes added (Manaslu, Kanchenjunga)</li>
          <li>Full-time staff hired</li>
          <li>Premium tier packages launched</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<!-- CONTACT -->
<section id="contact">
  <span class="section-label" style="display:block;text-align:center">Get In Touch</span>
  <h2 class="section-title">The Summit Awaits</h2>
  <p class="section-body">Peak Odyssey launches 2027 — built by a trekker, for trekkers. Reach out to plan your Himalayan expedition.</p>

  <div class="contact-info">
    <div class="contact-item">
      <span>Email</span>
      <a href="mailto:info@peakodyssey.np">info@peakodyssey.np</a>
    </div>
    <div class="contact-item">
      <span>Website</span>
      <a href="https://www.peakodyssey.np" target="_blank">www.peakodyssey.np</a>
    </div>
    <div class="contact-item">
      <span>Based In</span>
      <span>Sindhupalchowk, Nepal</span>
    </div>
  </div>

  <a href="mailto:info@peakodyssey.np" class="btn-primary">Send an Enquiry</a>
</section>

<!-- FOOTER -->
<footer>
  <p>© 2027 Peak Odyssey · Sindhupalchowk, Nepal · Walk · Explore · Discover</p>
  <nav class="footer-links">
    <a href="#treks">Treks</a>
    <a href="#culture">Culture</a>
    <a href="#sustainability">Sustainability</a>
    <a href="#contact">Contact</a>
  </nav>
</footer>

<script>
  function toggleNav() {
    document.getElementById('navLinks').classList.toggle('open');
  }

  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', () => {
      document.getElementById('navLinks').classList.remove('open');
    });
  });

  const nav = document.querySelector('nav');
  window.addEventListener('scroll', () => {
    nav.style.background = window.scrollY > 40
      ? 'rgba(17,38,73,0.98)'
      : 'rgba(28,61,110,0.97)';
  });
</script>
</body>
</html>

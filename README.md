<div align="center">

# ✨ Kishan Sah — 3D Responsive Contact Landing Experience

<p align="center">
  <strong>A cutting-edge, cinematic full-screen video background landing page and interactive 3D contact portal.</strong>
</p>

<p align="center">
  <a href="https://github.com/Kishan-shah12/Contact-Us/stargazers"><img src="https://img.shields.io/github/stars/Kishan-shah12/Contact-Us?color=F59E0B&style=for-the-badge&logo=star" alt="Stars" /></a>
  <a href="https://github.com/Kishan-shah12/Contact-Us/network/members"><img src="https://img.shields.io/github/forks/Kishan-shah12/Contact-Us?color=6366F1&style=for-the-badge&logo=git" alt="Forks" /></a>
  <a href="https://github.com/Kishan-shah12/Contact-Us/blob/main/LICENSE"><img src="https://img.shields.io/badge/License-MIT-emerald?style=for-the-badge" alt="License" /></a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React 19" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Lucide_Icons-F43F5E?style=for-the-badge&logo=lucide&logoColor=white" alt="Lucide" />
</p>

<p align="center">
  <a href="https://vercel.com/new/clone?repository-url=https://github.com/Kishan-shah12/Contact-Us">
    <img src="https://vercel.com/button" alt="Deploy with Vercel" />
  </a>
</p>

---

</div>

## 🎯 Overview

**Kishan Sah's Contact Portal** is an immersive, production-grade contact page designed to captivate visitors at first glance. Built for modern portfolios and creative engineering showcases, it blends rich visual aesthetics—cinematic ambient video, glassmorphism, micro-animations, and true **3D responsive tilt physics**—with real-time email delivery directly to your Gmail inbox.

---

## 🌟 Key Highlights

<table>
  <tr>
    <td width="50%">
      <h3>🎬 Cinematic 3D Video Backdrop</h3>
      <ul>
        <li>Autoplaying, seamless loop video framed in an adaptive rounded viewport card.</li>
        <li>Ambient dark gradient overlay guaranteeing high typography contrast and readability.</li>
      </ul>
    </td>
    <td width="50%">
      <h3>🔮 Floating Glassmorphic Navbar</h3>
      <ul>
        <li>Pill bar with <code>backdrop-blur-md</code> and subtle shadow.</li>
        <li>Custom 3D isometric dual-gradient geometric mark with violet/magenta depth and micro-hover scaling.</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td width="50%">
      <h3>👋 Expressive Micro-Animations</h3>
      <ul>
        <li>Continuous oscillating wave (<code>👋</code>) emoji with natural human hand pivot physics.</li>
        <li>Staggered 3D floating social brand buttons (GitHub, LinkedIn, Facebook) that pause smoothly on hover.</li>
      </ul>
    </td>
    <td width="50%">
      <h3>📬 Direct-to-Inbox Email Routing</h3>
      <ul>
        <li>Integrated with FormSubmit API—zero server or backend configuration required.</li>
        <li>Submissions arrive cleanly formatted as a table straight in <code>jnkishansah@gmail.com</code>.</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td colspan="2">
      <h3>🧊 Interactive 3D Perspective Notification (<code>Notification3D</code>)</h3>
      <ul>
        <li><strong>Dynamic Physics</strong>: Smooth mouse- and touch-tracking tilt physics along both <code>rotateX</code> and <code>rotateY</code> axes with <code>perspective: 1000px</code>.</li>
        <li><strong>Holographic Sheen</strong>: Dynamic specular lighting glare that tracks your cursor or finger across the card surface.</li>
        <li><strong>Multi-Layer Z-Depth</strong>: Layered elevation using <code>translateZ</code>—floating checkmark sphere (<code>translateZ(48px)</code>), dispatched beacon (<code>translateZ(38px)</code>), and tactile action button (<code>translateZ(34px)</code>).</li>
      </ul>
    </td>
  </tr>
</table>

---

## 🗂️ Project Structure

```bash
Contact-Us/
├── 📁 public/                 # Static assets & icons
├── 📁 src/
│   ├── App.tsx                # Main Landing Page + 3D Notification Component
│   ├── index.css              # Google Fonts, Tailwind directives & 3D Keyframes
│   ├── main.tsx               # React 19 Application Root
│   └── vite-env.d.ts          # Vite TypeScript Declarations
├── index.html                 # HTML Entry point with Google Fonts preconnect
├── package.json               # Dependencies & scripts
├── postcss.config.js          # PostCSS configuration
├── tailwind.config.js         # Tailwind configuration & typography tokens
├── tsconfig.json              # TypeScript configuration
└── vite.config.ts             # Vite configuration
```

---

## ⚡ Quickstart

Get a local development copy running on your machine in seconds:

### 1. Clone the repository
```bash
git clone https://github.com/Kishan-shah12/Contact-Us.git
cd Contact-Us
```

### 2. Install dependencies
```bash
npm install
```

### 3. Launch the development server
```bash
npm run dev
```

Open your browser at `http://localhost:5173/` to see the live page.

### 4. Build for production
```bash
npm run build
```
Generates a minified, production-ready build in `dist/`.

---

## 🎨 Design Tokens & Typography

- **Primary Sans**: [Inter](https://fonts.google.com/specimen/Inter) (`300`, `400`, `500`, `600`, `700`)
- **Accent Editorial Serif**: [Instrument Serif](https://fonts.google.com/specimen/Instrument+Serif) (Regular & Italic)
- **Palette**:
  - Deep Obsidian: `#0C0C0C` / `#171717`
  - Electric Sapphire: `#0A66C2` / `#2563EB`
  - Emerald Beacon: `#10B981` / `#059669`
  - Royal Indigo: `#1877F2` / `#6366F1`
 
----

## 👨‍💻 Author

<table align="center">
  <tr>
    <td align="center">
      <strong>Kishan Sah</strong><br />
      <em>Computer Science Engineer & Full-Stack Developer</em><br /><br />
      <a href="https://github.com/Kishan-shah12">
        <img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white" alt="GitHub" />
      </a>
      <a href="https://www.linkedin.com/in/kishan-sah-b97a73315/">
        <img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=flat-square&logo=linkedin&logoColor=white" alt="LinkedIn" />
      </a>
      <a href="https://www.facebook.com/kishan.sah.98478/">
        <img src="https://img.shields.io/badge/Facebook-1877F2?style=flat-square&logo=facebook&logoColor=white" alt="Facebook" />
      </a>
      <a href="mailto:jnkishansah@gmail.com">
        <img src="https://img.shields.io/badge/Email-D14836?style=flat-square&logo=gmail&logoColor=white" alt="Email" />
      </a>
    </td>
  </tr>
</table>

---

## 📄 License

This project is licensed under the **MIT License** — feel free to customize and use it in your own projects!

<div align="center">
  <sub>Built with ❤️ by <a href="https://github.com/Kishan-shah12">Kishan Sah</a>. If you find this project helpful, give it a ⭐!</sub>
</div>


import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

const I18nContext = createContext(null);

const get = (obj, path) => path.split(".").reduce((o, k) => (o && o[k] !== undefined ? o[k] : undefined), obj);

const dictionaries = {
  id: {
    nav: { home: "Home", about: "Tentang", projects: "Proyek", contact: "Kontak" },
    common: {
      name: "Wahyu Nugraha",
      role: "Backend Developer",
      github: "GitHub",
      email: "Email",
      linkedin: "LinkedIn",
      download_resume: "Unduh Resume",
    },
    home: {
      hi: "Hai, saya",
      headline_role: "Backend Developer — Node.js.",
      sub: "Saya membangun API yang cepat, aman, terukur, dan mudah dipelihara.",
      cta_projects: "Lihat Proyek",
      cta_contact: "Hubungi Saya",
    },
    about: {
      title: "Tentang",
      intro: "Saya Wahyu — lulusan Informatika (IPK 3.92/4.00). Fokus membangun layanan backend yang andal dan terukur dengan clean architecture, testing, dan observability.",
      cards: { role: "Peran", stack: "Tumpukan Teknologi", tools: "Perkakas", location: "Lokasi", experience: "Pengalaman", education: "Pendidikan", highlights: "Sorotan" },
      values: { role: "Backend Developer", stack: "Node.js (Express/Hapi), PostgreSQL", tools: "VS Code, Git, Postman", location: "Indonesia (GMT+7)" },
      exp: ["Bangkit Academy (Android) — capstone, testing, CI.", "AWS Back-End Academy — REST API, auth, dasar cloud.", "Open-source & personal projects — API, desain DB, dokumentasi."],
      edu: ["Universitas Sriwijaya — S.Kom Informatika, IPK 3.92/4.00.", "GDSC UNSRI — anggota Mobile Dev."],
      hi: ["Arsitektur bersih & modular.", "Mindset pengujian (unit/integration).", "Fokus keamanan & performa."],
    },
    projects: {
      title: "Proyek",
      sub: "Proyek backend: perancangan skema data, desain API, autentikasi, dan kualitas kode.",
      badge_github: "GitHub",
      items: {
        ikn: { title: "Sentiment Analisis IKN", desc: "Analisis sentimen IKN; preprocessing, fine-tuning IndoBERT, dan UI visualisasi.", stack: ["IndoBERT", "Python", "Streamlit"] },
        express: { title: "RESTful API Express", desc: "REST API dengan autentikasi, validasi, dan pemisahan controller/service.", stack: ["Node.js", "Express", "JWT", "PostgreSQL"] },
        crud: { title: "Fullstack CRUD JS", desc: "CRUD end-to-end; desain schema, endpoints, dan UI sederhana.", stack: ["Node.js", "Express", "PostgreSQL", "React (basic)"] },
        mihu: { title: "MIHU 1.0", desc: "Kontribusi MIHU-PROJECT: fitur, perbaikan bug, diskusi technical debt.", stack: ["Open-source", "Kolaborasi"] },
        openmusic: { title: "Openmusic API", desc: "API musik: playlist/lagu, autentikasi, pengujian dasar.", stack: ["Hapi.js", "JWT", "PostgreSQL"] },
        notes: { title: "NotesApp Backend", desc: "Backend catatan: pemodelan data, akses kontrol, deployment dasar.", stack: ["Hapi.js", "PostgreSQL"] },
      },
    },
    contact: {
      title: "Kontak",
      sub: "Ingin kolaborasi atau merekrut saya? Kirim pesan via formulir atau email langsung.",
      form: { name: "Nama", email: "Email", message: "Pesan", submit: "Kirim" },
      social: { email: "Email", linkedin: "LinkedIn", github: "GitHub" },
    },
    footer: { copy_prefix: "©" },
  },
  en: {
    nav: { home: "Home", about: "About", projects: "Projects", contact: "Contact" },
    common: {
      name: "Wahyu Nugraha",
      role: "Backend Developer",
      github: "GitHub",
      email: "Email",
      linkedin: "LinkedIn",
      download_resume: "Download Resume",
    },
    home: {
      hi: "Hi, I’m",
      headline_role: "Backend Developer — Node.js",
      sub: "I build APIs that are fast, secure, scalable, and maintainable.",
      cta_projects: "View Projects",
      cta_contact: "Contact Me",
    },
    about: {
      title: "About",
      intro: "I’m Wahyu — Informatics graduate (GPA 3.92/4.00). I build reliable and scalable backend services with clean architecture, testing, and observability.",
      cards: { role: "Role", stack: "Stack", tools: "Tools", location: "Location", experience: "Experience", education: "Education", highlights: "Highlights" },
      values: { role: "Backend Developer", stack: "Node.js (Express/Hapi), PostgreSQL", tools: "VS Code, Git, Postman", location: "Indonesia (GMT+7)" },
      exp: ["Bangkit Academy (Android) — capstone, testing, CI.", "AWS Back-End Academy — REST API, auth, cloud basics.", "Open-source & personal projects — API, DB design, docs."],
      edu: ["Sriwijaya University — B.Sc. Informatics, GPA 3.92/4.00.", "GDSC UNSRI — Mobile Dev member."],
      hi: ["Clean architecture & modular design.", "Testing mindset (unit/integration).", "Security & performance awareness."],
    },
    projects: {
      title: "Projects",
      sub: "Backend-focused projects: data schema design, API design, authentication, and code quality.",
      badge_github: "GitHub",
      items: {
        ikn: { title: "IKN Sentiment Analysis", desc: "IKN sentiment analysis; preprocessing, IndoBERT fine-tuning, and visualization UI.", stack: ["IndoBERT", "Python", "Streamlit"] },
        express: { title: "RESTful API Express", desc: "REST API with auth, validation, and separated controller/service layers.", stack: ["Node.js", "Express", "JWT", "PostgreSQL"] },
        crud: { title: "Fullstack CRUD JS", desc: "End-to-end CRUD app; schema design, endpoints, and a simple UI.", stack: ["Node.js", "Express", "PostgreSQL", "React (basic)"] },
        mihu: { title: "MIHU 1.0", desc: "Contribution to MIHU-PROJECT: features, bug fixes, and technical-debt discussions.", stack: ["Open-source", "Collaboration"] },
        openmusic: { title: "Openmusic API", desc: "Music API: playlists/tracks, authentication, and basic testing.", stack: ["Hapi.js", "JWT", "PostgreSQL"] },
        notes: { title: "NotesApp Backend", desc: "Notes backend: data modeling, access control, and deployment basics.", stack: ["Hapi.js", "PostgreSQL"] },
      },
    },
    contact: {
      title: "Contact",
      sub: "Want to collaborate or hire me? Send a message via the form or email me directly.",
      form: { name: "Name", email: "Email", message: "Message", submit: "Send" },
      social: { email: "Email", linkedin: "LinkedIn", github: "GitHub" },
    },
    footer: { copy_prefix: "©" },
  }
};

export function I18nProvider({ children }) {
  const getInitial = () => {
    const stored = localStorage.getItem("lang");
    if (stored === "id" || stored === "en") return stored;
    const nav = navigator.language?.toLowerCase() || "";
    if (nav.startsWith("id")) return "id";
    return "en";
  };
  const [lang, setLang] = useState(getInitial);

  useEffect(() => { localStorage.setItem("lang", lang); }, [lang]);

  const t = (key) => get(dictionaries[lang], key) ?? key;
  const value = useMemo(() => ({ lang, setLang, t }), [lang]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}

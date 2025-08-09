import { motion } from 'framer-motion'
import { useI18n } from '../i18n.jsx'

const urls = {
  ikn: "https://github.com/wahyunugrahha/ui-sentiment-analysis",
  express: "https://github.com/wahyunugrahha/RESTful-API-ExpressJS",
  crud: "https://github.com/wahyunugrahha/fullstack-crud-js",
  mihu: "https://github.com/MIHU-PROJECT/MIHU-1.0",
  openmusic: "https://github.com/wahyunugrahha/openmusic-api",
  notes: "https://github.com/wahyunugrahha/notes-app-hapijs",
};

export default function Projects() {
  const { t } = useI18n();
  const items = [
    { key: 'ikn', ...t('projects.items.ikn') },
    { key: 'express', ...t('projects.items.express') },
    { key: 'crud', ...t('projects.items.crud') },
    { key: 'mihu', ...t('projects.items.mihu') },
    { key: 'openmusic', ...t('projects.items.openmusic') },
    { key: 'notes', ...t('projects.items.notes') },
  ];

  return (
    <section className="relative py-16 sm:py-24">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h2 className="text-4xl sm:text-5xl font-black tracking-tight">{t('projects.title')}</h2>
        <p className="mt-6 text-white/80 max-w-2xl">{t('projects.sub')}</p>
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {items.map((p) => (
            <a key={p.title} href={urls[p.key]} target="_blank" rel="noreferrer" className="rounded-3xl border border-white/10 bg-white/5 p-6 hover:translate-y-[-2px] hover:bg-white/[0.07] transition shadow-glow">
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-semibold text-lg">{p.title}</h3>
                <span className="text-xs px-2 py-1 rounded-full bg-primary/15 border border-primary/30 text-primary">{t('projects.badge_github')}</span>
              </div>
              <p className="text-white/70 mt-2 text-sm leading-relaxed">{p.desc}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {p.stack.map((s) => (
                  <span key={s} className="text-xs px-2 py-1 rounded-full bg-white/10 border border-white/15">{s}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

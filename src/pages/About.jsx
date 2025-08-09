import Card from '../components/Card.jsx'
import { motion } from 'framer-motion'
import { useI18n } from '../i18n.jsx'

export default function About() {
  const { t } = useI18n();
  const items = [
    { label: t('about.cards.role'), value: t('about.values.role') },
    { label: t('about.cards.stack'), value: t('about.values.stack') },
    { label: t('about.cards.tools'), value: t('about.values.tools') },
    { label: t('about.cards.location'), value: t('about.values.location') },
  ];

  return (
    <section className="relative py-16 sm:py-24">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="max-w-3xl">
        <h2 className="text-4xl sm:text-5xl font-black tracking-tight">{t('about.title')}</h2>
        <p className="mt-6 text-white/80 leading-relaxed">{t('about.intro')}</p>

        <div className="mt-10 grid sm:grid-cols-2 gap-4">
          {items.map((it) => (
            <div key={it.label} className="rounded-2xl border border-white/10 p-4 bg-white/5">
              <p className="text-white/60 text-sm">{it.label}</p>
              <p className="font-semibold mt-1">{it.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid sm:grid-cols-3 gap-4">
          <Card title={t('about.cards.experience')}>
            <ul className="list-disc list-inside space-y-1">
              {t('about.exp').map((line) => <li key={line}>{line}</li>)}
            </ul>
          </Card>
          <Card title={t('about.cards.education')}>
            <ul className="list-disc list-inside space-y-1">
              {t('about.edu').map((line) => <li key={line}>{line}</li>)}
            </ul>
          </Card>
          <Card title={t('about.cards.highlights')}>
            <ul className="list-disc list-inside space-y-1">
              {t('about.hi').map((line) => <li key={line}>{line}</li>)}
            </ul>
          </Card>
        </div>
      </motion.div>
    </section>
  )
}

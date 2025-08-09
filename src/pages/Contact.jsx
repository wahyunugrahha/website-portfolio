import { motion } from 'framer-motion'
import { useI18n } from '../i18n.jsx'

export default function Contact() {
  const { t } = useI18n();
  return (
    <section className="relative py-16 sm:py-24">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-2xl">
        <h2 className="text-4xl sm:text-5xl font-black tracking-tight">{t('contact.title')}</h2>
        <p className="mt-6 text-white/80">{t('contact.sub')}</p>
        <form name="contact" method="POST" data-netlify="true" className="mt-8 grid gap-4">
          <input type="hidden" name="form-name" value="contact" />
          <input className="bg-white/5 border border-white/10 rounded-2xl px-4 py-3 outline-none focus:border-primary" name="name" placeholder={t('contact.form.name')} required />
          <input className="bg-white/5 border border-white/10 rounded-2xl px-4 py-3 outline-none focus:border-primary" name="email" placeholder={t('contact.form.email')} type="email" required />
          <textarea className="bg-white/5 border border-white/10 rounded-2xl px-4 py-3 outline-none focus:border-primary" name="message" placeholder={t('contact.form.message')} rows="5" required />
          <button className="justify-self-start px-5 py-3 rounded-2xl bg-white text-black font-medium hover:translate-y-[-1px] active:translate-y-[0px] transition">{t('contact.form.submit')}</button>
        </form>
        <div className="mt-6 text-sm text-white/60">
          <p>{t('contact.social.email')}: <a className="underline hover:text-white" href="mailto:wahyunih297@gmail.com">wahyunih297@gmail.com</a></p>
          <p>{t('contact.social.linkedin')}: <a className="underline hover:text-white" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/wahyunugrahha">/in/wahyunugrahha</a></p>
          <p>{t('contact.social.github')}: <a className="underline hover:text-white" target="_blank" rel="noreferrer" href="https://github.com/wahyunugrahha">@wahyunugrahha</a></p>
        </div>
      </motion.div>
    </section>
  )
}

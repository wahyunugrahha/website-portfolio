import { useI18n } from '../i18n.jsx'
export default function Footer() {
  const { t } = useI18n();
  return (
    <footer className="max-w-6xl mx-auto px-4 py-12 text-sm text-white/60">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p>{t('footer.copy_prefix')} {new Date().getFullYear()} {t('common.name')} — {t('common.role')}</p>
        <div className="flex gap-4">
          <a className="hover:text-white" href="mailto:wahyunih297@gmail.com">{t('common.email')}</a>
          <a className="hover:text-white" href="https://github.com/wahyunugrahha" target="_blank" rel="noreferrer">{t('common.github')}</a>
          <a className="hover:text-white" href="https://www.linkedin.com/in/wahyunugrahha" target="_blank" rel="noreferrer">{t('common.linkedin')}</a>
        </div>
      </div>
    </footer>
  )
}

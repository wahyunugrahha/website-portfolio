import { Link, NavLink } from 'react-router-dom'
import { SparklesIcon } from '@heroicons/react/24/solid'
import { useI18n } from '../i18n.jsx'

const linkClass = ({ isActive }) =>
  `hover:text-primary transition ${isActive ? 'text-primary' : 'text-white/80'}`

export default function Navbar() {
  const { lang, setLang, t } = useI18n();
  return (
    <nav className="sticky top-0 z-50 backdrop-blur bg-ink/70 border-b border-white/5 after:absolute after:inset-x-0 after:bottom-[-1px] after:h-[1px] after:bg-gradient-to-r after:from-primary/0 after:via-primary/60 after:to-accent/0">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="font-bold tracking-tight text-xl">
          {t('common.name')}<span className="text-primary">.</span> <SparklesIcon className="inline w-5 h-5 ml-1 text-primary" />
        </Link>
        <div className="flex items-center gap-6 text-sm">
          <NavLink to="/" className={linkClass} end>{t('nav.home')}</NavLink>
          <NavLink to="/about" className={linkClass}>{t('nav.about')}</NavLink>
          <NavLink to="/projects" className={linkClass}>{t('nav.projects')}</NavLink>
          <NavLink to="/contact" className={linkClass}>{t('nav.contact')}</NavLink>
          <div className="flex items-center gap-2 text-xs border border-white/10 rounded-2xl px-2 py-1 bg-white/5">
            <button onClick={() => setLang('id')} className={`px-2 py-0.5 rounded-xl ${lang === 'id' ? 'bg-primary/20 text-primary' : 'text-white/70 hover:text-white'}`}>ID</button>
            <span className="text-white/30">/</span>
            <button onClick={() => setLang('en')} className={`px-2 py-0.5 rounded-xl ${lang === 'en' ? 'bg-primary/20 text-primary' : 'text-white/70 hover:text-white'}`}>EN</button>
          </div>
        </div>
      </div>
    </nav>
  )
}

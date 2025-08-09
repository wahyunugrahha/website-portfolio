import { motion } from "framer-motion";
import { ArrowRightIcon, ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import { useI18n } from "../i18n.jsx";

export default function Home() {
  const { t } = useI18n();
  return (
    <section className="relative py-24 sm:py-32">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="max-w-3xl md:pr-4">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-white/70"
          >
            {t("home.hi")}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="text-5xl sm:text-6xl font-black tracking-tight mt-2"
          >
            {t("common.name")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="mt-6 text-lg text-white/80 leading-relaxed"
          >
            <span className="font-semibold text-primary block">{t("home.headline_role")}</span>
            <span className="block">{t("home.sub")}</span>
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.15 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="#/projects"
              className="px-5 py-3 rounded-2xl bg-white text-black font-medium hover:translate-y-[-1px] active:translate-y-[0px] transition flex items-center gap-2"
            >
              {t("home.cta_projects")} <ArrowRightIcon className="w-4 h-4" />
            </a>
            <a
              href="#/contact"
              className="px-5 py-3 rounded-2xl border border-white/20 hover:border-white/50"
            >
              {t("home.cta_contact")}
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3 rounded-2xl border border-primary/40 bg-primary/10 hover:bg-primary/15 text-primary flex items-center gap-2"
            >
              <ArrowDownTrayIcon className="w-4 h-4" /> {t("common.download_resume")}
            </a>
          </motion.div>
        </div>

        <div className="md:pl-4">
          <div className="w-full max-w-sm mx-auto aspect-square rounded-[1.5rem] border border-white/10 overflow-hidden relative shadow-[0_0_25px_rgba(0,230,207,0.4)] bg-gradient-to-br from-white/5 to-white/0">
            <img
              src="/profile.jpg"
              alt="Profile photo of Wahyu Nugraha"
              className="w-full h-full object-contain grayscale drop-shadow-[0_0_10px_rgba(0,230,207,0.5)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

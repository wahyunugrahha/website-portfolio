export default function Card({ title, children, footer }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 hover:translate-y-[-2px] transition shadow-glow">
      {title ? <h3 className="font-semibold mb-2">{title}</h3> : null}
      <div className="text-white/80 text-sm leading-relaxed">{children}</div>
      {footer ? <div className="mt-3 text-sm">{footer}</div> : null}
    </div>
  )
}

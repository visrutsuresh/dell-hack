# EchoBreak Design System

Reference for keeping new features cohesive with the current UI.

## Colors
- **Background**: `#0A0A0A` (--bg-dark), `bg-[#0A0A0A]`
- **Accents**: Teal `#14B8A6` / `teal-500`, Violet `#8B5CF6` / `violet-500`
- **Gradients**: `from-teal-500 to-violet-500` (nav, buttons), `from-teal-200 to-violet-200` (hover)
- **Neutrals**: `zinc-400` (muted text), `zinc-500` (secondary), `zinc-600` (tertiary), `white/5`–`white/20` (borders, overlays)
- **Status**: `red-500` (critical), `amber-500` (warning), `emerald-500` (stable) — use `/10` bg + `/20` border

## Typography
- **Headings**: `font-['Instrument_Serif']` (loaded as Instrument Serif). Hero can use `italic`.
- **Body**: `Inter` (default sans). Use `text-zinc-400` for secondary, `font-medium` for emphasis.
- **Scale**: Hero `text-7xl md:text-9xl`, page titles `text-4xl`–`text-5xl`, cards `text-xl`, labels `text-sm` / `text-xs uppercase tracking-wider`.

## Surfaces & Borders
- **Cards/panels**: `bg-zinc-900/30` or `bg-zinc-900/50`, `border border-white/10`, `rounded-2xl` or `rounded-3xl`
- **Inputs**: `bg-zinc-900` or `bg-black/30`, `border-white/10`, `rounded-lg` or `rounded-full` for inputs
- **Focus**: `focus:border-teal-500/50` or `focus:ring-teal-500/20`
- **Hover (cards)**: `hover:border-white/20`

## Motion (Framer Motion)
- **Page enter**: `initial={{ opacity: 0, y: 10 }}` → `animate={{ opacity: 1, y: 0 }}`, `exit={{ opacity: 0, y: -10 }}`, duration ~0.4, ease `[0.22, 1, 0.36, 1]`
- **Stagger**: `transition={{ delay: index * 0.1 }}` or `0.2` for lists
- **Side panels**: `x: -20` / `x: 20` for slide-in
- **Buttons**: `whileHover={{ scale: 1.02 }}`, `whileTap={{ scale: 0.98 }}`
- **Nav underline**: `layoutId="nav-underline"` for shared layout animation

## Components
- **Primary CTA**: `bg-white text-black rounded-full`, hover gradient overlay `from-teal-200 to-violet-200`
- **Secondary/danger**: `bg-red-500/10 text-red-400 border border-red-500/20` (e.g. Escalate)
- **Pills/badges**: `rounded-full`, status colors with `/10` bg and `/20` border
- **Icons**: lucide-react, tint with `text-teal-400` / `text-violet-400` etc.

## Layout
- **Container**: `max-w-7xl mx-auto px-6` (narrow flows like Escalation: `max-w-3xl`)
- **Page top**: `pt-20` (with nav) or `pt-24` / `pt-28` for content below nav
- **Grid**: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`

## Backgrounds
- **PatternCanvas**: Use for hero, dashboard cards, detail viz, chat sidebar. Types: `smooth` (calm), `mixed`, `jagged` (critical). Colors align to status or teal/violet.

Use this when adding or changing features so new UI stays consistent with EchoBreak’s dark, teal/violet, Instrument Serif + Inter look and motion.

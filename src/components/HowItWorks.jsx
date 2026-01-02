import { motion } from 'framer-motion'
import { CheckCircle, Eye, ShieldAlert } from 'lucide-react'

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut', staggerChildren: 0.2 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
}

function HowItWorks() {
  return (
    <motion.section
      className="section-container"
      id="features"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={containerVariants}
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-display text-4xl sm:text-5xl font-bold">How it works</h2>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        <motion.div className="relative rounded-2xl border border-white/5 bg-white/5 p-6" variants={cardVariants}>
          <div className="absolute right-6 top-6 text-4xl font-display text-white/10">01</div>
          <div className="flex items-center gap-3">
            <Eye className="h-6 w-6 text-primary" />
            <h3 className="font-display text-xl font-bold">Monitor.</h3>
          </div>
          <p className="mt-4 text-white/70">
            CodeGuard runs in the background of VS Code, monitoring all file system changes initiated by AI agents.
          </p>
        </motion.div>

        <motion.div className="relative rounded-2xl border border-white/5 bg-white/5 p-6" variants={cardVariants}>
          <div className="absolute right-6 top-6 text-4xl font-display text-white/10">02</div>
          <div className="flex items-center gap-3">
            <ShieldAlert className="h-6 w-6 text-primary" />
            <h3 className="font-display text-xl font-bold">Analyze.</h3>
          </div>
          <p className="mt-4 text-white/70">
            Our engine analyzes every diff for destructive patterns: massive deletions, sensitive logic rewrites, or
            broken dependencies.
          </p>
        </motion.div>

        <motion.div className="relative rounded-2xl border border-white/5 bg-white/5 p-6" variants={cardVariants}>
          <div className="absolute right-6 top-6 text-4xl font-display text-white/10">03</div>
          <div className="flex items-center gap-3">
            <CheckCircle className="h-6 w-6 text-primary" />
            <h3 className="font-display text-xl font-bold">Intercept.</h3>
          </div>
          <p className="mt-4 text-white/70">
            If a change looks dangerous, we block it and trigger a warning. You decide whether to Apply, Edit, or
            Discard.
          </p>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default HowItWorks

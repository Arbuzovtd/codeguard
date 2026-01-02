import { motion } from 'framer-motion'

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
}

function Footer() {
  return (
    <motion.footer
      className="border-t border-white/10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={fadeIn}
    >
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="font-display text-base text-white/60">CodeGuard</div>
          <nav className="flex flex-wrap gap-4 text-sm text-white/50">
            <a className="hover:text-white/80 transition-colors duration-200" href="#features">
              Features
            </a>
            <a className="hover:text-white/80 transition-colors duration-200" href="#pricing">
              Pricing
            </a>
            <a className="hover:text-white/80 transition-colors duration-200" href="#">
              Docs
            </a>
            <a className="hover:text-white/80 transition-colors duration-200" href="#">
              Twitter
            </a>
            <a className="hover:text-white/80 transition-colors duration-200" href="#">
              GitHub
            </a>
          </nav>
        </div>
        <div className="mt-8 text-sm text-white/50">
          © 2026 CodeGuard. Built for developers.
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer

import { motion } from 'framer-motion'

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

function FinalCTA() {
  const handleSubmit = (event) => {
    event.preventDefault()
    const email = event.target.email.value
    alert(`Thanks! We'll notify you at ${email} when CodeGuard launches.`)
    event.target.reset()
  }

  return (
    <motion.section
      className="section-container relative overflow-hidden"
      id="cta"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={fadeIn}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-3xl" />
      </div>

      <div className="relative max-w-3xl mx-auto text-center">
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold">
          Ready to protect your workflow?
        </h2>
        <p className="mt-4 text-lg text-white/70">
          Join other developers who stopped losing code to AI mistakes.
        </p>
        <form className="mt-8 flex flex-col gap-3 sm:flex-row" onSubmit={handleSubmit}>
          <input
            className="input-primary flex-1"
            type="email"
            name="email"
            placeholder="your@email.com"
            required
            aria-label="Email address"
          />
          <motion.button
            className="btn-primary"
            type="submit"
            whileHover={{ scale: 1.02 }}
          >
            Get Early Access
          </motion.button>
        </form>
      </div>
    </motion.section>
  )
}

export default FinalCTA

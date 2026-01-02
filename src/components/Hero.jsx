import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

function Hero() {
  const handleSubmit = (event) => {
    event.preventDefault()
    const email = event.target.email.value
    // MVP feedback until waitlist backend is wired up.
    alert(`Thanks! We'll notify you at ${email} when CodeGuard launches.`)
    event.target.reset()
  }

  return (
    <section className="section-container pt-32 lg:pt-40" id="hero">
      <motion.div
        className="grid gap-12 lg:grid-cols-[2fr_3fr] lg:gap-16 items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div>
          <motion.h1
            className="font-display text-5xl sm:text-6xl lg:text-8xl font-bold leading-none tracking-tight"
            variants={itemVariants}
          >
            Stop AI From Breaking Your Code
          </motion.h1>
          <motion.p className="mt-6 text-lg lg:text-xl text-white/70 leading-relaxed max-w-2xl" variants={itemVariants}>
            CodeGuard protects your projects by intercepting dangerous AI changes before they're applied. No more
            accidental deletions. No more lost work.
          </motion.p>
          <motion.form
            className="mt-8 flex flex-col gap-3 sm:flex-row"
            onSubmit={handleSubmit}
            variants={itemVariants}
          >
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
              whileTap={{ scale: 0.98 }}
            >
              Get Early Access
            </motion.button>
          </motion.form>
          <motion.p className="mt-4 text-sm text-primary/80 font-medium" variants={itemVariants}>
            Join 200+ developers protecting their code
          </motion.p>
        </div>

        <motion.div className="relative" variants={itemVariants}>
          <div className="overflow-hidden rounded-lg bg-[#1e1e1e] shadow-2xl">
            <div className="flex items-center gap-3 bg-[#323233] px-4 py-2">
              <div className="flex gap-1.5">
                <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
                <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
                <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
              </div>
              <span className="text-sm text-[#cccccc]">auth.js — CodeGuard</span>
            </div>
            <div className="p-6 font-mono text-sm text-[#d4d4d4]">
              <pre>
{`1  async function authenticate(user) {
2    const token = user.token;
3    if (!token) {
4      throw new Error('No token');
5    }
6    return validateToken(token);
7  }`}
              </pre>
            </div>
            <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm">
              <div className="max-w-md rounded-lg border border-danger/30 bg-[#252526] p-6 shadow-2xl">
                <div className="flex items-start gap-3">
                  <div className="text-2xl">⚠️</div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-white">Dangerous Change Detected</h3>
                    <p className="mt-2 text-sm text-white/70">
                      AI wants to delete 47 lines from auth.js
                    </p>
                    <div className="mt-4 flex flex-wrap gap-3">
                      <button className="btn-primary text-sm" type="button">
                        Review Change
                      </button>
                      <button className="btn-secondary text-sm" type="button">
                        Block Change
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero

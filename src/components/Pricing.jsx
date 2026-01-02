import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
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

function Pricing() {
  return (
    <motion.section
      className="section-container"
      id="pricing"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={containerVariants}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-display text-4xl lg:text-6xl font-bold">Pricing built for focus</h2>
        <p className="mt-4 text-lg text-white/70">
          Start free and unlock advanced protection when your workflows grow.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
        <motion.div
          className="rounded-2xl border border-white/10 bg-white/5 p-8"
          variants={cardVariants}
        >
          <div className="flex items-center justify-between">
            <h3 className="font-display text-2xl font-bold">Individual</h3>
            <span className="text-sm text-white/50">Free tier</span>
          </div>
          <p className="mt-4 text-white/70">Get started for free</p>
          <div className="mt-6 flex items-end gap-2">
            <span className="text-4xl font-display font-bold">$0</span>
            <span className="text-white/60">/ mo</span>
          </div>
          <ul className="mt-6 space-y-3 text-white/70">
            <li>Basic Diff Interceptor</li>
            <li>Manual danger review</li>
            <li>Last 3 restore points (7 days)</li>
            <li>Community support</li>
            <li>1 project</li>
          </ul>
          <motion.button
            className="btn-secondary mt-8 w-full"
            type="button"
            whileHover={{ scale: 1.02 }}
          >
            Start for Free
          </motion.button>
        </motion.div>

        <motion.div
          className="rounded-2xl border border-primary/40 bg-white/5 p-8 shadow-[0_0_30px_rgba(16,185,129,0.15)]"
          variants={cardVariants}
        >
          <div className="flex items-center justify-between">
            <h3 className="font-display text-2xl font-bold">Pro</h3>
            <span className="text-sm text-primary/80">Best for teams</span>
          </div>
          <p className="mt-4 text-white/70">Unlock full protection</p>
          <div className="mt-6 flex items-end gap-2">
            <span className="text-4xl font-display font-bold">$8</span>
            <span className="text-white/60">/ mo</span>
          </div>
          <ul className="mt-6 space-y-3 text-white/70">
            <li>Advanced Diff Interceptor</li>
            <li>AI-powered danger analysis</li>
            <li>Unlimited restore points (30 days)</li>
            <li>Cloud backups</li>
            <li>Unlimited projects</li>
            <li>Priority support (&lt; 24h response)</li>
            <li>Custom rule engine</li>
          </ul>
          <motion.button
            className="btn-primary mt-8 w-full"
            type="button"
            whileHover={{ scale: 1.02 }}
          >
            Get Pro Access
          </motion.button>
        </motion.div>
      </div>

      <div className="mt-20 max-w-5xl mx-auto">
        <h3 className="font-display text-3xl font-bold text-center mb-12">
          Feature Comparison
        </h3>
        <div className="overflow-x-auto rounded-lg border border-white/10 bg-white/5">
          <table className="w-full min-w-[680px]">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left p-4 font-body font-medium text-white/70">Feature</th>
                <th className="text-center p-4 font-body font-medium text-white/70">Individual</th>
                <th className="text-center p-4 font-body font-medium text-primary">Pro</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white/10 hover:bg-white/5 transition-colors duration-200">
                <td className="p-4 text-white">Diff Interceptor</td>
                <td className="p-4 text-center text-white/70">Basic</td>
                <td className="p-4 text-center text-primary">Advanced</td>
              </tr>
              <tr className="border-b border-white/10 hover:bg-white/5 transition-colors duration-200">
                <td className="p-4 text-white">Danger Analysis</td>
                <td className="p-4 text-center text-white/70">Manual review</td>
                <td className="p-4 text-center text-primary">AI-powered</td>
              </tr>
              <tr className="border-b border-white/10 hover:bg-white/5 transition-colors duration-200">
                <td className="p-4 text-white">Restore Points</td>
                <td className="p-4 text-center text-white/70">Last 3 (7 days)</td>
                <td className="p-4 text-center text-primary">Unlimited (30 days)</td>
              </tr>
              <tr className="border-b border-white/10 hover:bg-white/5 transition-colors duration-200">
                <td className="p-4 text-white">Cloud Backups</td>
                <td className="p-4 text-center text-white/70">✗</td>
                <td className="p-4 text-center text-primary">✓</td>
              </tr>
              <tr className="border-b border-white/10 hover:bg-white/5 transition-colors duration-200">
                <td className="p-4 text-white">Multi-project Support</td>
                <td className="p-4 text-center text-white/70">1 project</td>
                <td className="p-4 text-center text-primary">Unlimited</td>
              </tr>
              <tr className="border-b border-white/10 hover:bg-white/5 transition-colors duration-200">
                <td className="p-4 text-white">Support</td>
                <td className="p-4 text-center text-white/70">Community</td>
                <td className="p-4 text-center text-primary">Priority (&lt; 24h)</td>
              </tr>
              <tr className="hover:bg-white/5 transition-colors duration-200">
                <td className="p-4 text-white">Custom Rule Engine</td>
                <td className="p-4 text-center text-white/70">✗</td>
                <td className="p-4 text-center text-primary">✓</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </motion.section>
  )
}

export default Pricing

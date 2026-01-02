import { motion } from 'framer-motion'

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

function Problem() {
  return (
    <motion.section
      className="section-container bg-black"
      id="problem"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={fadeInUp}
    >
      <h2 className="font-display text-4xl lg:text-6xl font-bold text-center">
        Every Developer's Nightmare
      </h2>

      <blockquote className="relative max-w-3xl mx-auto mt-12">
        <div className="border-l-4 border-danger pl-8 py-4">
          <p className="font-body text-2xl lg:text-3xl text-white leading-relaxed">
            "Cursor destroyed months of development even though I only asked it to update the UI"
          </p>
        </div>
        <cite className="block text-white/50 text-base mt-4 not-italic">
          -- Senior Developer, YC Startup
        </cite>
      </blockquote>

      <div className="mt-12 grid gap-4 md:grid-cols-3">
        <div className="rounded-lg border border-white/10 bg-white/5 p-4">
          <p className="text-xs uppercase tracking-[0.2em] text-white/40">Horror story</p>
          <p className="mt-3 text-white/80">
            "Database has reset 3 times in last 24 hours due to AI ignoring rules"
          </p>
        </div>
        <div className="rounded-lg border border-white/10 bg-white/5 p-4">
          <p className="text-xs uppercase tracking-[0.2em] text-white/40">Horror story</p>
          <p className="mt-3 text-white/80">
            "AI deleted 90% of file content when I asked to update README"
          </p>
        </div>
        <div className="rounded-lg border border-white/10 bg-white/5 p-4">
          <p className="text-xs uppercase tracking-[0.2em] text-white/40">Horror story</p>
          <p className="mt-3 text-white/80">
            "There's no safety net - one wrong response destroys everything"
          </p>
        </div>
      </div>

      {/* Uncomment when a real stat is available. */}
      {/*
      <div className="max-w-2xl mx-auto mt-8 p-6 bg-primary/10 border border-primary/20 rounded-lg">
        <p className="font-body text-lg text-primary text-center">
          68% of AI coding tool users report losing work to accidental changes
        </p>
      </div>
      */}

      <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto mt-16">
        <div className="bg-danger/10 border border-danger/20 rounded-lg p-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-danger text-sm font-medium">❌ Deleted by AI</span>
          </div>
          <pre className="font-mono text-sm text-danger/90 overflow-x-auto">
{`async function authenticate(user) {
  // 47 lines deleted...
  // Authentication logic removed
  // Session management gone
  // Error handling missing
}`}
          </pre>
        </div>

        <div className="bg-primary/10 border border-primary/20 rounded-lg p-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-primary text-sm font-medium">✓ Protected by CodeGuard</span>
          </div>
          <pre className="font-mono text-sm text-primary/90 overflow-x-auto">
{`async function authenticate(user) {
  const token = user.token;
  if (!token) {
    throw new Error('No token');
  }
  return validateToken(token);
}`}
          </pre>
        </div>
      </div>
    </motion.section>
  )
}

export default Problem

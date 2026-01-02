import { motion } from 'framer-motion'
import { useState } from 'react'
import { supabase } from '../lib/supabase'

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

function FinalCTA() {
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    setLoading(true)
    setMessage('')

    const email = event.target.email.value

    try {
      const { error } = await supabase.from('signups').insert([
        {
          email,
          source: 'footer',
          user_agent: navigator.userAgent,
        },
      ])

      if (error) {
        if (error.code === '23505') {
          setMessage('You are already on the waitlist.')
        } else {
          throw error
        }
      } else {
        setMessage("Thanks! We'll notify you when CodeGuard launches.")
        event.target.reset()

        if (window.plausible) {
          window.plausible('Email Submit', { props: { section: 'footer' } })
        }
      }
    } catch (err) {
      console.error('Error saving email:', err)
      setMessage('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
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
            disabled={loading}
          />
          <motion.button
            className="btn-primary"
            type="submit"
            whileHover={{ scale: 1.02 }}
            disabled={loading}
          >
            {loading ? 'Submitting...' : 'Get Early Access'}
          </motion.button>
        </form>
        {message && (
          <p className={`mt-4 text-sm ${message.includes('wrong') ? 'text-danger' : 'text-primary'}`}>
            {message}
          </p>
        )}
      </div>
    </motion.section>
  )
}

export default FinalCTA

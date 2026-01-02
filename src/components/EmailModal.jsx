import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
}

const modalVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.25, ease: 'easeOut' } },
  exit: { opacity: 0, y: 10, scale: 0.98, transition: { duration: 0.2 } },
}

const planLabels = {
  individual: 'Individual',
  pro: 'Pro',
}

function EmailModal({ isOpen, onClose, plan }) {
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  useEffect(() => {
    if (!isOpen) return undefined

    setMessage('')
    setLoading(false)

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  const handleSubmit = async (event) => {
    event.preventDefault()
    setLoading(true)
    setMessage('')

    const email = event.target.email.value
    const source = plan ? `pricing:${plan}` : 'pricing'

    try {
      const { error } = await supabase.from('signups').insert([
        {
          email,
          source,
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
          window.plausible('Email Submit', { props: { section: 'pricing', plan: plan || 'unknown' } })
        }

        setTimeout(() => {
          onClose()
        }, 800)
      }
    } catch (err) {
      console.error('Error saving email:', err)
      setMessage('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-6"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              onClose()
            }
          }}
          role="dialog"
          aria-modal="true"
        >
          <motion.div
            className="w-full max-w-lg rounded-2xl border border-white/10 bg-black p-6 shadow-2xl"
            variants={modalVariants}
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-display text-2xl font-bold">Get Early Access</h3>
                <p className="mt-2 text-white/70">
                  Join the {planLabels[plan] || 'waitlist'} and protect your workflow.
                </p>
              </div>
              <button
                className="text-white/50 hover:text-white transition-colors duration-200"
                type="button"
                onClick={onClose}
                aria-label="Close modal"
              >
                ×
              </button>
            </div>

            <form className="mt-6 flex flex-col gap-3 sm:flex-row" onSubmit={handleSubmit}>
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
            <p className="mt-3 text-xs text-white/50">We only email you about CodeGuard updates.</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default EmailModal

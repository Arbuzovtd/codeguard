import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = () => {
    setMenuOpen(false)
  }

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
        animate={{
          backgroundColor: scrolled ? 'rgba(0, 0, 0, 0.95)' : 'transparent',
          borderBottomColor: scrolled ? 'rgba(16, 185, 129, 0.2)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
        }}
        style={{ borderBottomWidth: '1px' }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <a
            className="flex items-center gap-2 font-display text-xl font-bold focus:outline-none focus:ring-2 focus:ring-primary"
            href="#"
            aria-label="CodeGuard home"
          >
            <span>CodeGuard</span>
            <span className="h-2 w-2 rounded-full bg-primary" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
            <a className="link-primary font-medium" href="#features">
              Features
            </a>
            <a className="link-primary font-medium" href="#pricing">
              Pricing
            </a>
            <a className="link-primary font-medium" href="#">
              Docs
            </a>
          </nav>

          {/* Desktop CTA */}
          <motion.button
            className="hidden md:block btn-primary"
            type="button"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Get Early Access
          </motion.button>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-white focus:outline-none focus:ring-2 focus:ring-primary"
            type="button"
            aria-label="Toggle menu"
            aria-controls="mobile-menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            className="fixed inset-0 z-40 bg-black md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
            <nav className="flex h-full flex-col items-center justify-center gap-8" aria-label="Mobile">
              <a
                className="text-2xl text-white/70 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary"
                href="#features"
                onClick={handleLinkClick}
              >
                Features
              </a>
              <a
                className="text-2xl text-white/70 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary"
                href="#pricing"
                onClick={handleLinkClick}
              >
                Pricing
              </a>
              <a
                className="text-2xl text-white/70 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary"
                href="#"
                onClick={handleLinkClick}
              >
                Docs
              </a>
              <motion.button
                className="btn-primary text-lg"
                type="button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleLinkClick}
              >
                Get Early Access
              </motion.button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Header

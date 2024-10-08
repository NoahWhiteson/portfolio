import Link from 'next/link'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true)
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const springConfig = { damping: 25, stiffness: 700 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 8)
      cursorY.set(e.clientY - 8)
    }
    window.addEventListener('mousemove', moveCursor)
    const timer = setTimeout(() => setIsLoading(false), 2000)
    return () => {
      window.removeEventListener('mousemove', moveCursor)
      clearTimeout(timer)
    }
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="bg-black text-white min-h-screen">
      {isLoading ? (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          <motion.div
            className="w-16 h-16 border-t-2 border-blue-400 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>
      ) : (
        <>
          <header className="fixed top-0 left-0 right-0 z-10 bg-black bg-opacity-90 backdrop-blur-sm">
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
              <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">Prisum</Link>
              <div className="space-x-6">
                {['home', 'about', 'projects', 'blog', 'contact'].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className="hover:text-blue-400 transition-colors capitalize"
                  >
                    {section}
                  </button>
                ))}
              </div>
            </nav>
          </header>
          <main className="pt-16">
            {children}
          </main>
          <footer className="container mx-auto px-6 py-8 text-center text-gray-400">
            © {new Date().getFullYear()} Prisum. All rights reserved.
          </footer>
          <motion.div
            className="fixed top-0 left-0 w-4 h-4 rounded-full bg-white mix-blend-difference pointer-events-none z-50"
            style={{
              x: cursorXSpring,
              y: cursorYSpring,
            }}
          />
        </>
      )}
    </div>
  )
}

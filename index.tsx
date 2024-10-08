import Layout from '../components/layout'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useRef } from 'react'
import { FaReact, FaNodeJs, FaAws, FaDocker, FaGithub, FaTwitter, FaLinkedin, FaDev, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'
import { SiTypescript, SiMongodb, SiGraphql, SiGit } from 'react-icons/si'

export default function Home() {
  const [activeTab, setActiveTab] = useState('what-i-do')
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const { scrollYProgress } = useScroll()
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1])

  const tabContent = {
    'what-i-do': 'I specialize in building robust and scalable web applications using modern technologies. My expertise includes front-end development with React, back-end development with Node.js, and database management with MongoDB and PostgreSQL. I also have experience with cloud services like AWS and containerization with Docker.',
    'projects': 'My portfolio includes a diverse range of projects, from full-stack web applications to mobile apps and AI-powered tools. Check out my Projects section to see detailed case studies of my work, including technologies used and challenges overcome.',
    'hire-me': 'I'm available for freelance work and open to full-time opportunities. Whether you need a custom web application, a mobile app, or technical consultation, I'm here to help bring your ideas to life. Let's discuss how we can work together to achieve your goals.'
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    setSubmitMessage('Thank you for your message. I\'ll get back to you soon!')
    setFormState({ name: '', email: '', message: '' })
    setIsSubmitting(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }

  return (
    <Layout>
      <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="container mx-auto px-6 py-16">
        {/* Home Section */}
        <section id="home" className="min-h-screen flex items-center">
          <div>
            <motion.h1 
              className="text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Hi, I'm <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">Prisum</span>
            </motion.h1>
            <motion.p 
              className="text-xl mb-8 max-w-2xl"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              A passionate full-stack developer dedicated to crafting elegant, efficient, and user-centric digital solutions. With a keen eye for detail and a love for clean code, I transform complex problems into intuitive and scalable applications.
            </motion.p>
            <div className="flex space-x-4 mb-8">
              {Object.keys(tabContent).map((tab, index) => (
                <motion.button
                  key={tab}
                  className={`px-6 py-2 rounded-md ${activeTab === tab ? 'bg-blue-600 text-white' : 'bg-gray-800 text-blue-400'}`}
                  onClick={() => setActiveTab(tab)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                >
                  {tab.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                </motion.button>
              ))}
            </div>
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-800 p-6 rounded-md"
            >
              {tabContent[activeTab]}
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16">
          <motion.h2 
            className="text-4xl font-bold mb-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img src="/placeholder.svg?height=400&width=400" alt="Prisum" className="rounded-lg shadow-lg mb-6" />
              <div className="flex space-x-4 justify-center">
                <motion.a href="#" className="text-blue-400 hover:text-blue-300 transition-colors" whileHover={{ scale: 1.2 }}><FaGithub size={24} /></motion.a>
                <motion.a href="#" className="text-blue-400 hover:text-blue-300 transition-colors" whileHover={{ scale: 1.2 }}><FaTwitter size={24} /></motion.a>
                <motion.a href="#" className="text-blue-400 hover:text-blue-300 transition-colors" whileHover={{ scale: 1.2 }}><FaLinkedin size={24} /></motion.a>
                <motion.a href="#" className="text-blue-400 hover:text-blue-300 transition-colors" whileHover={{ scale: 1.2 }}><FaDev size={24} /></motion.a>
              </div>
            </motion.div>
            <div>
              <motion.p 
                className="text-lg mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                Hi, I'm Prisum, a passionate full-stack developer with over 5 years of experience in creating web and mobile applications. I specialize in React, Node.js, and cloud technologies, with a keen interest in AI and machine learning applications in web development.
              </motion.p>
              <motion.p 
                className="text-lg mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                My journey in tech started when I built my first website at the age of 15. Since then, I've been constantly learning and exploring new technologies to improve my skills and create better solutions. I'm driven by the desire to solve complex problems and create intuitive, user-friendly applications that make a positive impact.
              </motion.p>
              <motion.h3 
                className="text-2xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                My Expertise
              </motion.h3>
              <motion.ul 
                className="list-disc list-inside space-y-2 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <li>Front-end Development (React, Vue.js, Angular)</li>
                <li>Back-end Development (Node.js, Python, Ruby on Rails)</li>
                <li>Database Management (MongoDB, PostgreSQL, MySQL)</li>
                <li>Cloud Services (AWS, Google Cloud, Azure)</li>
                <li>DevOps and CI/CD (Docker, Kubernetes, Jenkins)</li>
                <li>Mobile App Development (React Native, Flutter)</li>
              </motion.ul>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16">
          <motion.h2 
            className="text-4xl font-bold mb-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Projects
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "EcoTrack", description: "A sustainability app that helps users reduce their carbon footprint through personalized recommendations and community challenges.", image: "/placeholder.svg?height=200&width=400", tags: ["React Native", "Node.js", "MongoDB"] },
              { title: "CodeCollab", description: "Real-time collaborative coding platform with integrated video chat and version control, designed for remote pair programming.", image: "/placeholder.svg?height=200&width=400", tags: ["React", "Socket.io", "WebRTC"] },
              { title: "AI Content Assistant", description: "An AI-powered tool that helps content creators generate ideas, outlines, and drafts for articles and social media posts.", image: "/placeholder.svg?height=200&width=400", tags: ["Python", "Flask", "OpenAI API"] }
            ].map((project, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="bg-gray-700 text-blue-400 px-2 py-1 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <motion.a 
                    href="#" 
                    className="text-blue-400 hover:underline"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Project
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Blog Section */}
        <section id="blog" className="py-16">
          <motion.h2 
            className="text-4xl font-bold mb-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Latest Articles
          </motion.h2>
          <div className="space-y-8">
            {[
              { title: "The Future of Web Development: Trends to Watch in 2023", date: "July 15, 2023", excerpt: "Explore emerging technologies and methodologies that are shaping the future of web development...", tags: ["Web Development", "Trends"] },
              { title: "Optimizing React Applications for Performance", date: "July 1, 2023", excerpt: "Learn advanced techniques to boost the performance of your React applications...", tags: ["React", "Performance"] },
              { title: "Introduction to Serverless Architecture", date: "June 15, 2023", excerpt: "Discover the benefits and use cases of serverless architecture in modern application development...", tags: ["Serverless", "Cloud Computing"] }
            ].map((article, index) => (
              <motion.div 
                key={index} 
                className="border-b border-gray-800 pb-8"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold mb-2">{article.title}</h3>
                <p className="text-gray-400 mb-4">Posted on {article.date}</p>
                <p className="mb-4">{article.excerpt}</p>
                <div className="flex space-x-2 mb-4">
                  {article.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-gray-800 text-blue-400 px-3 py-1 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                <motion.a 
                  href="#" 
                  className="text-blue-400 hover:underline"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Read Article
                </motion.a>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section  id="contact" className="py-16">
          <motion.h2 
            className="text-4xl font-bold mb-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Contact Me
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-lg mb-6">
                I'm always open to new opportunities, collaborations, or just a friendly chat about tech. Feel free to reach out to me using the form or through my social media channels.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <FaEnvelope className="w-6 h-6 mr-2 text-blue-400" />
                  <span>prisum@example.com</span>
                </div>
                <div className="flex items-center">
                  <FaPhone className="w-6 h-6 mr-2 text-blue-400" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <FaMapMarkerAlt className="w-6 h-6 mr-2 text-blue-400" />
                  <span>San Francisco, CA</span>
                </div>
              </div>
            </motion.div>
            <motion.form 
              onSubmit={handleSubmit} 
              className="space-y-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formState.message}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                ></textarea>
              </div>
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors disabled:opacity-50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
              {submitMessage && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-green-400 text-center"
                >
                  {submitMessage}
                </motion.p>
              )}
            </motion.form>
          </div>
        </section>
      </motion.div>
    </Layout>
  )
}

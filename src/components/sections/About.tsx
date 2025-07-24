'use client';

import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolioData';

const techIcons = {
  'React': '⚛️',
  'Next.js': '▲',
  'TypeScript': '📘',
  'Node.js': '🟢',
  'PostgreSQL': '🐘',
  'Firebase': '🔥',
  'React Native': '📱',
  'Python': '🐍',
  'JavaScript': '💛',
  'Tailwind CSS': '🎨',
  'Git': '📝',
  'Docker': '🐳',
  'AWS': '☁️',
  'MongoDB': '🍃',
  'GraphQL': '🔗'
};

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  // Extract key technologies from skills data
  const keyTechnologies = portfolioData.skills
    .filter(skill => skill.proficiency >= 80)
    .slice(0, 10)
    .map(skill => skill.name);

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <motion.div variants={itemVariants}>
              <div className="space-y-6">
                {portfolioData.aboutMe.map((paragraph, index) => (
                  <motion.p
                    key={index}
                    variants={itemVariants}
                    className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </div>

              {/* Social Links */}
              <motion.div variants={itemVariants} className="mt-8">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Let's Connect
                </h3>
                <div className="flex space-x-4">
                  {portfolioData.socialLinks.map((link) => (
                    <motion.a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors duration-200"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={link.name}
                    >
                      <span className="text-xl">
                        {link.icon === 'github' && '🔗'}
                        {link.icon === 'linkedin' && '💼'}
                        {link.icon === 'twitter' && '🐦'}
                        {link.icon === 'email' && '📧'}
                      </span>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Technologies */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">
                Technologies I Work With
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {keyTechnologies.map((tech, index) => (
                  <motion.div
                    key={tech}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="flex items-center space-x-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors duration-200"
                  >
                    <span className="text-2xl">
                      {techIcons[tech as keyof typeof techIcons] || '⚡'}
                    </span>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {tech}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Stats */}
              <motion.div variants={itemVariants} className="mt-8 grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                    5+
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Years Experience
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                    {portfolioData.projects.length}+
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Projects Completed
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                    {portfolioData.skills.length}+
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Technologies
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


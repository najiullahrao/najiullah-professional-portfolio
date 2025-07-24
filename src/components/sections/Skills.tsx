'use client';

import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolioData';
import SkillBar from '@/components/ui/SkillBar';

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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

  // Group skills by category
  const skillsByCategory = portfolioData.skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof portfolioData.skills>);

  const categoryIcons = {
    'Frontend': '🎨',
    'Backend': '⚙️',
    'Mobile': '📱',
    'Databases': '🗄️',
    'Tools': '🔧',
    'DevOps': '☁️'
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
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
              Skills & Expertise
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Here are the technologies and tools I use to bring ideas to life
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skillsByCategory).map(([category, skills], categoryIndex) => (
              <motion.div
                key={category}
                variants={itemVariants}
                className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                {/* Category Header */}
                <div className="flex items-center mb-6">
                  <span className="text-3xl mr-3">
                    {categoryIcons[category as keyof typeof categoryIcons] || '⚡'}
                  </span>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {category}
                  </h3>
                </div>

                {/* Skills in Category */}
                <div className="space-y-4">
                  {skills
                    .sort((a, b) => b.proficiency - a.proficiency)
                    .map((skill, skillIndex) => (
                      <SkillBar
                        key={skill.name}
                        name={skill.name}
                        proficiency={skill.proficiency}
                        delay={categoryIndex * 2 + skillIndex}
                      />
                    ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <div className="bg-blue-600 dark:bg-blue-700 rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Always Learning
              </h3>
              <p className="text-lg opacity-90 max-w-3xl mx-auto">
                Technology evolves rapidly, and I&apos;m committed to staying current with the latest trends, 
                frameworks, and best practices. I regularly explore new technologies and contribute to 
                open-source projects to expand my skill set.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}


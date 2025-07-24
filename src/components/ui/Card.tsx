'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

export default function Card({ 
  children, 
  className = '', 
  hover = true,
  onClick 
}: CardProps) {
  return (
    <motion.div
      className={`bg-white dark:bg-gray-900 rounded-xl shadow-lg ${hover ? 'hover:shadow-xl' : ''} transition-shadow duration-300 ${className}`}
      whileHover={hover ? { y: -5 } : {}}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
}


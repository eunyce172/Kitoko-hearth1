'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Flame } from 'lucide-react';

export default function PageLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 700);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-cream dark:bg-brown-deep"
          aria-hidden="true"
        >
          <motion.span
            initial={{ scale: 0.85, opacity: 0.6 }}
            animate={{ scale: [0.85, 1.05, 0.85], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 1.1, repeat: Infinity, ease: 'easeInOut' }}
            className="flex items-center justify-center w-16 h-16 rounded-full bg-hearth-gradient"
          >
            <Flame className="w-7 h-7 text-cream" />
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

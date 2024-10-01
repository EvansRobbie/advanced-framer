'use client';
import { motion } from 'framer-motion';

export default function Example() {
  return (
    <div className='wrapper'>
      <motion.div
        className='element'
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          x: 100,
          opacity: 1,
          scale: 1,
          transition:{duration: 0.5,type: 'spring', bounce: 0.2},
        }}
      />
    </div>
  );
}

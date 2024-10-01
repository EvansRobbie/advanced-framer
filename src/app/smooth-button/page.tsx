'use client';
import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

type ButtonState = {
  idle: string;
  loading: string;
  success: string;
};

const buttonState = {
  idle: 'Send a login link',
  loading: 'loading..',
  success: 'Check your email',
};

const Smooth = () => {
  const [buttonStates, setButtonStates] = useState<keyof ButtonState>('idle');
  return (
    <div className='wrapper flex-col'>
      <button
        disabled={buttonStates !== 'idle'}
        className='bg-red-500 text-white rounded-[10px] px-4 py-2 w-[300px] text-center relative overflow-hidden'
        onClick={() => {
          // This code is just a placeholder
          setButtonStates('loading');

          setTimeout(() => {
            setButtonStates('success');
          }, 1750);

          setTimeout(() => {
            setButtonStates('idle');
          }, 3500);
        }}
      >
        <AnimatePresence mode='popLayout' initial={false}>
          <motion.span
            key={buttonStates}
            initial={{ y: -25, opacity: 0 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, type: 'spring', bounce: 0 },
            }}
            exit={{ opacity: 0, y: 25 }}
          >
            {buttonState[buttonStates]}
          </motion.span>
        </AnimatePresence>
      </button>
    </div>
  );
};

export default Smooth;

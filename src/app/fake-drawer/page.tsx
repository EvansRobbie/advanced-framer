'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import useMeasure from 'react-use-measure';

export default function Example() {
  const [showExtraContent, setShowExtraContent] = useState(false);
  const [ref, bound] = useMeasure();
  console.log(bound);
  return (
    <motion.div
      className='wrapper'
      layout
    >
      <motion.button
        layout
        className='button'
        onClick={() => setShowExtraContent((b) => !b)}
      >
        Toggle height
      </motion.button>
      <motion.div
        className='element'
        animate={{
          height:bound.height
        }}

      >
        <motion.div className='inner'    ref={ref}>
          <h1>Fake Family Drawer</h1>
          <p>
            This is a fake family drawer. Animating height is tricky, but
            satisfying when it works.
          </p>
          {showExtraContent ? (
            <p>
              This extra content will change the height of the drawer. Some even
              more content to make the drawer taller and taller and taller...
            </p>
          ) : null}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

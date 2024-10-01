'use client';

import { motion, useMotionValue, useTransform } from 'framer-motion';

function Example() {
  const y = useMotionValue(0);
  // if the y value is 100 or more, the opacity will be 0
  const opacity = useTransform(y, [0, 100], [1, 0]);

  return (
    <div className='h-1/2'>
      <motion.div
        onPan={(_, info) => {
          y.set(info.offset.y);
        }}
        // pan instead of drag, because we want to move the element based on the motion value
        onPanEnd={() => y.set(0)}
        style={{ y, opacity }}
        className='h-10 w-10 cursor-grab rounded-full bg-gray-400'
      />
    </div>
  );
}

export default Example;

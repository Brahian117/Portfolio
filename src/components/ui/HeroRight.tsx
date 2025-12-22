import { motion } from "framer-motion";
import illustration from '../../assets/illustrationBrahian.png';

export const HeroRight = () => {
  return (
    <div className="relative flex justify-center items-center">
   <motion.div
  animate={{ y: [0, -10] }}
  transition={{ duration: 4, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
>
        <img
          src={illustration}
          alt="Brahian illustration"
          className="w-full h-full"
        />
      </motion.div>
    </div>
  );
};

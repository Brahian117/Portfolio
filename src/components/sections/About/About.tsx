import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { aboutParagraphs } from '../../../data/about';
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import myPhoto from '../../../assets/photoBrahian.jpg';
export const About = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 100); // inicia animación
  }, []);

  return (
    <section
      id="about"
      className="scroll-mt-24 min-h-screen flex flex-col justify-center items-center text-center px-6 sm:px-12 md:px-24 py-10
                 bg-surface-light dark:bg-surface-dark
                 text-text-light dark:text-text-dark"
    >
      <h2
        className={`text-3xl md:text-4xl font-semibold mb-12 transform transition-all duration-700 ${
          show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        About Me
      </h2>

      <div className="flex flex-col md:flex-row items-center gap-12 w-full max-w-6xl">

        <div className="flex-1 flex flex-col gap-6 text-center md:text-left">
          {aboutParagraphs.map((para, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 * (index + 1) }}
              className="leading-relaxed text-lg text-text-muted-light dark:text-text-muted-dark"
            >
              {highlightKeywords(para)}
            </motion.p>
          ))}
        </div>

        <div className="flex-1 flex justify-center md:justify-end">
          <motion.div
            className="w-64 h-64 rounded-full overflow-hidden shadow-xl"
            initial={{ y: 0 }}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
           <img src={myPhoto} alt="Brahian Cruz" className="w-full h-full object-cover" />

          </motion.div>
        </div>
      </div>
      <div className="flex gap-6 mt-4 text-2xl text-text-muted-light dark:text-text-muted-dark">
        <a
          href="https://github.com/brahian117"
          target="_blank"
          rel="github Brahian Cruz"
          className="card-social"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/brahiancruzg/"
          target="_blank"
          rel="Linkedin Brahian Cruz"
          className="card-social"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:brahiancruz@gmail.com"
          className="card-social"
          rel="Email to Brahian Cruz"

        >
          <FaEnvelope />
        </a>
      </div>
    </section>
  );
};

const keywords = ['Brahian', 'developer', 'front-end', 'full-stack', 'Australian Shepherd', 'technologies'];
function highlightKeywords(text: string) {
  const parts = text.split(new RegExp(`(${keywords.join('|')})`, 'gi'));
  return parts.map((part, i) =>
    keywords.includes(part) ? (
      <span key={i} className="text-primary font-semibold">{part}</span>
    ) : (
      part
    )
  );
}

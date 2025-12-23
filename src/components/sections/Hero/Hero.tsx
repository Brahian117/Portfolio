import { useScroll } from "../../../hooks/useScroll";
import { useEffect, useState } from "react";
import { HeroRight } from "../../ui/HeroRight";

export const Hero = () => {
  const { scrollTo } = useScroll();
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 100);
  }, []);

  return (
    <section
      id="hero"
      className="scroll-mt-24 min-h-screen flex flex-col justify-center items-center text-center px-6 py-12
                 bg-surface-light dark:bg-surface-dark
                 text-text-light dark:text-text-dark"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-125 h-125 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 right-0  w-100 h-100 rounded-full bg-accent-light/10 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h1
            className={`text-5xl md:text-6xl font-semibold tracking-tight leading-tight transform transition-all duration-700 ${
              show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Building modern <br />
            <span className="text-primary">web applications</span> <br />
            with React & .NET
          </h1>

          <p
            className={`mt-6 text-lg text-text-muted-light dark:text-text-muted-dark max-w-xl transform transition-all duration-700 delay-150 ${
              show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Full Stack Developer focused on clean UI, solid backend architecture
            and scalable solutions.
          </p>

          <div
            className={`mt-10 flex gap-4 transform transition-all duration-700 delay-300 ${
              show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <button
              className="btn-primary px-6 py-3"
              onClick={() => scrollTo("projects")}
            >
              View Projects
            </button>
            <a
              href="https://github.com/brahian117"
              target="_blank"
              rel="github Brahian Cruz"
              className="btn-ghost px-6 py-3"
            >Contact</a>
          </div>
        </div>    
        <div className="relative">
          <HeroRight />
        </div>
      </div>
    </section>
  );
};

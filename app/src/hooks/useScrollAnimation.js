import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useScrollAnimation = () => {
  useEffect(() => {
    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      // Fade in animations
      gsap.utils.toArray('.fade-in').forEach((element) => {
        gsap.fromTo(element,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 85%',
            end: 'top 40%',
            scrub: 1.5,
          },
        }
      );
    });

    // Fade in from left
    gsap.utils.toArray('.fade-in-left').forEach((element) => {
      gsap.fromTo(element,
        {
          opacity: 0,
          x: -100,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 85%',
            end: 'top 40%',
            scrub: 1.5,
          },
        }
      );
    });

    // Fade in from right
    gsap.utils.toArray('.fade-in-right').forEach((element) => {
      gsap.fromTo(element,
        {
          opacity: 0,
          x: 100,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 85%',
            end: 'top 40%',
            scrub: 1.5,
          },
        }
      );
    });

    // Fade in from bottom
    gsap.utils.toArray('.fade-in-up').forEach((element) => {
      gsap.fromTo(element,
        {
          opacity: 0,
          y: 80,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 90%',
            end: 'top 45%',
            scrub: 1.5,
          },
        }
      );
    });

    // Scale/zoom animations
    gsap.utils.toArray('.zoom-in').forEach((element) => {
      gsap.fromTo(element,
        {
          opacity: 0,
          scale: 0.8,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 85%',
            end: 'top 40%',
            scrub: 1.5,
          },
        }
      );
      });

      // Refresh ScrollTrigger after all animations are set up
      ScrollTrigger.refresh();
    }, 100);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
};
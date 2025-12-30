import { useEffect } from 'react';

export const useParallax = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;

      // Parallax effect for hero image
      const heroImage = document.querySelector('.hero-image img');
      if (heroImage) {
        const speed = 0.5;
        heroImage.style.transform = `translateY(${scrolled * speed}px) translateZ(0)`;
      }

      // Parallax effect for selfie image
      const selfieImage = document.querySelector('.selfie-image');
      if (selfieImage) {
        const imageTop = selfieImage.getBoundingClientRect().top + window.scrollY;
        const imageScroll = scrolled - imageTop + window.innerHeight;
        if (imageScroll > 0 && imageScroll < window.innerHeight + selfieImage.offsetHeight) {
          const speed = 0.15;
          selfieImage.style.transform = `translateY(${imageScroll * speed}px)`;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
};
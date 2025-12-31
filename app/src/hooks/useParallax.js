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
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
};
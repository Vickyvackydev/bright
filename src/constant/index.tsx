export const animationVariants = {
  container: {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  },

  fadeInUp: {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  },
  leftSlideIn: {
    hidden: { opacity: 0, x: -50 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  },

  rightStaggerContainer: {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  },

  cardFadeSlide: {
    hidden: { opacity: 0, x: 60 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  },
  footerContainer: {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  },
  fadeUp: {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  },
};

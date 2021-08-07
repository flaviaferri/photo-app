const breakpoints = [576, 768, 992, 1200];

export const theme = {
  colors: {
    lightGray: "#DBE0E5",
    gray: "#9AA5B1",
    darkGray: "#323F4B",
    blue: "#1B3CEA",
    white: "#FFF",
    black: "#1F2933",
  },

  breakpoints: breakpoints.map((bp) => `@media (max-width: ${bp}px)`),
};

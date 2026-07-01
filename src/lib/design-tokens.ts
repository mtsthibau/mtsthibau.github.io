// Design Tokens
// Brand identity constants

export const colors = {
  neutral: {
    '50': '#f9f9f9',
    '100': '#f3f3f3',
    '200': '#e8e8e8',
    '300': '#d4d4d4',
    '400': '#9d9d9d',
    '500': '#808080',
    '600': '#5a5a5a',
    '700': '#4a4a4a',
    '800': '#2d2d2d',
    '900': '#000000',
  },
  primary: {
    '50': '#f0f9ff',
    '500': '#0ea5e9',
    '600': '#0284c7',
    '900': '#0c3d66',
  },
};

export const typography = {
  sans: 'InterVariable, -apple-system, BlinkMacSystemFont, sans-serif',
  mono: 'JetBrains MonoVariable, monospace',
};

export const spacing = {
  xs: '0.5rem',
  sm: '1rem',
  md: '1.5rem',
  lg: '2rem',
  xl: '3rem',
  '2xl': '4rem',
  '3xl': '6rem',
};

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};

export const transitions = {
  fast: '150ms cubic-bezier(0.4, 0, 0.2, 1)',
  base: '200ms cubic-bezier(0.4, 0, 0.2, 1)',
  slow: '350ms cubic-bezier(0.4, 0, 0.2, 1)',
};

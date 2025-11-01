import plugin from 'tailwindcss/plugin';

const rtlPlugin = plugin(function({ addUtilities, matchUtilities, theme, variants }) {

addUtilities({
  // text align utilities
  '[dir="rtl"] .text-start': { textAlign: 'right' },
  '[dir="rtl"] .text-end': { textAlign: 'left' },
  '[dir="ltr"] .text-start': { textAlign: 'left' },
  '[dir="ltr"] .text-end': { textAlign: 'right' },

  // flex alignment utilities
  '[dir="ltr"] .items-start': { alignItems: 'flex-start' },
  '[dir="ltr"] .items-end': { alignItems: 'flex-end' },
  '[dir="rtl"] .items-start': { alignItems: 'flex-end' },
  '[dir="rtl"] .items-end': { alignItems: 'flex-start' },

  '[dir="ltr"] .justify-start': { justifyContent: 'flex-start' },
  '[dir="ltr"] .justify-end': { justifyContent: 'flex-end' },
  '[dir="rtl"] .justify-start': { justifyContent: 'flex-end' },
  '[dir="rtl"] .justify-end': { justifyContent: 'flex-start' },
}, { variants: variants('responsive') });

   // Margin inline start (ms-*) and end (me-*)
  matchUtilities({
    'ms': (value) => ({ marginInlineStart: value }),
    'me': (value) => ({ marginInlineEnd: value }),
  }, {
    values: theme('margin'),
    variants: variants('margin', ['responsive']),
  });

  // Padding inline start (ps-*) and end (pe-*)
  matchUtilities({
    'ps': (value) => ({ paddingInlineStart: value }),
    'pe': (value) => ({ paddingInlineEnd: value }),
  }, {
    values: theme('padding'),
    variants: variants('padding', ['responsive']),
  });

});

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  plugins: [rtlPlugin],
};

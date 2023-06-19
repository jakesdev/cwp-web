module.exports = {
  purge: {
    enabled: true,
    content: [
      './apps/**/*.{html,ts}',
      './libs/**/*.{html,ts}'
    ]
  },
  theme: {
    extend: {
      // colors: {
      //   inherit: "inherit",
      //   transparent: "transparent",
      //   black: "black",
      //   white: "white",
      //   blue: {
      //     // NEW
      //     "main": "var(--color-blue-main)",
      //     "hover": "var(--color-blue-hover)",
      //     "pressed": "var(--color-blue-pressed)",
      //     "dark": "var(--color-blue-dark)",
      //     //
      //     light: {
      //       "main": "var(--color-blue-light)",
      //       "hover": "var(--color-blue-light-hover)",
      //       "pressed": "var(--color-blue-light-pressed)"
      //     }
      //   },
      //   grey: {
      //     // NEW
      //     "main": "var(--color-grey-main)",
      //     "hover": "var(--color-grey-hover)",
      //     "pressed": "var(--color-grey-pressed)",
      //     "border": "var(--color-grey-border)",
      //     "FEFEFE": "#FEFEFE",
      //     "E2E7ED": "#E2E7ED",
      //   },
      //   black: {
      //     // NEW
      //     "main": "var(--color-black-main)",
      //     "secondary": "var(--color-black-secondary)",
      //     "font-empty-text": "var(--color-black-font-empty-text)",
      //   },
      //   green: {
      //     // NEW
      //     "44C249": "#44C249",
      //     "main": "var(--color-green-main)",
      //     "hover": "var(--color-green-hover)",
      //     "pressed": "var(--color-green-pressed)",
      //   },
      //   red: {
      //     // NEW
      //     "main": "var(--color-red-main)",
      //     "hover": "var(--color-red-hover)",
      //     "pressed": "var(--color-red-pressed)",
      //   },
      //   yellow: {
      //     // NEW
      //     "E9B839": "#E9B839"
      //   },
      //   orange: {
      //     // OLD
      //     "#F0AD4E": "#F0AD4E"
      //     // NEW
      //   },
      //   "card-border": "var(--card-border)",
      //   "top-nav-selected": "var(--bg-top-nav-selected)",
      //   "overlay-selected": "var(--bg-overlay-selected)",
      //   "modal-darken": "var(--bg-modal-darken)",
      //   "button-lines": "var(--button-lines)",
      //   "separator-lines": "var(--separator-lines)",
      //   "note-yellow": "var(--note-yellow)",
      //   "appointment-green": "var(--appointment-green)",
      //   "reminder-blue": "var(--reminder-blue)",
      //   "inactive-card-grey": "var(--inactive-card-grey)"
      // },
    },
  },
  variants: {
    animation: ({ after }) => after(['responsive', 'motion-safe', 'motion-reduce']),
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

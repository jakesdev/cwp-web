module.exports = {
  purge: {
    enabled: true,
    content: [
      './apps/**/*.{html,ts}',
      './libs/**/*.{html,ts}'
    ]
  },
  theme: {
    extend: {},
  },
  variants: {
    animation: ({ after }) => after(['responsive', 'motion-safe', 'motion-reduce']),
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

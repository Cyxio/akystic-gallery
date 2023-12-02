import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'photowall': "url('https://stakysticimages.blob.core.windows.net/images/photowall-672x448.jpg')",
        'annualball': "url('https://stakysticimages.blob.core.windows.net/images/ball-672x448.jpg')",
      },
    },
  },
  plugins: [],
}
export default config

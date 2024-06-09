// uno.config.ts
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup
} from 'unocss'

export default defineConfig({
  shortcuts: {
    'border-base': 'border-gray-200 dark:border-dark-200',
    'bg-base': 'bg-white dark:bg-gray-900',
    'text-hover': 'hover:text-green-600 dark:hover:text-green-400 hover:font-bold',
    'color-font': 'text-white',
    'color-hover': 'hover:text-green-600 dark:hover:text-green-400 hover:font-bold',
    'color-active': 'text-green-600 dark:text-green-400 font-bold'
  },
  theme: {
    colors: {
      'colorBase':'#121C25',
    }
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
    presetTypography(),
    presetWebFonts({
      fonts: {
        // ...
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})

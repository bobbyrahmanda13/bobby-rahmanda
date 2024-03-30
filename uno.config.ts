import {
  defineConfig,
  presetIcons,
  presetTypography,
  presetUno,
  transformerDirectives,
} from 'unocss'

export default defineConfig({
  shortcuts: {},
  presets: [
    presetUno(),
    presetIcons(),
    presetTypography()
  ],
  transformers: [
    transformerDirectives()
  ]
})

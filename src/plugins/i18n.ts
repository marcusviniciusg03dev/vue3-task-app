import type { App } from 'vue'
import { setTranslate } from './setTranslate'

export const i18nPlugin = {
  install: (app: App, langOptions: { [lang: string]: any }) => {
    app.provide('translate', setTranslate(app, langOptions))
  }
}

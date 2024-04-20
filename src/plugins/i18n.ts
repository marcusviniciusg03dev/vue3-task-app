import type { App } from 'vue'

export const i18nPlugin = {
  install: (app: App, langOptions: { [lang: string]: any }) => {
    const translate = (key: string) => {
      const { lang } = app.config.globalProperties.$route.params
      if (typeof lang !== 'string' || !langOptions[lang]) return
      return key.split('.').reduce((o, i) => {
        if (o) return o[i]
      }, langOptions[lang])
    }
    app.provide('translate', translate)
  }
}

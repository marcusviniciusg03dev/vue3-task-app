import type { App } from "vue"

export const setTranslate = (appOrLang: App | string, langOptions: any) => (key: string) => {
    const lang = typeof appOrLang === 'string' ? appOrLang : appOrLang.config.globalProperties.$route.params.lang
    if (typeof lang !== 'string' || !langOptions[lang]) return
    return key.split('.').reduce((o, i) => {
      if (o) return o[i]
    }, langOptions[lang])
  }
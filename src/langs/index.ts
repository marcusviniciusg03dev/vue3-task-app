import { en } from './en'
import { pt } from './pt'

export interface ILang {
  home: {
    noNameMessage: string
    nameInputPlaceholder: string
    signIn: {
      template: string
      templateNoName: string
    }
  }
  newTask: {
    titlePlaceholder: string
    add: string
    errors: {
      emptyTitle: string
      cannotCreate: string
    }
  }
  taskView: {
    back: string
    errors: {
      notFound: string
    }
    completedLabel: string
    userIdLabel: string
  }
  _shared: {
    typing: string
    loading: string
    remove: string
    true: string
    false: string
  }
}

export const langs: { [lang: string]: ILang } = {
  pt,
  en
}

export const langsList = Object.keys(langs)

import type { ILang } from '.'

export const en: ILang = {
  home: {
    noNameMessage: "We saw you haven't inform your name. How could we call you?",
    nameInputPlaceholder: 'name',
    signIn: {
      template: 'continue as:',
      templateNoName: 'guest'
    }
  },
  newTask: {
    titlePlaceholder: 'title',
    add: 'add',
    errors: {
      emptyTitle: 'Title is empty!',
      cannotCreate: "It wasn't possible to create item."
    }
  },
  taskView: {
    back: 'back',
    completedLabel: 'completed',
    userIdLabel: 'User id',
  },
  _shared: {
    typing: 'Typing...',
    remove: 'remove',
    loading: 'loading...',
    true: 'true',
    false: 'false',
    errors: {
      notFound: 'Item not found.',
      unexpected: 'An unexpected error ocurred.'
    }
  }
}

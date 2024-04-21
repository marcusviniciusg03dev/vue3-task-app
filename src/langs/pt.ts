import type { ILang } from '.'

export const pt: ILang = {
  home: {
    noNameMessage: 'Notamos que você não nos informou seu nome. Como podemos chamar você?',
    nameInputPlaceholder: 'nome',
    signIn: {
      template: 'continuar como:',
      templateNoName: 'convidado'
    }
  },
  newTask: {
    titlePlaceholder: 'título',
    add: 'Adicionar',
    errors: {
      emptyTitle: 'O título está vazio!',
      cannotCreate: 'Não foi possível criar o item.'
    }
  },
  taskView: {
    back: 'voltar',
    completedLabel: 'completo',
    userIdLabel: 'Id do usuário',
    errors: {
      notFound: 'Item não encontrado.'
    }
  },
  _shared: {
    typing: 'Digitando...',
    loading: 'carregando...',
    remove: 'remover',
    true: 'verdadeiro',
    false: 'falso'
  }
}

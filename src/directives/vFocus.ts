import type { ObjectDirective } from 'vue'

export const vFocus: ObjectDirective = {
  mounted: (el) => el.focus()
}

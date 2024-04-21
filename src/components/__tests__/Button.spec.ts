import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'

import Button from '../Button.vue'

describe('Button', () => {
  it('renders properly', () => {
    const button = mount(Button, { slots: { default: ['THIS IS MY BUTTON.'] } })
    expect(button.text()).toContain('THIS IS MY BUTTON.')
  })
  it('renders with primary variant by default.', () => {
    const button = mount(Button)
    expect(button.classes()).toContain('bg-gray-900')
  })
  it('renders with secondary background.', () => {
    const button = mount(Button, { props: { variant: 'secondary' } })
    expect(button.classes()).toContain('bg-red-600')
  })
  it('execute handle-click event.', () => {
    const button = mount(Button)
    const handleClick = () => 123
    button.vm.$emit('handle-click', handleClick)
    const emitted = button.emitted()
    expect((emitted['handle-click'][0] as Function[])[0]() === handleClick()).toBeTruthy()
  })
})

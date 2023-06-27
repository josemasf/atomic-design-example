import { describe, it } from 'vitest'
import {screen,render} from '@testing-library/vue'
import LabelAtom from './LabelAtom.vue'

describe('LabelAtom', () => {
  it('renders properly', () => {
    render(LabelAtom,{props: {
      text: 'Lorem ipsum'
    }})
    screen.getByText('Lorem ipsum')
  })
})

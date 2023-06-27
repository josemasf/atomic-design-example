import { describe, expect, it } from 'vitest'
import {render, screen} from '@testing-library/vue'
import ButtonAtom from './ButtonAtom.vue'
import userEvent from '@testing-library/user-event'


import PrimeVue from 'primevue/config'

describe('ButtonAtom', () => {
  it('should renders properly as button', () => {
    const {getByRole} = render(ButtonAtom, {
      global:{
        plugins: [PrimeVue]
      }
    })
    getByRole('button')
  })
  
  it('should emit click on click', async () => {
    const {emitted} = render(ButtonAtom, {
      props:{
        label: 'send'
      },
      global:{
        plugins: [PrimeVue]
      }
    })
    
    await userEvent.click(screen.getByText('send'))    
    expect(emitted().click)
  })
})

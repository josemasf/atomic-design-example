import { describe, expect, it } from 'vitest'
import {render, screen} from '@testing-library/vue'
import ButtonAtom from './ButtonAtom.vue'
import userEvent from '@testing-library/user-event'


import PrimeVue from 'primevue/config'

describe('ButtonAtom', () => {
  it('should renders properly as button', async () => {
    const {getByRole, emitted} = render(ButtonAtom, {
      global:{
        plugins: [PrimeVue],        
      },
      props:{
        label: 'Submit'
      }
    })
    getByRole('button') 
    await userEvent.click(screen.getByText('Submit'))    
    expect(emitted().click)
  })
})

import { describe, expect, it } from 'vitest'
import {render} from '@testing-library/vue'
import InputAtom from './InputAtom.vue'
import userEvent from '@testing-library/user-event'


import PrimeVue from 'primevue/config'

describe('InputAtom', () => {
  
  
  it('should emit click on click', async () => {
    const {emitted,getByRole} = render(InputAtom, {      
      global:{
        plugins: [PrimeVue]
      }
    })
    
    await userEvent.type(getByRole('textbox'), 'loren ipsum')
    
    expect(emitted().update).toStrictEqual([
      [ 'l' ],
      [ 'lo' ],
      [ 'lor' ],
      [ 'lore' ],
      [ 'loren' ],
      [ 'loren ' ],
      [ 'loren i' ],
      [ 'loren ip' ],
      [ 'loren ips' ],
      [ 'loren ipsu' ],
      [ 'loren ipsum' ]
    ])
  })
})

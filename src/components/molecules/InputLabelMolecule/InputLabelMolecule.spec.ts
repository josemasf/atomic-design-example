import { describe, expect, it } from 'vitest'
import {screen,render} from '@testing-library/vue'
import InputLabelMolecule from './InputLabelMolecule.vue'
import PrimeVue from 'primevue/config'
import userEvent from '@testing-library/user-event'

describe('LabelAtom', () => {  

   it('shoud emit on update input', async () => {
    const {emitted} = render(InputLabelMolecule,{props: {
      value: 'Lorem ipsum'
    },
    global:{
      plugins: [PrimeVue]
    }})
    
    screen.getByRole('textbox')
    
    await userEvent.type(screen.getByRole('textbox'), 'ipsum')
    
    expect(emitted().update).toStrictEqual([    
      [ 'i' ],
      [ 'ip' ],
      [ 'ips' ],
      [ 'ipsu' ],
      [ 'ipsum' ]
    ])
  })
})

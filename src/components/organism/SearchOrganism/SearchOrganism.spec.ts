
import { describe, it, expect } from 'vitest'
import {render,  screen, waitFor} from '@testing-library/vue'
import SearchOrganism from './SearchOrganism.vue'
import PrimeVue from 'primevue/config'
import userEvent from '@testing-library/user-event'



describe('SearchOrganism', () => {   

    it('renders properly', async () => {
      const {emitted} = render(SearchOrganism,{
        global: {
            plugins: [PrimeVue]
        }
      })
      screen.getByRole('textbox')
      screen.getByRole('button')

      await userEvent.type(screen.getByRole('textbox'), 'loren ipsum')
      userEvent.click(screen.getByText('Submit'))

      await waitFor(()=> expect(emitted().search).not.toBeUndefined())

      expect(emitted().search).toStrictEqual( [ [ 'loren ipsum' ] ])
    })
  })
  
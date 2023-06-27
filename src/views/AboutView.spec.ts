
import { setupServer } from 'msw/node'
import { rest } from 'msw'
import { describe, it, afterEach,beforeAll,afterAll } from 'vitest'
import {render, fireEvent, screen, waitFor} from '@testing-library/vue'
import AboutView from './AboutView.vue'
import PrimeVue from 'primevue/config'
import userEvent from '@testing-library/user-event'
import { dummyProduct } from '@/mocks/ObejctMother'


const  server = setupServer()
  
beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

describe('AboutView', () => {

    it('renders properly', async () => {
      const dummy = dummyProduct()

        server.use(
            rest.get('https://dummyjson.com/products/search', (req, res, ctx) => {           
              return res(ctx.json({
                "products": [dummy],
                "total": 1,
                "skip": 0,
                "limit": 30
              }))
            }),
          )

         
        render(AboutView,{
          global: {
              plugins: [PrimeVue]
          }
        })
      

      await userEvent.type(screen.getByRole('textbox'), 'iphone')
      await userEvent.click(screen.getByText('Submit'))

      await waitFor(()=> screen.getByText(dummy.title))
    })
  })
  
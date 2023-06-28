
import { setupServer } from 'msw/node'
import { rest } from 'msw'
import { describe, it, afterEach,beforeAll,afterAll } from 'vitest'
import {render, fireEvent, screen, waitFor} from '@testing-library/vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import userEvent from '@testing-library/user-event'
import router from './router'
import { dummyProducts } from './mocks/ObejctMother'
import type { Product } from './services/types'


const  server = setupServer()
  
beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

describe('App', () => {

    it('renders Home and About', async () => {

      render(App,{
        global: {
            plugins: [PrimeVue, router]
        }
      })   


      screen.getByText('Home')
      screen.getByText('About')

      await userEvent.click(screen.getByText('About'))


      //! DONT DO IT. THIS TEST IS IN THE CONTAINER
      const products: Product[] = dummyProducts(10)
        server.use(
            rest.get('https://dummyjson.com/products/search', (req, res, ctx) => {              
              return res(ctx.json({
                "products": products,
                "total": products.length,
                "skip": 0,
                "limit": 30
              }))
            }),
          )

         
      await waitFor(()=> screen.getByRole('textbox'))

      await userEvent.type(screen.getByRole('textbox'), 'iphone')
      await userEvent.click(screen.getByText('Submit'))

      await waitFor(()=> screen.getByText(products[3].title))
    })
  })
  
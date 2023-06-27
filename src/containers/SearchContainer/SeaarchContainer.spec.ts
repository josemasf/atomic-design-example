
import { setupServer } from 'msw/node'
import { rest } from 'msw'
import { describe, it, afterEach,beforeAll,afterAll } from 'vitest'
import {render, fireEvent, screen, waitFor} from '@testing-library/vue'
import SearchContainer from './SearchContainer.vue'
import PrimeVue from 'primevue/config'
import userEvent from '@testing-library/user-event'



describe('SearchContainer', () => {
    const  server = setupServer()
  
    beforeAll(() => server.listen())
    afterEach(() => server.resetHandlers())
    afterAll(() => server.close())
    

    it('renders properly', async () => {

        server.use(
            rest.get('https://dummyjson.com/products/search', (req, res, ctx) => {              
              return res(ctx.json({
                "products": [
                  {
                    "id": 5,
                    "title": "Huawei P30",
                    "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
                    "price": 499,
                    "discountPercentage": 10.58,
                    "rating": 4.09,
                    "stock": 32,
                    "brand": "Huawei",
                    "category": "smartphones",
                    "thumbnail": "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
                    "images": [
                      "https://i.dummyjson.com/data/products/5/1.jpg",
                      "https://i.dummyjson.com/data/products/5/2.jpg",
                      "https://i.dummyjson.com/data/products/5/3.jpg"
                    ]
                  },                  
                ],
                "total": 1,
                "skip": 0,
                "limit": 30
              }))
            }),
          )

      render(SearchContainer,{
        global: {
            plugins: [PrimeVue]
        }
      })
      

      await userEvent.type(screen.getByRole('textbox'), 'iphone')
      userEvent.click(screen.getByText('Submit'))

      
      await waitFor(()=> screen.getByText('Huawei P30'))
    })
  })
  
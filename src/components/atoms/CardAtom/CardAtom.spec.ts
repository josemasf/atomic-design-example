import { describe, it } from 'vitest'
import {screen,render} from '@testing-library/vue'
import CardAtom from './CardAtom.vue'
import PrimeVue from 'primevue/config'

describe('CardAtom', () => {
  it('renders properly', () => {
    render(CardAtom,{
      props: {
        mainImage: 'https://fakeimg.pl/300/',
        title: 'Loren ipsum title',
        subtitle: 'Dolor tremen',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non varius justo. In tristique enim.'
      },
      global:{
        plugins: [PrimeVue]
      }
    })
    screen.getByText('Loren ipsum title')
    screen.getByAltText('Loren ipsum title')
    screen.getByText('Dolor tremen')
    screen.getByText('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non varius justo. In tristique enim.')
  })
})

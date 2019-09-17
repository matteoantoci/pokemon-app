/* eslint-disable @typescript-eslint/ban-ts-ignore */
import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import { act } from 'react-dom/test-utils'
import App from './App'
import { Home } from './components/Home'

describe('App', () => {
  it('renders without crashing', () => {
    // eslint-disable-next-line no-undef
    const div = document.createElement('div')
    ReactDOM.render(<App />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  describe('when details id is not set', () => {
    it('passes proper id', () => {
      const wrapper = shallow(<App />)

      const home = wrapper.find(Home)

      expect(home.props().id).toBeUndefined()
    })

    it('passes proper callback', () => {
      const wrapper = shallow(<App />)

      const home = wrapper.find(Home)

      expect(home.props().onPokemonDetailsClick).toEqual(expect.any(Function))
    })

    describe('when callback is called', () => {
      it('sets id', () => {
        const wrapper = shallow(<App />)

        act(() => {
          // @ts-ignore
          wrapper
            .find(Home)
            .props()
            .onPokemonDetailsClick('foo')
        })

        expect(wrapper.find(Home).props().id).toBe('foo')
      })
    })
  })
})

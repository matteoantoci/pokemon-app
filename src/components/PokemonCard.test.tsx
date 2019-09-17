import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import { PokemonCard } from './PokemonCard'
import { Pokemon } from '../types'
import { getMockPokemon } from '../test.utils'

describe('Pokemon Card', () => {
  const mockPokemon: Pokemon = getMockPokemon('id')

  it('renders correctly', () => {
    const component = renderer.create(<PokemonCard pokemon={mockPokemon} />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  describe('when details click callback is used', () => {
    it('renders correctly', () => {
      const onPokemonDetailsClick = jest.fn()
      const component = renderer.create(
        <PokemonCard pokemon={mockPokemon} onPokemonDetailsClick={onPokemonDetailsClick} />
      )
      const tree = component.toJSON()
      expect(tree).toMatchSnapshot()
    })

    it('triggers callback', () => {
      const onPokemonDetailsClick = jest.fn()
      const wrapper = shallow(<PokemonCard pokemon={mockPokemon} onPokemonDetailsClick={onPokemonDetailsClick} />)

      const ctaButton = wrapper.find('[data-test="more-info-btn"]')
      ctaButton.simulate('click')

      expect(onPokemonDetailsClick).toHaveBeenCalledWith(mockPokemon.id)
    })
  })
})

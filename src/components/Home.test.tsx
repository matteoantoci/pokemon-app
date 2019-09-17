import renderer from 'react-test-renderer'
import React from 'react'
import { QueryResult } from '@apollo/react-common'
import { Home } from './Home'
import * as pokemonQueryHooks from '../hooks/usePokemonQuery'
import { getMockPokemon } from '../test.utils'

jest.mock('../hooks/usePokemonQuery.ts')

describe('Home', () => {
  describe('when loading', () => {
    it('renders correctly', () => {
      const mockQueryResults = { loading: true } as QueryResult
      jest.spyOn(pokemonQueryHooks, 'usePokemonQuery').mockReturnValue(mockQueryResults)

      const component = renderer.create(<Home />)
      const tree = component.toJSON()
      expect(tree).toMatchSnapshot()
    })
  })

  describe('on error', () => {
    it('renders correctly', () => {
      const mockQueryResults = ({ error: true } as unknown) as QueryResult
      jest.spyOn(pokemonQueryHooks, 'usePokemonQuery').mockReturnValue(mockQueryResults)

      const component = renderer.create(<Home />)
      const tree = component.toJSON()
      expect(tree).toMatchSnapshot()
    })
  })

  describe('when load succeeds', () => {
    describe('when retrieving pokemon list', () => {
      it('renders correctly', () => {
        const pokemons = [getMockPokemon('id1'), getMockPokemon('id2')]
        const mockQueryResults = { data: { pokemons } } as QueryResult
        jest.spyOn(pokemonQueryHooks, 'usePokemonQuery').mockReturnValue(mockQueryResults)

        const component = renderer.create(<Home />)
        const tree = component.toJSON()
        expect(tree).toMatchSnapshot()
      })
    })

    describe('when retrieving a specific pokemon', () => {
      it('renders correctly', () => {
        const id = 'id'
        const mockQueryResults = {
          data: { pokemon: getMockPokemon(id), evolutions: [getMockPokemon('id2')] },
        } as QueryResult

        jest.spyOn(pokemonQueryHooks, 'usePokemonQuery').mockReturnValue(mockQueryResults)

        const component = renderer.create(<Home id={id} />)
        const tree = component.toJSON()
        expect(tree).toMatchSnapshot()
      })
    })
  })
})

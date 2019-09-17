import { PokemonType } from './types'

export const getMockPokemon = (id: string) => ({
  id,
  name: 'name',
  number: 'number',
  image: 'https://someimage.com',
  maxCP: 123,
  maxHP: 456,
  types: [PokemonType.Ghost, PokemonType.Normal],
})

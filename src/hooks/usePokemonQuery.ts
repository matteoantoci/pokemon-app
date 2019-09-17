import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

const POKEMON_LIST = gql`
  query {
    pokemons(first: 20) {
      id
      number
      name
      maxCP
      maxHP
      image
      types
    }
  }
`

const createQuery = (id: string) => gql`
    query {
        pokemon(id: "${id}") {
            id
            number
            name
            maxCP
            maxHP
            image
            types
            evolutions {
                id
                number
                name
                maxCP
                maxHP
                image
                types
            }
        }
    }
`

export const usePokemonQuery = (id?: string) => {
  const query = id ? createQuery(id) : POKEMON_LIST
  return useQuery(query)
}

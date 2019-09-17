import React from 'react'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'
import { Grid } from '@material-ui/core'
import { Pokemon } from '../types'
import { PokemonCard } from '../components/PokemonCard'
import { Loading } from '../components/Loading'
import { Error } from '../components/Error'

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

export const Home = () => {
  const { loading, error, data } = useQuery(POKEMON_LIST)
  if (loading) return <Loading />
  if (error) return <Error />
  return (
    <Grid container spacing={4}>
      {data.pokemons.map((pokemon: Pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </Grid>
  )
}

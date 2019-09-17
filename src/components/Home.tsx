import React from 'react'
import { Grid } from '@material-ui/core'
import { usePokemonQuery } from '../hooks/usePokemonQuery'
import { PokemonCard } from './PokemonCard'
import { Loading } from './Loading'
import { Error } from './Error'
import { Pokemon } from '../types'

type HomeProps = {
  id?: string
  onPokemonDetailsClick?: (id: string) => void
}

export const Home: React.FC<HomeProps> = ({ id, onPokemonDetailsClick, ...props }) => {
  const { loading, error, data } = usePokemonQuery(id)
  if (loading) return <Loading />
  if (error) return <Error />
  const pokemons: Pokemon[] = id ? [data.pokemon, ...(data.pokemon.evolutions || [])] : data.pokemons
  return (
    <Grid {...props} container spacing={4}>
      {pokemons.map(pokemon => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} onPokemonDetailsClick={onPokemonDetailsClick} />
      ))}
    </Grid>
  )
}

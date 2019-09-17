import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'
import { CardMedia, Grid, LinearProgress } from '@material-ui/core'
import Card from '@material-ui/core/Card'
import React, { useCallback } from 'react'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import Tooltip from '@material-ui/core/Tooltip'
import { Flex } from './Flex'
import { Pokemon, PokemonType, PokemonTypeColor } from '../types'

const PokemonCardContents = styled(Card)`
  height: 100%;
  display: flex;
  flex-direction: column;
`

const PokemonImg = styled(CardMedia)`
  padding-top: 100%;
  margin: 8px;
  background-size: contain !important;
`

const InfoWrapper = styled(Flex)`
  display: inline-flex;
  flex-grow: 1;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 16px;
  &:last-child {
    margin-bottom: 0;
  }
`

const Name = styled(Typography)`
  flex: 1 1 auto;
`

const Number = styled(Typography)`
  flex: 0 0 auto;
`

const Progress = styled(LinearProgress)`
  width: 100%;
  height: 8px !important;
  margin-left: 16px;
`

const BadgeContainer = styled(Flex)`
  width: 100%;
  flex-direction: row;
  justify-content: flex-end;
`

const TYPE_COLORS: PokemonTypeColor = {
  [PokemonType.Normal]: '#A8A77A',
  [PokemonType.Fire]: '#EE8130',
  [PokemonType.Water]: '#6390F0',
  [PokemonType.Electric]: '#F7D02C',
  [PokemonType.Grass]: '#7AC74C',
  [PokemonType.Ice]: '#96D9D6',
  [PokemonType.Fighting]: '#C22E28',
  [PokemonType.Poison]: '#A33EA1',
  [PokemonType.Ground]: '#E2BF65',
  [PokemonType.Flying]: '#A98FF3',
  [PokemonType.Psychic]: '#F95587',
  [PokemonType.Bug]: '#A6B91A',
  [PokemonType.Rock]: '#B6A136',
  [PokemonType.Ghost]: '#735797',
  [PokemonType.Dragon]: '#6F35FC',
  [PokemonType.Dark]: '#705746',
  [PokemonType.Steel]: '#B7B7CE',
  [PokemonType.Fairy]: '#D685AD',
}

type TypeBadgeProps = {
  type: PokemonType
}

const TypeBadge: React.FC<TypeBadgeProps> = styled(Flex)`
  border-radius: 4px;
  background-color: ${({ type }: TypeBadgeProps) => TYPE_COLORS[type]};
  padding: 4px 6px;
  color: white;
  margin-left: 4px;
`

const MAX_SCALE = 3000

const getPercentage = (value: number) => Math.round((value * 100) / MAX_SCALE)

type PokemonCardProps = {
  pokemon: Pokemon
  onPokemonDetailsClick?: (id: string) => void
}

export const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon, onPokemonDetailsClick, ...props }) => {
  const handleShowDetails = useCallback(() => {
    if (!onPokemonDetailsClick) return
    onPokemonDetailsClick(pokemon.id)
  }, [pokemon, onPokemonDetailsClick])
  return (
    <Grid {...props} item xs={12} sm={6} md={4}>
      <PokemonCardContents>
        <PokemonImg image={pokemon.image} title={pokemon.name} />
        <CardContent>
          <InfoWrapper>
            <Name variant="h5" component="h2">
              {pokemon.name}
            </Name>
            <Number color="textSecondary" variant="h5" component="p">
              {`#${pokemon.number}`}
            </Number>
          </InfoWrapper>
          <InfoWrapper>
            <Flex>ID:</Flex>
            <Typography variant="body2" color="textSecondary">
              {pokemon.id}
            </Typography>
          </InfoWrapper>
          <InfoWrapper>
            <Flex>Type:</Flex>
            <BadgeContainer>
              {pokemon.types.map(type => (
                <TypeBadge key={type} type={type}>
                  {type}
                </TypeBadge>
              ))}
            </BadgeContainer>
          </InfoWrapper>
          <InfoWrapper>
            <Flex>HP:</Flex>
            <Tooltip title={`Max HP: ${pokemon.maxHP}`}>
              <Progress variant="determinate" value={getPercentage(pokemon.maxHP)} />
            </Tooltip>
          </InfoWrapper>
          <InfoWrapper>
            <Flex>CP:</Flex>
            <Tooltip title={`Max CP: ${pokemon.maxCP}`}>
              <Progress variant="determinate" value={getPercentage(pokemon.maxCP)} />
            </Tooltip>
          </InfoWrapper>
        </CardContent>
        {onPokemonDetailsClick && (
          <CardActions>
            <Button size="small" color="primary" onClick={handleShowDetails}>
              More information
            </Button>
          </CardActions>
        )}
      </PokemonCardContents>
    </Grid>
  )
}

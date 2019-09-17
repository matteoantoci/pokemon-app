export enum PokemonType {
  Normal = 'Normal',
  Fire = 'Fire',
  Water = 'Water',
  Electric = 'Electric',
  Grass = 'Grass',
  Ice = 'Ice',
  Fighting = 'Fighting',
  Poison = 'Poison',
  Ground = 'Ground',
  Flying = 'Flying',
  Psychic = 'Psychic',
  Bug = 'Bug',
  Rock = 'Rock',
  Ghost = 'Ghost',
  Dragon = 'Dragon',
  Dark = 'Dark',
  Steel = 'Steel',
  Fairy = 'Fairy',
}

export type PokemonTypeColor = {
  [key in PokemonType]: string
}

export type Pokemon = {
  id: string
  image: string
  maxCP: number
  maxHP: number
  name: string
  number: string
  types: PokemonType[]
}

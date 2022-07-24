export interface IPokemonState {
    pokemons: Array<IPokemon>,
    pokemonLoading: boolean
}

export const PokemonState: IPokemonState = {
    pokemonLoading: false,
    pokemons: []
}

export interface IPokemon {
    name: string
    id: string
}

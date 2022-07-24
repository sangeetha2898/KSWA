import { Action } from "../../core/core.types"
import { IPokemon } from "./pokemon.state"

export const PokemonActions = {
    GET_POKEMON_LIST: 'pokemon/GET_POKEMON_LIST',
    UPDATE_POKEMON_LIST: 'pokemon/UPDATE_POKEMON_LIST',
    GET_POKEMON_LIST_SUCCESS: 'pokemon/GET_POKEMON_LIST_SUCCESS',
    UPDATE_POKEMON_LIST_SUCCESS: 'pokemon/UPDATE_POKEMON_LIST_SUCCESS',
    POKEMON_LIST_FAILED: 'pokemon/POKEMON_LIST_FAILED'
}

export const getPokemonList = (): Action<null> => ({
    type: PokemonActions.GET_POKEMON_LIST,
    payload: null
})

export const getPokemonListSuccess = (pokemons: Array<IPokemon>): Action<Array<IPokemon>> => ({
    type: PokemonActions.GET_POKEMON_LIST_SUCCESS,
    payload: pokemons
})

export const updatePokemonList = (add: number): Action<number> => ({
    type: PokemonActions.UPDATE_POKEMON_LIST,
    payload: add 
})

export const updatePokemonListSuccess = (pokemons: Array<IPokemon>): Action<Array<IPokemon>> => ({
    type: PokemonActions.UPDATE_POKEMON_LIST_SUCCESS,
    payload: pokemons
})

export const pokemonListFailed = (): Action<null> => ({
    type: PokemonActions.POKEMON_LIST_FAILED,
    payload: null
})

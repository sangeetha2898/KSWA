import { Action } from "../../core/core.types";
import { PokemonActions } from "./pokemon.action";
import { PokemonState, IPokemonState } from "./pokemon.state";

export const PokemonReducer = (
    state: IPokemonState = PokemonState,
    action: Action<any>
): IPokemonState => {
    switch (action.type) {
        case PokemonActions.GET_POKEMON_LIST:
            return {
                ...state,
                pokemonLoading: true
            }
        case PokemonActions.GET_POKEMON_LIST_SUCCESS:
            return {
                ...state,
                pokemonLoading: false,
                pokemons: action.payload
            }
        case PokemonActions.UPDATE_POKEMON_LIST:
            return {
                ...state,
                pokemonLoading: true
            }
        case PokemonActions.UPDATE_POKEMON_LIST_SUCCESS:
            return {
                ...state,
                pokemonLoading: false,
                pokemons: [
                    ...state.pokemons,
                    ...action.payload
                ]
            }
        case PokemonActions.POKEMON_LIST_FAILED:
            return {
                ...state,
                pokemonLoading: false
            }
        default:
            return {
                ...state
            }
    }
}

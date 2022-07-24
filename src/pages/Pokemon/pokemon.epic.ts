import { Epic, ofType, StateObservable } from "redux-observable";
import { Observable, from, switchMap, mergeMap } from 'rxjs'
import { getPokemonsListApi, getRandomTodo } from "../../core/apis/api";
import { Action, API_RESPONSE, IApiResponse } from "../../core/core.types";
import { IAppState } from "../../core/redux/RootState";
import { getPokemonListSuccess, PokemonActions, pokemonListFailed, updatePokemonListSuccess } from "./pokemon.action";

export const getPokemonListEpic: Epic = (
    action$: Observable<Action<any>>,
) => {
    return action$.pipe(
        ofType(PokemonActions.GET_POKEMON_LIST),
        switchMap(() => {
            return from(getPokemonsListApi(10)).pipe(
                mergeMap((response: IApiResponse) => {
                    if (response.type === API_RESPONSE.FAILURE) {
                        console.log('Error here', response.data.response.status)
                        return from([
                            pokemonListFailed(),
                        ])
                    }
                    return from([
                        getPokemonListSuccess(response.data.results)
                    ])
                })
            )
        })
    )
}

export const updatePokemonListEpic: Epic = (
    action$: Observable<Action<number>>,
    state$: StateObservable<IAppState>
) => {
    return action$.pipe(
        ofType(PokemonActions.UPDATE_POKEMON_LIST),
        switchMap((action: Action<number>) => {
            const { pokemons } = state$.value.Pokemon
            return from(getPokemonsListApi(action.payload, pokemons.length)).pipe(
                mergeMap((response: IApiResponse) => {
                    if (response.type === API_RESPONSE.FAILURE) {
                        console.log('Error here', response.data.response.status)
                        return from([
                            pokemonListFailed(),
                        ])
                    }
                    return from([
                        updatePokemonListSuccess(response.data.results)
                    ])
                })
            )
        })
    )
}

export default [
    getPokemonListEpic,
    updatePokemonListEpic
]
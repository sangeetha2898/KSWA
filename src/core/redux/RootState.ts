import { IHomeState } from "../../pages/Home/home.state"
import { IPokemonState } from "../../pages/Pokemon/pokemon.state"

export interface RootState {}
export type IAppState = Readonly<{
    Home: IHomeState,
    Pokemon: IPokemonState
}>

import { combineEpics } from "redux-observable";
import PokemonEpic from "../../pages/Pokemon/pokemon.epic";
import HomeEpic from './../../pages/Home/home.epic'

export default combineEpics(
    ...HomeEpic,
    ...PokemonEpic
)

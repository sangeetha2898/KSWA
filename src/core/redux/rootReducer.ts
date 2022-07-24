import { combineReducers } from 'redux'
import { HomeReducer } from '../../pages/Home/home.reducer'
import { PokemonReducer } from '../../pages/Pokemon/pokemon.reducer'

const createRootReducer = () => 
  combineReducers({
      Home: HomeReducer,
      Pokemon: PokemonReducer
  })

export default createRootReducer
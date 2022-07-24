import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IDefaultComponent } from '../../core/core.types'
import { IAppState } from '../../core/redux/RootState'
import { getPokemonList, updatePokemonList } from './pokemon.action'
import { PokemonStyle } from './pokemon.styles'
import TestImage from './../../assets/img/test.jpeg'
import Pica from './../../assets/img/pica.svg'

const Pokemon: React.FC<IDefaultComponent> = () => {
  const { pokemons } = useSelector((store: IAppState) => store.Pokemon)
  const classes = PokemonStyle()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getPokemonList())
  }, [])

  const addPokemon = (add: number) => {
    dispatch(updatePokemonList(add))
  }

  const resetList = () => {
    dispatch(getPokemonList())
  }

  return (
    <React.Fragment>
        <h1 className={classes.header}>Pokemons List</h1>
        <div>
          <img className={classes.img} src={Pica} />
          <img className={classes.img} src={TestImage} />
          </div>
        <button className={classes.button} onClick={() => addPokemon(5)}>Add 5 more pokemon</button>
        <button className={classes.button} onClick={resetList}>Reset List</button>
        <ul className={classes.pokemonList}>
            {pokemons.map((_pokemon, idx) => (
                <li key={idx}>{_pokemon.name}</li>
            ))}
        </ul>
    </React.Fragment>
  )
}

export default Pokemon
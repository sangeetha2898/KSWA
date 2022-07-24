import { createUseStyles } from 'react-jss'

export const PokemonStyle = createUseStyles({
    button: {
        margin: '20px 10px'
    },
    header: {
        margin: '20px 0 0 0'
    },
    pokemonList: {
        maxHeight: 800,
        overflow: 'scroll'
    },
    img: {
        maxWidth: 100,
        margin: '0 20px'
    }
})

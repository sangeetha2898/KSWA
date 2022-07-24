import { getRequest } from "./apiInterceptor"

const POKEMON_BASE_URL = 'https://pokeapi.co/'

export const getRandomTodo = () => {
    const randId = Math.floor((Math.random() * 9) + 1)
    return getRequest(`todos/${randId}`)
}

export const getPokemonsListApi = (limit?: number,offset?: number) => {
    return getRequest(`api/v2/pokemon`, {limit, offset}, POKEMON_BASE_URL)
}

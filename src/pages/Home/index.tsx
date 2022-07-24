import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IAppState } from '../../core/redux/RootState'
import { initHome } from './home.action'

const Home:React.FC<any> = () => {
    const { message, loading } = useSelector((store: IAppState) => store.Home)
    const dispatch = useDispatch()

    const btnAction = () => {
        dispatch(initHome())
    }

    return (
        <>
        <h1>Welcome to React from Home</h1>
        <h4>Message: {message}</h4>
        {loading ? <p>Loading...</p> : <></>}
        <button onClick={btnAction}>Hello world</button>
        </>
    )
}

export default Home

import React from 'react'
import { HomeStyles } from './Home.styles'
import Header from '../../components/Header/Header'

const listItems = [
    {
        title: 'About us',
        onClick: () => {},
        customComponent: <></>
    },
    {
        title: 'Gallery',
        onClick: () => {},
        customComponent: <></>
    },
    {
        title: 'Contact Us',
        onClick: () => {},
        customComponent: <></>
    },
    {
        title: 'Donate',
        onClick: () => {},
        customComponent: <></>
    },
  ]

const Home:React.FC<any> = () => {
    const classes = HomeStyles()
    return (
        <div>
            <Header listItems={listItems} />
        </div>
    )
}

export default Home

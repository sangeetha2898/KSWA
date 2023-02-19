import { HeaderItem } from '../../components/Header/Header.types'
import KSWALogo from './../../assets/img/kswa-logo-min.png'
import React from 'react'
import { HomeStyles } from './Home.styles'

export const Logo = () => {
    const classes = HomeStyles()
    return(
    <img src={KSWALogo} alt={'kswa'} className={classes.logo}/>
    )
}

export const menuItems:Array<HeaderItem> = [
    {
        title: 'About us',
        path: '/cc',
        id: 'about-us'
    },
    {
        title: 'Mission',
        path: '/cc',
        id: 'mission'
    },
    {
        title: 'Gallery',
        path: '/cc',
        id: 'gallery'
    },
    {
        title: 'Contact Us',
        path: '/cc',
        id: 'contact-us'
    },
    {
        title: 'Donate',
        isBtn: true,
        path: '/cc',
        id: 'donate'
    },
  ]
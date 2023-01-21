import { createUseStyles } from "react-jss";

export const HeaderStyles = createUseStyles({
    nav: {

    },
    navContainer: {
        display: 'flex',
        flexDirection: 'row',
        listStyle: 'none',
        alignItems: 'center'
    },
    logo: {
        maxWidth: 225
    },
    navItem: {
        margin: '0px 20px'
    },
    navItemLink: {
        textDecoration: 'none',
        color: '#212121',
        fontFamily: 'Roboto, sans-serif'
    }
})
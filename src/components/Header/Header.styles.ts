import { createUseStyles } from "react-jss";
import { THEME } from "../../utils/Theme";

export const HeaderStyles = createUseStyles({
    nav: {

    },
    navContainer: {
        display: 'flex',
        flexDirection: 'row',
        listStyle: 'none',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 0,
        margin: 0
    },
    logo: {
        maxWidth: 225
    },
    navItem: {
        margin: '0px 20px',
        display: 'flex',
        alignItems: 'center',
        '@media only screen and (max-width: 600px)': {
            margin: '0px',
            justifyContent: 'center'
        }
    },
    navItemLink: {
        textDecoration: 'none',
        color: THEME.darkGrey,
        fontFamily: 'Poppins, sans-serif',
        '@media only screen and (max-width: 600px)': {
            padding: '20px 0',
            borderTop: `1px solid ${THEME.lightGrey}`,
            width: '100%',
            textAlign: 'center'
        }
    },
    secondary: {
        display: 'flex'
    },
    btn: {
        padding: '8px 16px',
        backgroundColor: THEME.primary,
        borderRadius: 16,
        color: THEME.white,
        transition: '0.3s',
        display: 'inline-block',
        boxShadow: '6px 6px 10px 0px rgb(42 67 113 / 30%)',
        '-webkitBoxShadow': '6px 6px 10px 0px rgb(42 67 113 / 30%)',
        '-mozBoxShadow': '6px 6px 10px 0px rgb(42 67 113 / 30%)',
        '&:hover': {
            transform: 'scale(1.15)'
        },
        '@media only screen and (max-width: 600px)': {
            margin: 10
        }
    },
    menuBtn: {
        fontSize: 24
    },
    menuMobContainer: {
        backgroundColor: 'white',
        position: 'fixed',
        right: 0,
        top: 0,
        height: '100%',
        zIndex: 9999,
        paddingTop: 40,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        width: 180,
        boxShadow: `-10px 0px 10px rgba(244, 126, 32, 0.2)`
    },
    closeMenu: {
        fontSize: 24,
        position: 'absolute',
        top: 16,
        right: 10
    },
    mobileMenuContainer: {
        paddingTop: 24,
        width: '100%'
    }
})
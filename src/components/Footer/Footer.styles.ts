import { createUseStyles } from "react-jss"
import { THEME } from "../../utils/Theme"

export const FooterStyles = createUseStyles({
    container: {
        maxWidth: 1200,
        margin: '0px auto',
        padding: 16
    },
    siteDesc: {
        fontSize: 16,
        color: THEME.darkGrey
    },
    footerIcon: {
        fontSize: 30,
        margin: '0px 2px',
        cursor: 'pointer'
    },
    footerTitle: {
        fontSize: 16,
        fontWeight: 700,
        color: THEME.primary,
        textTransform: 'uppercase',
        paddingBottom: 16
    },
    footerContact: {
        color: THEME.secondary,
        marginRight: 5
    },
    contactLinks: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        '@media only screen and (max-width: 600px)': {
            alignItems: 'unset',
            justifyContent: 'unset',
        }
    },
    footerListContainer: {
        listStyle: 'none',
        margin: 0,
        padding: 0
    },
    footerLink: {
        '&:hover': {
            color: THEME.secondary
        }
    },
    footerContainer: {
        display: 'flex',
        flexDirection: 'row',
        '@media only screen and (max-width: 600px)': {
            flexDirection: 'column'
        }
    },
    footerContent: {
        width: '33%',
        padding: 16,
        textAlign: 'right',
        '@media only screen and (max-width: 600px)': {
            width: '100%',
            textAlign: 'unset'
        }
    },
    footer: {
        backgroundColor: 'rgba(53, 123, 195, 0.2)',
        marginBottom: -50
    },
    copyright: {
        textAlign: 'center',
        fontSize: 14,
        color: THEME.darkGrey,
        paddingBottom: 20
    }
})
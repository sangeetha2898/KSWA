import { createUseStyles } from "react-jss";
import { THEME } from "../../utils/Theme";

export const HomeStyles = createUseStyles({
    container: {
        maxWidth: 1200,
        margin: '0px auto',
        padding: 16
    },
    banner: {
        backgroundColor: THEME.secondary,
        height: 600,
        width: '100%',
        display: 'flex',
        '@media only screen and (max-width: 600px)': {
            height: 'auto'
        }
    },
    bannerHeading: {
        fontSize: 40,
        margin: 0,
        '@media only screen and (max-width: 600px)': {
            fontSize: 18
        }
    },
    bannerDescription: {
        fontSize: 16,
        '@media only screen and (max-width: 600px)': {
            fontSize: 14
        }
    },
    bannerContent: {
        width: '50%',
        '@media only screen and (max-width: 600px)': {
            position: 'relative'
        }
    },
    bannerContainer: {
        alignContent: 'center',
        display: 'flex'
    },
    rightContent: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        paddingRight: 40,
        '@media only screen and (max-width: 600px)': {
            paddingRight: 5
        }
    },
    bannerIlls: {
        maxWidth: '100%',
        transform: 'scale(1.15) translateY(-30px)',
        '@media only screen and (max-width: 600px)': {
            transform: 'translate(0,-50%) scale(1.5) ',
            position: 'absolute',
            top: '50%'
        }
    },
    sectionTitle: {
        color: THEME.primary,
        textTransform: 'uppercase',
        letterSpacing: 4
    },
    section: {
        margin: '50px 0',
        '@media only screen and (max-width: 600px)': {
            margin: '20px 0',
        }
    },
    sectionHeding: {
        fontSize: 24,
        color: THEME.secondary,
        margin: '16px 0'
    },
    aboutSection: {
        position: 'relative',
        '&:before': {
            content: '""',
            position: 'absolute',
            top: '50%',
            right: '5%',
            width: 350,
            height: 350,
            borderRadius: '100%',
            backgroundColor: 'rgba(244, 126, 32, 0.3)',
            transform: 'translate(-5%, -50%) scale(1.2)',
            zIndex: -999
        }
    },
    sectionDesc: {
        textAlign: 'justify'
    },
    missionIlls: {
        maxWidth: 450,
        width: '100%'
    },
    missionContent: {
        display: 'flex',
        flexDirection: 'row',
        '@media only screen and (max-width: 600px)': {
            flexDirection: 'column'
        }
    },
    leftColContent: {
        width: '50%',
        '@media only screen and (max-width: 600px)': {
            width: '100%',
            marginBottom: 16,
            paddingTop: 10
        }
    },
    rightColContent: {
        width: '50%',
        '@media only screen and (max-width: 600px)': {
            width: '100%'
        }
    },
    gallerySection: {
        padding: 16,
        marginTop: 16
    },
    galleryTitle: {
        textAlign: 'center'
    },
    sliderImgContainer: {
        height: 500,
        borderRadius: 20,
        overflow: 'hidden',
        margin: '0 10px'
    },
    sliderImg: {
        width: 'auto',
        height: '100%'
    },
    logo: {
        maxWidth: 225,
        '@media only screen and (max-width: 600px)': {
            maxWidth: 125,
            marginLeft: -10
        }
    },
    body: {
        width: '100%',
        overflow: 'hidden'
    }
})
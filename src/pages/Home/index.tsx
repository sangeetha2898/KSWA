import React from 'react'
import Header from '../../components/Header/Header'
import { HomeStyles } from './Home.styles'
import { Logo, menuItems } from './Home.helper'
import classNames from 'classnames'
import Batsman from './../../assets/img/batsman_hitting.png'
import TeamAthletes from './../../assets/img/mob-team.png'
import SliderImg2 from './../../assets/img/slider/Ancy-Sojan-3.jpeg'
import SliderImg3 from './../../assets/img/slider/Jeet-Chandra-1.jpeg'
import SliderImg4 from './../../assets/img/slider/Sandra-Babu-1.jpeg'
import Carousel from 'nuka-carousel'
import Footer from '../../components/Footer/Footer'
import isMobile from 'is-mobile'

const mobile = isMobile()

const Home:React.FC<any> = () => {
    const classes = HomeStyles()
    return (
        <div className={classes.body}>
        <div className={classes.container}>
            <Header navItems={menuItems} Primary={<Logo />} />
        </div>
            <div className={classes.banner}>
                <div className={classNames({
                    [classes.container]: true,
                    [classes.bannerContainer]: true
                })}>
                <div className={classNames(classes.bannerContent,classes.rightContent)}>
                    <h4 className={classes.bannerHeading}>Never Say Never, because limits, like fears, are often just an illusion.</h4>
                    <p className={classes.bannerDescription}>Nobody goes undefeated all the time. If you can pick up after a crushing defeat, and go on to win again, you are going to be a champion someday!</p>
                </div>
                <div className={classes.bannerContent}>
                    <img className={classes.bannerIlls} src={Batsman} alt={'batsman'} />
                </div>
                </div>
            </div>
            <div className={classes.section}>
                <div className={classes.container}>
                    <div className={classes.missionContent}>
                    {mobile ? <h4 className={classes.sectionTitle}>Our Mission</h4> : <></>}
                    <div className={classes.leftColContent}>
                        <img src={TeamAthletes} alt={'athletes'} className={classes.missionIlls} />
                    </div>
                    <div className={classes.rightColContent}>
                    {mobile ? <></> : <h4 className={classes.sectionTitle}>Our Mission</h4>}
                    <h1 className={classes.sectionHeding}>ADP allows talented and focused young individuals to realize their true potential as a sportsperson</h1>
                    <p className={classes.sectionDesc}>
                        ADP allows talented and focused young individuals to realize their true potential as a sportsperson and in turn their dreams of excelling in their respective fields.</p><p className={classes.sectionDesc}> The VKF Athlete Development Program reflects Virat’s dream of making India a sporting superpower and his desire to do whatever he can to facilitate the realization of this objective
                    </p>
                    </div>
                    </div>
                </div>
            </div>
            <div className={classes.section}>
                <div className={classNames(classes.container, classes.aboutSection)}>
                <h4 className={classes.sectionTitle}>About Us</h4>
                <h1 className={classes.sectionHeding}>We envision a world where poverty and hunger no longer exist; where communities are prepared for seasonal shocks.</h1>
                <p className={classes.sectionDesc}>To work towards ensuring that the poorest and most vulnerable in our world and those affected by humanitarian crises have access to the fundamental rights of life, including but not limited to adequate shelter, food, water and sanitation, healthcare and education.</p><p>To work towards ensuring that the poorest and most vulnerable in our world and those affected by humanitarian crises have access to the fundamental rights of life, including but not limited to adequate shelter, food, water and sanitation, healthcare and education. </p>
                </div>
            </div>
            <div className={classes.section}>
                <h4 className={classNames(classes.sectionTitle, classes.galleryTitle)}>Gallery</h4>
                <div className={classes.gallerySection}>
                    <Carousel wrapAround swiping slidesToShow={mobile ? 1 : 4} withoutControls autoplay autoplayInterval={2000}>
                        <div className={classes.sliderImgContainer}>
                            <img src={SliderImg2} alt={'athlete-1'} className={classes.sliderImg} />
                        </div>
                        <div className={classes.sliderImgContainer}>
                            <img src={SliderImg3} alt={'athlete-1'} className={classes.sliderImg} />
                        </div>
                        <div className={classes.sliderImgContainer}>
                            <img src={SliderImg4} alt={'athlete-1'} className={classes.sliderImg} />
                        </div>
                        <div className={classes.sliderImgContainer}>
                            <img src={SliderImg2} alt={'athlete-1'} className={classes.sliderImg} />
                        </div>
                        <div className={classes.sliderImgContainer}>
                            <img src={SliderImg3} alt={'athlete-1'} className={classes.sliderImg} />
                        </div>
                        <div className={classes.sliderImgContainer}>
                            <img src={SliderImg3} alt={'athlete-1'} className={classes.sliderImg} />
                        </div>
                    </Carousel>
                </div>
            </div>
            <div className={classes.section}>
                <Footer />
            </div>
        </div>
    )
}

export default Home

import React from 'react'
import { IFooter } from './Footer.types'
import { FooterStyles } from './Footer.styles'
import { Logo } from '../../pages/Home/Home.helper'
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillMail, AiFillPhone, AiFillYoutube } from 'react-icons/ai'
import { THEME } from "../../utils/Theme"

const Footer:React.FC<IFooter> = () => {
    const classes = FooterStyles()
  return (
    <div className={classes.footer}>
        <div className={classes.container}>
            <div className={classes.footerContainer}>
            <div className={classes.footerContent}>
                <Logo />
                <p className={classes.siteDesc}>Virat Kohli, captain of the Indian men’s cricket team set up the Virat Kohli Foundation (VKF) in 2013.</p>
                <div>
                    <AiFillFacebook onClick={() => {}} color={THEME.socialMedia.facebook} className={classes.footerIcon} />
                    <AiFillInstagram color={THEME.socialMedia.instagram} className={classes.footerIcon} />
                    <AiFillLinkedin color={THEME.socialMedia.linkedin} className={classes.footerIcon} />
                    <AiFillYoutube color={THEME.socialMedia.youtube} className={classes.footerIcon} />
                </div>
            </div>
            <div className={classes.footerContent}>
                <h4 className={classes.footerTitle}>You can reach us at</h4>
                <p><strong>Address: </strong>Sarkar Heritage B Wing 1st Floor,Kane Road Bandra West, Mumbai 400050</p>
                <a className={classes.contactLinks} target='_BLANK' href='tel: +918792074120'><AiFillPhone className={classes.footerContact} size={20} /> +91 8792074120</a>
                <a className={classes.contactLinks} href='mailto:contact@kswca.com'><AiFillMail className={classes.footerContact} size={20} />contact@kswca.com</a>
            </div>
            <div className={classes.footerContent}>
                <h4 className={classes.footerTitle}>Important Links</h4>
                <ul className={classes.footerListContainer}>
                    <li><a className={classes.footerLink} href='#'>About Us</a></li>
                    <li><a className={classes.footerLink}  href='#'>Contact Us</a></li>
                    <li><a className={classes.footerLink}  href='#'>Donate</a></li>
                    <li><a className={classes.footerLink} href='#'>80G Certification</a></li>
                </ul>
            </div>
            </div>
            <div>
                <p className={classes.copyright}>&#169; 2023 Karnataka WheelChair Cricket Association. | All Rights Reserved</p>
            </div>
        </div>
    </div>
  )
}

export default Footer
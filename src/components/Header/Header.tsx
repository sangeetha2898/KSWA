import React, { useState } from 'react'
import { HeaderStyles } from './Header.styles'
import { HeaderItem, IHeader } from './Header.types'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import isMobile from 'is-mobile'
import { AiFillCloseCircle, AiOutlineMenu } from 'react-icons/ai'

const Header:React.FC<IHeader> = ({
    navItems,
    Primary
}) => {
  const classes = HeaderStyles()
  const [toggleMenu, setToggleMenu] = useState(false)

  const renderNavItems = (items: Array<HeaderItem>) => {
    return items.map((_item: HeaderItem) => {
        const {title, CustomOnClick, path, isBtn, id} = _item
        return (
            <li className={classes.navItem} key={id} >
                {CustomOnClick ? <a href={'#!'} className={classNames({
                    [classes.navItemLink]: true,
                    [classes.btn]: !!isBtn
                })} onClick={CustomOnClick}>{title}</a> : <Link to={path} className={classNames({
                    [classes.navItemLink]: true,
                    [classes.btn]: !!isBtn
                })}>{title}</Link>}
            </li>
        ) 
    })
  }

  const renderMobMavItems = (items: Array<HeaderItem>) => {
    return (
        <>
        <AiOutlineMenu onClick={() => setToggleMenu(!toggleMenu)} className={classes.menuBtn} />
        {toggleMenu ? (
            <div className={classes.menuMobContainer}>
                <AiFillCloseCircle className={classes.closeMenu} onClick={() => setToggleMenu(!toggleMenu)} />
                <div className={classes.mobileMenuContainer}>
                {items.map((_item: HeaderItem) => {
        const {title, CustomOnClick, path, isBtn, id} = _item
        return (
            <li className={classes.navItem} key={id} >
                {CustomOnClick ? <a href={'#!'} className={classNames({
                    [classes.navItemLink]: true,
                    [classes.btn]: !!isBtn
                })} onClick={CustomOnClick}>{title}</a> : <Link to={path} className={classNames({
                    [classes.navItemLink]: true,
                    [classes.btn]: !!isBtn
                })}>{title}</Link>}
            </li>
        ) 
    })}
    </div>
            </div>
        ) : (<></>)}
        </>
    )
  }

  return (
    <nav className={classes.nav}>
        <ul className={classes.navContainer}> 
        <div>
            <li className={classes.navItem} >
                {Primary}
            </li>
        </div>
        <div className={classes.secondary}>
            {isMobile() ? renderMobMavItems(navItems) : renderNavItems(navItems)}
        </div>
        </ul>
    </nav>
  )
}

export default Header
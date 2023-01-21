import React from 'react'
import { HeaderStyles } from './Header.styles'
import KSWALogo from './../../assets/img/kswa-logo-min.png'

const Header = ({listItems}) => {
  const classes = HeaderStyles()
//   <li className={classes.navItem}>
//   <a href='#' className={classes.navItemLink}>
//       <img src={KSWALogo} alt={'kswa'} className={classes.logo} />
//   </a>
// </li>


  const renderNavItems = (items: any) => {
    return items.map((_item: any) => {
        return (
            <li className={classes.navItem} >
                <a href='#' className={classes.navItemLink}>{_item.title}</a>
            </li>
        )
    })
  }

  return (
    <nav className={classes.nav}>
        <ul className={classes.navContainer}> 
            {renderNavItems(listItems)}
        </ul>
    </nav>
  )
}

export default Header
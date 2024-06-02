import React, { useState } from 'react'
import styles from './Menu.module.css'
import { data, menuItems } from './configuration.json'
import Link from 'next/link'

export const Menu = () => {
  const [isMobileView, setIsMobileView] = useState(document?.body?.offsetWidth < 700)
  const [left, setLeft] = useState(-150);
  const [selMenuItem, setSelMenuItem] = useState(location?.pathname?.slice(1) || 'home');
  let timeoutId;
  window.addEventListener('resize', () => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => {
      const devicewidth = document?.body?.offsetWidth;
      setIsMobileView(devicewidth < 700);
    })
  }, 100);

  const handleMobileMenuBtnClick = () => {
    setLeft(left === -150 ? 0 : -150)
  }

  const handleMenuItemClick = (menuItem) => {
    setSelMenuItem(menuItem)
  }

  return (
    <>
    {isMobileView && <button onClick={handleMobileMenuBtnClick} className={ styles.mobileMenuBtn}><span></span><span></span><span></span></button>}
      <ul style={{left: left}} className={`px-0 py-0 mx-0 my-0 ${isMobileView ? styles.mobileMenu :styles.menu}`}>
        {
          menuItems?.map(({ id, link, text }, ind) => {
            return <li className={id === selMenuItem ? styles.active : ''} onClick={()=> handleMenuItemClick(id)} key={`li_${ind}`}><Link href={link}>{text}</Link></li>
          })
        }
      </ul>
    </>
  )
}


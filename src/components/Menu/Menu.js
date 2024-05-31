import React, { useState } from 'react'
import styles from './Menu.module.css'
import { data, menuItems } from './configuration.json'
import Link from 'next/link'

export const Menu = () => {
  const [isMobileView, setIsMobileView] = useState(document?.body?.offsetWidth < 700)
  let timeoutId;
  window.addEventListener('resize', () => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => {
      const devicewidth = document?.body?.offsetWidth;
      setIsMobileView(devicewidth < 700);
    })
  }, 100);

  return (
    <>
    {isMobileView && <button className={styles.mobileMenuBtn}><span></span><span></span><span></span></button>}
      <ul className={`px-0 py-0 mx-0 my-0 ${styles.menu}`}>
        {
          menuItems?.map(({ id, link, text }, ind) => {
            return <li key={`li_${ind}`}><Link href={link}>{text}</Link></li>
          })
        }
      </ul>
    </>
  )
}


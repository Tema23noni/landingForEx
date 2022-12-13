import React from 'react'
import linkUtube from '../../img/utube.png';
import linkVk from '../../img/tg.png';
import linkTg from '../../img/vk.png';
import linkInst from '../../img/insta.png';

import cl from './Main.module.scss'
const Contacts = () => {
  return (
    <div className={cl.posit__contact}>
      <div className={cl.Contacts}>
        <div className={cl.Contacts__block}>
          <p className={cl.Contats__text}>Контактная информация</p>
        </div>
        <span className={cl.Contacts__line}></span>
        <div className={cl.social}>
            <a href='#'><img src={linkInst} alt="Inst" /></a>
            <a href='#'><img src={linkVk} alt="VK" /></a>
            <a href='#'><img src={linkTg} alt="TG" /></a>
            <a href='#'><img src={linkUtube} alt="YouTube" /></a>
        </div>
      </div>
    </div>
  )
}

export default Contacts
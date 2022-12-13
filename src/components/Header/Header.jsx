import React from 'react'
import { useState } from 'react';
import cl from './Header.module.scss';
import Modal from './Modal';
import Open__Modal from './Open__Modal';
const Header = ({scrollToSection,objectToLink}) => {
  const [openModal, setOpenModal] = useState(false);
  console.log(openModal)
  return (
    <>
      <div className={cl.navigators}>    
          <div className='cont'>
  
              <nav className={cl.navigate}>
                <p onClick={() => scrollToSection(objectToLink.main)}>Главная</p>
                <p onClick={() => scrollToSection(objectToLink.aboutTheatre)}>О театре</p>
                <p onClick={() => scrollToSection(objectToLink.productions)}>Наши постановки</p>
                <p onClick={() => scrollToSection(objectToLink.partners)}>Партнеры театра</p>
                <p onClick={() => scrollToSection(objectToLink.beMaecenas)}>Контакты</p>
              </nav>

          </div>
          <Open__Modal setOpenModal={setOpenModal} openModal={openModal}/>
          <Modal scrollToSection={scrollToSection} setOpenModal={setOpenModal} openModal={openModal} objectToLink={objectToLink}/>
      </div>

    </>
  )
}

export default Header
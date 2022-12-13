import React from 'react'
import cl from './Header.module.scss';
import Open__Modal from './Open__Modal';
const Modal = ({scrollToSection,objectToLink,setOpenModal, openModal}) => {
  return (
    <div className={openModal ? cl.Modal: [cl.Modal, cl.active].join(' ')}>
            <Open__Modal setOpenModal={setOpenModal} openModal={openModal}/>
            <div className={cl.Modal__cont}>
              <nav className={cl.link}>
                  <div><p data-menu='Главная' onClick={() => {scrollToSection(objectToLink.main); setOpenModal(!openModal)}}>Главная</p></div>
                  <div><p data-menu='О театре' onClick={() => {scrollToSection(objectToLink.aboutTheatre); setOpenModal(!openModal)}}>О театре</p></div>
                  <div><p data-menu='Постановки' onClick={() => {scrollToSection(objectToLink.productions); setOpenModal(!openModal)}}>Наши постановки</p></div>
                  <div><p data-menu='Партнеры' onClick={() => {scrollToSection(objectToLink.partners); setOpenModal(!openModal)}}>Партнеры театра</p></div>
                  <div><p data-menu='Контакты' onClick={() => {scrollToSection(objectToLink.beMaecenas); setOpenModal(!openModal)}}>Контакты</p></div>
              </nav>
            </div>
    </div>
  )
}

export default Modal
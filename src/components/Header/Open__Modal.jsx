import React from 'react'
import cl from './Header.module.scss';
const Open__Modal = ({setOpenModal, openModal}) => {
  console.log(openModal)
  return (
    <div className={cl.bur__cont} onClick={()=> setOpenModal(!openModal)}>
        <div className={openModal? [cl.Open__Modal, cl.active].join(' '): cl.Open__Modal}>
            <span/>
        </div>
    </div>
  )
}

export default Open__Modal
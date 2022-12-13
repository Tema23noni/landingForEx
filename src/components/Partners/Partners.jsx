import React from 'react'
import cl from './Partners.module.scss';
import logo from '../../img/logo.png';
const Partners = ({linkRef}) => {
  return (
    <div ref={linkRef} className={cl.Partners}>
        <div className='cont'>
            <h2><span>Наши</span> партнеры</h2>
            <div className={cl.Partners__ex}>
                <div><img src={logo} alt="gasprom"/></div>
                <div><img src={logo} alt="gasprom"/></div>
                <div><img src={logo} alt="gasprom"/></div>
                <div><img src={logo} alt="gasprom"/></div>
                <div><img src={logo} alt="gasprom"/></div>
                <div><img src={logo} alt="gasprom"/></div>
                <div><img src={logo} alt="gasprom"/></div>
                <div><img src={logo} alt="gasprom"/></div>
            </div>
        </div>
    </div>
  )
}

export default Partners
import React from 'react'
import cl from './Productions.module.scss'
const Productions = ({linkRef}) => {
  return (
    <div ref={linkRef} className={cl.Productions}>
        <div className='cont'>
            <h2><span>Наши</span> постановки</h2>
            <div className={cl.product}>
                <div className={cl.oskar}>
                    <div className={cl.product__name}>
                    <p>Оскар 2020</p>
                        </div>
                    <div className={cl.product__date}>
                        <p>Сентябрь 2020</p>
                    </div>
                </div>
                <div className={cl.oskar}>
                    <div className={cl.product__name}>
                    <p>Оскар 2020</p>
                        </div>
                    <div className={cl.product__date}>
                        <p>Сентябрь 2020</p>
                    </div>
                </div>
                <div className={cl.oskar}>
                    <div className={cl.product__name}>
                    <p>Оскар 2020</p>
                        </div>
                    <div className={cl.product__date}>
                        <p>Сентябрь 2020</p>
                    </div>
                </div>
                <div className={cl.oskar}>
                    <div className={cl.product__name}>
                    <p>Оскар 2020</p>
                        </div>
                    <div className={cl.product__date}>
                        <p>Сентябрь 2020</p>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Productions
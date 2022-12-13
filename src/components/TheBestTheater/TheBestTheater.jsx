import React from 'react'
import cl from './TheBestTheater.module.scss';
const TheBestTheater = ({linkRef}) => {
  return (

    <div className='cont' id={cl.content}>
      <div ref={linkRef} className={cl.bestTheater}>
    
          <div className={cl.rating}>
              <div className={cl.rating__date}>
                  <p>2018</p>
                  <p>2019</p>
                  <p>2020</p>
              </div>
              <div className={cl.rating__text}>
                  <div></div>
                  <p>Лучший театр по мнению театральных критиков Парижа</p>
              </div>
          </div>
      </div>
  </div>
  )
}

export default TheBestTheater
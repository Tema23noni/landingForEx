import React from 'react'
import cl from './Main.module.scss';

import Contacts from './Contacts';
import img from '../../img/image3.png';
const Main = ({linkRef}) => {
  return (
    <div ref={linkRef} className={cl.mainPage}>
        <Contacts/>
        <div className='cont'>
           <div className={cl.swithingPosters}>
              <div className={cl.poster__about}>
                <h1 className={cl.nameOfPerform}>Большой театр</h1>
                  <p className={cl.aboutPerform}>Большо́й теа́тр — петербургский театр, существовавший в 1784—1886 годах, с 1886 года — Петербургская консерватория. Первое постоянное в Санкт-Петербурге, крупнейшее в России и одно из крупнейших театральных зданий в Европе XVIII.</p>
                  <button className={cl.btn__poster} onClick={() => console.log('work')}>Афиша</button>
              </div>
              <div className={cl.poster}>
                <img src={img} alt="img" />
                <div className={cl.switherPost}>
                  <div className={cl.prev}>
                    <button>Пред</button>
                  </div>
                  <div className={cl.next}>
                    <button>След</button>
                  </div>
                </div>
              </div>
           </div>
        </div>
    </div>
  )
}

export default Main
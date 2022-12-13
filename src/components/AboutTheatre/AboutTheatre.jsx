import React from 'react'
import cl from './AboutTheatre.module.scss';
import theatrePhoto from '../../img/theatre.png';
import chair from '../../img/armchair.png';
import theater from '../../img/theater.png';
const AboutTheatre = ({linkRef}) => {
  return (
    <div className={cl.aboutTheatre} ref={linkRef}>
        <div className='cont'>
            <h2><span>О</span> театре</h2>
            <div className={cl.info}>
                <div className={cl.info__best}>
                    <h3>Самый лучший театр спб</h3>
                    <p>Как свидетельствуют архивные документы, первое каменное здание Большого театра начали возводить в 1775 году по проекту Антонио Ринальди. В дальнейшем, после того как Ринальди упал с лесов и не мог лично наблюдать за ходом работ, Екатерина II поручила немецкому театральному декоратору и архитектору Людвигу Филиппу Тишбейну создать новый проект театра, который и был воплощён архитекторами Ф. В. фон Бауром и М. А. Деденёвым. Открытие его состоялось в 1783 году, хотя, основываясь на других свидетельствах, годом открытия можно считать 1784 год.</p>
                </div>
                <div className={cl.info__numbers}>
                    <h3>Немного о цифрах</h3>
                    
                    <div className={cl.litlebitN}>
                        <div>
                            <img src={chair}/>
                            <p><span>1600</span> посадочных мест</p>
                        </div>
                        <div>
                            <img src={theater}/>
                            <p><span>350</span> лет истории</p>
                        </div>
                    </div>
                </div>
                <div className={cl.info__photo}>
                        <img src={theatrePhoto}/>
                </div>
            </div>
        </div>
  </div>
  )
}

export default AboutTheatre
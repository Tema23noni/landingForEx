import React from 'react'
import cl from '../../App.module.scss';
const Input = ({placeholder, name,register, errors}) => {
    if(name === 'mail'){
        return (
            <div className={cl.input}>
                <input
                    {...register(`${name}`,
                        {
                            required: `${placeholder} заполнить обязательно`,
                            pattern:{
                                value:  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                message: 'Введите правильный Mail'
                            }
                        }
                    )
                    }
        
                    type="text" 
                    placeholder={placeholder} />
                {errors[`${name}`] && 
                    <div className={cl.error}>{errors[name].message}</div>
                }
            </div>
          )
    }
    if(name === 'phone'){
        return(
            <div className={cl.input}>
            <input
                {...register(`${name}`,
                    {
                        required: `${placeholder} заполнить обязательно`,
                        pattern:{
                            value:  /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/,
                            message: 'Введите правильный номер'
                        }
                    }
                )
                }
    
                type="text" 
                placeholder={placeholder} />
            {errors[`${name}`] && 
                <div className={cl.error}>{errors[name].message}</div>
            }
        </div>
        )
    }
  return (
    <div className={cl.input}>
        <input
            {...register(`${name}`,
                {
                    required: `${placeholder} заполнить обязательно`,
                }
            )
            }

            type="text" 
            placeholder={placeholder} />
        {errors[`${name}`] && 
            <div className={cl.error}>{errors[name].message}</div>
        }
    </div>
  )
}

export default Input
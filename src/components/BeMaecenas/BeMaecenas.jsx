import React from 'react'
import { useForm } from 'react-hook-form';
import Input from '../../UI/Input/Input';
import cl from './BeMaecenas.module.scss';
const BeMaecenas = ({linkRef}) => {
  const {register, handleSubmit, reset ,formState: {errors,isValid}} = useForm({
    mode:'onChange',
  })
  const onSub = (data) =>{
    console.log(JSON.stringify(data));
    reset()
  }
  console.log(isValid)
  return (
    <div ref={linkRef} className={cl.BeMaecenas}>
        <div className='cont'>
        <h2><span>Стать</span> меценатом</h2>
        <form onSubmit={handleSubmit(onSub)}>
            <div className={cl.formik}>
              <Input placeholder={'Имя'} errors={errors} register={register} name={'fName'}/>
              <Input placeholder={'Фамилия'} errors={errors} register={register} name={'lName'}/>
              <Input placeholder={'Телефон'} errors={errors} register={register} name={'phone'}/>
              <Input placeholder={'E-mail'} errors={errors} register={register} name={'mail'}/>
              <textarea placeholder='Коментарий...' {...register('comments')} name="" id="" cols="30" rows="10"></textarea>
            </div>
            <div className={cl.send}>
                <p>* Ваши данные не будут переданы третьим лицам, 100% вероятность. Конфиденциальность мы гарантируем, и защищаем персональные данные согласно законку ФЗ-52.</p>
                <button disabled={!isValid} >Отправить</button>
            </div>
        </form>
        </div>
    </div>
  )
}

export default BeMaecenas
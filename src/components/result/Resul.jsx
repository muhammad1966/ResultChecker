import React from 'react'
import './result.css'
import {useForm} from 'react-hook-form'

export const Resul = () => {
    const {register, handleSubmit} = useForm();

    const onSubmit = (data) =>{
        let Data = data;
    }
  return (
    <div className='result-div'>
        <div className='result-content-div'>
            <h3>
                Provide your name or student number in the field below.
            </h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className='result-input' type="text"  {...register("identity")}/>
                <button className='result-submit' type="submit">Submit</button>
            </form>
        </div>
    </div>


  )
}



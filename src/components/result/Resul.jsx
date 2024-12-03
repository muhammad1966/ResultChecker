import React from 'react'
import './result.css'
import {useState} from 'react'

export const Resul = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

    const fetchData = () => {
        setError(null);
        setLoading(true);

        fetch(BASE_URL)
        .then((response) =>{
            if(!response.ok){
                throw new Error ("Something went wrong with the networt")
            }
            return response.json();
        })
        .then((data) =>{
            setData(data);
        })
        .catch((error)=>{
            setError(error);
        })
        .finally(()=>{
            setLoading(false);
        })
    }
    
  return (
    <div className='result-div'>
        <div className='result-content-div'>
            <h3>
                Provide your name or student number in the field below.
            </h3>
            <input className='result-input' type="text"/>
            <button className='result-submit' type="submit" onClick={fetchData}>Submit</button>
        </div>
    </div>


  )
}



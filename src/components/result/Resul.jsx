import React from 'react'
import './result.css'
import { UserPanel } from "../user__panel/UserPanel.jsx"

import {useState} from 'react'

export const Resul = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [inputValue, setInputValue] = useState("");
    const [isOk, setIsOk] = useState(true);
    const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

    const fetchData = () => {
        setError(null);
        setLoading(true);

        fetch(BASE_URL /*+ `/${inputValue}`*/)
        .then((response) =>{
            if(!response.ok){
                alert ("Something went wrong!");
                setIsOk(false);
            }
            return response.json();
        })
        .then((data) =>{
            setData(data);
            console.log(data);
        })
        .catch((error)=>{
            setError(error);
        })
        .finally(()=>{
            setLoading(false);
        })
    }

    if(isOk === true && loading === false){
        if(data){
            return <UserPanel data = {data}/>
        }
    }
    else if(error && isOk === false){
        alert("Operation failed!");
        setIsOk(true);
    }
    
  return (
    <div className='result-div'>
        <div className='result-content-div'>
            <h3>
                Provide your name or student number in the field below.
            </h3>
            <input className='result-input' type="text" value={inputValue} onChange={(e) => {setInputValue(e.target.value)}}/>
            <button className='result-submit' type="submit" onClick={fetchData}>Submit</button>
        </div>
    </div>


  )
}



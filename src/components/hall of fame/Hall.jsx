import React from 'react'
import './hall.css'
import data from "../../data.js"


export const Hall = () => {

return (
	<div className='hall-div'>
		<div className='name-div'>
			{data.map((item)=>{
				return (<div className='item-div'>{item.name}</div>)
			})}
		</div>

		<div className='hall-visual'>

		</div>
	</div>
);
}

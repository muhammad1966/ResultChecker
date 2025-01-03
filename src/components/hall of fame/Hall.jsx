import React from 'react'
import './hall.css'
import data from "../../data.js"
import { Line } from "react-chartjs-2";
import { useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

const displayCurrentItemData = (id)=>{
	const Data = {
		labels: ["I.Diseases", "Neoplasia", "Cardiovascular", "Gastrointestinal", "Endocrinology"],
		color: "white",
		datasets: [
		  {
			label: "Results",
			color:"white",
			data: data[id].scores,
			fill: true,
			backgroundColor: "rgba(128,0,0)",
			borderColor: "rgba(128,0,0,1)",
			tension: 0.4,
		  },
		],
	  };
	
	  const options = {
		responsive: true,
		plugins: {
		  legend: {
			display: true,
			position: "bottom",
		  },
		  title: {
			display: true,
			text: "Results in the last five committees",
		  },
		},
	  };
	
	  
	return (
		<>
			 <Line data={Data} options={options} />
		</>
	)
}

export const Hall = () => {

	const [id, setId] = useState(0);
	
	return (
		<div className='hall-div'>
			<div className='name-div'>
				{data.map((item)=>{
					return (<div key={item.id} onClick={()=>{setId(item.id)}}  className='item-div'>{item.name}</div>)
				})}
			</div>

			<div className='hall-visual'>
				{displayCurrentItemData(id)}
			</div>
		</div>
	);
}

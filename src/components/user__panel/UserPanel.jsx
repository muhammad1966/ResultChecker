import React from "react";
import { Line } from "react-chartjs-2";
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
import "./userPanel.css";


ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

export const UserPanel = ({ data }) => {
  const Data = {
    labels: ["I.Diseases", "Neoplasia", "Cardiovascular", "Gastrointestinal", "Endocrinology"],
    color: "white",
    datasets: [
      {
        label: "Results",
        color:"white",
        data: [45, 59, 44, 60, 84],
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
        text: "Your results in the last five committees",
      },
    },
  };

  return (
    <div className="user-panel-div">
      <div className="user-panel-content">
        <div className="content-numeric">
          <h3>Your results in the last three committees:</h3>
          <div className="current-div">
            <h4 className="current-label-numeric">Current result:</h4>
            <div>
              <h1>67</h1>
            </div>
          </div>
          <div className="previous-div">
            <h4 className="previous-label-numeric">Previous result:</h4>
            <div>
              <h1>54</h1>
            </div>
          </div>
          <div className="other-div">
            <h4 className="other-label-numeric">Other results:</h4>
            <div>
              <h1>39...</h1>
            </div>
          </div>
        </div>
        <div className="content-chart">
          <Line data={Data} options={options} />
        </div>
      </div>
    </div>
  );
};

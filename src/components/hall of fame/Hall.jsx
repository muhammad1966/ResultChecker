import React, { useState, useEffect } from "react";
import "./hall.css";
import data from "../../data.js";
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

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

const displayCurrentItemData = (id) => {
  if (id === null) return null;
  const Data = {
    labels: ["I.Diseases", "Neoplasia", "Cardiovascular", "Gastrointestinal", "Endocrinology"],
    datasets: [
      {
        label: "Results",
        data: data[id]?.scores || [],
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
      legend: { display: true, position: "bottom" },
      title: { display: true, text: "Results in the last five committees" },
    },
  };

  return <Line data={Data} options={options} />;
};

export const Hall = () => {
  const [selected, setSelected] = useState(null);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1380); // Check screen width
    };
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize); // Update on window resize

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="hall-div">
      <div className="name-div">
        {data.map((item) => (
          <React.Fragment key={item.id}>
            <div
              className="item-div"
              onClick={() => setSelected(selected === item.id ? null : item.id)} // Toggle visibility
            >
              {item.name}
            </div>

            {/* Only render accordion, for smaller screens */}
            {isSmallScreen && (
              <div className={`mob-visual ${selected === item.id ? "mob-visual-show" : ""}`}>
                {selected === item.id && displayCurrentItemData(item.id)}
              </div>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Chart for Larger Screens */}
      {!isSmallScreen && (
        <div className="hall-visual">{selected !== null && displayCurrentItemData(selected)}</div>
      )}
    </div>
  );
};

import { useEffect, useState, useRef } from "react";
import VehiclesTab from "../../components/VehiclesTab";
import TripsTab from "../../components/TripsTab";

import "./Dashboard.css";

const Dashboard = () => {
    const [currentTab, setCurrentTab] = useState(1);
    const underlineRef = useRef(null);

    const onChangeTab = (index, x) => {
        setCurrentTab(index);
        underlineRef.current.style.left = `${x}px`;
    };

    return (
        <div className='dashboard'>
            <div className='container'>
                <ul>
                    <li
                        className={`${currentTab === 1 ? "active" : ""}`}
                        onClick={(e) => onChangeTab(1, e.target.offsetLeft)}
                    >
                        Vehicles
                    </li>
                    <li
                        className={`${currentTab === 2 ? "active" : ""}`}
                        onClick={(e) => onChangeTab(2, e.target.offsetLeft)}
                    >
                        Trips
                    </li>
                    <div className='underline' ref={underlineRef}></div>
                </ul>
                <div className='content'>
                    {currentTab === 1 ? <VehiclesTab /> : <TripsTab />}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;

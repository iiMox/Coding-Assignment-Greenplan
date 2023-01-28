import Trips from "../../utils/trips.json";
import Table from "../Table";

import "./TripsTab.css";

const TripsTab = () => {
    const tableHead = ["Name", "Delivery Count", "Date", "Status"];
    return (
        <div className='trips-tab'>
            <Table head={tableHead} body={Trips} type='trip' />
        </div>
    );
};

export default TripsTab;

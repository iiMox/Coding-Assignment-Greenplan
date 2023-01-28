import Vehicles from "../../utils/vehicles.json";
import Table from "../Table";

import "./VehiclesTab.css";

const VehiclesTab = () => {
    const tableHead = ["Name", "Length", "Width", "Height", "Cost"];
    return (
        <div className='vehicles-tab'>
            <Table head={tableHead} body={Vehicles} type='vehicles' />
        </div>
    );
};

export default VehiclesTab;

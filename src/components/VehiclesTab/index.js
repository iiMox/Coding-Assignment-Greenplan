import Vehicles from "../../utils/vehicles.json";
import Table from "../Table";

import "./VehiclesTab.css";

const VehiclesTab = () => {
    const tableHead = [
        "Name",
        "Length (cm)",
        "Width (cm)",
        "Height (cm)",
        "Cost (Euros / Hour)",
    ];
    return (
        <div className='vehicles-tab'>
            <Table head={tableHead} body={Vehicles} type='vehicles' />
        </div>
    );
};

export default VehiclesTab;

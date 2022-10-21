import React from "react";
import NewUnit from "./NewUnit";
import ListUnits from "./ListUnits";
import NewUnitConversion from "./NewUnitConversion";
import axios from "axios";

const Units = () => {

    const [units, setUnits] = React.useState([])

    const [newUnitConversion, setNewUnitConversion] = React.useState({
        unitId : null,
        toggle : false
    })

    const handleAddUnitConversion = (unitId) => {
        setNewUnitConversion({
            ...newUnitConversion,
            unitId: unitId
        })
    }
    console.log(newUnitConversion)

    const updateNewUnitConversion = () => {
        setNewUnitConversion({
            ...newUnitConversion,
            toggle: !newUnitConversion.toggle
        })
    }

    React.useEffect(() => {
        getUnits()
    }, [newUnitConversion.toggle])

    const getUnits = () => {
        axios
            .get("https://127.0.0.1:8000/api/units")
            .then((response)=>{
                setUnits(response.data["hydra:member"])
            })
    }

    const updateUnits = (unit) => {
        setUnits([...units, unit])
    }

    return (
        <div className="units">
            <ListUnits units={units} updateUnits={updateUnits} handleAddUnitConversion={handleAddUnitConversion} newUnitConversion={newUnitConversion}/>
            <NewUnit updateUnits={updateUnits}/>
            {newUnitConversion.unitId && <NewUnitConversion unitId={newUnitConversion.unitId} updateNewUnitConversion={updateNewUnitConversion}/>}
        </div>
    )

}

export default Units
import React from "react";
import axios from "axios";

const NewUnitConversion = (props) => {

    const [unitConversion, setUnitConversion] = React.useState({
        unit: "",
        symbol : "",
        coefficient : ""
    })

    const changeUnitConversion = (event) => {
        const {name, value, type} = event.target
        setUnitConversion({
            ...unitConversion,
            unit : "/api/units/" + props.unitId,
            [name] : type === "text" ? value : event.target.valueAsNumber
        })
    }

    async function addUnitConversionToAPI(event) {
        event.preventDefault()
        axios
            .post("https://127.0.0.1:8000/api/unit_conversions", unitConversion)
            .then(()=>{console.log("ajouté")})
        setUnitConversion({
            unit: "",
            symbol : "",
            coefficient : ""
        })
        props.updateNewUnitConversion()
    }

    return (
        <form onSubmit={addUnitConversionToAPI}>
            <input
                type="text"
                placeholder="symbole"
                name="symbol"
                value={unitConversion.symbol}
                onChange={changeUnitConversion}
            />
            <label htmlFor="coefficient">Coefficient</label>
            <input
                type="number"
                step="0.1"
                id="coefficient"
                name="coefficient"
                value={unitConversion.coefficient}
                onChange={changeUnitConversion}
            />
            <button>Add</button>
        </form>
    )
}

export default NewUnitConversion
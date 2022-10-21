import React from "react";
import './index.css'

const NewUnit = (props) => {

    // const [units, setUnits] = React.useState([])
    const [newUnit, setNewUnit] = React.useState({
        "name" : ""
    })
    // const [newUnitConversion, setNewUnitConversion] = React.useState({
    //     unitId : null,
    //     toggle : false
    // })

    // React.useEffect(() => {
    //     getUnits()
    // }, [])

    // async function getUnits() {
    //     const res = await fetch("https://127.0.0.1:8000/api/units")
    //     const data = await res.json()
    //     setUnits(data["hydra:member"])
    // }

    function handleChange(event) {
        setNewUnit(prevName=> {
            return {
                ...prevName,
                "name" : event.target.value
            }
        })
    }

    async function addUnitToAPI(event) {
        event.preventDefault()
        const res = await fetch("https://127.0.0.1:8000/api/units", {
            method : "POST",
            headers : {
                "Content-type" : 'application/json'
            },
            body : JSON.stringify(newUnit)
        })
        const data = await res.json()
        console.log("ran")
        setNewUnit({"name": ""})
        props.updateUnits(data)
    }

    // const handleAddUnitConversion = (unitId) => {
    //     setNewUnitConversion({
    //         ...newUnitConversion,
    //         unitId: unitId
    //     })
    // }

    return (
        <div>
            <form className="form" onSubmit={addUnitToAPI}>
                <h4>Nouvelle unité</h4>
                <input
                    type="text"
                    name="name"
                    value={newUnit.name}
                    onChange={handleChange}
                />
                <button>Ajouter</button>
            </form>
            <div>
                {/*<h4>Toutes les unités</h4>*/}
                {/*<table className="unit-table">*/}
                {/*    {units.map((unit)=>*/}
                {/*        <>*/}
                {/*            <tr>*/}
                {/*                <td rowSpan="2">{unit.name}</td>*/}
                {/*                <td>symbole</td>*/}
                {/*                {unit.unitConversions.map((unitConversion)=> {*/}
                {/*                    const index = unitConversion.symbol.indexOf("^")*/}
                {/*                    return index >= 0 ?*/}
                {/*                        (<td>*/}
                {/*                            <var>{unitConversion.symbol.slice(0, index)}*/}
                {/*                                <sup>{unitConversion.symbol.slice(index+1)}</sup>*/}
                {/*                            </var>*/}

                {/*                        </td>)*/}
                {/*                        :*/}
                {/*                        (<td>{unitConversion.symbol}</td>)*/}
                {/*                }*/}
                {/*                )}*/}
                {/*                <td className="button-add" rowSpan="2"><button onClick={()=>handleAddUnitConversion(unit.id)}>+</button></td>*/}
                {/*            </tr>*/}
                {/*            <tr>*/}
                {/*                <td>coefficient</td>*/}
                {/*                {unit.unitConversions.map((unitConversion)=><td>{unitConversion.coefficient}</td>)}*/}
                {/*            </tr>*/}
                {/*        </>*/}
                {/*    )}*/}
                {/*</table>*/}
                {/*{newUnitConversion.unitId && <NewUnitConversion unitId={newUnitConversion.unitId}/>}*/}

            </div>
        </div>
    )
}

export default NewUnit
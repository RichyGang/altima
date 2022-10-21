import React from "react";

const ListUnits = (props) => {

    return (
        <div>
            <table className="unit-table">
                <tbody>
                    {props.units.map((unit)=>
                        <>
                            <tr>
                                <td rowSpan="2">{unit.name}</td>
                                <td>symbole</td>
                                {unit.unitConversions.map((unitConversion)=> {
                                        const index = unitConversion.symbol.indexOf("^")
                                        return index >= 0 ?
                                            (<td>
                                                <var>{unitConversion.symbol.slice(0, index)}
                                                    <sup>{unitConversion.symbol.slice(index+1)}</sup>
                                                </var>
                                            </td>)
                                            :
                                            (<td>{unitConversion.symbol}</td>)
                                    }
                                )}
                                <td className="button-add" rowSpan="2"><button onClick={()=>props.handleAddUnitConversion(unit.id)}>+</button></td>
                            </tr>
                            <tr>
                                <td>coefficient</td>
                                {unit.unitConversions.map((unitConversion)=><td>{unitConversion.coefficient}</td>)}
                            </tr>
                        </>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default ListUnits
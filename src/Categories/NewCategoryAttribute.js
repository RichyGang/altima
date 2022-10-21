import React from "react";
import axios from "axios";
import './index.css'

const NewCategoryAttribute = (props) => {

    //STATES
    const [allUnits, setAllUnits] = React.useState([])
    const [newCategoryAttribute, setNewCategoryAttribute] = React.useState({
        name: "",
        unit: ""
    })

    const unitSelected = newCategoryAttribute.unit ? allUnits.find((unit)=> unit['@id'] === newCategoryAttribute.unit).name : null

    React.useEffect(()=>{
        getAllUnits()
    }, [])

    const getAllUnits = () => {
        axios
            .get("https://127.0.0.1:8000/api/units")
            .then((response)=> {
                setAllUnits(response.data["hydra:member"])
            })
    }

    //HANDLERS
    const newAttributeHandler = (event) => {
        const {type, name, value} = event.target
        setNewCategoryAttribute({...newCategoryAttribute,
                [name]: type === "text" ? value : "/api/units/" + value,
                categories : ["/api/categories/" + props.category.id]
        })
    }

    //UPDATE API
    const addNewAttributeAPI = (event) => {
        event.preventDefault()
        axios
            .post("https://127.0.0.1:8000/api/category_attributes", newCategoryAttribute)
            .then((response)=>{
                getCategory(props.category.id)
                setNewCategoryAttribute({name: "", unit: null})
            })
    }

    const getCategory = (id) => {
        console.log(id)
        axios.get("https://127.0.0.1:8000/api/categories/" + id).then((response)=>{
            props.updateChosenCategory(response.data)
        })
    }

    return (
        <div className="newCategoryAttribute">
            <p>Nouvel attribut</p>
            <form name="newCategoryAttribute" onSubmit={addNewAttributeAPI}>
                <input
                    type="text"
                    name="name"
                    value={newCategoryAttribute.name}
                    onChange={newAttributeHandler}
                />
                <label htmlFor="unit">Unité</label>
                <select
                    name="unit"
                    id="unit"
                    value={newCategoryAttribute.unit}
                    onChange={newAttributeHandler}
                >
                    <option value="">{unitSelected}</option>
                    {allUnits.map((unit)=>
                        <option key={unit.id} value={unit.id}>{unit.name}</option>
                    )}
                </select>
                <button>Ajouter</button>
            </form>

        </div>
    )
}

export default NewCategoryAttribute
import React from "react";
import './index.css'
import axios from "axios";

const CategoryAttributes = (props) => {
    
    const deleteCategoryAttribute = (id) => {
        const array = props.category.categoryAttributes.filter((attribute) => attribute.id !== id)
        const array2 = array.map((a)=> "/api/category_attributes/" + a.id )
        console.log(array2)
        axios
            .put("https://127.0.0.1:8000/api/categories/" + props.category.id, {
                categoryAttributes: array2
            })
            .then((response)=> props.updateChosenCategory(response.data))
    }
    
    return (
        <>
            {/*<h4>Attributs</h4>*/}
            {props.category.categoryAttributes.map((attribute)=>
                <div className="categoryAttribute">
                    <div>
                        <p key={attribute.id} className="categoryAttributeText">
                            {attribute.name} {attribute.unit ? "[" + attribute.unit.unitConversions[0].symbol + "]" : null}
                        </p>
                    </div>
                    <div>
                        <button onClick={()=>deleteCategoryAttribute(attribute.id)}>X</button>
                    </div>
                </div>
            )}
        </>
    )
}

export default CategoryAttributes
import React from "react";
import ChoiceCategory from "../Categories/ChoiceCategory";
import "./index.css"
import NewResourceAttributes from "./NewResourceAttributes";
import AddPictures from "./AddPictures";

const NewResource = () => {

    const [chosenCategory, setChosenCategory] = React.useState(null)
    const [newResource, setNewResource] = React.useState()

    const chosenCategoryHandler = (category) => {
        if (category.target) {
            setChosenCategory(null)
        } else {
            setChosenCategory(category)
            setNewResource({category : `/api/categories/${category.id}`})
        }
    }

    const handleChangeNewResource = (event) => {
        const {name, value, type} = event.target
        setNewResource({
            ...newResource,
            category: chosenCategory,
            [name] : value
        })
    }

    console.log(newResource)

    const handleSubmit = (event) => {
      event.preventDefault()
    }

    return(
        <div className="newResource">
            <ChoiceCategory chosenCategory={chosenCategory} chosenCategoryHandler={chosenCategoryHandler}/>
            <NewResourceAttributes chosenCategory={chosenCategory} handleChangeNewResource={handleChangeNewResource}/>
            <AddPictures/>
        </div>

        // <div className="newResource">
        //     <h3>Nouvelle ressource</h3>
        //     <form onSubmit={handleSubmit} className="form">
        //         <button>Ajouter</button>
        //     </form>
        // </div>
    )
}

export default NewResource
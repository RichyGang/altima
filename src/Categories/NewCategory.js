import React from "react";
import axios from "axios";

const NewCategory = (props) => {

    const [newCategory, setNewCategory] = React.useState({name : ""})

    React.useEffect(()=>{
        props.categoryParent && setNewCategory({
            ...newCategory,
            categoryParent: "/api/categories/" + props.categoryParent.id})
    }, [props.categoryParent])

    function putName(event) {
        setNewCategory({
                ...newCategory,
                "name": event.target.value
            })
    }

    async function addCategoryToAPI(event) {
        event.preventDefault()
        axios.post("https://127.0.0.1:8000/api/categories", newCategory).then((response)=>{
            // props.updateAllCategories(response.data)
            props.updateChosenCategory(response.data)
            setNewCategory({name : "", categoryParent : ""})})
    }

    return (
        <div className="newCategory">
            <h4>Nouvelle catégorie</h4>
            <form onSubmit={addCategoryToAPI}>
                <input
                    type="text"
                    name="name"
                    value={newCategory.name}
                    onChange={putName}
                    placeholder="nom de la nouvelle catégorie"
                />
                <button>Ajouter</button>
            </form>
        </div>
    )
}

export default NewCategory
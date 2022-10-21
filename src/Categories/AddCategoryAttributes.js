import React from "react";
import axios from "axios";
import GetCategoryChildren from "../Getters/GetCategoryChildren";
import GetCategoryPath from "../Getters/GetCategoryPath";


const AddCategoryAttributes = (props) => {

    const [categoryAttributesAdded, setCategoryAttributesAdded] = React.useState()

    // const [allCategories, setAllCategories] = React.useState()

    const [categoryChildren, setCategoryChildren] = React.useState()

    // Array qui regroupe toutes les categoryAttributes qui ne sont pas associés à la category selectionnée
    const restCategoryAttributes = props.allCategoryAttributes.filter(
        (attribute) => props.category.categoryAttributes.filter((a) => a.id === attribute.id).length === 0 && attribute.name
    )

    const categoryAttributesHandler = (event) => {
        setCategoryAttributesAdded(
            [...event.target.options].filter(o => o.selected).map(o =>
            "/api/category_attributes/" + o.value
        ))
    }

    const updateCategories = (event) => {
        event.preventDefault()
        // On récupères les adresses des categoryAttributes et non les objets, pour pouvoir les ajouter à la categorie
        // const oldCategoryAttributes = props.category.categoryAttributes.map((attribute)=> attribute["@id"])
        // axios
        //     .put("https://127.0.0.1:8000/api/categories/" + props.category.id ,{
        //         categoryAttributes : [...oldCategoryAttributes, ...categoryAttributesAdded]
        //     })
        //     .then((response)=>{
        //         props.updateChosenCategory(response.data)
        //     })
        // categoryChildren.map(category => {
        // })
        // AJOUT A TOUTES LES CATEGORIES ENFANTS LES ATTRIBUTS QU'ON VIENT D'AJOUTER
        props.allCategories && props.allCategories.map(category => {
            let path = GetCategoryPath({category: category})
            if (path.find(categoryLink => categoryLink.id === props.category.id)){
                const oldCategoryAttributes = category.categoryAttributes.map((attribute)=> attribute["@id"])
                axios
                    .put("https://127.0.0.1:8000/api/categories/" + category.id, {
                        categoryAttributes : [...oldCategoryAttributes, ...categoryAttributesAdded]
                    })
                    .then(response => {
                        console.log(response.data)
                        category.id === props.category.id && props.updateChosenCategory(response.data)
                    })
            }
        }) && props.getAllCategories()


    }

    // pour chaque catégorie, si dans le path il y a la catégorie selectionnée, alors on lui ajoute les attributs
    // allCategories.map(
    //     category => {
    //         console.log()
    //     }
    // )

    // React.useEffect(()=>{
    //     getAllCategories()
    // }, [])

    React.useEffect(()=>{
        setCategoryChildren(
            GetCategoryChildren({
                category: props.category,
                allCategories: props.allCategories
            })
        )
    }, [props.allCategories, props.category])

    // const getAllCategories = () => {
    //     axios
    //         .get("https://127.0.0.1:8000/api/categories")
    //         .then(response => setAllCategories(response.data['hydra:member']))
    // }
    // A L'AJOUT DES ATTRIBUTS A LA CATEGORIE SELECTIONNEE, AJOUTER LES ATTRIBUTS A TOUTES LES CATEGORIES ENFANTS.

    return (
        <div className="addCategoryAttributes">
            {/*{allCategories &&  <GetCategoryChildren allCategories={allCategories} category={props.category} categoryChildrenSetter={setCategoryChildren}/>}*/}
            Ajouter des attributs
            <form name="addCategoryAttibutes" onSubmit={updateCategories}>
                {/*<label htmlFor="categoryAttributes">Ou choisir parmis les attributs existants</label>*/}
                <select
                    multiple
                    name="categoryAttributes"
                    id="categoryAttributes"
                    onChange={categoryAttributesHandler}
                >
                    {/*<option value="-">-</option>*/}
                    {restCategoryAttributes.map((attribute)=>
                        <option key={attribute.id} value={attribute.id}>{attribute.name}</option>
                    )}
                </select>
                <button className="button">Ajouter</button>
            </form>
        </div>
    )
}

export default AddCategoryAttributes
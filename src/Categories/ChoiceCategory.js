import React from "react";
import './index.css'
import axios from "axios";
import GetCategoryPath from "../Getters/GetCategoryPath";

const ChoiceCategory = (props) => {

    // const [allCategories, setAllCategories] = React.useState()
    const [categoryChildren, setCategoryChildren] = React.useState([])
    const [path, setPath] = React.useState([])
    // const [categoryParents, setCategoryParents] = React.useState()

    // React.useEffect(()=>{
    //     getAllCategories()
    // }, [])

    // const getAllCategories = () => {
    //     axios.get("https://127.0.0.1:8000/api/categories")
    //         .then((response)=> {
    //             setAllCategories(response.data["hydra:member"])
    //             setCategoryParents(response.data["hydra:member"].filter((category)=>category.categoryParent === null))
    //         })
    // }

    React.useEffect(()=>{
        if (props.chosenCategory) {
            setCategoryChildren(props.allCategories.filter((category)=> category.categoryParent && category.categoryParent.name === props.chosenCategory.name))
            setPath(GetCategoryPath({category: props.chosenCategory}))
            // setPath(getPath(props.chosenCategory))
            // quand on ajoute une category, si on ne la trouve pas dans allCategories existants alors on reload allCategories
            // !props.allCategories.find(category => category.name === props.chosenCategory.name) && getAllCategories()
        }
        else {
            setPath([])
        }
    },[props.chosenCategory])

    // function getPath(category) {
    //     let newPath = [category]
    //     while(category.categoryParent){
    //         newPath = [category.categoryParent, ...newPath]
    //         category=category.categoryParent
    //     }
    //     return newPath
    // }

    return (
        <div className="choiceCategory">
            <div>
                <button onClick={props.chosenCategoryHandler} className="button-categories">Catégories</button>
                {path.map(category => <button key={category.id} onClick={()=>props.chosenCategoryHandler(category)}>{category.name}</button>)}
            </div>
            <div className="categories">
                {
                    // !props.chosenCategory && categoryParents && categoryParents.map(category =>
                    !props.chosenCategory && props.allCategories && props.allCategories.filter(category => category.categoryParent === null).map(category =>
                            <input
                            type="button"
                            key={category.id}
                            name={category.name}
                            value={category.name}
                            onClick={()=>props.chosenCategoryHandler(category)}/>
                    )}
            </div>
            <div className="categories">
                {
                    props.chosenCategory && categoryChildren.map(category =>
                        <input
                            type="button"
                            key={category.id}
                            name={category.name}
                            value={category.name}
                            onClick={()=>props.chosenCategoryHandler(category)}/>
                    )
                }
            </div>
        </div>
    )
}

export default ChoiceCategory
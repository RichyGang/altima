import React from "react";
import axios from "axios";
import CategoryAttributes from "./CategoryAttributes";
import ChoiceCategory from "./ChoiceCategory";
import NewCategoryAttribute from "./NewCategoryAttribute";
import AddCategoryAttributes from "./AddCategoryAttributes";
import NewCategory from "./NewCategory";
import './index.css'

const Categories = () => {

    const [chosenCategory, setChosenCategory] = React.useState(null)
    const [allCategoryAttributes, setAllCategoryAttributes] = React.useState([])
    const [allCategories, setAllCategories] = React.useState()

    React.useEffect(()=>{
        getAllCategories()
        getAllCategoryAttributes()
    }, [])

    const getAllCategories = () => {
        axios.get("https://127.0.0.1:8000/api/categories")
            .then((response)=> {
                setAllCategories(response.data["hydra:member"])
            })
    }

    const getAllCategoryAttributes = () => {
        axios.get("https://127.0.0.1:8000/api/category_attributes")
            .then((response)=> {
                setAllCategoryAttributes(response.data["hydra:member"])
            })
    }

    const chosenCategoryHandler = (category) => {
        category.target ? setChosenCategory(null) : setChosenCategory(category)
    }

    const updateChosenCategory = (category) => {
        setChosenCategory(category)
    }

    return (
        <div className="categories">
            <div className="choiceCategoryContainer">
                <ChoiceCategory
                    chosenCategory={chosenCategory}
                    chosenCategoryHandler={chosenCategoryHandler}
                    allCategories={allCategories}
                    getAllCategories={getAllCategories}
                />
                <NewCategory categoryParent={chosenCategory} updateChosenCategory={updateChosenCategory} />
            </div>
            <div className="categoryAttributesContainer">
                {chosenCategory &&
                        <CategoryAttributes category={chosenCategory} updateChosenCategory={updateChosenCategory}/>
                }
            </div>
            <div className="moreCategoryAttributeContainer">
                {chosenCategory &&
                    <>
                        <AddCategoryAttributes
                            category={chosenCategory}
                            allCategories={allCategories}
                            allCategoryAttributes={allCategoryAttributes}
                            updateChosenCategory={updateChosenCategory}
                            getAllCategories={getAllCategories}
                        />
                        <NewCategoryAttribute category={chosenCategory} updateChosenCategory={updateChosenCategory}/>
                    </>
                }
            </div>
        </div>
    )
}

export default Categories
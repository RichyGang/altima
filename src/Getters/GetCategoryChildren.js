// ENTREE : CATEGORY - OBJECT, ALLCATEGORIES - ARRAY OBJECTS
// SORTIE : CATEGORY CHILDREN - ARRAY OBJECTS

const GetCategoryChildren = (props) => {

    return (
        props.allCategories && props.allCategories.filter(category => category.categoryParent && category.categoryParent.id === props.category.id)
)

};

export default GetCategoryChildren;

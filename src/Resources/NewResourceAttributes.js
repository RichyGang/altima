import React from 'react';
import './index.css'

const NewResourceAttributes = (props) => {

    return (
        <div className="newResourceAttributes">
            {props.chosenCategory && props.chosenCategory.categoryAttributes && props.chosenCategory.categoryAttributes.map(attribute =>
                <input
                    type="text"
                    name={attribute.name}
                    placeholder={attribute.name}
                    onChange={props.handleChangeNewResource}
                />
            )}
        </div>
    );
};

export default NewResourceAttributes;

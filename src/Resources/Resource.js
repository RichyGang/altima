import React from "react";
import {useParams, useOutletContext} from "react-router-dom";

const Resource = () => {
    const {id} = useParams()
    const obj = useOutletContext()
    return(
        <div>
            Ressource {id}
            <br/>
            Hello {obj.hello}
        </div>
    )
}

export default Resource
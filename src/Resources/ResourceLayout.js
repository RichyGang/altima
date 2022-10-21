import React from "react";
import {Link, Outlet} from "react-router-dom";

const ResourceLayout = () => {
    return(
        <>
            <Link to="/resources/1">Ressource 1</Link>
            <Link to="/resources/2">Ressource 2</Link>
            <Link to="/resources/new">Ajouter</Link>
            <Outlet context={{hello: "World"}}/>
        </>
    )
}

export default ResourceLayout
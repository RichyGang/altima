import React from 'react';
import {Route, Routes} from "react-router-dom";
import ResourceLayout from "./ResourceLayout";
import Resources from "./index";
import Resource from "./Resource";
import NewResource from "./NewResource";

const ResourceRoutes = () => {
    return (
        <Routes>
            <Route element={<ResourceLayout/>}>
                <Route index element={<Resources/>}/>
                <Route path=":id" element={<Resource/>}/>
                <Route path="new" element={<NewResource/>}/>
            </Route>
        </Routes>
    );
};

export default ResourceRoutes;

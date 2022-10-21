import React from 'react';
import {useNavigate} from "react-router-dom"

const NotFound = () => {

    const navigate = useNavigate()

    React.useEffect(()=>{
        setTimeout(()=>{
            // navigate("/")
            // (-1) est censé renvoyer la derniere page consultée, -2 ya deux pages etc
            navigate(-1)
        }, 2000)
    }, [])

    return (
        <h1>Not found</h1>
    );
};

export default NotFound;
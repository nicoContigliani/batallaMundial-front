import Reac, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import readToken from '../../services/tokens/reedToken'

const About = () => {
    const navigate = useNavigate();
    const dataItemLocalStorage = readToken()
    console.log("🚀 ~ file: Home.jsx ~ line 9 ~ Home ~ dataItemLocalStorage", dataItemLocalStorage)
    useEffect(() => {
        if (

            !(dataItemLocalStorage?.isAuthenticated)
        ) {
            navigate('/auth')

        }


    }, [dataItemLocalStorage])
    return (
        <div>About</div>
    )
}

export default About
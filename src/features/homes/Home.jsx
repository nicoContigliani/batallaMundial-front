import Reac, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import readToken from '../../services/tokens/reedToken'
import './home.css'
import { Puff } from 'react-loader-spinner'
import Box from './Box';
import Avatar from './Avatar';


const Home = () => {
    const navigate = useNavigate();
    const dataItemLocalStorage = readToken()
    console.log("🚀 ~ file: Home.jsx ~ line 12 ~ Home ~ dataItemLocalStorage", dataItemLocalStorage)
    const [data, setData] = useState([{
        avatar: "https://drive.google.com/thumbnail?id=1fpl6FOG7Gi-X4oHH-dAm3b0UGDYJE9Jr",
        createdAt: "2022-10-27T17:43:14.935Z",
        email: "nico.contigliani@gmail.com",
        id: 2,
        idRole: 1,
        nickname: "nico",
        ranking: 2,
        status: "golden",
        updatedAt: "2022-10-27T17:43:14.936Z"
    }])


    useEffect(() => {

        // if (

        //     !(dataItemLocalStorage?.isAuthenticated)
        // ) {
        //      navigate('/auth')

        // }


        setTimeout(() => {

            if (dataItemLocalStorage?.rest[0] == null || dataItemLocalStorage?.rest[0] == undefined) {
                console.log("salio null")
                window.location.reload(false);

            }



        }, 1000);



        setData(dataItemLocalStorage?.rest[0])

    }, [])

    console.log("🚀 ~ file: Home.jsx ~ line 10 ~ Home ~ data", data)


    return (
        <>
            <div className='perfil'>
                <h1>
                    Mi perfil
                </h1>
                <div className='todo'>
                    <div className="circle">
                        {/* <Avatar data={data} /> */}
                        <img className="mr-3" src={data.avatar} alt="" />
                    </div>
                    <div className="box">
                        <br />


                        <Box data={data} />


                    </div>

                </div>

            </div>
        </>
    )
}

export default Home

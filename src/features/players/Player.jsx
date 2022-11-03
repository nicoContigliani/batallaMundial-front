import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getUserAsync, selectUser } from '../users/userSlice'
import Boxs from '../Utils/Boxs/Boxs'
import './Player.css'


const Player = () => {
    const dispatch = useDispatch();
    const users = useSelector(selectUser);

    const [data, setData] = useState()

    const handleInputChange = (e) => {
        e.preventDefault()
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }
    const send = (e) => {

        e.preventDefault()
        console.log(data)
        dispatch(getUserAsync(data))
    }

    return (
        <div className='player'>

            <form onSubmit={send}>
                <input name="datas" type="text" className="input" id="exampleInputEmail1" aria-describedby="busqueda" placeholder="Ingrese Búsqueda"
                    onChange={handleInputChange} required />
            </form>

            <Boxs data="player" />
            <button type="submit" className="btns btn btn-primary" onClick={send} > Enviar</button>

        </div>
    )
}

export default Player
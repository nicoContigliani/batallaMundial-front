import React from 'react'
import Avatar1 from '../../images/avatar1.png'

const Avatar = (data) => {
    console.log("🚀 ~ file: Avatar.jsx ~ line 4 ~ Avatar ~ avatar", data)

    const imagen = data?.data


    return (
        // <img className="img-circle" src={imagen.avatar} alt="" />
        <img className="img-circle" src={Avatar1} alt="" />

    );
}

export default Avatar
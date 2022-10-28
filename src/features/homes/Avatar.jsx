import React from 'react'

const Avatar = (data) => {
    console.log("🚀 ~ file: Avatar.jsx ~ line 4 ~ Avatar ~ avatar", data)

    const imagen = data?.data


    return (
        <img className="mr-3" src={imagen.avatar} alt="" />
    );
}

export default Avatar
import React, { useEffect, useState } from 'react'
import Avatar1 from '../../images/avatar1.png'


const Avatar = (data) => {

    const imagen = data?.data?.avatar
    const [avatar, setAvatar] = useState()
    
    useEffect(() => {
        setAvatar(imagen)
    }, [data?.data])
    



    return (
        // <img className="img-circle" src={imagen.avatar} alt="" />

        // <img className="img-circle" src='https://img1.freepng.es/20180401/gqw/kisspng-aang-azula-katara-appa-iroh-aang-5ac18480525603.4654042715226318083373.jpg' alt="" />
        <div>
              <img className="rounded-circle" src={avatar} alt="" />
      </div>
    );
}

export default Avatar
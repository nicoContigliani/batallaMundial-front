import React from 'react'
import './Boxs.css'
import Card from '../cards/Card'
import { useSelector } from 'react-redux';
import { selectUser } from '../../users/userSlice';
import Lists from '../../../services/paginations/lists/Lists';
const Boxs = (data) => {
console.log("🚀 ~ file: Boxs.jsx ~ line 8 ~ Boxs ~ data", data)

    const logins = useSelector(selectUser);

    return (
        <div className='boxs'>
            
            <Lists data={logins}  />
        </div>
    )
}

export default Boxs
import React from 'react'
import './Boxs.css'
import Card from '../cards/Card'
import { useSelector } from 'react-redux';
import { selectUser } from '../../users/userSlice';
import Lists from '../../../services/paginations/lists/Lists';
const Boxs = () => {

    const logins = useSelector(selectUser);

    return (
        <div className='boxs'>
            <br />
            <Lists data={logins}  />









        </div>
    )
}

export default Boxs
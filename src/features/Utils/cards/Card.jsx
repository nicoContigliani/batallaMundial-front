import React from 'react'
import Avatar from '../../../images/avatar1.png'
import './Card.css'
const Card = ({ data }) => {
    console.log("🚀 ~ file: Card.jsx ~ line 5 ~ Card ~ data", data)
    return (
        <div className='cards'>

            <img src={Avatar} class="rounded" alt="" srcset="" />
            <div class="card-body">
                <strong>
                    Nickname:{data.nickname}<br />
                    Ranking:{data.ranking}<br />
                    Status:{data.status}
                </strong>
            </div>





        </div>
    )
}

export default Card
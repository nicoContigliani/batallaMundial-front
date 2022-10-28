import React from 'react'

const Box = (data) => {
    const dataBox = data?.data
    return (
        <div>
            Nickname:{dataBox?.nickname}
            <br />
            Email:{dataBox?.email}
            <br />
            Status:{dataBox?.status}
            <br />
            Ranking:{dataBox?.ranking}
            <br />

        </div>
    )
}

export default Box
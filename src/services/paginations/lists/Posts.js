import React, { useEffect, useState } from 'react';
import Card from '../../../features/Utils/cards/Card';
import './post.css'

const Posts = ({ posts, loading }) => {
  const [data, setData] = useState([])
  console.log("🚀 ~ file: Posts.js ~ line 4 ~ Posts ~ posts", posts)
  if (loading) {
    return <h2>Loading...</h2>;
  }


  return (
    < div className="center">

      {/* <ul className='list-group mb-4'> */}
      <div className='d-flex flex-wrap'>

        {posts.map(post => (
          <div key={post.id} >

            <Card data={post} />
          </div>
        ))}
      </div>

    </div>
  );
};

export default Posts;

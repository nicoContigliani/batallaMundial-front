import React, { useEffect, useState } from 'react'
import Posts from './Posts.js'
import Pagination from './Pagination'

const Lists = (data) => {
    console.log("🚀 ~ file: Lists.jsx ~ line 6 ~ Lists ~ data", data.data.user)
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);


    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            setPosts(data.data.user);
            setLoading(false);
        };

        fetchPosts();
    }, [data?.data?.user]);




    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);



    return (
        <div >

            <Posts posts={currentPosts} loading={loading} />
            <Pagination
                postsPerPage={postsPerPage}
                totalPosts={posts.length}
                paginate={paginate}
            />


        </div>
    )
}

export default Lists
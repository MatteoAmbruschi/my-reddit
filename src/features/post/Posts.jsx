import styles from './post.module.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function Posts({allPosts, postSingle}){
    const [clickPost, setClickPost] = useState([])    

    function handleClickPost(index){
        setClickPost(index);
        postSingle(index)
    }

     return (
        <div className={styles.postContainer}>
            {allPosts.map((post, index) => (
                <Link className={styles.container} style={{textDecoration: 'none'}} to='/post' index={allPosts.id} onClick={() => handleClickPost(post.id)} key={post.id}>
                    <div><h1>{post.title}</h1></div>
                    <div><p>{post.text}</p></div>
                </Link>
            ))}
        </div>
    )
}

export default Posts
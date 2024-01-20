import styles from './post.module.css'
import { Link } from 'react-router-dom'

function Posts(){
    const allPosts = [
        {
            title: 'prova 1',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, quae.'
        },
        {
            title: 'prova 2',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, quae.'
        },
        {
            title: 'prova 3',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, quae.'
        },
        {
            title: 'prova 4',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, quae.'
        },

    ]

     return (
        <div className={styles.postContainer}>
            {allPosts.map((post) => (
                <Link className={styles.container} style={{textDecoration: 'none'}} to='/post'>
                    <div><h1>{post.title}</h1></div>
                    <div><p>{post.text}</p></div>
                </Link>
            ))}
        </div>
    )
}

export default Posts
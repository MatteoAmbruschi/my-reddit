import SideBar from "../sideBar/SideBar"
import styles from './post.module.css'

function Post({postSingle}){

    return (
        <div className={styles.singlePostContainer}>
            <SideBar />
            <div className={styles.postContainer}>
                <div style={{minHeight: '300px'}} className={`${styles.container}`}>{console.log(postSingle.title)}</div>
            </div>
        </div>
    )
}

export default Post
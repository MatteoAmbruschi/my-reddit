import SideBar from "../sideBar/SideBar"
import styles from './post.module.css'

function Post(){
    return (
        <div style={{display: 'flex'}}>
            <SideBar />
            <div className={`${styles.container} ${styles.singlePost}`}>CIAOO</div>
        </div>
    )
}

export default Post
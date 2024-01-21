import SideBar from './sideBar/SideBar'
import Posts from './post/Posts'

const HomePage = ({allPosts, postSingle}) => {

    return (
            <div style={{display: 'flex'}}>
                <SideBar />
                <Posts allPosts={allPosts} postSingle={postSingle} />
            </div>
    )
}

export default HomePage
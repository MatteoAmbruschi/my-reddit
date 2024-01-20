import Menu from './menu/Menu'
import SideBar from './sideBar/SideBar'
import Posts from './post/Posts'

const HomePage = () => {
    return (
            <div style={{display: 'flex'}}>
                <SideBar />
                <Posts />
            </div>
    )
}

export default HomePage
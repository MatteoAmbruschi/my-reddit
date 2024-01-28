import { Link, useNavigate } from 'react-router-dom'
import styles from './menu.module.css'
import { Outlet } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'

import { resetPostSingle } from '../post/postsSlice'
import { cleaner } from '../sideBar/slideBarSlice'

const Menu = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const itemClick = useSelector((state) => state.slideBar.itemClicked)

    const placeholder = `Search Post in ${itemClick ? itemClick.title : 'Home'}`

    const handleToHome = (e) => {
        e.preventDefault()
        dispatch(resetPostSingle())
        dispatch(cleaner())
        navigate('/')
    }

    return (
        <>
        <div className={styles.menuBar}>
            <nav className={styles.container}>
                <Link to={"/"} className={styles.singleLink} onClick={handleToHome}>
                    <img className={styles.imgLogo} src='reddit.png' alt="reddit logo" />
                </Link>
                <div className={styles.singleLink}>
                    <input className={styles.inputSearch} type="text" placeholder={placeholder} />
                 </div>
            </nav>
        </div>
        <Outlet />
        </>
    )
}

export default Menu
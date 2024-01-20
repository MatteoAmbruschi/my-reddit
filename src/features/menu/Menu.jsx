import { Link } from 'react-router-dom'
import styles from './menu.module.css'
import { Outlet } from 'react-router'

const Menu = () => {
    const placeholder = `Search Post in ${'Home'}`

    return (
        <>
        <div className={styles.menuBar}>
            <nav className={styles.container}>
                <Link to={"/"} className={styles.singleLink}>
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
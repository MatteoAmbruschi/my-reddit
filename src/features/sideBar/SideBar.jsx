import styles from './sideBar.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { filterClicked } from './slideBarSlice'

function SideBar(){
    const dispatch = useDispatch()
    const items = useSelector((state) => state.slideBar.items)

    function handleSearch (item){
        dispatch(filterClicked(item))
    }

    return (
            <div className={styles.containerSideBar}>
                {items.map((item, index) => (
                    <button className={styles.square} key={index} onClick={() => handleSearch(item.id)}>{item.title}</button>
                ))}
            </div>
    )
}

export default SideBar
import styles from './sideBar.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { filterClicked } from './slideBarSlice'

function SideBar(){
    const dispatch = useDispatch()
    const items = useSelector((state) => state.slideBar.items)

    function handleSearch (item){
        dispatch(filterClicked(item))
    }

    const colors = [
        {
            backgroundColor: '#FFEB3B',
            color: '#5C4A0B'
        },
        {
            backgroundColor: '#C1FF3C',
            color: '#155C0B'
        },
        {
            backgroundColor: '#FF9D2B',
            color: '#633419'
        },
        {
            backgroundColor: '#FFDCBB',
            color: '#63192A'
        },
        {
            backgroundColor: '#6C68FD',
            color: '#FFFFFF'
        },
        {
            backgroundColor: '#FF8D4D',
            color: '#FFF4FF'
        },
        {
            backgroundColor: '#FFDCBB',
            color: '#63192A'
        },
    ]

    const randomPicker = Math.floor(Math.random() * 7)

    return (
            <div className={styles.containerSideBar}>
                {items.map((item, index) => (
                    <button style={colors[index < 7 ? index : randomPicker]} className={styles.square} key={index} onClick={() => handleSearch(item.id)}>{item.title}</button>
                ))}
            </div>
    )
}

export default SideBar
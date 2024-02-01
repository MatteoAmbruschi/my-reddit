import styles from './sideBar.module.css';
import { useSelector, useDispatch } from 'react-redux'
import { filterClicked } from './slideBarSlice'
import { ReactLenis } from '@studio-freight/react-lenis'
import { loadPosts, searchInput } from '../post/postsSlice';
import { useEffect } from 'react';

function SideBar(){
    const dispatch = useDispatch()
    const items = useSelector((state) => state.slideBar.items)
    const itemClicked = useSelector((state) => state.slideBar.itemClicked)

    function handleSearch (item){
        dispatch(filterClicked(item))
    }

    useEffect(() =>{
        if (itemClicked) {
            dispatch(searchInput(itemClicked.title));
            dispatch(loadPosts());
            console.log(itemClicked.title);
          }
    }, [itemClicked])

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
        <ReactLenis root> 
        <div className={styles.pageContainer}>
            <div className={styles.containerSideBar}>
                {items.map((item, index) => (
                    <button style={colors[index < 7 ? index : randomPicker]} className={styles.square} key={index} onClick={() => handleSearch(item.id)}>{item.title}</button>
                ))}
            </div>
        </div>
        </ReactLenis>
    )
}

export default SideBar
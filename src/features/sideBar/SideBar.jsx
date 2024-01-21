import styles from './sideBar.module.css'

function SideBar(){
    const items = ['ciao', 'wewe', 'bellaa' , 'siumm', 'prova']



    return (
            <div className={styles.containerSideBar}>
                {items.map((item) => (
                    <div className={styles.square}>{item}</div>
                ))}
            </div>
    )
}

export default SideBar
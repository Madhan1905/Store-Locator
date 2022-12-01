import styles from '../styles/Component.module.css'

const TileComponent = (props) => {
    return(
        <div className={styles.mainTile} onClick = {() => props.setPosition(props.store.coordinates)}>
            <div>
                <div className={styles.boldText}>{props.store.title}</div>
                <div>{props.store.address}</div>
            </div>
            <div>
                <button>Directions</button>
            </div>
        </div>
    )
}

export default TileComponent;
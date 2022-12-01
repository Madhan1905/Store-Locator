import TileComponent from "./TileComponent";
import styles from '../styles/Component.module.css'

const ListComponent = (props) => {

    const stores = [
        {
            'title' : 'Besant Technologies',
            'address' : 'First Floor, No.54, 5th Main Road, HAL Old Airport Rd, Behind Hotel Leela Palace, HAL 2nd Stage, Kodihalli, Bengaluru, Karnataka 560008',
            'coordinates' : [12.962404214087867, 77.6491492108949]
        },
        {
            'title' : 'Besant Technologies',
            'address' : 'No 2, Ground floor, 29th Main Road, Kuvempu Nagar, BTM Layout 2nd Stage, Bengaluru, Karnataka 560076',
            'coordinates' : [12.913892255384056, 77.61516638432306]
        },
        {
            'title' : 'Besant Technologies',
            'address' : 'No. 43/2, 2nd Floor, VMR Arcade, Silver Springs Layout, Munnekollal Varthur Main Road, Near kundalahalli gate signal, Marathahalli, Bengaluru, Karnataka 560037',
            'coordinates' : [12.955820828141741, 77.7148484806242]
        }
    ]

    return(
        <div className={styles.storeList}>
            {
                stores.map(store => {
                    return(<TileComponent store={store} setPosition={props.setPosition}/>)
                })
            }
        </div>
    )
}

export default ListComponent;
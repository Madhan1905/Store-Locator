import styles from '../styles/Parent.module.css'
import dynamic from "next/dynamic"
import React, { useState } from 'react'
import ListComponent from './ListComponent'

const ParentComponent = () => {
    const Map = React.useMemo(() => (dynamic(() => import("./MapComponent"), { ssr:false })))
    const [position,setPosition] = useState([12.962404214087867, 77.6491492108949]);
    return(
        <div className={styles.main}>
            <div className={styles.heading}>Madhan's Store Locator</div>
            <div className={styles.content}>
                <div className={styles.leftBody}><ListComponent position = {position} setPosition={setPosition}/></div>
                <div className={styles.rightBody}>
                    <Map position={position}/>
                </div>
            </div>
        </div>
    )
}

export default ParentComponent;
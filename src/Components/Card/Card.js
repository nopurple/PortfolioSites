import React, {useState} from "react";
import styles from './Card.module.scss'

const Card = (props) => {
    const [isAdded, setIsAdded] = useState(false)

    const onClickChanged = () => {
        setIsAdded(!isAdded)
    }

    return (
        <div className={styles.card}>
            <div className={styles.Favorites}>
                <img width={30} height={30} src="/Favorite-unlike.svg" alt="Unliked"/>
            </div>
            <img width={155} height={155} src={props.imgURL} alt='wear'/>
            <h5>{props.title}</h5>
            <div className='d-flex justify-between align-center'>
                <div className='d-flex flex-column '>
                    <span>Цена: </span>
                    <b> {props.price} сом</b>
                </div>
                <img className={styles.plus} width={30} height={30}
                    onClick={onClickChanged} src={isAdded ? 'buttonAdded.svg' : 'buttonAdd.svg'} alt='Plus'/>
            </div>
        </div>
    )
}
export default Card;
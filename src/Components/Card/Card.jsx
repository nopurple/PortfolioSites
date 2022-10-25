import React, {useState} from "react";
import styles from './Card.module.scss'

const Card = ({imgURL, title, price, onPlus, onFavorite, favorited = false, id}) => {

    const [isAdded, setIsAdded] = useState(false)
    const [isFavorite, setIsFavorite] = useState(favorited)

    const onClickPlus = () => {
        onPlus({imgURL, title, price, id});
        setIsAdded(!isAdded)
    }
    const onClickFavorite = () => {
        onFavorite({imgURL, title, price, id});
        setIsFavorite(!isFavorite)
    }


    return (
        <div className={styles.card}>
            <div className={styles.Favorites}>
                <img onClick={onClickFavorite} width={30} height={30}
                     src={isFavorite ? "/Favorite-like.svg" : '/Favorite-unlike.svg'} alt="Favorite"/>
            </div>
            <img width={155} height={155} src={imgURL} alt='wear'/>
            <h5>{title}</h5>
            <div className='d-flex justify-between align-center'>
                <div className='d-flex flex-column '>
                    <span>Цена: </span>
                    <b> {price} сом</b>
                </div>
                <img className={styles.plus} width={30} height={30}
                     onClick={onClickPlus} src={isAdded ? 'buttonAdded.svg' : 'buttonAdd.svg'} alt='Plus'/>
            </div>
        </div>
    )
}
export default Card;








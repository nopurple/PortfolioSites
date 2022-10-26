import React, {useState} from "react";
import styles from './Card.module.scss'
import ContentLoader from "react-content-loader"

const Card = ({imgURL, id, title, price, onPlus, onFavorite, favorited = false, added = false, loading = false}) => {

    const [isAdded, setIsAdded] = useState(added)
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

            {loading ? <ContentLoader
                    speed={2}
                    width={155}
                    height={265}
                    viewBox="0 0 170 265"
                    backgroundColor="#ffffff"
                    foregroundColor="#c9c9c9"
                >
                    <rect x="0" y="130" rx="5" ry="5" width="130" height="15"/>
                    <rect x="0" y="100" rx="5" ry="5" width="165" height="15"/>
                    <rect x="0" y="0" rx="10" ry="10" width="165" height="90"/>
                    <rect x="2" y="180" rx="5" ry="5" width="55" height="20"/>
                    <rect x="111" y="180" rx="5" ry="5" width="35" height="20"/>
                </ContentLoader> :
                <> {/* фрагмент создает родительский (div)*/}
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
                </>
            }


        </div>
    )
}
export default Card;







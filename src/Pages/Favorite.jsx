import React from "react";
import Card from "../Components/Card/Card";
import {Link} from "react-router-dom";

const Favorite = ({addToCart, items, addToFavorite}) => {
    return (
        <div className="content p-35">
            <div className='d-flex align-center justify-between mb-40'>
                <h1>Мое избранное</h1>
            </div>

            {items.length > 0 ? (
                    <div className='d-flex flex-wrap'>
                        {items.map((items, index) => (
                            <Card key={index}
                                  onPlus={addToCart}
                                  onFavorite={addToFavorite}
                                  favorited={true}
                                  {...items}/>
                        ))}
                    </div>)
                : (
                    <div className='favorite d-flex align-center justify-center flex-column flex'>
                        <img className='mb-20' width={200} height={200} src="/FavoriteSAD.svg" alt="inbox"/>
                        <h2>Мои избранные</h2>
                        <p className='opacity-6'>Добавьте хотя бы одну вещь в избранное ПЖ</p>
                        <Link to='/' className='greenButton '>
                        <button className='greenButton '>Вернуться назад</button>
                    </Link>

                </div>
                )
            }


        </div>
    )
}
export default Favorite
import React from "react";
import Card from "../Components/Card/Card";


const Home = (props) => {
    return (
        <div className="content p-35">
            <div className='d-flex align-center justify-between mb-40'>
                <h1>{props.searchValue ? `Поиск по запросу: ${props.searchValue}` : "Одежда PRADA"} </h1>
                <div className='search-block d-flex'>
                    <img src="/search.svg" alt="Search"/>
                    {props.searchValue && <img onClick={() => props.setSearchValue('')}
                                               className='clear cu-p'
                                               src="/btn-remove.svg"
                                               alt="Clear"/>}
                    <input onChange={props.onChangeSearch} value={props.searchValue} placeholder='Найти...'/>
                </div>
            </div>

            <div className='d-flex flex-wrap'>
                {props.items.filter(items => items.title.toLowerCase().includes(props.searchValue.toLowerCase()))
                    .map((item, index) => (
                        <Card key={index}
                              onFavorite={props.addToFavorite}
                              onPlus={props.addToCart}
                              {...item}/>
                    ))}
            </div>
        </div>)
}
export default Home
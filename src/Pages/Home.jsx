import React from "react";
import Card from "../Components/Card/Card";


const Home = ({isLoading,items,searchValue,addToCart,addToFavorite,setSearchValue,onChangeSearch,}) => {
    const renderItems = () => {
        const filtredItems = items.filter((items) =>
            items.title.toLowerCase().includes(searchValue.toLowerCase())
        );
        return (isLoading ? [...Array(8)] : filtredItems).map((items, index) => (
                <Card key={index}
                      onFavorite={(obj)=> addToFavorite(obj)}
                      onPlus={(obj)=> addToCart(obj)}
                      loading={isLoading}
                      {...items}/>
            )
        )
    }

    return (
        <div className="content p-35">
            <div className='d-flex align-center justify-between mb-40'>
                <h1>{searchValue ? `Поиск по запросу: ${searchValue}` : "Одежда PRADA"} </h1>
                <div className='search-block d-flex'>
                    <img src="/search.svg" alt="Search"/>
                    {searchValue && <img onClick={() => setSearchValue('')}
                                               className='clear cu-p'
                                               src="/btn-remove.svg"
                                               alt="Clear"/>}
                    <input onChange={onChangeSearch} value={searchValue} placeholder='Найти....'/>
                </div>
            </div>
            <div className='d-flex flex-wrap'>
                {renderItems()}
            </div>
        </div>)
}
export default Home
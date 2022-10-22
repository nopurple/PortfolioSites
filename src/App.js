import './App.scss';
import Card from "./Components/Card/Card";
import Header from "./Components/Header/Header";
import RightBar from "./Components/RightBar/RightBar";
import React, {useEffect, useState} from "react";
import axios from "axios";


function App() {
    const [items, setItems] = useState([])
    const [cartItems, setCartItems] = useState([])
    const [favoriteItems, setFavoriteItems] = useState([])
    const [searchValue, setSearchValue] = useState('')
    const [cartOpen, setCartOpen] = useState(false)


    useEffect(() => {
        axios.get('https://6352a192a9f3f34c3744fa0c.mockapi.io/items')
            .then(response => {
                setItems(response.data)
            })
        axios.get('https://6352a192a9f3f34c3744fa0c.mockapi.io/cart')
            .then(response => {
                setCartItems(response.data)
            })
    }, [])

    const addToCart = (obj) => {
        setCartItems(prev => [...prev, obj])
        axios.post('https://6352a192a9f3f34c3744fa0c.mockapi.io/cart', obj)
    }

    const onChangeSearch = (event) => {
        setSearchValue(event.target.value)
    }

    const onDeleteItems = (id) =>{
        axios.delete(`https://6352a192a9f3f34c3744fa0c.mockapi.io/cart/${id}`)
        setCartItems((prev) => prev.filter(items => items.id !== id))
    }

    const addToFavorite = (obj) => {
        axios.post('https://6352a192a9f3f34c3744fa0c.mockapi.io/favorites', obj)
        setFavoriteItems(prev => [...prev, obj])
    }

    return (
        <div className='wrapper clear'>
            {cartOpen && <RightBar onClickDelete={onDeleteItems} items={cartItems} onClickClose={() => {
                setCartOpen(false)
            }}/>}
            <Header onClickOpen={() => {
            setCartOpen(true)
        }}/>
            <div className="content p-35">
                <div className='d-flex align-center justify-between mb-40'>
                    <h1>{searchValue ? `Поиск по запросу: ${searchValue}` : "Одежда PRADA"} </h1>
                    <div className='search-block d-flex'>
                        <img src="/search.svg" alt="Search"/>
                        {searchValue && <img onClick={() => setSearchValue('')}
                                             className='clear cu-p'
                                             src="/btn-remove.svg"
                                             alt="Clear"/>}
                        <input onChange={onChangeSearch} value={searchValue} placeholder='Найти...'/>
                    </div>
                </div>

                <div className='d-flex flex-wrap'>
                    {items.filter((items) => items.title.toLowerCase().includes(searchValue.toLowerCase()))
                        .map((item, index) => (
                            <Card key={index}
                                  title={item.title}
                                  price={item.price}
                                  imgURL={item.imgURL}
                                  onFavorite={addToFavorite}
                                  onPlus={addToCart}/>
                        ))}
                </div>


            </div>
        </div>
    );
}

export default App;











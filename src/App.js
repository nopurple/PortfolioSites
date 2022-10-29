import './App.scss';
import Header from "./Components/Header/Header";
import RightBar from "./Components/RightBar/RightBar";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {Route, Routes} from "react-router-dom";
import Home from "./Pages/Home";
import Favorite from "./Pages/Favorite";
import Orders from "./Pages/Orders";


export const AppContext = React.createContext({});

function App() {

    const [items, setItems] = useState([])
    const [cartItems, setCartItems] = useState([])
    const [favoriteItems, setFavoriteItems] = useState([])
    const [searchValue, setSearchValue] = useState('')
    const [cartOpen, setCartOpen] = useState(false)
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        async function fetchData() {
            try {
                const [CartResponse, FavoritesResponse, ItemResponse] = await Promise.all([
                        axios.get('https://6352a192a9f3f34c3744fa0c.mockapi.io/cart'),
                        axios.get('https://6352a192a9f3f34c3744fa0c.mockapi.io/favorites'),
                        axios.get('https://6352a192a9f3f34c3744fa0c.mockapi.io/items')
                ]);

                setIsLoading(false)
                setFavoriteItems(FavoritesResponse.data)
                setCartItems(CartResponse.data)
                setItems(ItemResponse.data)
            } catch (error) {
                alert(error)
            }
        }

        fetchData();
    }, [])

    const addToCart = async (obj) => {
        const findItem = cartItems.find((items) => Number(items.parentId) === Number(obj.id))
        try {
            if (findItem) {
                setCartItems((prev) => prev.filter((items) => Number(items.parentId) !== Number(obj.id)))
                await axios.delete(`https://6352a192a9f3f34c3744fa0c.mockapi.io/cart/${findItem.id}`)

            } else {
               const {data} =  await axios.post('https://6352a192a9f3f34c3744fa0c.mockapi.io/cart', obj)
                setCartItems((prev) => [...prev, data]);
            }
        } catch (error) {
            alert(error + "dad")
        }

    }

    const onChangeSearch = (event) => {
        setSearchValue(event.target.value)
    }

    const onDeleteItems = (id) => {
        axios.delete(`https://6352a192a9f3f34c3744fa0c.mockapi.io/cart/${id}`)
        setCartItems((prev) => prev.filter(items => Number(items.id) !== Number(id)));
    }

    const addToFavorite = async (obj) => {
        try { //Проверка на ошибку, try- выполни это действие если не выполниться то выполни catch
            if (favoriteItems.find((favObj) => favObj.id === obj.id)) {
                await axios.delete(`https://6352a192a9f3f34c3744fa0c.mockapi.io/favorites/${obj.id}`)
                setFavoriteItems((prev) => prev.filter(items => Number(items.id) !== Number(obj.id)))

            } else {
                const {data} = await axios.post('https://6352a192a9f3f34c3744fa0c.mockapi.io/favorites', obj)
                setFavoriteItems(prev => [...prev, data])
            }
        } catch (error) {
            alert('Не удалось добавить')
        }
    }

    const isItemsAdded = (id) => {
        return cartItems.some((obj) => Number(obj.parentId) === Number(id))// some- если одно из условий верно то выполни
    }

    const isFavoriteAdded = (id) => {
        return favoriteItems.some((obj) => Number(obj.id) === Number(id))
    }

    return (
        <AppContext.Provider value={{
            items,
            cartItems,
            favoriteItems,
            addToCart,
            isItemsAdded,
            isFavoriteAdded,
            addToFavorite,
            setCartItems
        }}>
            <div className='wrapper clear'>
                {cartOpen &&
                    <RightBar onClickDelete={onDeleteItems} items={cartItems} onClickClose={() => {
                        setCartOpen(false)
                    }}/>}
                <Header onClickOpen={() => {
                    setCartOpen(true)
                }}/>
                <Routes>
                    <Route path="/" element={<Home items={items} searchValue={searchValue}
                                                   setSearchValue={setSearchValue} onChangeSearch={onChangeSearch}
                                                   addToFavorite={addToFavorite} addToCart={addToCart}
                                                   cartItems={cartItems} isLoading={isLoading}/>}/>
                    <Route path='/favorites' element={<Favorite/>}/>
                    <Route path='/orders' element={<Orders/>}/>
                </Routes>
            </div>

        </AppContext.Provider>


    );
}

export default App;










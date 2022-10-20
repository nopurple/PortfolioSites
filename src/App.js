import './App.scss';
import Card from "./Components/Card/Card";
import Header from "./Components/Header/Header";
import RightBar from "./Components/RightBar/RightBar";
import {useContext, useState} from "react";


const arr = [
    {title: 'Двубортное шерстяное пальто ', price: ' 19 999', imgURL: '/wears/wear1.webp'},
    {title: 'Двубортное эко-кожа  куртка ', price: '25 599', imgURL: '/wears/wear2.webp'},
    {title: 'Двубортное эко-кожа  куртка ', price: '10 299 ', imgURL: '/wears/wear3.webp'},
    {title: 'Двубортное эко-кожа  куртка ', price: '12 500 ', imgURL: '/wears/wear4.webp'},

]

function App() {
    const [cartOpen, setCartOpen] = useState(false)


    return (
        <div className='wrapper clear'>
            {cartOpen &&  <RightBar onClickClose={() => {setCartOpen(false)}}/> }
            <Header onClickOpen={() => {setCartOpen(true)}}/>
            <div className="content p-35">
                <div className='d-flex align-center justify-between mb-40'>
                    <h1>Одежда PRADA </h1>
                    <div className='search-block d-flex'>
                        <img src="/search.svg" alt="Search"/>
                        <input placeholder='Найти...'/>
                    </div>
                </div>

                <div className='d-flex'>
                    {arr.map((obj) => (
                        <Card title={obj.title} price={obj.price} imgURL={obj.imgURL}/>
                    ))}
                </div>


            </div>
        </div>
    );
}

export default App;

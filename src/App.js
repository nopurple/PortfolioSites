import './App.scss';

function App() {
    return (
        <div className='wrapper clear'>

            <div style={{display: 'none'}} className='overlay'>
                <div className='right-bar'>
                    <h2 className='d-flex justify-between mb-30 '>
                        Корзина <img className='removeBtn cu-p' src="/btn-remove.svg" alt="Remove"/>
                    </h2>

                    <div className='items'>
                        <div className="cartItems d-flex align-center mb-20">
                            <img width={75} height={75} src="/wears/wear5.webp" alt="Wears"/>
                            <div className='mr-20'>
                                <p className='mb-5'>Двубортное шерстяное пальто</p>
                                <b> 25 999 сом </b>
                            </div>
                            <img className='removeBtn' src="/btn-remove.svg" alt="Remove"/>
                        </div>
                        <div className="cartItems d-flex align-center mb-20">
                            <img width={75} height={75} src="/wears/wear6.webp" alt="Wears"/>
                            <div className='mr-20'>
                                <p className='mb-5'>Двубортное шерстяное пальто</p>
                                <b> 25 999 сом </b>
                            </div>
                            <img className='removeBtn' src="/btn-remove.svg" alt="Remove"/>
                        </div>
                        <div className="cartItems d-flex align-center mb-20">
                            <img width={75} height={75} src="/wears/wear2.webp" alt="Wears"/>
                            <div className='mr-20'>
                                <p className='mb-5'>Двубортное шерстяное пальто</p>
                                <b> 25 999 сом </b>
                            </div>
                            <img className='removeBtn' src="/btn-remove.svg" alt="Remove"/>
                        </div>
                        <div className="cartItems d-flex align-center mb-20">
                            <img width={75} height={75} src="/wears/wear8.webp" alt="Wears"/>
                            <div className='mr-20'>
                                <p className='mb-5'>Двубортное шерстяное пальто</p>
                                <b> 25 999 сом </b>
                            </div>
                            <img className='removeBtn' src="/btn-remove.svg" alt="Remove"/>
                        </div>
                    </div>


                    <div className="cartTotalBlock">
                        <ul>
                            <li>
                                <span>Итог:</span>
                                <div></div>
                                <b> 50 000 сом </b>
                            </li>
                            <li>
                                <span>НДС 5%:</span>
                                <div></div>
                                <b>5 000 сом </b>
                            </li>
                        </ul>
                        <button className='greenButton'>Оформить заказ <img src="/Arrow.svg" alt="Arrow"/></button>
                    </div>
                </div>
            </div>


            <header className='d-flex justify-between align-center p-40'>
                <div className='d-flex align-center'>
                    <img width={40} height={40} src='/logo.webp' alt='logo'/>
                    <div>
                        <h3>React Wear</h3>
                        <p>Лучший магазин одежды</p>
                    </div>
                </div>
                <ul className='d-flex'>
                    <li className='mr-30'>
                        <img width={24} height={24} src='/cart.svg' alt='cart'/>
                        <span className='p-10'> 1202 сом </span>
                    </li>
                    <li>
                        <img width={24} height={24} src='/user.svg' alt='user'/>
                    </li>
                </ul>
            </header>
            <div className="content p-35">
                <div className='d-flex align-center justify-between mb-40'>
                    <h1>Одежда PRADA </h1>
                    <div className='search-block d-flex'>
                        <img src="/search.svg" alt="Search"/>
                        <input placeholder='Найти...'/>
                    </div>
                </div>


                <div className='d-flex'>
                    <div className='card'>
                        <div className='Favorites'>
                            <img width={30} height={30} src="/Favorite-unlike.svg" alt="Unliked"/>
                        </div>
                        <img width={155} height={155} src="/wears/wear1.webp" alt='wear'/>
                        <h5>Двубортное шерстяное пальто</h5>
                        <div className='d-flex justify-between align-center'>
                            <div className='d-flex flex-column '>
                                <span>Цена: </span>
                                <b> 12 999 сом</b>
                            </div>
                            <button className='button'>
                                <img width={11} height={11} src="/AddPlus.svg" alt='Plus'/>
                            </button>
                        </div>
                    </div>
                    <div className='card'>
                        <img width={155} height={155} src="/wears/wear2.webp" alt='wear'/>
                        <h5> Эластичный хлопчатобумажный</h5>
                        <div className='d-flex justify-between align-center'>
                            <div className='d-flex flex-column '>
                                <span>Цена: </span>
                                <b> 12 999 сом</b>
                            </div>
                            <button className='button'>
                                <img width={11} height={11} src="/AddPlus.svg" alt='Plus'/>
                            </button>
                        </div>
                    </div>
                    <div className='card'>
                        <img width={155} height={155} src="/wears/wear3.webp" alt='wear'/>
                        <h5>Двубортное шерстяное пальто</h5>
                        <div className='d-flex justify-between align-center'>
                            <div className='d-flex flex-column '>
                                <span>Цена: </span>
                                <b> 12 999 сом</b>
                            </div>
                            <button className='button'>
                                <img width={11} height={11} src="/AddPlus.svg" alt='Plus'/>
                            </button>
                        </div>
                    </div>
                    <div className='card'>
                        <img width={155} height={155} src="/wears/wear4.webp" alt='wear'/>
                        <h5>Двубортное шерстяное пальто</h5>
                        <div className='d-flex justify-between align-center'>
                            <div className='d-flex flex-column '>
                                <span>Цена: </span>
                                <b> 12 999 сом</b>
                            </div>
                            <button className='button'>
                                <img width={11} height={11} src="/AddPlus.svg" alt='Plus'/>
                            </button>
                        </div>
                    </div>


                </div>


            </div>
        </div>
    );
}

export default App;

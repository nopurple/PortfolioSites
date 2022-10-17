import './App.scss';

function App() {
    return (
        <div className='wrapper clear'>
            <header className='d-flex justify-between align-center p-40'>
                <div className='d-flex align-center'>
                    <img width={40} height={40} src='/logo.webp'/>
                    <div>
                        <h3>React Wear</h3>
                        <p>Лучший магазин одежды</p>
                    </div>
                </div>
                <ul className='d-flex'>
                    <li className='mr-30'>
                        <img width={24} height={24} src='/cart.svg'/>
                        <span> 1202 сом </span>
                    </li>
                    <li>
                        <img width={24} height={24} src='/user.svg'/>
                    </li>
                </ul>
            </header>
            <div className="content p-35">
                <h1 className='mb-40'>Одежда PRADA </h1>


                <div className='d-flex'>
                    <div className='card'>
                        <img width={155} height={155} src="/wears/wear1.webp" alt='wear'/>
                        <h5>Двубортное шерстяное пальто</h5>
                        <div className='d-flex justify-between align-center'>
                            <div className='d-flex flex-column '>
                                <span>Цена: </span>
                                <b> 12999 сом</b>
                            </div>
                            <button className='button'>
                                <img width={11} height={11} src="/AddPlus.svg" alt='Plus'/>
                            </button>
                        </div>
                    </div>
                      <div className='card'>
                        <img width={155} height={155} src="/wears/wear2.webp" alt='wear'/>
                        <h5> Эластичный хлопчатобумажный жакет</h5>
                        <div className='d-flex justify-between align-center'>
                            <div className='d-flex flex-column '>
                                <span>Цена: </span>
                                <b> 12999 сом</b>
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
                                <b> 12999 сом</b>
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
                                <b> 12999 сом</b>
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

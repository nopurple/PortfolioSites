import React from "react";


const RightBar = (props) => {
    return (
        <div className='overlay'>
            <div className='right-bar'>
                <h2 className='d-flex justify-between mb-30 '>
                    Корзина <img className='removeBtn cu-p' src="/btn-remove.svg" alt="Remove" onClick={props.onClickClose}/>
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
    )
}
export default RightBar;
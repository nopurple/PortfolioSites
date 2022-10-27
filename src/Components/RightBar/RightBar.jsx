import React, {useContext, useState} from "react";
import {AppContext} from "../../App";
import axios from "axios";
import {Link} from "react-router-dom";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const RightBar = ({onClickClose, items = [], onClickDelete,}) => {

    const {cartItems, setCartItems} = useContext(AppContext);
    const [OrderId, setOrderId] = useState(null)
    const [OrderComplete, setOrderComplete] = useState(false)


    const onClickOrder = async () => {
        try {
            const {data} = await axios.post('https://6352a192a9f3f34c3744fa0c.mockapi.io/orders', {items: cartItems})
            setOrderId(data.id)
            setOrderComplete(true)
            setCartItems([])

            for (let i = 0; i < cartItems.length; i++) {//создали костыль потому что mockapi не работает с put.
                const item = cartItems[i]
                await axios.delete('https://6352a192a9f3f34c3744fa0c.mockapi.io/cart/' + item.id)
                await delay(1000)
            }
        } catch (error) {
            alert('No added to order :(')
        }
    }


    return (
        <div className='overlay'>
            <div className='right-bar'>
                <h2 className='d-flex justify-between mb-30 '>
                    Корзина <img className='removeBtn cu-p' src="/btn-remove.svg" alt="Remove" onClick={onClickClose}/>
                </h2>
                {items.length > 0 ? (
                        <div className='d-flex flex-column flex'>
                            <div className='cartItems'>
                                {items.map((obj) => (
                                    <div key={obj.id} className="cartItems d-flex align-center mb-20">
                                        <img width={75} height={75} src={obj.imgURL} alt="Wears"/>
                                        <div className='mr-20'>
                                            <p className='mb-5'>{obj.title}</p>
                                            <b> {obj.price} сом </b>
                                        </div>
                                        <img onClick={() => onClickDelete(obj.id)} className='removeBtn'
                                             src="/btn-remove.svg"
                                             alt="Remove"/>
                                    </div>
                                ))}
                                <div className='flex'>
                                    <div className="cartTotalBlock">
                                        <ul>
                                            <li>
                                                <span>Итог:</span>
                                                <div></div>
                                                <b> 10000 сом </b>
                                            </li>
                                            <li>
                                                <span>НДС 5%:</span>
                                                <div></div>
                                                <b>5 000 сом </b>
                                            </li>
                                        </ul>
                                        <button onClick={onClickOrder} className='greenButton'>Оформить заказ <img
                                            src="/Arrow.svg" alt="Arrow"/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                    :
                    (OrderComplete ? (
                        <div className='cartOutBox d-flex align-center justify-center flex-column flex'>
                            <img className='mb-20' width={200} height={200} src="/delivery-complete.svg" alt="inbox"/>
                            <h2>Заказ оформлен!</h2>
                            <p className='opacity-6'>Ваш заказ #{OrderId} скоро будет передан курьеру или доставке</p>
                            <Link to="/orders" className='greenButton'>
                            <button onClick={onClickClose} className='greenButton'>
                                <img src="/Arrow.svg" alt="Arrow"/> Перейти к доставке
                            </button>
                            </Link>
                        </div>
                    ) : (
                        <div className='cartInbox d-flex align-center justify-center flex-column flex'>
                            <img className='mb-20' width={200} height={200} src="/inbox.svg" alt="inbox"/>
                            <h2>Корзина пустая</h2>
                            <p className='opacity-6'>Добавьте хотя бы одну вещь, чтобы сделать заказ. ПЖ</p>
                            <button onClick={onClickClose} className='greenButton'>
                                <img src="/Arrow.svg" alt="Arrow"/> Вернуться назад
                            </button>
                        </div>))}
            </div>
        </div>
    )
}
export default RightBar;
import React from "react";


const RightBar = ({onClickClose, items = [], onClickDelete,}) => {
    return (
        <div className='overlay'>
            <div className='right-bar'>
                <h2 className='d-flex justify-between mb-30 '>
                    Корзина <img className='removeBtn cu-p' src="/btn-remove.svg" alt="Remove" onClick={onClickClose}/>
                </h2>
                {items.length > 0 ? (<div>
                        {items.map((obj) => (
                            <div key={obj.id} className="cartItems d-flex align-center mb-20">
                                <img width={75} height={75} src={obj.imgURL} alt="Wears"/>
                                <div className='mr-20'>
                                    <p className='mb-5'>{obj.title}</p>
                                    <b> {obj.price} сом </b>
                                </div>
                                <img onClick={() => onClickDelete(obj.id)} className='removeBtn' src="/btn-remove.svg"
                                     alt="Remove"/>
                            </div>
                        ))}
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
                    </div>)
                    :
                    (<div className='cartInbox d-flex align-center justify-center flex-column flex'>
                            <img className='mb-20' width={200} height={200} src="/inbox.svg" alt="inbox"/>
                            <h2>Корзина пустая</h2>
                            <p className='opacity-6'>Добавьте хотя бы одну вещь, чтобы сделать заказ. ПЖ</p>
                            <button onClick={onClickClose} className='greenButton'>
                                <img src="/Arrow.svg" alt="Arrow"/> Вернуться назад
                            </button>
                        </div>
                    )}
            </div>
        </div>
    )
}
export default RightBar;
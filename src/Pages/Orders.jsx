import React, {useContext, useEffect, useState} from "react";
import Card from "../Components/Card/Card";
import axios from "axios";
import {AppContext} from "../App";

const Orders = () => {
    const {addToCart, items} = useContext(AppContext)
    const [orderItems, setOrderItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)

        useEffect(() => {
            (async () => {
                try {
                    const { data } = await axios.get(' https://6352a192a9f3f34c3744fa0c.mockapi.io/orders');
                    setOrderItems(data.reduce((prev, obj) => [...prev, ...obj.items], []));
                    setIsLoading(false);
                } catch (error) {
                    alert('Ошибка при запросе заказов');
                    console.error(error);
                }
            })();
        }, []);
console.log(orderItems);
    return (
        <div className="content p-35">
            <div className='d-flex align-center justify-between mb-40'>
                <h1>Мои заказы</h1>
            </div>
            <div className='d-flex flex-wrap'>
                {(isLoading ? [...Array(4)] : orderItems).map((items, index) => (
                    <Card key={index}
                          onPlus={(obj) => addToCart(obj)}
                          loading={isLoading}
                        {...items}/>
                ))}
            </div>
        </div>
    )
}
export default Orders;
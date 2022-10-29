import React, {useContext} from "react";
import {Link} from "react-router-dom";
import {AppContext} from "../../App";


const Header = (props) => {
    const {cartItems} = useContext(AppContext);

    return (
        <header className='d-flex justify-between align-center p-40'>
            <Link to='/'>
                <div className='d-flex align-center'>
                    <img width={40} height={40} src='/logo.webp' alt='logo'/>
                    <div>
                        <h3>React Wear</h3>
                        <p>Лучший магазин одежды</p>
                    </div>
                </div>
            </Link>
            <ul className='d-flex'>
                <li className='mr-15 cu-p' onClick={props.onClickOpen}>
                    <img width={24} height={24} src='/cart.svg' alt='cart'/>
                    {cartItems.length > 0 ?<span className='p-10'> {cartItems.reduce((sum, obj) => obj.price + sum, 0)} сом </span> : <div/> }
                </li>
                <li className='mr-20 cu-p'>
                    <Link to='/favorites'><img width={24} height={24} src="/heartNotAdd.svg" alt="heart"/></Link>
                </li>
                <li className='cu-p'>
                    <Link to='/orders'> <img width={24} height={24} src='/user.svg' alt='user'/></Link>
                </li>
            </ul>
        </header>
    )
}
export default Header;
import React from "react";


const Header = (props) => {
    return (
        <header className='d-flex justify-between align-center p-40'>
            <div className='d-flex align-center'>
                <img width={40} height={40} src='/logo.webp' alt='logo'/>
                <div>
                    <h3>React Wear</h3>
                    <p>Лучший магазин одежды</p>
                </div>
            </div>
            <ul className='d-flex'>
                <li className='mr-30 cu-p' onClick={props.onClickOpen}>
                 <img width={24} height={24} src='/cart.svg' alt='cart'/>
                    <span className='p-10'> 1202 сом </span>
                </li>
                <li>
                    <img width={24} height={24} src='/user.svg' alt='user'/>
                </li>
            </ul>
        </header>
    )
}
export default Header;
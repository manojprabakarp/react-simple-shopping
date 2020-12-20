
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCarts, cartActions } from '../storeAndSlice';

export default function Cart() {
    let cart = useSelector(getCarts);
    let dispatch = useDispatch();
    console.log(cart)
    const removeFromCart = (e) => {
        console.log('remove from cart')
        dispatch(cartActions.removeFromCart(e.target.getAttribute('cart')));
    }

    return (
        <React.Fragment>
            <div className="cartContainer">Cart {cart.length} </div>
            <div className="cartCont">
            {cart.map((elem, index) => {
                return (
                    <div key={index} className="cartItems">
                        {elem}
                        <span title="Remove from Cart" className="removeBtn" cart={elem} onClick={removeFromCart}>+</span>
                    </div>
                )
            })}
        </div>
        </React.Fragment>
    )
}
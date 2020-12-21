
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCarts, cartActions } from '../storeAndSlice';

export default function Cart() {

    let cart = useSelector(getCarts);
    let dispatch = useDispatch();

    const removeFromCart = (e) => {
        dispatch(cartActions.removeFromCart(e.target.getAttribute('id')));
    }

    return (
        <React.Fragment>
            <div className="cartContainer">Cart ({cart.length}) </div>
            <div className="cartCont">
                {cart.map((elem, index) => {
                    return (
                        <div key={index} className="cartItems">
                            {elem.item} ({elem.count})
                            <span title="Remove from Cart" className="removeBtn" id={elem.id} onClick={removeFromCart}>+</span>
                        </div>
                    )
                })}
            </div>
        </React.Fragment>
    )
}
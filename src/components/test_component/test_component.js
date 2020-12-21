import React, { useState } from 'react';
import Cart from "../cart/cart";
import { useSelector, useDispatch } from 'react-redux';
import { cartActions, getProducts } from "../storeAndSlice";

function Testcomponent() {

  let products = useSelector(getProducts);
  let dispatch = useDispatch();

  const addToCart = (e) => {
    dispatch(cartActions.addToCart({ item: e.target.getAttribute('item'), id: e.target.getAttribute('id') }));
  }

  return (
    <div>
      <Cart />
      <h3>Simple Shopping Cart App!</h3>
      {products.map((elem, index) => {
        return <div key={index} className="products">
          {elem}
          <div className="addButton" title="Add to Cart" item={elem} id={index} onClick={addToCart}>
            + Add to Cart
            </div>
        </div>
      })}
    </div>
  );
}
export default Testcomponent


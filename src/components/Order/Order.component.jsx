import React from 'react';
import CartEdit from '../cart/cart.component';
import './Order.styles.css';

const Order = ({cartItems, totalPrice}) => (
    <div className="item-card">
    <div className="item_header">
        <h2>ORDER SUMMARY	</h2>
    </div>
    <div className="item-product">
       {
           cartItems.length ?
           (
               cartItems.map(cartItem => (
                  <CartEdit key={cartItem.id} cartItem={cartItem} />
               ))
           ): (<h3>No item</h3>)
       }
    </div>
    <div className="pay">
        <div className="subtot">
            <p>Subtotal	</p>
            <p>{`${totalPrice}$`}</p>
        </div>
        <div className="subtot">
            <p>Shipping</p>
            <p>---</p>
        </div>
        <div className="subtot">
            <p>Tax</p>
            <p>0$</p>
        </div>
    </div>
    <div className="totz">
    <div className="subtot">
            <p>Total (USD)</p>
            <p><strong>{`${totalPrice}$`}</strong></p>
        </div>
    </div>
</div>
)

export default Order;
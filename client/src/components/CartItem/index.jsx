import React from 'react';
import { useMenuContext } from '../../utils/MenuContext';
import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";
import './cartitem-style.css'
import {FaTrashAlt} from "react-icons/fa";




const CartItem = ({ item }) => {

    const [, dispatch] = useMenuContext();
  
    const removeFromCart = item => {
      dispatch({
        type: REMOVE_FROM_CART,
        _id: item._id
      });
      idbPromise('cart', 'delete', { ...item });
  
    };
  
    const onChange = (e) => {

      const value = e.target.value;
      if (value === '0') {
        dispatch({
          type: REMOVE_FROM_CART,
          _id: item._id
        });
        idbPromise('cart', 'delete', { ...item });
  
      } else {
        dispatch({
          type: UPDATE_CART_QUANTITY,
          _id: item._id,
          purchaseQuantity: parseInt(value)
        });
        idbPromise('cart', 'put', { ...item, purchaseQuantity: parseInt(value) });
  
      }
    }
  
    return (
      <div className="flex-row">
       
        <div>
          <img
            src={`/menu-pics/${item.image}`}
            alt="menu pics"
            className='menu-pics'
          />
        </div>
        <div className='cart-items'>
          <div className='cart-item-price'>{item.name}: ${item.price}</div>
          <div className='cart-item-qty'>
            <span>Qty:</span>
            <input
              type="number"
              placeholder="1"
              value={item.purchaseQuantity}
              onChange={onChange}
              className="input-number"
            />
            <span
              role="img"
              
              aria-label="trash"
              onClick={() => removeFromCart(item)}
            >
              <FaTrashAlt className='trashcan' />
            </span>
          </div>
        </div>
      </div>
    );
  }
  
  export default CartItem;
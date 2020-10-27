import React from 'react'

import { connect } from 'react-redux'
import { toggleCartHidden } from '../../redux/cart/cart-actions'

import { ReactComponent as ShoppingBagIcon } from '../../assets/shopping-bag.svg'

import './CartIcon.scss'

function CartIcon({ toggleCartHidden }) {
    return (
        <div className="cart-icon" onClick={toggleCartHidden}>
            <ShoppingBagIcon className="shopping-bag-icon" />
            <span className="item-count">0</span>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({ toggleCartHidden: () => dispatch(toggleCartHidden()) })

export default connect(null, mapDispatchToProps)(CartIcon)

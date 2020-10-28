import React from 'react'

import { connect } from 'react-redux'
import { toggleCartHidden } from '../../redux/cart/cart-actions'
import { selectCartItemsCount } from '../../redux/cart/cart-selectors'

import { ReactComponent as ShoppingBagIcon } from '../../assets/shopping-bag.svg'

import './CartIcon.scss'

function CartIcon({ toggleCartHidden, itemCount }) {
    return (
        <div className="cart-icon" onClick={toggleCartHidden}>
            <ShoppingBagIcon className="shopping-bag-icon" />
            <span className="item-count">{itemCount}</span>
        </div>
    )
}

const mapStateToProps = (state) => ({ 
    itemCount: selectCartItemsCount(state)
 })

const mapDispatchToProps = (dispatch) => ({ toggleCartHidden: () => dispatch(toggleCartHidden()) })

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)

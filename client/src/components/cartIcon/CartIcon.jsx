import React from 'react'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { toggleCartHidden } from '../../redux/cart/cart-actions'
import { selectCartItemsCount } from '../../redux/cart/cart-selectors'

import { CartIconContainer, ItemCount, ShoppingBagIcon } from './CartIconStyles'

const CartIcon = ({ toggleCartHidden, itemCount }) => {
    return (
        <CartIconContainer onClick={toggleCartHidden}>
            <ShoppingBagIcon className="shopping-bag-icon" />
            <ItemCount>{itemCount}</ItemCount>
        </CartIconContainer>
    )
}

const mapStateToProps = createStructuredSelector({ itemCount: selectCartItemsCount })

const mapDispatchToProps = (dispatch) => ({ toggleCartHidden: () => dispatch(toggleCartHidden()) })

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)

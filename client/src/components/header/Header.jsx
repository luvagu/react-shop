import React from 'react'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCartDropDownHidden } from '../../redux/cart/cart-selectors'
import { selectCurrentUser } from '../../redux/user/user-selectors'
import { signOutStart } from '../../redux/user/user-actions'

import { ReactComponent as Logo } from '../../assets/logo.svg'

import CartIcon from '../cartIcon/CartIcon'
import CartDropDown from '../cartDropdown/CartDropDown'

import { HeaderContainer, LogoLinkContainer, OptionLink, OptionsContainer } from './HeaderStyles'

const Header = ({ currentUser, hidden, signOutStart }) => {
    return (
        <HeaderContainer>
            <LogoLinkContainer to="/">
                <Logo />
            </LogoLinkContainer>
            <OptionsContainer>
                <OptionLink to='/shop'>SHOP</OptionLink>
                <OptionLink to='/contact'>CONTACT</OptionLink>
                {
                    currentUser 
                    ? 
                        (<OptionLink as='div' onClick={signOutStart}>SIGN OUT</OptionLink>)
                    :
                        (<OptionLink to='/signin'>SIGN IN</OptionLink>)
                }
                <CartIcon />
            </OptionsContainer>
            { hidden && (<CartDropDown />) }
        </HeaderContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartDropDownHidden
})

const mapDispatchToProps = (dispatch) => ({
    signOutStart: () => dispatch(signOutStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)

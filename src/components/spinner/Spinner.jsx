import React from 'react'

import { SpinnerContainer, SpinnerOverlay } from './SpinnerStyles'

const Spinner = (WrapComponent) => ({ isLoading, ...otherProps }) => {
    return isLoading 
        ? 
            (
                <SpinnerOverlay>
                    <SpinnerContainer />
                </SpinnerOverlay>
            ) 
        : 
            (
                <WrapComponent {...otherProps} />
            )
}

export default Spinner

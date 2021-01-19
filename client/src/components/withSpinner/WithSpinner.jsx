import React from 'react'

import Spinner from '../spinner/Spinner'

const WithSpinner = (WrapComponent) => ({ isLoading, ...otherProps }) => {
    return isLoading ? <Spinner /> : <WrapComponent {...otherProps} />       
}

export default WithSpinner

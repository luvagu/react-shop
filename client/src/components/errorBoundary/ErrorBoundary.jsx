import React, { Component } from 'react'

import { ErrorImageOverlay, ErrorImageContainer, ErrorImageText } from './ErrorBoundaryStyles'

class ErrorBoundary extends Component {
    constructor() {
        super()

        this.state = { 
            hasError: false 
        }
    }
    
    static getDerivedStateFromError(error) {    
        // Update state so the next render will show the fallback UI.
        return { hasError: true }
    }

    componentDidCatch(error, info) {
        console.log(error)
    }

    render() {
        if (this.state.hasError) {
            return (
                <ErrorImageOverlay>
                    <ErrorImageContainer imageUrl='https://i.imgur.com/A040Lxr.png' />
                    <ErrorImageText>Sorry this page is lost in the wind</ErrorImageText>
                </ErrorImageOverlay>
            )
        }
        
        return this.props.children
    }
}

export default ErrorBoundary
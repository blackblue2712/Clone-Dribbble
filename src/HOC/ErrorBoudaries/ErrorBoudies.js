import React from 'react';

class ErrorBoudaries extends React.Component {
    state = {
        hasError: false
    }

    static getDerivedStateFromError(error) {
        console.log(error)
        this.setState({ hasError: true })
    }

    componentDidCatch(error, errorInfo) {
        console.log(error)
        console.log(errorInfo)
        this.setState({ hasError: true })
    }

    render() {
        if(this.state.hasError) {
            return (
                <div>Something went wrong</div>
            )
        } else {
            return this.props.children
        }
    }
}

export default ErrorBoudaries;
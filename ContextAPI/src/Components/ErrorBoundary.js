import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
  state = { hasError: false };

  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <img className='error_image'
        src='https://www.netserve365.com/wp-content/uploads/2016/11/human-error-1.jpg' />;
    }
    return this.props.children;
  }
}

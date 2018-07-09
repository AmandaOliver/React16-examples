import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
  state = { hasError: false };

  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <h1>We are sorry!! Something went wrong.</h1>;
    }
    return this.props.children;
  }
}

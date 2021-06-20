import React, { Component } from "react";
import styled from "styled-components";

const ErrorContainer = styled.div`
  text-align: center;
  margin-top: 10%;
`;

/**
 * Component to catch errors and prevent app from crashing
 */

class ErrorBoundary extends Component {
  state = { hasError: false, redirect: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // can log to any error monitoring tool
    console.log("Caught an error", error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <ErrorContainer>
          <>
            <h2>Ooops...! </h2>
            <h2>Something went wrong, try refreshing</h2>
          </>
        </ErrorContainer>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;

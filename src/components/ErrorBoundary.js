import React, { Component } from "react";
import styled from "styled-components";
import image from "../assets/images/error.jpg";

const ErrorContainer = styled.div`
  background-image: url(${image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100%;
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
      return <ErrorContainer></ErrorContainer>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;

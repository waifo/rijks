import React, { useContext, useState } from "react";
import styled, { keyframes, css } from "styled-components";
import PropTypes from "prop-types";

import { ThemeContext } from "../contexts";

const ImageContainer = styled.div`
  display: ${(props) => (props.showImage ? "block" : "none")};
`;

const ShimmerContainer = styled.div`
  display: ${(props) => (props.showImage ? "none" : "block")};
`;

const Img = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
`;

const Text = styled.p`
  font-weight: bold;
  font-size: 18px;
  margin: 2px 0px;
  white-space: nowrap;
  overflow: hidden;
  color: ${(props) => props.theme.textS};
  text-overflow: ellipsis;
`;
const SmallText = styled.p`
  font-size: 12px;
  margin: 0px 0px 20px 0px;
  white-space: nowrap;
  overflow: hidden;
  color: ${(props) => props.theme.textXS};
  text-overflow: ellipsis;
`;

const placeholderShimmer = keyframes`
  0% {
    background-position: -468px 0;
  }
  
  100% {
    background-position: 468px 0; 
  }`;

const shimmer = css`
  background: #f6f7f8;
  background-image: linear-gradient(
    to right,
    #f6f7f8 0%,
    #edeef1 20%,
    #f6f7f8 40%,
    #f6f7f8 100%
  );
  background-repeat: no-repeat;
  background-size: 800px 300px;
  display: inline-block;
  position: relative;

  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: ${placeholderShimmer};
  animation-timing-function: linear;
`;

const ShimmerImage = styled.div`
  ${shimmer}
  width:100%;
  height: 300px;
  border-radius: 10px;
`;

const ShimmerLine = styled.div`
  ${shimmer}
  height:15px;
  width: 100%;
`;

function Image({ url, maker, title, alt }) {
  const [showImage, setShowImage] = useState(false);
  const { theme } = useContext(ThemeContext);

  function imageLoaded() {
    setShowImage(true);
  }

  return (
    <>
      <ImageContainer showImage={showImage} data-testid="image-container">
        <Img src={url} onLoad={imageLoaded} data-testid="img" alt={alt} />
        <Text theme={theme}>{maker}</Text>
        <SmallText theme={theme}>{title}</SmallText>
      </ImageContainer>

      <ShimmerContainer showImage={showImage} data-testid="shimmer-container">
        <ShimmerImage></ShimmerImage>
        <ShimmerLine></ShimmerLine>
        <ShimmerLine></ShimmerLine>
      </ShimmerContainer>
    </>
  );
}

Image.propTypes = {
  url: PropTypes.string.isRequired,
  maker: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Image;

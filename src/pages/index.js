import React, { useState } from "react";
import styled from "styled-components";
import { StaticImage } from 'gatsby-plugin-image';

const Header = styled.h1`
  font-size: 3rem;
  color: maroon;
  font-weight: 700;
  margin: 2rem 0;
`;

const ImageContainer = styled.div`
  position: relative;
`;

const imageStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
};

const TestButton = styled.button`
  margin-right: 10px;
  color: white;
  background-color: #555555;
  border: 3px solid #454545;
  text-align: center;
  text-decoration: none;
  padding: 15px 32px;
  border-radius: 4px;

  &:hover {
    background-color: #404040;
  }

  &:active {
    background-color: #606060;
  }
`;

// markup
const IndexPage = () => {
  const [showPerks, setShowPerks] = useState(true);
  return (
    <div>
      <Header>Hello Zombie World!</Header>
      <p>There isn't much here yet, but there's unlimited potential.</p>
      <TestButton
        onClick={() => setShowPerks(!showPerks)}
      >
        Toggle Perks
      </TestButton>
      <ImageContainer>
          <StaticImage
            style={imageStyle}
            src="../images/sample_map/base.png"
            />
          <StaticImage
            style={imageStyle}
            src="../images/sample_map/perks.png"
            hidden={!showPerks}
          />
        </ImageContainer>
    </div>
  )
};

export default IndexPage;

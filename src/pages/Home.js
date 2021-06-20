import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";

import { ThemeContext } from "../contexts";
import { Image, Layout } from "../components";

const DATA_API = "https://www.rijksmuseum.nl/api/nl/collection?key=yW6uq3BV";

const HomeContainer = styled.main`
  display: block;
  padding: 10px;
  background-color: ${(props) => props.theme.body};
`;

function Home() {
  const { theme } = useContext(ThemeContext);
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      //omitting try catch block, allowing the error fallbck to ErrorBoundary
      const result = await fetch(DATA_API);
      const jsonData = await result.json();
      setData(jsonData.artObjects);
    }
    fetchData();
  }, []);
  return (
    <HomeContainer theme={theme} data-testid="home-container">
      <Layout>
        {data.map((art, i) => {
          return (
            <Image
              key={i}
              url={art.webImage.url}
              alt={art.title}
              maker={art.principalOrFirstMaker}
              title={art.longTitle}
              theme={theme}
            />
          );
        })}
      </Layout>
    </HomeContainer>
  );
}

export default Home;

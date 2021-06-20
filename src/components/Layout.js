import React, { useMemo, useContext } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { AppContext } from "../contexts";

const Column = styled.div`
  margin-top: ${(props) => (props.index > 0 ? props.gutter + "px" : undefined)};
`;

const Columns = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: stretch;
  flex: 1;
  width: 0;
  margin-left: ${(props) =>
    props.index > 0 ? props.gutter + "px" : undefined};
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: stretch;
  box-sizing: border-box;
  width: 100%;
`;

function Layout({ children, gutter = 10 }) {
  const { isMobile, isSmallScreen, isDesktop, isWide } = useContext(AppContext);
  const columnsCount = useMemo(
    function calculateColumnBasedOnWidth(width) {
      // Columns value can be configurable from props but making
      // it static for now
      if (isMobile) return 2;
      if (isSmallScreen) return 3;
      if (isDesktop) return 4;
      if (isWide) return 5;
      return 3; //default value
    },
    [isMobile, isSmallScreen, isDesktop, isWide]
  );

  function getColumns() {
    //creating array of empty arrays
    const columns = Array.from({ length: columnsCount }, () => []);

    React.Children.forEach(children, (child, index) => {
      if (child && React.isValidElement(child)) {
        columns[index % columnsCount].push(child);
      }
    });
    return columns;
  }

  function renderColumn(column) {
    return column.map((item, i) => (
      <Column key={i} gutter={gutter} index={i}>
        {item}
      </Column>
    ));
  }

  function renderColumns() {
    return getColumns().map((column, i) => (
      <Columns key={i} index={i} gutter={gutter}>
        {renderColumn(column)}
      </Columns>
    ));
  }

  return (
    <Container data-testid="layout-container">{renderColumns()}</Container>
  );
}

Layout.propTypes = {
  children: PropTypes.array.isRequired,
  gutter: PropTypes.number,
};

export default Layout;

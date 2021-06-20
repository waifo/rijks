import React, { useContext, useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { ThemeContext } from "../contexts";
import Switch from "./Switch";

const HeaderContainer = styled.div`
  background-color: ${(props) => props.theme.headerBg};
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const H1 = styled.h1`
  line-height: 2;
  font-size: 32px;
  text-align: center;
  color: ${(props) => props.theme.textL};
`;

function Header({ text }) {
  const { theme, setTheme } = useContext(ThemeContext);
  const [isSwitchToggled, setIsSwitchToggled] = useState(false);

  function changeTheme(e) {
    const newTheme = theme.name === "dark" ? "light" : "dark";
    localStorage.removeItem(theme.name);
    localStorage.setItem(newTheme, true);
    setIsSwitchToggled(e.target.checked);
    setTheme(newTheme);
  }
  return (
    <>
      <HeaderContainer theme={theme}>
        <H1 theme={theme}>{text}</H1>
        <Switch
          id="test-switch"
          toggled={isSwitchToggled}
          onChange={changeTheme}
          theme={theme}
        />
      </HeaderContainer>
    </>
  );
}

Header.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Header;

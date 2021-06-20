import React, { useContext } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { ThemeContext } from "../contexts";

const SwitchContainer = styled.div``;

const SwitchInput = styled.input`
  height: 0;
  width: 0;
  visibility: hidden;
  -webkit-tap-highlight-color: transparent;
`;

const SwitchLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: 40px;
  height: 20px;
  border-radius: 100px;
  -webkit-tap-highlight-color: transparent;
  border: ${(props) =>
    props.theme.name === "light" ? "2px solid #000000" : "2px solid #FFFFFF"};
  position: relative;
  transition: background-color 0.2s;
`;

const SwitchButton = styled.span`
  content: "";
  position: absolute;
  top: 1px;
  left: 1px;
  width: 18px;
  height: 18px;
  border-radius: 45px;
  transition: 0.2s;
  -webkit-tap-highlight-color: transparent;
  background: ${(props) =>
    props.theme.name === "light" ? "#000000" : "#FFFFFF"};
  box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
  ${SwitchInput}:checked + ${SwitchLabel} & {
    left: calc(100% - 2px);
    transform: translateX(-90%);
  }

  ${SwitchLabel}:active & {
    width: 40px;
  }
`;

/**
 * Toggle component
 */

function Switch({ id, toggled, onChange }) {
  const { theme } = useContext(ThemeContext);
  return (
    <SwitchContainer data-testid="switch">
      <SwitchInput
        id={id}
        type="checkbox"
        checked={toggled}
        onChange={onChange}
        theme={theme}
      />
      <SwitchLabel theme={theme} htmlFor={id}>
        <SwitchButton theme={theme} />
      </SwitchLabel>
    </SwitchContainer>
  );
}

Switch.propTypes = {
  id: PropTypes.string.isRequired,
  toggled: PropTypes.bool.isRequired,
  onChange: PropTypes.func,
};

export default Switch;

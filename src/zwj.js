import * as React from "react";
import PropTypes from "prop-types";

function SvgComponent(props) {
  return (
    <svg viewBox="0 0 100 100">
      {props.title && <title>{props.title}</title>}
      <path d="M0 75l25-25L0 25zM100 75L75 50l25-25z" />
      <path d="M45 5H55V25H45z" />
      <path d="M45 28.3333333H55V48.3333333H45z" />
      <path d="M45 51.6666666H55V71.6666666H45z" />
      <path d="M45 75H55V95H45z" />
    </svg>
  );
}

SvgComponent.propTypes = {
  title: PropTypes.string,
};

export default SvgComponent;

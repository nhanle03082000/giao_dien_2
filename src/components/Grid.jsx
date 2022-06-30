import React from "react";
import PropTypes from "prop-types";

const Grid = (props) => {
  const style = {
    gap: props.gap ? `${props.gap}px` : "0",
  };

  const col = props.col ? `grid-col-${props.col}` : "";
  const mdCol = props.mdCol ? `grid-col-md-${props.mdCol}` : "";
  const smCol = props.smCol ? `grid-col-sm-${props.smCol}` : "";
  const gap = props.gapgap ? `grid-col-gap-${props.gap}` : "";

  return (
    <div className={`grid ${col} ${mdCol} ${smCol}`} style={props.style}>
      {props.children}
    </div>
  );
};

Grid.propTypes = {
  col: PropTypes.number.isRequired,
  mdCol: PropTypes.number,
  smCol: PropTypes.number,
  gap: PropTypes.number,
  style: PropTypes.string,
};

export default Grid;

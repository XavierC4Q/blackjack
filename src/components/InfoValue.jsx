import React, { memo, Fragment } from "react";

const InfoValue = ({ ...props }) => (
  <Fragment>
    <p>{props.label}: <span>{props.value}</span></p>
  </Fragment>
);

export default memo(InfoValue);

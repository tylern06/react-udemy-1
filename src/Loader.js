import React from "react";

const Loader = (props) => {
  return (
    <div>
      <div className="ui active dimmer">
        <div className="ui text loader">{props.message}</div>
      </div>
      <p />
    </div>
  );
};

//apply default props for component
Loader.defaultProps = {
  message: 'Loading...'
}

export default Loader;

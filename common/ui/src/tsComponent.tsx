import React from "react";

const TsComponent = ({ text = "" }) => {
  return (
    <div>
      <h1>This is TsComponent {text}</h1>
    </div>
  );
};

export { TsComponent };

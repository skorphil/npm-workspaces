import React from "react";

const JsComponent = ({ text = "" }) => {
  return (
    <div>
      <h1>This is JsComponent {text}</h1>
    </div>
  );
};

export { JsComponent };

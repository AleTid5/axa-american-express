import React, { forwardRef, useImperativeHandle } from "react";

export default forwardRef(function Location(props, ref) {
  useImperativeHandle(ref, () => ({
    validate: () => console.log(true),
  }));

  return (
    <div>
      <div>asdas</div>
    </div>
  );
});

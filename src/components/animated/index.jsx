import React from "react";
import { CSSTransition } from "react-transition-group";

export default function Animated({ children, ...rest }) {
  const nodeRef = React.useRef(null);
  return (
    <CSSTransition nodeRef={nodeRef} in timeout={200} classNames="scale">
      <div ref={nodeRef}>{children}</div>
    </CSSTransition>
  );
}

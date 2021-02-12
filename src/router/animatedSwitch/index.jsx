import { Switch, useLocation } from "react-router-dom";
import { CSSTransition, SwitchTransition } from "react-transition-group";

export default function AnimatedSwitch({
  children,
  classNames,
  possiblePaths,
}) {
  const location = useLocation();
  const getKey = () => {
    return (
      possiblePaths.find((p) => location.pathname.includes(p)) || location.key
    );
  };
  return (
    <SwitchTransition>
      <CSSTransition
        classNames={classNames || "fade"}
        key={getKey()}
        timeout={300}
      >
        <Switch>{children}</Switch>
      </CSSTransition>
    </SwitchTransition>
  );
}

import React from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import "./style.scss";

type Props = {
  locationKey: string | undefined;
};

const AppLayout: React.FC<Props> = ({ children, locationKey }) => {
  const ref = React.useRef<HTMLDivElement>(null);

  return (
    <SwitchTransition>
      <CSSTransition
        key={locationKey}
        classNames="route-transition"
        nodeRef={ref}
        addEndListener={done => {
          ref.current?.addEventListener("transitionend", evt => {
            if (evt.target === evt.currentTarget) done();
          });
        }}
      >
        <main ref={ref} className="app">
          {children}
        </main>
      </CSSTransition>
    </SwitchTransition>
  );
};

export default AppLayout;

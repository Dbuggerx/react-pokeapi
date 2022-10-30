import React from "react";
import { Provider } from "react-redux";
import { buildStore } from "../../redux/store";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { InjectSliceContext } from "../../redux/inject-slice-context";
import Layout from "../../components/layout";
import Details from "../../pages/details";
import List from "../../pages/list";
import { pokemonDetailsRoute } from "../../pages/routes";
import "./style.scss";

function App() {
  const { store, injectSlice } = React.useMemo(() => buildStore(), []);
  const location = useLocation();
  const ref = React.useRef<HTMLDivElement>(null);

  return (
    <Provider store={store}>
      <InjectSliceContext.Provider value={injectSlice}>
        <SwitchTransition>
          <CSSTransition
            appear={false}
            in={false}
            classNames="route__transition"
            key={location.pathname}
            nodeRef={ref}
            addEndListener={(done) => {
              ref.current?.addEventListener("transitionend", (evt) => {
                done();
              });
            }}
          >
            <Routes location={location}>
              <Route
                path="*"
                element={
                  <Layout key={location.key} ref={ref} className="route" />
                }
              >
                <Route path="*" element={<Navigate to="/" replace />} />
                <Route index element={<List />} />
                <Route path={pokemonDetailsRoute.path} element={<Details />} />
              </Route>
            </Routes>
          </CSSTransition>
        </SwitchTransition>
      </InjectSliceContext.Provider>
    </Provider>
  );
}

export default App;

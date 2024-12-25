import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import withRouter from "./withRouter";
import { Home } from "./components/home";
// import { Portfolio } from "../pages/portfolio";
// import { ContactUs } from "../pages/contact";
// import { About } from "../pages/about";
import { Socialicons } from "./components/icons";
import { CSSTransition, TransitionGroup } from "react-transition-group";

interface AnimatedRoutesProps {
  location: ReturnType<typeof useLocation>;
}

const AnimatedRoutes: React.FC<AnimatedRoutesProps> = withRouter(({ location }) => (
  <TransitionGroup>
    <CSSTransition
      key={location.key}
      timeout={{
        enter: 400,
        exit: 400,
      }}
      classNames="page"
      unmountOnExit
    >
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<ContactUs />} /> */}
        <Route path="*" element={<Home />} />
      </Routes>
    </CSSTransition>
  </TransitionGroup>
));

const AppRoutes: React.FC = () => {
  return (
    <div className="s_c">
       {/* <AnimatedRoutes /> */}
      <Socialicons />
    </div>
  );
};

export default AppRoutes;

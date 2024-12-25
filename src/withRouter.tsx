import React from "react";
import { useLocation, useNavigate, useParams, Location, NavigateFunction } from "react-router-dom";

interface WithRouterProps {
  location: Location;
  navigate: NavigateFunction;
  params: Record<string, string | undefined>;
}

function withRouter<P>(Component: React.ComponentType<P & WithRouterProps>) {
  const ComponentWithRouterProp: React.FC<P> = (props) => {
    const location = useLocation();
    const navigate = useNavigate();
    const params = useParams<Record<string, string>>();

    return (
      <Component
        {...props}
        location={location}
        params={params}
        navigate={navigate}
      />
    );
  };

  return ComponentWithRouterProp;
}

export default withRouter;

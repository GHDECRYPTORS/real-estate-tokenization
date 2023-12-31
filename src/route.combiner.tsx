import React, { ReactNode } from "react";
import { Route, Routes } from "react-router-dom";
import PublicLayout from "./layouts/public.layout";

interface PrivateRouteProps {
  auth: boolean; // Replace 'boolean' with the actual type of 'auth'
  key: any;
  component: any;
  path: any;
}

interface RouteConfig {
  Private?: boolean | undefined;
  exact?: boolean;
  Layout?: React.ComponentType<{ children: ReactNode }>;
  modules?: {
    path: string;
    Component: React.ComponentType;
    exact?: boolean;
  }[];
  Component: React.ComponentType;
  path: string;
}

interface RoutesProps {
  PrivateRoute: React.ComponentType<PrivateRouteProps>;
  routes: RouteConfig[];
  auth: boolean; // Replace 'boolean' with the actual type of 'auth'
  PageNotFound: React.ComponentType;
}

const DefaultLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <>{children}</>;
};

const _Routes: React.FC<RoutesProps> = ({
  PrivateRoute,
  routes,
  auth,
  PageNotFound,
}) => {
  const RoutesMap = routes.map(
    ({
      Private,
      Layout = DefaultLayout,
      // modules,
      Component,
      path,
    }: RouteConfig) => {
      const ComponentWithLayout: React.FC = () => {
        return (
          <Layout>
            <Component />
          </Layout>
        );
      };

      return Private ? (
        <Route
          Component={() => (
            <PrivateRoute
              key={path}
              component={ComponentWithLayout}
              path={path}
              auth={auth}
            />
          )}
          key={path}
          path={path}
        ></Route>
      ) : (
        <Route key={path} Component={ComponentWithLayout} path={path} />
      );
    }
  );
  // RoutesMap.push();
  return (
    <Routes>
      <Route
        path="*"
        element={
          <PublicLayout>
            <PageNotFound />
          </PublicLayout>
        }
      />
      {...RoutesMap}
    </Routes>
  );
};

export default _Routes;

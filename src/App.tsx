import { BrowserRouter as Router } from "react-router-dom";
// import Home from "./pages/Home";
import RouterCombiner from "./route.combiner";
import PrivateRoute from "./private.routes";
import { ReactNode } from "react";

const Pages = {
  IndexPage: () => (
    <div>
      <h1>Here Is Index Page</h1>
    </div>
  ),
  AdminPage: () => <div>Hi I'am Admin Page</div>,
  LoginPage: () => <div>Please Login,This is Login Page</div>,
  AdminNewUser: () => <div>I'am New User Page,I'am Under Admin Page</div>,
  NotFound: () => <div>404 NotFound</div>,
};
const Layouts = {
  AdminLayout: ({ children }: { children: ReactNode }) => (
    <div>
      <h1>Admin Layout</h1>
      <div>{children}</div>
    </div>
  ),
  PublicLayout: ({ children }: { children: ReactNode }) => (
    <div>
      <h1>Public Layout</h1>
      <div>{children}</div>
    </div>
  ),
};

const Routes = [
  {
    path: "/",
    Component: Pages.IndexPage,
    Layout: Layouts.PublicLayout,
  },
  {
    path: "/login",
    Component: Pages.LoginPage,
    exact: true,
  },
  {
    path: "/admin",
    Component: Pages.AdminPage,
    Private: true,
    Layout: Layouts.AdminLayout,
    modules: [
      {
        path: "/new_product",
        Component: () => <div>New Product</div>,
        exact: true,
      },
      {
        path: "/delete_product",
        Component: () => <div>Delete Product</div>,
        exact: true,
      },
    ],
  },
  {
    path: "/users",
    Component: () => <div>User Component Index</div>,
    Private: true,
    Layout: Layouts.PublicLayout,
    modules: [
      {
        path: "/new_product",
        Component: () => <div>User New Product</div>,
        exact: true,
      },
      {
        path: "/delete_product",
        Component: () => <div>User Delete Product</div>,
        exact: true,
      },
    ],
  },
  {
    path: "",
    Component: Pages.NotFound,
  },
];

const App = () => {
  const auth = false; /* Its Only Use For Now,I Handle It With ReduxStore */
  return (
    <div>
      <Router>
        <RouterCombiner
          routes={Routes}
          PrivateRoute={PrivateRoute}
          auth={auth}
        />
      </Router>
    </div>
  );
};
export default App;

import { BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import RouterCombiner from "./route.combiner";
import PrivateRoute from "./private.routes";
import { ReactNode } from "react";
import PublicLayout from "./layouts/public.layout";
import Explore from "./pages/Explore";
import NotFound from "./pages/404";

const Pages = {
  IndexPage: Home,
  AdminPage: () => <div>Hi I'am Admin Page</div>,
  LoginPage: () => <div>Please Login,This is Login Page</div>,
  AdminNewUser: () => <div>I'am New User Page,I'am Under Admin Page</div>,
  NotFound,
  Explore,
};
const Layouts = {
  AdminLayout: ({ children }: { children: ReactNode }) => (
    <div>
      <h1>Admin Layout</h1>
      <div>{children}</div>
    </div>
  ),
  PublicLayout: PublicLayout,
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
    path: "/explore",
    Component: Pages.Explore,
    // Private: true,
    Layout: Layouts.PublicLayout,
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
          PageNotFound={Pages.NotFound}
        />
      </Router>
    </div>
  );
};
export default App;

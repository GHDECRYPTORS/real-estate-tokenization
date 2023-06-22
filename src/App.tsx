import Createnft from "./pages/createnft";
import Explore from "./pages/Explore";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/404";
import PrivateRoute from "./private.routes";
import Profile from "./pages/Profile";
import PublicLayout from "./layouts/public.layout";
import { ReactNode } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import RouterCombiner from "./route.combiner";
import SingleCollection from "./pages/collections/_id";
import SingleCollectionToken from "./pages/collections/_token_id";
import { ChainContext, chainClass } from "./chain.resolver";

const Pages = {
  IndexPage: Home,
  AdminPage: () => <div>Hi I'am Admin Page</div>,
  LoginPage: Login,
  AdminNewUser: () => <div>I'am New User Page,I'am Under Admin Page</div>,
  NotFound,
  Explore,
  SingleCollection,
  SingleCollectionToken,
  Profile,
  Createnft,
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
    Layout: Layouts.PublicLayout,
  },
  {
    path: "/explore",
    Component: Pages.Explore,
    Layout: Layouts.PublicLayout,
  },
  {
    path: "/profile",
    Component: Pages.Profile,
    Layout: Layouts.PublicLayout,
    // Private: true
  },
  {
    path: "/collections/:id",
    Component: Pages.SingleCollection,
    Layout: Layouts.PublicLayout,
  },
  {
    path: "/collections/:id/:tokenId",
    Component: Pages.SingleCollectionToken,
    Layout: Layouts.PublicLayout,
  },
  {
    path: "/createnft",
    Component: Pages.Createnft,
    Layout: Layouts.PublicLayout,
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
      <ChainContext.Provider value={chainClass}>
        <Router>
          <RouterCombiner
            routes={Routes}
            PrivateRoute={PrivateRoute}
            auth={auth}
            PageNotFound={Pages.NotFound}
          />
        </Router>
      </ChainContext.Provider>
    </div>
  );
};
export default App;

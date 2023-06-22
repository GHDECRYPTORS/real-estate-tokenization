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
import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { auroraTestnet } from "wagmi/chains";
import { hederaMainnet, hederaTestnet } from "./services/chains";

const chain = import.meta.env.VITE_CHAIN_NAME || "aurora-testnet";

const aurorachains =  [auroraTestnet] as Array<
  typeof auroraTestnet
  >;
  const hederachains =  [hederaMainnet, hederaTestnet, auroraTestnet] as Array<
  typeof auroraTestnet
  >;

const chains = chain === "aurora-testnet" ? aurorachains : hederachains;

const projectId = "02c135931686e1628630c41236d10acf";

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })]);
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, version: 2, chains }),
  publicClient,
});
const ethereumClient = new EthereumClient(wagmiConfig, chains);

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
        <WagmiConfig config={wagmiConfig}>
          <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
          <Router>
            <RouterCombiner
              routes={Routes}
              PrivateRoute={PrivateRoute}
              auth={auth}
              PageNotFound={Pages.NotFound}
            />
          </Router>
        </WagmiConfig>
      </ChainContext.Provider>
    </div>
  );
};
export default App;

// import { ChainContext, chainClass } from "./chain.resolver";
import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
import { WagmiConfig, configureChains, createConfig } from "wagmi";

import Createnft from "./pages/createnft";
import Explore from "./pages/Explore";
import Home from "./pages/Home";
import Login from "./pages/Login";
import MyTokens from "./pages/MyTokens";
import NotFound from "./pages/404";
import PrivateRoute from "./private.routes";
import Profile from "./pages/Profile";
import PublicLayout from "./layouts/public.layout";
import { ReactNode, useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import RouterCombiner from "./route.combiner";
import SingleCollection from "./pages/collections/address";
import SingleCollectionToken from "./pages/collections/_token_id";
import { Web3Modal, Web3NetworkSwitch } from "@web3modal/react";
// import { aurora, auroraTestnet } from "wagmi/chains";
import getCurrChainId from "./helpers/getChainId";
import { areaonTestnet, lightLinkTestnet } from "./services/chains";

// import { hederaMainnet, hederaTestnet } from "./services/chains";

// const aurorachains = [auroraTestnet];
//   const chains = aurorachains;
// const hederachains =  [hederaMainnet, hederaTestnet, auroraTestnet] as Array<
// typeof auroraTestnet
// >;

// const chains = chain === "aurora-testnet" ? aurorachains : hederachains;
const chains = [lightLinkTestnet, areaonTestnet];

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
  MyTokens,
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
    path: "/collections/:address",
    Component: Pages.SingleCollection,
    Layout: Layouts.PublicLayout,
  },
  {
    path: "/collections/:address/:tokenId",
    Component: Pages.SingleCollectionToken,
    Layout: Layouts.PublicLayout,
  },
  {
    path: "/createnft",
    Component: Pages.Createnft,
    Layout: Layouts.PublicLayout,
  },
  {
    path: "/my-tokens",
    Component: Pages.MyTokens,
    Layout: Layouts.PublicLayout,
  },
  {
    path: "",
    Component: Pages.NotFound,
  },
];

const App = () => {
  const auth = false; /* Its Only Use For Now,I Handle It With ReduxStore */
  const [_, setcurrentChain] = useState(0);
  const [loading, setLoading] = useState("");
  let interval;

  useEffect(() => {
    if (chains[0].id != wagmiConfig.lastUsedChainId) {
      interval = setInterval(function () {
        if (chains[0].id == wagmiConfig.lastUsedChainId) {
          clearInterval(interval);
          setLoading(" ");
        }
      }, 1000);
    }

    if (!!window.ethereum == false) return;

    window.ethereum.on("chainChanged", function (networkId: any) {
      setcurrentChain(+networkId);
    });

    window.ethereum.on("chainIdChanged", (networkId: any) => {
      setcurrentChain(+networkId);
    });

    getCurrChainId().then((networkId: any) => setcurrentChain(networkId));
  }, []);

  if (chains[0].id != wagmiConfig.lastUsedChainId) {
    return (
      <WagmiConfig config={wagmiConfig}>
        <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
        <div className="container mt-4">
          Switch <Web3NetworkSwitch />
        </div>
      </WagmiConfig>
    );
  }

  return (
    <div>
      {loading}
      {
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
      }
    </div>
  );
};
const ipfsTohttp = (url: string) => {
  if (url == null) return "";
  url = url.trim();
  return url.startsWith("ipfs://")
    ? `https://ipfs.io/ipfs/${url.replace("ipfs://", "")}`
    : url;
};
window.ipfsTohttp = ipfsTohttp;

export default App;

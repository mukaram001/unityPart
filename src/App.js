import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import HomeMain from "./components/home/HomeMain";
import Docs from "./components/docs/DocsMain";
import Blog from "./components/blog/BlogMain";
import Doa from "./components/dao/DAOMain";
import Game from "./Game";
import EventsMain from "./components/events/EventsMain";
import BuilderGame from "./BuilderGame";
import DocsDAO from "./components/docs/docsPages/World/DocsDAO";
import FQA from "./components/docs/docsPages/World/FQA";
import AddScenes from "./components/builder/AddScenes";
import BuilderMain from "./components/builder/BuilderMain";
import ConnectScreen from "./components/builder/ConnectScreen";
import Names from "./components/builder/builderMain/Names";
import Land from "./components/builder/builderMain/Land";
import NamesDetail from "./components/builder/builderMain/NamesDetail";
import Collection from "./components/builder/builderMain/Collection";
import { useFetchPublicData } from "./components/store/hooks";
import { useMoralis } from "react-moralis";
import { LocalStoragePersistanceService } from "./persist/LocalStorage";
import { Provider } from "react-redux";
import store from "./components/store";
import MetaGlasses from "./components/builder/MetaGlasses";
import MetaGlassItem from "./components/builder/MetaGlassItem";
function App() {
  useFetchPublicData();
  const connectorId = localStorage.getItem("connectorId");
  const { isWeb3Enabled, enableWeb3, isAuthenticated, isWeb3EnableLoading } = useMoralis();
  // Moralis auto connection on refresh
  useEffect(() => {
    if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading && connectorId) {
      enableWeb3({
        provider: connectorId,
      });
    }
  }, [isAuthenticated, isWeb3Enabled]);
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={HomeMain} />
          <Route path="/event" component={EventsMain} />
          <Route exact path="/docs" component={Docs} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/dao" component={Doa} />
          <Route path="/builder" component={BuilderGame} />
          <Route path="/Game" component={Game} />

          {/* ------------------Doc Pages---------------------------------------------------- */}
          <Route path="/DocsDAO" component={DocsDAO} />
          <Route path="/FQA" component={FQA} />
          {/* -------------------------------Builder Pages------------------------------------------ */}
          <Route path='/builder_main' component={BuilderMain}/>
         
          <Route path='/connect' component={ConnectScreen}/>
          <Route path='/names' component={Names}/>
          <Route path='/names_detail' component={NamesDetail}/>
          <Route path='/builder_scene' component={AddScenes} />
          <Route path='/collection' component={Collection}/>
          <Route path='/metaGlass' component={MetaGlasses}/>
          <Route path='/land' component={Land} /> 
          <Route path='/add_item' component={MetaGlassItem}/>
          <Redirect to="/" />
        </Switch>
      </Router>
    </>
  );
}

export default App;

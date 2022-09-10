import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import HomeNavbar from "./components/navbars/HomeNavbar";
import "./App.css";
const Game = () => {
  // const ref = React.useRef();
  // const onLoad = () => {
  //   const url = ref.current.contentWindow.location.href;
  // };

  const { unityProvider } = useUnityContext({
    loaderUrl: "NFT/Build/Decentraland Builds.loader.js",
    dataUrl: "NFT/Build/Decentraland Builds.data",
    frameworkUrl: "NFT/Build/Decentraland Builds.framework.js",
    codeUrl: "NFT/Build/Decentraland Builds.wasm",
  });

  return (
    <>
      <HomeNavbar />

      <Unity unityProvider={unityProvider} className='w-100' />

      {/* <div className="nftbg text-center pt-4 rounded">
          <iframe
            style={{ width: "98vw", height: "720px"}}
            display="initial"
            position="relative"
            scrolling="no"
            onLoad={onLoad}
            src="../NFT"
            ref={ref}
            title="myFrame"
          ></iframe>
        </div> */}
    </>
  );
};

export default Game;

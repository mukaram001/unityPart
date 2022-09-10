import React from 'react'
import HomeNavbar from './components/navbars/HomeNavbar'

const BuilderGame = () => {
    const ref = React.useRef();
    const onLoad = () => {
      const url = ref.current.contentWindow.location.href;
    };
  return (
    <>
        <HomeNavbar/>
        <div className="nftbgBuilder">
        <iframe
            style={{width: "1280px", height: "680px", overflow: "hidden" ,paddingTop:''}}
            display="initial"
            position="relative"
            scrolling="no"
            onLoad={onLoad}
            src="../builder"
            ref={ref}
            title="myFrame"
          ></iframe>
        </div>
    </>
  )
}

export default BuilderGame
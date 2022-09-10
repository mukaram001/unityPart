import React, { useEffect, useState } from "react";
import BuilderAll from "./BuilderAll";
import BuilderNavbar from "../../navbars/BuilderNavbar";
import { Atlas } from "decentraland-ui";
import SigninMessage from "./SigninMessage";
import { useUser } from "../../store/hooks";
import "./style.css";
import BuilderFooter from "../../footers/BuilderFooter";
import Navbar from "../../navbars/Navbar";

const Names = () => {
  const user = useUser();
  const [tiles, setTiles] = useState([]);
  useEffect(() => {
    (async () => {
      const tilee = await Atlas.fetchTiles();
      setTiles(tilee);
    })();
  }, []);
  let selected = [];

  function isSelected(x, y) {
    return selected.some((coord) => coord.x === x && coord.y === y);
  }
  const selectedStrokeLayer = (x, y) => {
    return isSelected(x, y) ? { color: "#ff0044", scale: 1.4 } : null;
  };
  const selectedFillLayer = (x, y) => {
    return isSelected(x, y) ? { color: "#ff9990", scale: 1.2 } : null;
  };

  const handleClick = (x, y) => {
    console.log(x, y);
    if (isSelected(x, y)) {
      selected = selected.filter((coord) => coord.x !== x || coord.y !== y);
    } else {
      selected.push({ x, y });
    }
  };
  return (
    <>
      {/* <BuilderNavbar /> */}
      <Navbar/>
      <div className="row m-0 vh-100">
        <div className="col-md-2 bilderAllMain">
          <BuilderAll />
        </div>
        <div className="col-md-10 p-0 ">
          <div className="AddScenesMain vh-100">
            {!user?.user ? (
              <SigninMessage />
            ) : (
              <div className="">
                <div className="col-sm-12 AtlasBox">
                  <div className="AtlasSize">
                    <Atlas tiles={tiles} layers={[selectedFillLayer, selectedStrokeLayer]} onClick={handleClick} />
                  </div>
                </div>
              </div>
            )}
            <BuilderFooter />
          </div>
        </div>
      </div>
    </>
  );
};

export default Names;
 
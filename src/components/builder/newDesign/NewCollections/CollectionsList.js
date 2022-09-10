import React from "react";
import { Card } from "../Card";
import jecket from "../../../../assests/images/jecket.png";
import { NavLink } from "react-router-dom";

const CollectionsList = ({ CollectionData }) => {
  return (
    <div className="p-4">
      <div className="collection-list-content">
        {CollectionData.map((collection, ind) => {
          return (
            <Card key={ind}>
              <NavLink to={`/add_item/${collection?._id}`}>
                <>
                  <div className="d-flex justify-content-center">
                    <img className="p-2" src={jecket} alt="collection" />
                  </div>
                  <div className="collection-list-text">
                    <div>
                      <h5 className="ColorWhite">{collection?.name}</h5>
                      <p className="text-light-gray">collection</p>
                    </div>
                    <div className="collection-list-quantity">
                      <h5 className="text-light-mehroon">0</h5>
                      <p className="text-light-gray">Items</p>
                    </div>
                  </div>
                </>
              </NavLink>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default CollectionsList;

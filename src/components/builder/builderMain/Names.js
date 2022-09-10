import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdUpload } from "react-icons/md";
import { GoPlus } from "react-icons/go";
import { Card } from "../newDesign/Card";
import BuilderAll from "./BuilderAll";
import BuilderNavbar from "../../navbars/BuilderNavbar";
import { useUser } from "../../store/hooks";
import SigninMessage from "./SigninMessage";
import BuilderFooter from "../../footers/BuilderFooter";
import Navbar from "../../navbars/Navbar";
import { getAllNamesRequest } from "../../../services/requests";

const Names = () => {
  const user = useUser();
  const [namesList, setNamesList] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getAllNamesRequest();
        setNamesList(result?.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="">
      {/* <BuilderNavbar /> */}
      <Navbar />
      <div className="row m-0 vh-100">
        <div className="col-md-2 bilderAllMain">
          <BuilderAll />
        </div>
        <div className="col-md-10 AddScenesMain ">
          <div className=" ">
            <div className="container  p-5">
              {!user?.user ? (
                <SigninMessage />
              ) : (
                <>
                  <div className="col-sm-12">
                    <div className="d-flex justify-content-between">
                      <p className="bilderResult">
                        <span className="textStylish scenes">Names</span>
                        &nbsp; {namesList?.length} Result
                      </p>
                      <p className="justify-content-between  d-flex">
                        <span className="builderIconMain">
                          <Link className="plusicon" to={"/names_detail"}>
                            {" "}
                            <GoPlus />{" "}
                          </Link>
                        </span>
                      </p>
                    </div>
                    {namesList.length === 0 ? (
                      <div className="builderContainer d-flex align-items-center justify-content-center">
                        <div>
                          <div className="text-center">
                            <Link to="/names_detail">
                              {" "}
                              <button className="BuilderPlusBtn">
                                <GoPlus />
                              </button>
                            </Link>
                          </div>
                          <div className="text-center">It looks like you don't have any Scenes</div>
                          <div className="text-center">
                            <span>
                              <Link className="textStylish">
                                <strong>Click here</strong>
                              </Link>
                            </span>{" "}
                            to get started.
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="p-4">
                        <div className="collection-list-content">
                          {namesList.map((item, ind) => {
                            return (
                              <Card key={ind}>
                                <div className="">
                                  <h5 className="name-large-text">{item?.nft?.name}</h5>
                                  <h5 className="name-small-text">{item?.nft?.name}</h5>
                                </div>
                                <div className="collection-list-text">
                                  <div>
                                    <h5 className="ColorWhite">{item?.nft?.name}</h5>
                                    <p className="text-light-gray text-uppercase">name</p>
                                  </div>
                                  <div className="collection-list-quantityy d-flex gap-2">
                                    <h5 className="text-light-mehroon m-0">0</h5>
                                    <p className="text-light-gray">Mana</p>
                                  </div>
                                </div>
                              </Card>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                </>
              )}
              <div style={{ paddingTop: "5%" }}>
                <BuilderFooter />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Names;

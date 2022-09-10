import React from 'react'
import { Link } from 'react-router-dom';
import SectionTwoVedio from "../../assests/vedios/Section 1.mp4";
import "../../assests/styles/home/HomeStyle.css";
import sectimg from '../../assests/images/SectionThreePic.png'
const HomevideoSectthree = () => {
  return (
    <div style={{position:'relative',height:'95vh'}} className='homevidesct'>
        <div className='videosect'>
          <video autoPlay loop muted className="SectionOneVedio">
            <source src={SectionTwoVedio} type="video/mp4" />
          </video>
        </div>
        <div className=" container homesectthreetextarea freelanone1" id="homesectcontainer">
          <div className="HomeTextMain homsecttworight">
            <div className="row ">
              <div className='col-md-6 col-sm-12'><img src={sectimg} alt='img' className='sectmobileimg'/> </div>
              <div className="col-md-6  col-sm-12 setTextBody" id="homesectone">
                <p className="welcome ExploreBorder freelnace-exploreborder">EXPLORE</p>
                <p className="homeSubHeading mb-1 ">
                  Lose yourself in an amazing evolving world
                </p>
                <p className="SectionOneText mt-3">
                  Explore LANDs owned by users to experience incredible scenes and
                  structures. From a space adventure to a medieval dungeon maze to
                  entire villages crafted a space adventure to a medieval dungeon
                  maze from the minds of community members.
                </p>
                <button className="homeSectionOneBtn mt-4">
                  <Link to="/LoadingScreenOne" className="Links">
                    Start Exploring
                  </Link>
                </button>
                
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default HomevideoSectthree
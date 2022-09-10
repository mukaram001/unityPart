import React from 'react'
import { Link } from 'react-router-dom';
import SectionThreeVedio from "../../assests/vedios/Section 2.mp4";
import "../../assests/styles/home/HomeStyle.css";
import sectimg from '../../assests/images/img-2.png'
const Homevideosect = () => {
  return (
    <div style={{position:'relative',height:'95vh'}} className='homevidesct'>
        <div className='videosect'>
            <video autoPlay loop muted className="SectionOneVedio">
            <source src={SectionThreeVedio} type="video/mp4" />
            </video>
        </div>
        <div className=" container  homesectthreetextarea freelanone2" id="homesectcontainers">
          <div className="HomeTextMain homesectoneleft">
            <div className="row tabletSet">
            <div className='col-md-6 col-sm-12 smallImg' id='homesectleftone'><img src={sectimg} alt='img' className='sectmobileimg'/> </div>
              <div className="col-md-8 setTextBody" id="homesectone">
                <p className="welcome createBorder mb-0 ">CREATE</p>
                <p className="homeSubHeading homeSubHeading1 mb-1 mt-3">
                    TEST THE LIMITS OF YOUR IMAGINATION
                </p>
                <p className="SectionOneText mb-5 w-70" id='limittextsect'>
                    Create scenes, artworks, challenges and more, using the simple
                    Builder tool, the SDK provides the tools to fill the
                    world with social games and applications.
                </p>

                <Link
                    to="/LoadingScreenTwo"
                    className=" homeSectionOneBtn Links"
                >
                    Start Exploring
                </Link>
              
              </div>
            </div>
          </div>
        </div>
     
    </div>
  )
}

export default Homevideosect
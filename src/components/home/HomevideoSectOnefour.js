import React from 'react'
import { Link } from 'react-router-dom';
import SectionFourVedio from '../../assests/vedios/Section 3.mp4'
import "../../assests/styles/home/HomeStyle.css";
import imgfour from '../../assests/images/img-3.png'
const HomevideoSectOnefour = () => {
  return (
    <div style={{position:'relative',height:'80vh'}} className='homevidesct'>
        <div className='videosect'>
          <video autoPlay loop muted className="SectionOneVedio">
            <source src={SectionFourVedio} type="video/mp4" />
          </video>
        </div>
        <div className=" container homesectthreetextarea freelanone3" id="homesectcontainer">
          <div className="HomeTextMain homsecttworight">
            <div className="row ">
            <div className='col-md-6'><img src={imgfour} alt='img' className='sectmobileimg'/> </div>
              <div className="col-md-6 setTextBody" id="homesectone">
                <p className="welcome mb-0 createBorder">TRADE</p>
                <p className="homeSubHeading mb-1 mt-3">
                  The virtual destination for digital assets
                </p>
                <p className="SectionOneText mt-3">
                  Buy and sell LAND, Estates, Avatar wearables and names in the
                  Mania Lands Marketplace: stocking the very best digital goods. Stocking the very best digital goods
                  and paraphernalia backed by the ethereum blockchain.
                </p>
                <button className="homeSectionOneBtn mt-4">
                  <Link to="/ComingSoon" className="Links">
                    Start Browsing
                  </Link>
                </button>
              
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default HomevideoSectOnefour
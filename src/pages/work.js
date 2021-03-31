import React, { useEffect } from 'react';
import '../styles/work.scss'
import phone from "../images/phone.svg"
import Navbarr from './nav'
import Workcarousal from '../components/workcarousal'
import Contact from './contact'
import "../styles/Workcarousal.scss"
import { Dropdown } from 'react-bootstrap'
import Footer from "../components/footer"
import { graphql, useStaticQuery } from "gatsby"
import Aos from "aos";
import "aos/dist/aos.css";

const Work = () => {
    useEffect(() => {
        Aos.init({duration: 2000});
      }, [])
    const data = useStaticQuery(graphql`
    query {
    work: file(relativePath: {eq: "work.md"}) {
      id
      childMarkdownRemark {
        frontmatter {
          title
          headding
          bannerpara
          workMenu{
            id
            li
          }
          workcard{
            id
            class
            carousalclass
            h1
            address
            cost
            reviewpara
            name
            location
          }
        }
      }
    }
  }
  `)
    return (
        <div className="work">
            <div className="work_banner">
                <Navbarr />
                <div className="work_components">
                    <h1 data-aos="fade-down" data-aos-duration="5000" data-aos-easing="ease-in-back" data-aos-offset="0">{data.work.childMarkdownRemark.frontmatter.headding}</h1>
                    <p data-aos="fade-down" data-aos-duration="50000000000000000" data-aos-easing="ease-in-back" data-aos-offset="0">{data.work.childMarkdownRemark.frontmatter.bannerpara}</p>
                </div>
            </div>
            <div className="workMenu">
                <ul>
                {data.work.childMarkdownRemark.frontmatter.workMenu.map(workmenus => 
                    <li key={workmenus.id}>{workmenus.li}</li>
                    )}
                </ul>
            </div>

            <div id="workmenu2">
            <Dropdown id="ul">
                <Dropdown.Toggle  id="dropdown-basic">
                All Works
            </Dropdown.Toggle>

                <Dropdown.Menu id="menu">
                <ul>
                {data.work.childMarkdownRemark.frontmatter.workMenu.map(workmenus => 
                    <li key={workmenus.id}>{workmenus.li}</li>
                    )}
                </ul>
                </Dropdown.Menu>
            </Dropdown>
            </div>

            <div className="work_carousal_all_cards">
            {data.work.childMarkdownRemark.frontmatter.workcard.map(workcards => 
                <div className={workcards.class} data-aos="fade-down" data-aos-easing="ease-in-back" data-aos-offset="0">
                    <div className={workcards.carousalclass}>
                        <Workcarousal />
                    </div>

                    <div className="work_carousal_card_block2_txt">
                        <h1>{workcards.h1}</h1>
                        <div className="work_para">
                            <p>{workcards.address}</p>
                            <p className="p20">|</p>
                            <p>{workcards.cost}</p>
                        </div>
                    </div>

                    <div className="work_carousal_card_block2_reviewcard">
                        <img src="https://i.ibb.co/QnnqCDv/quatation.png" alt="workquatation" className="workquatation" />
                        <p>{workcards.reviewpara}</p>
                        <div className="review_card_footer">
                            <div className="review_card_footer_details">
                                <h1>{workcards.name}</h1>
                                <p>{workcards.location}</p>
                            </div>
                            <div className="review_card_footer_contact">
                                <p><img src={phone} alt="icon" className="phone_icon" />CONTACT CUSTOMER</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            </div>
            <Contact />
            <Footer/>
        </div>
    )
}
export default Work;
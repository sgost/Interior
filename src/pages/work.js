import React, { useEffect, useState } from 'react';
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
    const [toggleState, setToggleState] = useState(1);



    const toggleTab = (index) => {
        setToggleState(index);
    };

    useEffect(() => {
        Aos.init({ duration: 2000 });
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
          Bedroom{
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
          ModularKitchen{
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
          KidsBedroom{
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
          BedLivingRoomroom{
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
          DiningRoom{
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
          Bathroom{
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
          Wardrobe{
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
          SpaceSaving{
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
                        <li className={toggleState === (workmenus.id) ? "workli active-workli" : "workli"} 
                            onClick={() => toggleTab(workmenus.id)} role="presentation">{workmenus.li}</li>
                    )}
                </ul>
            </div>

            <div id="workmenu2">
                <Dropdown id="ul">
                    <Dropdown.Toggle id="dropdown-basic">
                        All Works
            </Dropdown.Toggle>

                    <Dropdown.Menu id="menu">
                        <ul>
                            {data.work.childMarkdownRemark.frontmatter.workMenu.map(workmenus =>
                                <li className={toggleState === (workmenus.id) ? "workli active-workli" : "workli"}
                                    onClick={() => toggleTab(workmenus.id)} role="presentation">{workmenus.li}</li>
                            )}
                        </ul>
                    </Dropdown.Menu>
                </Dropdown>
            </div>

            <div className={toggleState === 1 ? "work_carousal_all_cards  active-work_carousal_all_cards" : "work_carousal_all_cards"}>
                {data.work.childMarkdownRemark.frontmatter.Bedroom.map(Bedrooms =>
                    <div className={Bedrooms.class} data-aos="fade-down" data-aos-easing="ease-in-back" data-aos-offset="0">
                        <div className={Bedrooms.carousalclass}>
                            <Workcarousal />
                        </div>

                        <div className="work_carousal_card_block2_txt">
                            <h1>{Bedrooms.h1}</h1>
                            <div className="work_para">
                                <p>{Bedrooms.address}</p>
                                <p className="p20">|</p>
                                <p>{Bedrooms.cost}</p>
                            </div>
                        </div>

                        <div className="work_carousal_card_block2_reviewcard">
                            <img src="https://i.ibb.co/QnnqCDv/quatation.png" alt="workquatation" className="workquatation" />
                            <p>{Bedrooms.reviewpara}</p>
                            <div className="review_card_footer">
                                <div className="review_card_footer_details">
                                    <h1>{Bedrooms.name}</h1>
                                    <p>{Bedrooms.location}</p>
                                </div>
                                <div className="review_card_footer_contact">
                                    <p><img src={phone} alt="icon" className="phone_icon" />CONTACT CUSTOMER</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div className={toggleState === 2 ? "work_carousal_all_cards  active-work_carousal_all_cards" : "work_carousal_all_cards"}>
                {data.work.childMarkdownRemark.frontmatter.ModularKitchen.map(ModularKitchens =>
                    <div className={ModularKitchens.class} data-aos="fade-down" data-aos-easing="ease-in-back" data-aos-offset="0">
                        <div className={ModularKitchens.carousalclass}>
                            <Workcarousal />
                        </div>

                        <div className="work_carousal_card_block2_txt">
                            <h1>{ModularKitchens.h1}</h1>
                            <div className="work_para">
                                <p>{ModularKitchens.address}</p>
                                <p className="p20">|</p>
                                <p>{ModularKitchens.cost}</p>
                            </div>
                        </div>

                        <div className="work_carousal_card_block2_reviewcard">
                            <img src="https://i.ibb.co/QnnqCDv/quatation.png" alt="workquatation" className="workquatation" />
                            <p>{ModularKitchens.reviewpara}</p>
                            <div className="review_card_footer">
                                <div className="review_card_footer_details">
                                    <h1>{ModularKitchens.name}</h1>
                                    <p>{ModularKitchens.location}</p>
                                </div>
                                <div className="review_card_footer_contact">
                                    <p><img src={phone} alt="icon" className="phone_icon" />CONTACT CUSTOMER</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div className={toggleState === 3 ? "work_carousal_all_cards  active-work_carousal_all_cards" : "work_carousal_all_cards"}>
                {data.work.childMarkdownRemark.frontmatter.KidsBedroom.map(KidsBedrooms =>
                    <div className={KidsBedrooms.class} data-aos="fade-down" data-aos-easing="ease-in-back" data-aos-offset="0">
                        <div className={KidsBedrooms.carousalclass}>
                            <Workcarousal />
                        </div>

                        <div className="work_carousal_card_block2_txt">
                            <h1>{KidsBedrooms.h1}</h1>
                            <div className="work_para">
                                <p>{KidsBedrooms.address}</p>
                                <p className="p20">|</p>
                                <p>{KidsBedrooms.cost}</p>
                            </div>
                        </div>

                        <div className="work_carousal_card_block2_reviewcard">
                            <img src="https://i.ibb.co/QnnqCDv/quatation.png" alt="workquatation" className="workquatation" />
                            <p>{KidsBedrooms.reviewpara}</p>
                            <div className="review_card_footer">
                                <div className="review_card_footer_details">
                                    <h1>{KidsBedrooms.name}</h1>
                                    <p>{KidsBedrooms.location}</p>
                                </div>
                                <div className="review_card_footer_contact">
                                    <p><img src={phone} alt="icon" className="phone_icon" />CONTACT CUSTOMER</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div className={toggleState === 4 ? "work_carousal_all_cards  active-work_carousal_all_cards" : "work_carousal_all_cards"}>
                {data.work.childMarkdownRemark.frontmatter.BedLivingRoomroom.map(BedLivingRoomrooms =>
                    <div className={BedLivingRoomrooms.class} data-aos="fade-down" data-aos-easing="ease-in-back" data-aos-offset="0">
                        <div className={BedLivingRoomrooms.carousalclass}>
                            <Workcarousal />
                        </div>

                        <div className="work_carousal_card_block2_txt">
                            <h1>{BedLivingRoomrooms.h1}</h1>
                            <div className="work_para">
                                <p>{BedLivingRoomrooms.address}</p>
                                <p className="p20">|</p>
                                <p>{BedLivingRoomrooms.cost}</p>
                            </div>
                        </div>

                        <div className="work_carousal_card_block2_reviewcard">
                            <img src="https://i.ibb.co/QnnqCDv/quatation.png" alt="workquatation" className="workquatation" />
                            <p>{BedLivingRoomrooms.reviewpara}</p>
                            <div className="review_card_footer">
                                <div className="review_card_footer_details">
                                    <h1>{BedLivingRoomrooms.name}</h1>
                                    <p>{BedLivingRoomrooms.location}</p>
                                </div>
                                <div className="review_card_footer_contact">
                                    <p><img src={phone} alt="icon" className="phone_icon" />CONTACT CUSTOMER</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div className={toggleState === 5 ? "work_carousal_all_cards  active-work_carousal_all_cards" : "work_carousal_all_cards"}>
                {data.work.childMarkdownRemark.frontmatter.DiningRoom.map(DiningRooms =>
                    <div className={DiningRooms.class} data-aos="fade-down" data-aos-easing="ease-in-back" data-aos-offset="0">
                        <div className={DiningRooms.carousalclass}>
                            <Workcarousal />
                        </div>

                        <div className="work_carousal_card_block2_txt">
                            <h1>{DiningRooms.h1}</h1>
                            <div className="work_para">
                                <p>{DiningRooms.address}</p>
                                <p className="p20">|</p>
                                <p>{DiningRooms.cost}</p>
                            </div>
                        </div>

                        <div className="work_carousal_card_block2_reviewcard">
                            <img src="https://i.ibb.co/QnnqCDv/quatation.png" alt="workquatation" className="workquatation" />
                            <p>{DiningRooms.reviewpara}</p>
                            <div className="review_card_footer">
                                <div className="review_card_footer_details">
                                    <h1>{DiningRooms.name}</h1>
                                    <p>{DiningRooms.location}</p>
                                </div>
                                <div className="review_card_footer_contact">
                                    <p><img src={phone} alt="icon" className="phone_icon" />CONTACT CUSTOMER</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div className={toggleState === 6 ? "work_carousal_all_cards  active-work_carousal_all_cards" : "work_carousal_all_cards"}>
                {data.work.childMarkdownRemark.frontmatter.Bathroom.map(Bathrooms =>
                    <div className={Bathrooms.class} data-aos="fade-down" data-aos-easing="ease-in-back" data-aos-offset="0">
                        <div className={Bathrooms.carousalclass}>
                            <Workcarousal />
                        </div>

                        <div className="work_carousal_card_block2_txt">
                            <h1>{Bathrooms.h1}</h1>
                            <div className="work_para">
                                <p>{Bathrooms.address}</p>
                                <p className="p20">|</p>
                                <p>{Bathrooms.cost}</p>
                            </div>
                        </div>

                        <div className="work_carousal_card_block2_reviewcard">
                            <img src="https://i.ibb.co/QnnqCDv/quatation.png" alt="workquatation" className="workquatation" />
                            <p>{Bathrooms.reviewpara}</p>
                            <div className="review_card_footer">
                                <div className="review_card_footer_details">
                                    <h1>{Bathrooms.name}</h1>
                                    <p>{Bathrooms.location}</p>
                                </div>
                                <div className="review_card_footer_contact">
                                    <p><img src={phone} alt="icon" className="phone_icon" />CONTACT CUSTOMER</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div className={toggleState === 7 ? "work_carousal_all_cards  active-work_carousal_all_cards" : "work_carousal_all_cards"}>
                {data.work.childMarkdownRemark.frontmatter.Wardrobe.map(Wardrobes =>
                    <div className={Wardrobes.class} data-aos="fade-down" data-aos-easing="ease-in-back" data-aos-offset="0">
                        <div className={Wardrobes.carousalclass}>
                            <Workcarousal />
                        </div>

                        <div className="work_carousal_card_block2_txt">
                            <h1>{Wardrobes.h1}</h1>
                            <div className="work_para">
                                <p>{Wardrobes.address}</p>
                                <p className="p20">|</p>
                                <p>{Wardrobes.cost}</p>
                            </div>
                        </div>

                        <div className="work_carousal_card_block2_reviewcard">
                            <img src="https://i.ibb.co/QnnqCDv/quatation.png" alt="workquatation" className="workquatation" />
                            <p>{Wardrobes.reviewpara}</p>
                            <div className="review_card_footer">
                                <div className="review_card_footer_details">
                                    <h1>{Wardrobes.name}</h1>
                                    <p>{Wardrobes.location}</p>
                                </div>
                                <div className="review_card_footer_contact">
                                    <p><img src={phone} alt="icon" className="phone_icon" />CONTACT CUSTOMER</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div className={toggleState === 8 ? "work_carousal_all_cards  active-work_carousal_all_cards" : "work_carousal_all_cards"}>
                {data.work.childMarkdownRemark.frontmatter.SpaceSaving.map(SpaceSavings =>
                    <div className={SpaceSavings.class} data-aos="fade-down" data-aos-easing="ease-in-back" data-aos-offset="0">
                        <div className={SpaceSavings.carousalclass}>
                            <Workcarousal />
                        </div>

                        <div className="work_carousal_card_block2_txt">
                            <h1>{SpaceSavings.h1}</h1>
                            <div className="work_para">
                                <p>{SpaceSavings.address}</p>
                                <p className="p20">|</p>
                                <p>{SpaceSavings.cost}</p>
                            </div>
                        </div>

                        <div className="work_carousal_card_block2_reviewcard">
                            <img src="https://i.ibb.co/QnnqCDv/quatation.png" alt="workquatation" className="workquatation" />
                            <p>{SpaceSavings.reviewpara}</p>
                            <div className="review_card_footer">
                                <div className="review_card_footer_details">
                                    <h1>{SpaceSavings.name}</h1>
                                    <p>{SpaceSavings.location}</p>
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
            <Footer />
        </div>
    )
}
export default Work;
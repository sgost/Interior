import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap'
import { graphql, useStaticQuery } from "gatsby"
import Phone from '../images/Vector-3.png'
import Mail from '../images/e.png'
import Location from '../images/l.png'
import fb from '../data/assets/facebook.svg'
import In from '../data/assets/instagram.svg'
import tw from '../data/assets/twitter.svg'
import pre from '../data/assets/pinterest.svg'
import Aos from "aos";
import "aos/dist/aos.css";

function Contact() {
    useEffect(() => {
        Aos.init({duration: 2000});
      }, [])
    const data = useStaticQuery(graphql`
    query {
      contact: file(relativePath: {eq: "contact.md"}) {
        childMarkdownRemark {
          frontmatter {
            contact_block1_mail
            contact_block1_phone
            title
            address
          }
          html
          excerpt
        }
      }
    }
  `)
    return (
        <div className="contact_container">
            <div className="page6">
                <h1 className="h7" data-aos="fade-down"  data-aos-easing="ease-in-back" data-aos-offset="0">Contact Us</h1>
                <p className="p7"  data-aos="fade-down"  data-aos-easing="ease-in-back" data-aos-offset="0">Fill up the form and we will get back<br />to you within 24 hours</p>
                <div className="card6">
                    <div className="card6_block1">
                        <h1>Contact Information</h1>
                        <p>Fill up the form and we will get back to you<br />within 24 hours</p>

                        <div className="card6_block1_contact">
                            <div className="card6_block1_contact_icons">
                                <img src={Phone} alt="icon" className="p7_icons_header1 p7_icons_header" />
                                <p>{data.contact.childMarkdownRemark.frontmatter.contact_block1_phone}</p>
                            </div>
                            <div className="card6_block1_contact_icons">
                                <img src={Mail} alt="icon" className="p7_icons_header2 p7_icons_header" />
                                <p>{data.contact.childMarkdownRemark.frontmatter.contact_block1_mail}</p>
                            </div>
                            <div className="card6_block1_contact_icons card6_block1_contact_icons_para">
                                <img src={Location} alt="icon" className="p7_icons_header3 p7_icons_header" />
                                <p>{data.contact.childMarkdownRemark.frontmatter.address}</p>
                            </div>
                        </div>

                        <div className="card6_block1_footer_icons">

                            <img src={fb} alt="icon" className="p7_icons_footer" />

                            <img src={In} alt="icon" className="p7_icons_footer2" />

                            <img src={tw} alt="icon" className="p7_icons_footer3" />

                            <img src={pre} alt="icon" className="p7_icons_footer4" />

                        </div>

                    </div>

                    <div className="card6_block2">
                        <div className="card6_block2_input1">
                            <div>
                                <p>Your Name</p>
                                <input type="text" placeholder="Name" className="input realinput" />
                            </div>
                            <div>
                                <p>Mobile Number</p>
                                <input type="text" placeholder="Mobile Number" className="realinput" />
                            </div>
                        </div>
                        <div className="card6_block2_buttons">
                            <h1 className="btnh1">Select a service you need from us </h1>
                            <div className="card6_block2_buttons_compo">
                                <button>Interior Design</button>
                                <button>Home Decors</button>
                                <button className="btn3">Furniture</button>
                            </div>
                        </div>

                        <div className="card6_block2_input2">
                            <div >
                                <p>Message</p>
                                <textarea type="text" placeholder="Write your message" />
                            </div>
                            <div className="card6_block2_input2_button">
                                <Button>SEND MESSAGE</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card6_block1_contact2" id="card6_block1_contact2">
                <p><img src={Phone} alt="icon" className="p7_icons1 " />{data.contact.childMarkdownRemark.frontmatter.contact_block1_phone}</p>
                <p><img src={Mail} alt="icon" className="p7_icons1 " />{data.contact.childMarkdownRemark.frontmatter.contact_block1_mail}</p>
            </div>
        </div>

    )
}
export default Contact;
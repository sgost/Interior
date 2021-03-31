import React, { useEffect } from 'react';
import { graphql, useStaticQuery } from "gatsby"
import Navbarr from '../pages/nav'
import arrow from "../images/arrow.svg"
import Aos from "aos";
import "aos/dist/aos.css";

const Banner = () => {
  useEffect(() => {
    Aos.init({duration: 2000});
  }, [])
  const data = useStaticQuery(graphql`
      query {
        banner: file(relativePath: {eq: "banner.md"}) {
            id
            childMarkdownRemark {
              frontmatter {
                title
                headding
              }
            }
          }   
         }
    `)

  return (
    <>
      <div className="page1">
        <Navbarr />
        <div className="container5">
          <div className="page1_components" >
            <h1 data-aos="fade-down" data-aos-duration="3000" data-aos-easing="ease-in-back" data-aos-offset="0">{data.banner.childMarkdownRemark.frontmatter.headding}</h1>
            <button  data-aos="fade-down" data-aos-duration="10000000000000000" data-aos-easing="ease-in-back" data-aos-offset="0">Book Free Consultaion <img src={arrow} alt="A dinosaur" className="p1_btn_icon p1_btn_i2" /></button>
          </div>
        </div>
      </div>
    </>
  )
}
export default Banner;
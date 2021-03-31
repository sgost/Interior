import React, { useEffect } from 'react';
import "../styles/p3_carousal.scss"
import { Carousel } from 'antd';
import { graphql, useStaticQuery } from "gatsby"
import Aos from "aos";
import "aos/dist/aos.css";


function ClintReviews() {
  useEffect(() => {
    Aos.init({duration: 2000});
  }, [])
  const data = useStaticQuery(graphql`
  query {
      clintreview:  file(relativePath: {eq: "clintreviews.md"}) {
          id
          childMarkdownRemark {
            frontmatter {
              clintreviews {
                id
                name
                location
                review
                description
                image {
                  childImageSharp {
                    fluid {
                      src
                    }
                  }
                }
              }
              headding
            }
          }
        }
  }
`)

  return (
    <div className="app_main">
      <div className="App">
        <h1 className="h1" data-aos="fade-down" data-aos-duration="3000" data-aos-easing="ease-in-back" data-aos-offset="0">Listen from our Clients</h1>
        <div className="container5">
          <div className="App2">
            <Carousel autoplay>
              {data.clintreview.childMarkdownRemark.frontmatter.clintreviews.map(reviews =>
                <div className="text_carousal">
                  <div className="text_carousal_comp">
                    <div class="image">
                      <div class="image2">
                        <img src={reviews.image.childImageSharp.fluid.src} alt="carousalimage" className="clintprofilepic" data-aos="zoom-in" data-aos-easing="ease-in-back" data-aos-offset="0"/>
                        <h2 data-aos="fade-left" data-aos-easing="ease-in-back" data-aos-offset="0">{reviews.name}</h2>
                        <p data-aos="fade-right" data-aos-easing="ease-in-back" data-aos-offset="0">{reviews.location}</p>
                      </div>
                    </div>
                    <div className="text_carousal_comp_txt">
                      <div className="text_carousal_comp_txt_border"></div>
                      <div className="text_border_matter">
                        <h1 data-aos="fade-left" data-aos-easing="ease-in-back">{reviews.review}</h1>
                        <img src="https://i.ibb.co/7b2WhT2/Vector.png" alt="" className="mtr_i1"  data-aos="zoom-out-right" data-aos-easing="ease-in-back" data-aos-offset="0"/>
                        <p data-aos="fade-down" data-aos-easing="ease-in-back" data-aos-offset="0">{reviews.description}</p>
                        <img src="https://i.ibb.co/bsXCBZ8/Vector-1.png" alt="" className="mtr_i2" data-aos="zoom-out-left" data-aos-easing="ease-in-back" data-aos-offset="0"/>
                      </div>
                      <div className="image3">
                        <div className="con1">
                          <img src={reviews.image.childImageSharp.fluid.src} alt="profileimg" />
                        </div>
                        <div className="con">
                          <h2>{reviews.name}</h2>
                          <p>{reviews.location}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClintReviews;
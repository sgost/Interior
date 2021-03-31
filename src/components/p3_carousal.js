import React from "react"
import "../styles/p3_carousal.scss"
import { Carousel } from 'antd';
import { graphql, useStaticQuery } from "gatsby"

function P3_carousal() {
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
                          fluid(quality: 90) {
                            src
                          }
                        }
                      }
                    }
                    headding
                  }
                  html
                }
              }
        }
      `)
  return (
    <Carousel autoplay>
      {data.clintreview.childMarkdownRemark.frontmatter.clintreviews.map(reviews =>
        <div className="text_carousal">
          <div className="text_carousal_comp">
            <div class="image">
              <div class="image2">
                <img src={reviews.image.childImageSharp.fluid.src} alt="carousalimage" className="clintprofilepic" />
                <h2>{reviews.name}</h2>
                <p>{reviews.location}</p>
              </div>
            </div>
            <div className="text_carousal_comp_txt">
              <div className="text_carousal_comp_txt_border"></div>
              <div className="text_border_matter">
                <h1>{reviews.review}</h1>
                <img src="https://i.ibb.co/7b2WhT2/Vector.png" alt="" className="mtr_i1" />
                <p dangerouslySetInnerHTML={{ __html: data.clintreview.childMarkdownRemark.html }} />
                <img src="https://i.ibb.co/bsXCBZ8/Vector-1.png" alt="" className="mtr_i2" />
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
  )
}
export default P3_carousal;
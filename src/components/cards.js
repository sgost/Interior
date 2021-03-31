import React, { useEffect } from 'react';
import { graphql, useStaticQuery } from "gatsby"
import arrow from "../images/arrow.svg"
import Aos from "aos";
import "aos/dist/aos.css";

const Cards = () => {
  useEffect(() => {
    Aos.init({duration: 2000});
  }, [])
  const data = useStaticQuery(graphql`
  query {
     cards: file(relativePath: {eq: "card.md"}) {
        id
        childMarkdownRemark {
          frontmatter {
            card {
              id
              title
              description
              class
              imagecontainer
              animation
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
      <div className="page3">
        <div className="page3_components">
          <h1 class="h1" data-aos="fade-down" data-aos-easing="ease-in-back">{data.cards.childMarkdownRemark.frontmatter.headding}</h1>
          <div className="all_p3_card1">
            {data.cards.childMarkdownRemark.frontmatter.card.map(page3 =>
              <div class={page3.class} data-aos={page3.animation}>
                <div class="p3c1_txt">
                  <h1>{page3.title}</h1>
                  <p>{page3.description}</p>
                  <button>Get Quote <img src={arrow} alt="icon" className="p1_btn_icon p3c1_btn" /></button>
                </div>
                <div class="c1_img">
                  <div class={page3.imagecontainer}>
                    <img src={page3.image.childImageSharp.fluid.src} alt="card1img" />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
  )
}
export default Cards
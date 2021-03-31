import React, { useEffect } from 'react';
import { graphql, useStaticQuery } from "gatsby"
import Aos from "aos";
import "aos/dist/aos.css";

const ClintStatus = () => {
  useEffect(() => {
    Aos.init({duration: 2000});
  }, [])
  const data = useStaticQuery(graphql`
    query {
       clints: file(relativePath: {eq: "clintstatus.md"}) {
        childMarkdownRemark {
          frontmatter {
            clintstatus {
              id
              title
              animation
              description
              image {
                childImageSharp {
                  fixed {
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
    <div className="page2">
      <div className="container5">
        <div className="page2_components">
          <div className="p2_txt">
            <h1 data-aos="fade-down"  data-aos-easing="ease-in-back" data-aos-offset="0">{data.clints.childMarkdownRemark.frontmatter.headding}</h1>
          </div>

          <div class="all_cards1">
            {data.clints.childMarkdownRemark.frontmatter.clintstatus.map(clint =>
              <div class="card1" data-aos={clint.animation}>
                <div class="all_cards_components">
                  <div class="card1_block1">
                    <img src={clint.image.childImageSharp.fixed.src} alt="card_img" />
                  </div>
                  <div class="card1_block2">
                    <h1>{clint.title}</h1>
                    <p>{clint.description}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
export default ClintStatus;
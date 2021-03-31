import React from 'react'
import '../styles/product_details.scss'
import Contact from './contact'
import Footer from "../components/footer"
import Pslider from '../components/pdSlider'
import PDslider2 from '../components/pdSlider2'
import Navbarr from '../pages/nav'
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"
import leftarrow from "../data/assets/right.svg"

const Product_details = () => {
    const data = useStaticQuery(graphql`
    query {
        productdetail: file(relativePath: {eq: "productdetails.md"}) {
            id
            childMarkdownRemark {
              frontmatter {
                title
                days
                button
                delivary
                marketprize
                materialType
                materials
                measurementStatus
                measurement
                ourprize
                productDis
                productTag
                productTitle
                size
                quality
                sizePara1
                sizepara2
                status
                type
                productcards {
                    id
                    title
                    description
                    originalprize
                    currentprize
                    image {
                      childImageSharp {
                        fluid(quality: 90) {
                          src
                        }
                      }
                    }
                  }
              }
            }
          }
    }
  `)
    return (
        <>
            <div className="pro_nav2">
                <Navbarr />
            </div>

            <div id="Productdetails">

                <div className="Productdetails">

                    <Link to="/products/">
                        <h1 className="product_map">Products > Furniture > Mid-Century Living Minimal Sofa Grey</h1>
                        <p1 className="product_map product_map2"><img src={leftarrow} alt="right-arrow" width="10px" className="product_map2_img" />BACK</p1>
                    </Link>
                    <div className="Productdetails_components">
                        <div className="product_side_images">
                            <Pslider />
                            <PDslider2 />
                        </div>

                        <div className="product_side_images_discription">
                            <h1>{data.productdetail.childMarkdownRemark.frontmatter.productTitle}</h1>
                            <p4>{data.productdetail.childMarkdownRemark.frontmatter.productTag}</p4>
                            <p>{data.productdetail.childMarkdownRemark.frontmatter.productDis}</p>
                            <p1>{data.productdetail.childMarkdownRemark.frontmatter.marketprize}</p1><br />
                            <p2>{data.productdetail.childMarkdownRemark.frontmatter.ourprize}</p2><br />
                            <button>{data.productdetail.childMarkdownRemark.frontmatter.button}</button>
                            <div className="product_side_images_discription_below">
                                <h2>{data.productdetail.childMarkdownRemark.frontmatter.quality}</h2>
                                <h3>{data.productdetail.childMarkdownRemark.frontmatter.size}</h3>
                                <li>{data.productdetail.childMarkdownRemark.frontmatter.sizePara1}</li>
                                <li>{data.productdetail.childMarkdownRemark.frontmatter.sizepara2}</li>
                                <listbelow>
                                    <h3>{data.productdetail.childMarkdownRemark.frontmatter.type}<span> {data.productdetail.childMarkdownRemark.frontmatter.status}</span></h3>
                                </listbelow>
                                <listbelow>
                                    <h3>{data.productdetail.childMarkdownRemark.frontmatter.materials}<span>{data.productdetail.childMarkdownRemark.frontmatter.materialType}</span> </h3>
                                </listbelow>
                                <listbelow>
                                    <h3>{data.productdetail.childMarkdownRemark.frontmatter.measurement}<span>{data.productdetail.childMarkdownRemark.frontmatter.measurementStatus}</span></h3>
                                </listbelow>
                                <listbelow>
                                    <h3>{data.productdetail.childMarkdownRemark.frontmatter.delivary}<span>{data.productdetail.childMarkdownRemark.frontmatter.days}</span></h3>
                                </listbelow>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="Productdetails_cards">
                <h1 className="card_title">YOU MAY ALSO LIKE</h1>
                <div className="Productdetails_cards_cards">
                    {data.productdetail.childMarkdownRemark.frontmatter.productcards.map(procard =>
                        <div className="product_card1" key={procard.id}>
                            <img src={procard.image.childImageSharp.fluid.src} alt="productimage" className="pc1_container_img" />
                            <div className="pc1_image_matter">
                                <h1>{procard.title}</h1>
                                <p>{procard.description}</p>
                                <div className="pc1_image_matter_prize">
                                    <div className="prize">
                                        <h6>{procard.originalprize}<span className="h5">{procard.currentprize}</span></h6>
                                    </div>
                                    <button><Link to="/product_details" className="button">VIEW DETAILS</Link></button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className="Productdetails_cards_contact">
                <Contact />
                <Footer/>
            </div>



        </>
    )
}
export default Product_details;
import React, { useEffect } from 'react';
import '../styles/products.scss'
import { graphql, useStaticQuery } from "gatsby"
import Contact from './contact'
import Navbarr from './nav'
import Footer from "../components/footer"
import navicon from "../data/assets/Vector.svg"
import { Link } from "gatsby"
import Aos from "aos";
import "aos/dist/aos.css";


const Products = () => {
  useEffect(() => {
    Aos.init({duration: 2000});
  }, [])
  const data = useStaticQuery(graphql`
  query {
  products: file(relativePath: {eq: "product.md"}) {
    id
    childMarkdownRemark {
      frontmatter {
        title
        headding
        description
        productnav{
          id
          li
        }
        product {
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
    <div className="products">
      <div className="pro_nav">
        <Navbarr />
      </div>
      <div className="product_background">
        <div className="product_container">
          <div className="page4_components">
            <div className="p4_intro_txt">
              <h1 data-aos="fade-down" data-aos-easing="ease-in-back" data-aos-offset="0">{data.products.childMarkdownRemark.frontmatter.headding}</h1>
              <p data-aos="fade-up" data-aos-easing="ease-in-back" data-aos-offset="0">{data.products.childMarkdownRemark.frontmatter.description}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="product_cards_nav">
        <div className="product_nav">
          <p>ALL PRODUCTS<img src={navicon} alt="navicon" className="navicon" /></p>
          <ul>
          {data.products.childMarkdownRemark.frontmatter.productnav.map(productnavprops =>
            <li key={productnavprops.id}>{productnavprops.li}</li>
            )}
          </ul>
        </div>
        <div className="product_cards_content">
          <div className="product_all_cards">
            {data.products.childMarkdownRemark.frontmatter.product.map(productsprops =>
              <div className="product_card1"  key={productsprops.id} data-aos="fade-down" data-aos-easing="ease-in-back" data-aos-offset="0">
                <img src={productsprops.image.childImageSharp.fluid.src} alt="productimage" className="pc1_container_img" />
                <div className="pc1_image_matter" >
                <Link to="/product_details" >
                  <h1>{productsprops.title}</h1>
                  <p>{productsprops.description}</p>
                  <div className="pc1_image_matter_prize">
                    <div className="prize">
                      <h6>{productsprops.originalprize}<span className="h5">{productsprops.currentprize}</span></h6>
                    </div>
                    <button><Link to="/product_details" className="button">VIEW DETAILS</Link></button>
                  </div>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Contact />
      <Footer />
    </div>
  )
}
export default Products;
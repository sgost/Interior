import React, { useEffect,  useState  } from 'react';
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
  
 const [toggleState, setToggleState] = useState(1);



 const toggleTab = (index) => {
   setToggleState(index);
 };


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
        kitchenAccessories {
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
        furniture {
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
        art {
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
        furnishings {
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
        lighting {
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
        DecorAccessories {
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
        wallCoverings {
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
        securityAndSafety {
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
        gardening {
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
        kidsFurniture {
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
        StoresAndSelves {
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
            <li className={toggleState === (productnavprops.id) ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(productnavprops.id)} role="presentation">{productnavprops.li}</li>
            )}
          </ul>
        </div>
        <div className="product_cards_content">
          <div className={toggleState === 1 ? "product_all_cards  active-product_all_cards" : "product_all_cards"}>
            {data.products.childMarkdownRemark.frontmatter.kitchenAccessories.map(kitchenAccessoriess =>
              <div className="product_card1"  key={kitchenAccessoriess.id} data-aos="fade-down" data-aos-easing="ease-in-back" data-aos-offset="0">
                <img src={kitchenAccessoriess.image.childImageSharp.fluid.src} alt="productimage" className="pc1_container_img" />
                <div className="pc1_image_matter" >
                <Link to="/product_details" >
                  <h1>{kitchenAccessoriess.title}</h1>
                  <p>{kitchenAccessoriess.description}</p>
                  <div className="pc1_image_matter_prize">
                    <div className="prize">
                      <h6>{kitchenAccessoriess.originalprize}<span className="h5">{kitchenAccessoriess.currentprize}</span></h6>
                    </div>
                    <button><Link to="/product_details" className="button">VIEW DETAILS</Link></button>
                  </div>
                  </Link>
                </div>
              </div>
            )}
          </div>
          <div className={toggleState === 2 ? "product_all_cards  active-product_all_cards" : "product_all_cards"}>
            {data.products.childMarkdownRemark.frontmatter.furniture.map(furnitures =>
              <div className="product_card1"  key={furnitures.id} data-aos="fade-down" data-aos-easing="ease-in-back" data-aos-offset="0">
                <img src={furnitures.image.childImageSharp.fluid.src} alt="productimage" className="pc1_container_img" />
                <div className="pc1_image_matter" >
                <Link to="/product_details" >
                  <h1>{furnitures.title}</h1>
                  <p>{furnitures.description}</p>
                  <div className="pc1_image_matter_prize">
                    <div className="prize">
                      <h6>{furnitures.originalprize}<span className="h5">{furnitures.currentprize}</span></h6>
                    </div>
                    <button><Link to="/product_details" className="button">VIEW DETAILS</Link></button>
                  </div>
                  </Link>
                </div>
              </div>
            )}
          </div>
          <div className={toggleState === 3 ? "product_all_cards  active-product_all_cards" : "product_all_cards"}>
            {data.products.childMarkdownRemark.frontmatter.art.map(arts =>
              <div className="product_card1"  key={arts.id} data-aos="fade-down" data-aos-easing="ease-in-back" data-aos-offset="0">
                <img src={arts.image.childImageSharp.fluid.src} alt="productimage" className="pc1_container_img" />
                <div className="pc1_image_matter" >
                <Link to="/product_details" >
                  <h1>{arts.title}</h1>
                  <p>{arts.description}</p>
                  <div className="pc1_image_matter_prize">
                    <div className="prize">
                      <h6>{arts.originalprize}<span className="h5">{arts.currentprize}</span></h6>
                    </div>
                    <button><Link to="/product_details" className="button">VIEW DETAILS</Link></button>
                  </div>
                  </Link>
                </div>
              </div>
            )}
          </div>
          <div className={toggleState === 4 ? "product_all_cards  active-product_all_cards" : "product_all_cards"}>
            {data.products.childMarkdownRemark.frontmatter.furnishings.map(furnishingss =>
              <div className="product_card1"  key={furnishingss.id} data-aos="fade-down" data-aos-easing="ease-in-back" data-aos-offset="0">
                <img src={furnishingss.image.childImageSharp.fluid.src} alt="productimage" className="pc1_container_img" />
                <div className="pc1_image_matter" >
                <Link to="/product_details" >
                  <h1>{furnishingss.title}</h1>
                  <p>{furnishingss.description}</p>
                  <div className="pc1_image_matter_prize">
                    <div className="prize">
                      <h6>{furnishingss.originalprize}<span className="h5">{furnishingss.currentprize}</span></h6>
                    </div>
                    <button><Link to="/product_details" className="button">VIEW DETAILS</Link></button>
                  </div>
                  </Link>
                </div>
              </div>
            )}
          </div>
          <div className={toggleState === 5 ? "product_all_cards  active-product_all_cards" : "product_all_cards"}>
            {data.products.childMarkdownRemark.frontmatter.lighting.map(lightings =>
              <div className="product_card1"  key={lightings.id} data-aos="fade-down" data-aos-easing="ease-in-back" data-aos-offset="0">
                <img src={lightings.image.childImageSharp.fluid.src} alt="productimage" className="pc1_container_img" />
                <div className="pc1_image_matter" >
                <Link to="/product_details" >
                  <h1>{lightings.title}</h1>
                  <p>{lightings.description}</p>
                  <div className="pc1_image_matter_prize">
                    <div className="prize">
                      <h6>{lightings.originalprize}<span className="h5">{lightings.currentprize}</span></h6>
                    </div>
                    <button><Link to="/product_details" className="button">VIEW DETAILS</Link></button>
                  </div>
                  </Link>
                </div>
              </div>
            )}
          </div>
          <div className={toggleState === 6 ? "product_all_cards  active-product_all_cards" : "product_all_cards"}>
            {data.products.childMarkdownRemark.frontmatter.DecorAccessories.map(DecorAccessoriess =>
              <div className="product_card1"  key={DecorAccessoriess.id} data-aos="fade-down" data-aos-easing="ease-in-back" data-aos-offset="0">
                <img src={DecorAccessoriess.image.childImageSharp.fluid.src} alt="productimage" className="pc1_container_img" />
                <div className="pc1_image_matter" >
                <Link to="/product_details" >
                  <h1>{DecorAccessoriess.title}</h1>
                  <p>{DecorAccessoriess.description}</p>
                  <div className="pc1_image_matter_prize">
                    <div className="prize">
                      <h6>{DecorAccessoriess.originalprize}<span className="h5">{DecorAccessoriess.currentprize}</span></h6>
                    </div>
                    <button><Link to="/product_details" className="button">VIEW DETAILS</Link></button>
                  </div>
                  </Link>
                </div>
              </div>
            )}
          </div>
          <div className={toggleState === 7 ? "product_all_cards  active-product_all_cards" : "product_all_cards"}>
            {data.products.childMarkdownRemark.frontmatter.wallCoverings.map(wallCoveringss =>
              <div className="product_card1"  key={wallCoveringss.id} data-aos="fade-down" data-aos-easing="ease-in-back" data-aos-offset="0">
                <img src={wallCoveringss.image.childImageSharp.fluid.src} alt="productimage" className="pc1_container_img" />
                <div className="pc1_image_matter" >
                <Link to="/product_details" >
                  <h1>{wallCoveringss.title}</h1>
                  <p>{wallCoveringss.description}</p>
                  <div className="pc1_image_matter_prize">
                    <div className="prize">
                      <h6>{wallCoveringss.originalprize}<span className="h5">{wallCoveringss.currentprize}</span></h6>
                    </div>
                    <button><Link to="/product_details" className="button">VIEW DETAILS</Link></button>
                  </div>
                  </Link>
                </div>
              </div>
            )}
          </div>
          <div className={toggleState === 8 ? "product_all_cards  active-product_all_cards" : "product_all_cards"}>
            {data.products.childMarkdownRemark.frontmatter.securityAndSafety.map(securityAndSafetys =>
              <div className="product_card1"  key={securityAndSafetys.id} data-aos="fade-down" data-aos-easing="ease-in-back" data-aos-offset="0">
                <img src={securityAndSafetys.image.childImageSharp.fluid.src} alt="productimage" className="pc1_container_img" />
                <div className="pc1_image_matter" >
                <Link to="/product_details" >
                  <h1>{securityAndSafetys.title}</h1>
                  <p>{securityAndSafetys.description}</p>
                  <div className="pc1_image_matter_prize">
                    <div className="prize">
                      <h6>{securityAndSafetys.originalprize}<span className="h5">{securityAndSafetys.currentprize}</span></h6>
                    </div>
                    <button><Link to="/product_details" className="button">VIEW DETAILS</Link></button>
                  </div>
                  </Link>
                </div>
              </div>
            )}
          </div>
          <div className={toggleState === 9 ? "product_all_cards  active-product_all_cards" : "product_all_cards"}>
            {data.products.childMarkdownRemark.frontmatter.gardening.map(gardenings =>
              <div className="product_card1"  key={gardenings.id} data-aos="fade-down" data-aos-easing="ease-in-back" data-aos-offset="0">
                <img src={gardenings.image.childImageSharp.fluid.src} alt="productimage" className="pc1_container_img" />
                <div className="pc1_image_matter" >
                <Link to="/product_details" >
                  <h1>{gardenings.title}</h1>
                  <p>{gardenings.description}</p>
                  <div className="pc1_image_matter_prize">
                    <div className="prize">
                      <h6>{gardenings.originalprize}<span className="h5">{gardenings.currentprize}</span></h6>
                    </div>
                    <button><Link to="/product_details" className="button">VIEW DETAILS</Link></button>
                  </div>
                  </Link>
                </div>
              </div>
            )}
          </div>
          <div className={toggleState === 10 ? "product_all_cards  active-product_all_cards" : "product_all_cards"}>
            {data.products.childMarkdownRemark.frontmatter.kidsFurniture.map(kidsFurnitures =>
              <div className="product_card1"  key={kidsFurnitures.id} data-aos="fade-down" data-aos-easing="ease-in-back" data-aos-offset="0">
                <img src={kidsFurnitures.image.childImageSharp.fluid.src} alt="productimage" className="pc1_container_img" />
                <div className="pc1_image_matter" >
                <Link to="/product_details" >
                  <h1>{kidsFurnitures.title}</h1>
                  <p>{kidsFurnitures.description}</p>
                  <div className="pc1_image_matter_prize">
                    <div className="prize">
                      <h6>{kidsFurnitures.originalprize}<span className="h5">{kidsFurnitures.currentprize}</span></h6>
                    </div>
                    <button><Link to="/product_details" className="button">VIEW DETAILS</Link></button>
                  </div>
                  </Link>
                </div>
              </div>
            )}
          </div>
          <div className={toggleState === 11 ? "product_all_cards  active-product_all_cards" : "product_all_cards"}>
            {data.products.childMarkdownRemark.frontmatter.StoresAndSelves.map(StoresAndSelvess =>
              <div className="product_card1"  key={StoresAndSelvess.id} data-aos="fade-down" data-aos-easing="ease-in-back" data-aos-offset="0">
                <img src={StoresAndSelvess.image.childImageSharp.fluid.src} alt="productimage" className="pc1_container_img" />
                <div className="pc1_image_matter" >
                <Link to="/product_details" >
                  <h1>{StoresAndSelvess.title}</h1>
                  <p>{StoresAndSelvess.description}</p>
                  <div className="pc1_image_matter_prize">
                    <div className="prize">
                      <h6>{StoresAndSelvess.originalprize}<span className="h5">{StoresAndSelvess.currentprize}</span></h6>
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
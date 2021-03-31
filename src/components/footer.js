import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import fb from '../data/assets/facebook.svg'
import In from '../data/assets/instagram.svg'
import tw from '../data/assets/twitter.svg'
import pre from '../data/assets/pinterest.svg'

const Footer = () => {
    const data = useStaticQuery(graphql`
      query {
        footer: file(relativePath: {eq: "footer.md"}) {
          childMarkdownRemark {
            frontmatter {
              title
              footer_title
              footer_label
              footer_description
            }
          }
        }
      }
    `)
    return (
        <div className="footer">
            <div className="container">
                <div className="footer_address0">
                    <h1>{data.footer.childMarkdownRemark.frontmatter.footer_title}</h1>
                    <p>{data.footer.childMarkdownRemark.frontmatter.footer_description}</p>
                    <p2>{data.footer.childMarkdownRemark.frontmatter.footer_label}</p2>
                </div>
                <div className="container2">
                    <h1 className="cont2h1">{data.footer.childMarkdownRemark.frontmatter.footer_title}</h1>
                    <p>{data.footer.childMarkdownRemark.frontmatter.footer_description}</p>
                    <div className="footer_address">
                        <p4>Address</p4>
                        <br />
                        <p5>Flat 501, Addressline 1<br />Electronic city, Bangalore</p5>
                    </div>
                    <div className="footer_address2">
                        <div className="card_footer">
                            <img src={fb} alt="icon" className="f_b_icons" />
                            <img src={In} alt="icon" className="f_b_icons2" />
                            <img src={tw} alt="icon" className="f_b_icons3" />
                            <img src={pre} alt="icon" className="f_b_icons4" />
                        </div>
                        <p5>{data.footer.childMarkdownRemark.frontmatter.footer_label}</p5>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;
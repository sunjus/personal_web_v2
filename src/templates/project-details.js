import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/project-details.module.css"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function ProjectDetails({ data }) {
  const { html } = data.markdownRemark
  const { title, stack, featuredImg } = data.markdownRemark.frontmatter
  const image = getImage(featuredImg)

  return (
    <Layout>
      <div classNam={StyleSheet.details}>
        <h2>{title}</h2>
        <h3>{stack}</h3>
      </div>
      <div className={styles.featured}>
        <GatsbyImage image={image} />
      </div>
      <div
        className={styles.html}
        dangerouslySetInnerHTML={{ __html: html }}
      ></div>
    </Layout>
  )
}

export const query = graphql`
  query ProjectsDetail($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        stack
        title
        featuredImg {
          childImageSharp {
            gatsbyImageData(
              blurredOptions: { width: 100 }
              placeholder: BLURRED
              transformOptions: { cropFocus: CENTER }
            )
          }
        }
      }
    }
  }
`

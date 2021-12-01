import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/project-details.module.css"
//import { StaticImage } from "gatsby-plugin-image"

export default function ProjectDetails() {
  return (
    <Layout>
      <div classNam={StyleSheet.details}>
        <h2>title</h2>
        <h3>stack</h3>
      </div>
      <div className={styles.featured}>
        {/*<StaticImage
          src="../images/banner.png"
          alt="site banner"
          placeholder="blurred"
        />*/}
      </div>
      {/*<div className={styles.html} dangerouslySetInnerHTML={}></div>*/}
    </Layout>
  )
}

import React from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"

const Skill = props => {
  return (
      <li className="">{props.name || ""}</li>
  )
}

export default props => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          skills {
            name
          }
        }
      }
    }
  `)
  const skills = data.site.siteMetadata.skills.map((item, index) => (
    <Skill
      key={index}
      name={item.name}
    />
  ))
  return (
    <Layout pageTitle="Skills" pageDescription="Learn more about my skills">
      <ul >
          {skills}
      </ul>
    </Layout>
  )
}

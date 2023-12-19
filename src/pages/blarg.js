import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'

const BlargPage = ({ data }) => {
  return (
    <Layout pageTitle="My blarg posts">
      <ul>
        {
          data.allFile.nodes.map(node => (
            <li key={node.name}>
              {node.name}
            </li>
          ))
        }
      </ul>
      <p>Blarg!!!</p>
    </Layout>
  )
}

export const query = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }`

export const Head = () => <Seo title="Blarg" />

export default BlargPage
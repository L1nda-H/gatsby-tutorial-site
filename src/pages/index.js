import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>yippee</p>
      <StaticImage
        alt='My cat Cocoa'
        src="../images/IMG_1353.jpg" />
    </Layout>
  )
}

export const Head = () => <Seo title="Home Page" />

export default IndexPage
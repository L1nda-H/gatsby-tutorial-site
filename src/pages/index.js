import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>children</p>
      <StaticImage
        alt='My cat Cocoa'
        src="../images/IMG_1353.jpg" />
    </Layout>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage
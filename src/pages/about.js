import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const AboutPage = () => {
  return (
    <Layout pageTitle="About me">
      <p>Me</p>
    </Layout>
  )
}

//metadata
export const Head = () => <Seo title="About Page" />

export default AboutPage
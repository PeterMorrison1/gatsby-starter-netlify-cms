import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'
import PageHeader from '../../components/PageHeader'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <PageHeader title={"Latest Stories"} body={"Hear the latest coffee news here"} image={`'/img/blog-index.jpg'`} />
        <section className="section">
          <div className="container">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

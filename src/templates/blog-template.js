import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/myLayout'
import styles from "../css/postTemplate.module.css"
import Anilink from 'gatsby-plugin-transition-link/AniLink'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import SEO from "../components/SEO"
import { DiscussionEmbed } from "disqus-react"

const Blog = ({ data }) => {

  const { title, author, date, body: { json } } = data.post

  const options = {
    renderNode: {
      "embedded-asset-block": (node) => {
        return (
          <div display="inline-block" align-items="center">
            <img width="600"
              src={node.data.target.fields.file['en-US'].url} />
          </div>
        )
      }
    }
  }

  const disqusConfig = {
    shortname: process.env.GATSBY_DISQUS_NAME,
    config: { identifier: title, title: title },
  }

  return (
    <Layout>
      <SEO title={title} />
      <section className={styles.template}>

        <div className={styles.info}>
          <h1>{title}</h1>
          <h4>
            <span>by {author}</span> / <span>{date}</span>
          </h4>
        </div>
        <article className={styles.content}>
          {documentToReactComponents(json, options)}
        </article>

        <Anilink fade to='/blog' className="btn-primary">
          all posts
        </Anilink>
        <div style={{ paddingTop: "20px" }}>
          <DiscussionEmbed {...disqusConfig} />
        </div>
      </section>


    </Layout>
  )
}

export default Blog

export const query = graphql`
query getBlog($slug: String!){
    post:contentfulPost( slug: {eq: $slug} ){
    title
    author
    date(formatString:"D MMMM, Y")
    body{
      json
    }
  }
    
  }
`
import React, { Component } from "react"
import Layout from "../components/myLayout"
import Map from "../components/Map/Map"
import SEO from "../components/SEO"

export default class map extends Component {
  render() {
    return (
      <Layout>
        <SEO title="Contact"/>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "10rem",
          }}
        >
          <Map/>
        </div>
      </Layout>
    )
  }
}
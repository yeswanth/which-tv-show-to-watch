import React from "react"
import { graphql } from "gatsby"
// import { Cards, Hero, SiteMetadata } from "../components"
// import { Layout } from "../layouts/Layout"

export default ({ data }) => {
  let tvShows = data.allAirtable.nodes;
  console.log(tvShows);
  return (
    <div>
      <h1>Which TV Show to watch Next?</h1>
      {tvShows.map((show,i) => {
        return (
          <div>
          <h2 key={i}>{show.data.Name}</h2>
          <h3 key={i}>{show.data.Platform}</h3>
          </div>);
      })}
    </div>
  )
}

// <SiteMetadata
//         title="Travel destinations"
//         description="Check the most popular travel destinations in Europe."
//         image={"data.hero.url"}
//       />

//       <Hero
//         image={data.hero}
//         tag="#travel"
//         title="Travel destinations"
//         description="Check the most popular travel locations in Europe."
//       />

//       <Cards nodes={data.items.nodes} />

export const query = graphql`
  query {
    allAirtable(filter: { table: { eq: "Shows" } }) {
      nodes {
        data{
          Country
          Name
          Platform
        }
      }
    }
  }
`

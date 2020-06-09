import React, { useState } from "react"
import { graphql } from "gatsby"
// import { Cards, Hero, SiteMetadata } from "../components"
import { Layout } from "../layouts/Layout"
import { CenterCard } from "../components"

let OTT_MAPPING = {
  "Amazon Prime": "prime",
  Netflix: "netflix",
  Hotstar: "hotstar",
}

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function getShowsByOTT(tvShows) {
  let result = {}
  tvShows.forEach(({ data }, i) => {
    if (OTT_MAPPING.hasOwnProperty(data.Platform)) {
      //array exists in result
      let key = OTT_MAPPING[data.Platform]
      if (result.hasOwnProperty(key)) {
        result[key].push(data)
      } else {
        result[key] = [data]
      }
    } else {
      console.log("wrong data", data)
    }
  })
  return result
}

export default ({ data }) => {
  const [show, setShow] = useState("")
  let tvShows = data.allAirtable.nodes
  let showsByOTT = getShowsByOTT(tvShows)

  function onClickGetRecommendation(ott) {
    console.log(ott)
    if (ott) {
      let shows = showsByOTT[ott]
      let index = randomInteger(0, shows.length - 1)
      console.log(shows[index])
      setShow(shows[index])
    }
  }

  return (
    <div class="container mx-auto h-screen flex flex-col justify-center items-center">
      <div class="xl:w-1/3">
        <h1 class="font-hairline mb-6 text-center text-blue-500">
          Which TV Show to Watch
        </h1>
        <CenterCard
          onSubmitButton={onClickGetRecommendation}
          show={show}
        ></CenterCard>
        <p class="text-center text-gray-500 text-xs">
          &copy;2020 Which TV Show to Watch. All rights reserved.
        </p>
      </div>
    </div>
  )
}

// {tvShows.map((show, i) => {
//   return (
//     <div>
//       <h2 key={i}>{show.data.Name}</h2>
//       <h3 key={i}>{show.data.Platform}</h3>
//     </div>
//   )
// })}

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
        data {
          Country
          Name
          Platform
        }
      }
    }
  }
`

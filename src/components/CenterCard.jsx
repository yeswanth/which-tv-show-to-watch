import { graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby-plugin-modal-routing"
import PropTypes from "prop-types"
import React from "react"
import { Feature } from "."

export const CenterCard = props => {
  return (
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="bg-white h-full rounded-md overflow-hidden">
        <div className="flex flex-col justify-center">
          <h1 className="my-2 text-center text-2xl text-blue-500 leading-snug">
            {"Select your OTT Channel you subscribed to"}
          </h1>
          <select
            class="self-center my-2 block appearance-none w-1/3 bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-state"
          >
            <option value="netflix">Netflix</option>
            <option value="prime">Amazon Prime</option>
            <option value="hotstar">Hotstar</option>
          </select>
          <button
            class="self-center my-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Give me a recommendation!
          </button>
          <h2 className="my-4 text-center text-2xl text-green-500 font-bold leading-snug">
            {"Marvellous Mrs.Maisel"}
          </h2>
        </div>
      </div>
    </form>
  )
}

CenterCard.propTypes = {}

CenterCard.defaultProps = {}

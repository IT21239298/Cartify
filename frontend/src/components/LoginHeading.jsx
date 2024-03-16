import React from 'react'
import { FaSignInAlt } from "react-icons/fa";

function LogingHeading() {
  return (
    <section className="heading">
        <h1>
          <FaSignInAlt /> Login
        </h1>
        <p>Please fill in all required details correctly</p>
      </section>
  )
}

export default LogingHeading
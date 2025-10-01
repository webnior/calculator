import React from "react"
import { FaBeer } from "react-icons/fa"

import "../../styles/globals.css"

function Callbutton() {
  return (
    <>
      <div class="call-btn">
        <div class="zoomIn"></div>
        <div class="pulse"></div>
        <div class="tada">
          <FaBeer />
          <a href="tel:7042163504">+91 7042163504</a>
        </div>
      </div>
    </>
  )
}

export default Callbutton

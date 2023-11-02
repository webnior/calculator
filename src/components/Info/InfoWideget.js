import React from "react"

import "@/styles/globals.css"

function InfoWideget(props) {
  return (
    <>
      <div className="contact-info">
        <div className="contact-info-item">
          <div className="contact-info-icon">
            <iframe src={props.imgUrl}></iframe>
          </div>
          <div className="contact-info-text">
            <h2>{props.title}</h2>
            <span>{props.line1} </span>
            <span>{props.line2}</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default InfoWideget

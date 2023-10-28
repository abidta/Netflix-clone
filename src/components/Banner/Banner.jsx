import React from 'react'
import './Banner.css'
function Banner() {
  return (
    <div className="banner">
      <div className="content">
        <h1 className="title">Title</h1>
        <div className="btns-banner">
          <button className="btn-banner">Play</button>
          <button className="btn-banner">MyList</button>
        </div>
        <p className="description">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </p>
      </div>
      <div className="fade-btm"></div>
    </div>
  )
}

export default Banner

import React from 'react'

const Collection = () => {
  return (
    <div className="projects">
      <div className="home-title">
        <h1>PROJECTS</h1>
      </div>
        <div className="project-box">
            <div className="project-img">
              <img src='https://yourserveradmin.com/wp-content/uploads/2020/04/uxui.jpg'/>
            <div className="project-details">
              <h1>UI/UX</h1>
              <button>MORE</button>
            </div>
            </div>
            
        </div>
        <div className="project-box">
            <div className="project-img">
           <img src='https://www.onlinecoursereport.com/wp-content/uploads/2020/07/shutterstock_394793860-1536x1177.jpg'/>
           <div className="project-details">
            <h1>FRONT END</h1>
            <button>MORE</button>
            </div>
            </div>
            
        </div>
        <div className="project-box">
            <div className="project-img">
             <img src='https://www.liveabout.com/thmb/z_RXiDK2cxFRjPzyWxBiAQLpWx8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/backenddeveloper-2502825a14ff440eb775dc4244e7ed4d.png'/>
             <div className="project-details">
            <h1>BACK END</h1>
            <button>MORE</button>
            </div>
            </div>
            
        </div>
    </div>
  )
}

export default Collection

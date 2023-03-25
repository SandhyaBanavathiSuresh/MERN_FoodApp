import React from 'react'
import img1 from "../images/image1.jpg"

const Card = () => {
  return (
    <div>
         <div>
        <div className="card" style={{"width":"18rem", "maxHeight":"360px"}}>
          <img src={img1} className="w-100 p-3" height="350" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <div className="container w-100">
                <select className="m-2 h-100 w-10 text-light bg-dark rounded">
                    {Array.from(Array(6), (e,i) =>{
                        return(
                            <option key={i+1} value={i+1}>{i+1}</option>
                        )
                    })}
                </select>
                <select className="m-2 h-100 w-50 bg-success rounded">
                  <option value="slice">Slice</option>
                  <option value="full">Full</option>
                </select>
                <div className="d-line h-100 fs-5">
                  Total price
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
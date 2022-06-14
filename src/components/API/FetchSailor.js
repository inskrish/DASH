import React, { useState } from 'react'
import axios from 'axios'
function FetchSailor() {

  const [news, setNews] = useState([])

  const FetchSailor = () => {
    axios.get("http://localhost:8090/api/orders")
      .then((response) => {
        console.log(response.data[0]);
        setNews(response.data)
      })
  }
  return (
    <>
      <div className="container my-3">
        <div className="row">
          <div className="col-4">
            <button className='btn btn-primary' onClick={FetchSailor}>FetchSailor</button>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          
            <h2>{news.name}</h2>
            {news.map((value) => {
              return (
                <div className="col-4">
                  <div className="card" style={{ width: "18rem" }}>
                    {/* <img src={value.urlToImage} className="card-img-top" alt="..." /> */}
                    <div className="card-body">
                      <h5 className="card-title">{value.name}</h5>
                      <p className="card-text">{value.nok_mobile}</p>
                      {/* <a href="#" className="btn btn-primary">Main</a> */}
                    </div>
                  </div>
                </div>
              );
            })
            }
          
        </div>
      </div>
    </>
  )
}

export default FetchSailor

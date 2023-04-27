import React from 'react'

const NewsItem = (props) => {

  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <div className='my-3'>
      <div className="card">
        <div>

          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: '90%', zIndex: '1' }}>    {source}
          </span>
        </div>
        <img src={!imageUrl ? "https://c.ndtvimg.com/2022-09/8ujjnk48_hurricane-generic-_625x300_29_September_22.jpg" : imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}...  </h5>
          <p className="card-text">{description} </p>
          <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} {new Date(date).toGMTString()}</small></p>
          <a href={newsUrl} target="blank" className="btn btn-sm btn-dark" >Read More</a>
        </div>
      </div>
    </div>
  )

}

export default NewsItem

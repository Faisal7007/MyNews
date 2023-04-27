import React,{useEffect, useState} from 'react'

import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
// import { useEffect } from 'react';
// import { cleanup } from '@testing-library/react'


const News =(props)=> {
 const [articles, setArticles] = useState([])
 const [loading, setLoading] = useState(true)
const[page, setPage] = useState(1)
const[totalResults, setTotalResults] = useState(0)


const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }




 const updateNews= async ()=> {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=0276bd8c64f04326beecde6813d3a6a3&page=${page}&pageSize=${props.pageSize}`
    setLoading(true)
    let data = await fetch(url);
    props.setProgress(30)
    let parseData = await data.json()
    props.setProgress(60)

    setArticles(parseData.articles)
    setTotalResults(parseData.totalResults)
    setLoading(false)
    props.setProgress(100);

  }

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} - NewsKing`
    updateNews();
    // eslint-disable-line 
  }, [])
  


 const fetchMoreData = async() => {
   const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=0276bd8c64f04326beecde6813d3a6a3&page=${page+1}&pageSize=${props.pageSize}`
   setPage(page+1)
   
    let data = await fetch(url);
    let parseData = await data.json()
    setArticles(articles.concat(parseData.articles))
    setTotalResults( parseData.totalResults)

  };


  
    return (
      <>
        <h1 className='text-center' style={{ margin: '35px 0px', marginTop:'90px' }}>NewsHunt - Top {capitalizeFirstLetter(props.category)}  Headlines </h1>
{loading && <Spinner/>}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner />}
        >
          <div className='container my-3'>
          <div className="row">

            {articles.map((element) => {

              return <div className="col-md-4" key={element.url}>
                <NewsItem title={element.title ? element.title.slice(0,35)+"..." : ""} description={element.description ? element.description.slice(0,55)+"..." : "Discription"} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author ? element.author : ""} date={element.publishedAt} source={element.source.name} />
              </div>
            })}
          </div>
          </div>
        </InfiniteScroll>

      </>
    )
  }


News.defaultProps = {
  country: 'in',
  pageSize: '6',
  category: 'genral'
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
}

export default News

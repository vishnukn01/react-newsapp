import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {

  constructor() {
    super()
    this.state = {
      articles: [],
      loading: false
    }
  }
  
  async componentDidMount(){
    let url = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=80ac5a3fa8f44c10ab514ff0d8fb51d3';
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({articles: parsedData.articles})
  }

  render() {
    console.log('hello from render')
    return (
      <div className="container my-3">
        <h2>Top Headlines from India</h2>
        <div className="row">
        {this.state.articles.map(function(article){
              return <div key={article.url} className="col-md-4">
                      <NewsItem title={article.title} description={article.description} imageUrl={article.urlToImage}  newsUrl={article.url}/>
                     </div>
            })}
          
        </div>
      </div>
    );
  }
}

export default News;

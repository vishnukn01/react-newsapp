import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export class News extends Component {
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  static defaultProps = {
    country: "in",
    pageSize: 5,
    category: "general",
  };

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  updateNews = async (pageNumber = 1) => {
    console.log("page", pageNumber);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=80ac5a3fa8f44c10ab514ff0d8fb51d3&page=${pageNumber}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      loading: false,
      page: pageNumber,
      totalResults: parsedData.totalResults,
    });
    console.log("this.state.page value :", this.state.page);
  };

  nextHandler = async () => {
    this.updateNews(this.state.page + 1);
  };

  prevHandler = async () => {
    this.updateNews(this.state.page - 1);
  };

  async componentDidMount() {
    this.updateNews();
  }

  render() {
    return (
      <div className="container my-3">
        <div className="d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark mx-1"
            onClick={this.prevHandler}
          >
            Previous
          </button>

          <button
            disabled={
              Math.ceil(this.state.totalResults / this.props.pageSize) ===
              this.state.page
            }
            type="button"
            className="btn btn-dark mx-1"
            onClick={this.nextHandler}
          >
            Next
          </button>
        </div>
        <h2 className="text-center">
          Top{" "}
          <span style={{ textTransform: "capitalize" }}>
            {this.props.category !== "general" ? this.props.category : ""}
          </span>{" "}
          Headlines from India
        </h2>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading &&
            this.state.articles.map(function (article) {
              return (
                <div key={article.url} className="col-md-4">
                  <NewsItem
                    title={article.title}
                    description={article.description}
                    imageUrl={article.urlToImage}
                    newsUrl={article.url}
                    date={article.publishedAt}
                    author={article.author}
                    source={article.source.name}
                  />
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

export default News;

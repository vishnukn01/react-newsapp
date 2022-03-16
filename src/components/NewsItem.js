import React from "react";

const NewsItem = (props) => {
    let { title, description, imageUrl, newsUrl, date, author, source } =
      props;

    let defaultImage =
      "https://images.unsplash.com/photo-1495020689067-958852a7765e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80";

    return (
      <div className="my-3">
        <div className="card">
          <span class="position-absolute start-100 top-0 translate-middle badge rounded-pill bg-primary">
            {source}
          </span>
          <img
            className="card-img-top"
            src={imageUrl ? imageUrl : defaultImage}
            alt="Card cap"
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a
              href={newsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-primary"
            >
              Read More
            </a>
            <p className="card-text">
              <small className="text-muted">
                By {author ? author : "Unknown"} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
          </div>
        </div>
      </div>
    );
  
}

export default NewsItem;

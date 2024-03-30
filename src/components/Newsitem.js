import React, { Component } from 'react'

export class Newsitem extends Component {
  constructor(){
    super();

  }
  render() {
    let {title,description,imageURL,newsUrl,author,date}=this.props;

    return (
      <div>
        <div className="card" >
  <img src={!imageURL?"https://media.istockphoto.com/id/1311148884/vector/abstract-globe-background.jpg?s=612x612&w=0&k=20&c=9rVQfrUGNtR5Q0ygmuQ9jviVUfrnYHUHcfiwaH5-WFE=":imageURL} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}...</h5>
    <p className="card-text"><small className="text-body-secondary">By {author?author:"Unknown"} at {new Date(date).toGMTString()}</small></p>
    <p className="card-text">{description}...</p>
    <a href={newsUrl} target="_blank"className="btn btn-dark">Read More</a>
  </div>
</div>
      </div>
    )
  }
}

export default Newsitem

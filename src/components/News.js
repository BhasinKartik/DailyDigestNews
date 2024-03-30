import React, { Component } from 'react'
import Newsitem from './Newsitem';
import Spinner from './Spinner'
import PropTypes from 'prop-types'
export class News extends Component {
   articles=[]
  static defaultProps={
    country:"in",
    pageSize:8,
    category:"general"
  }
static propTypes={
  country:PropTypes.string,
  pageSize:PropTypes.number,
  category: PropTypes.string

}
  constructor(){
    super();
    console.log("Constructor from News component");
    this.state={
      articles:this.articles,
      loading:false,
      page:1
    }
  }
  // f02ae2c0670c4376b79d462b5299e05f
  async updateNews(){
    const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a940cf4d13fc4901a5f4e221ce31e742&page=${this.state.page}&pageSize=${this.props.pageSize}`;
  this.setState({
    loading:true
  })
  let data=await fetch(url);
  let parsedData= await data.json();
  console.log(parsedData);
  this.setState({articles :parsedData.articles, totalResults: parsedData.totalResults,loading:false})
  }
async componentDidMount(){
  let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a940cf4d13fc4901a5f4e221ce31e742&page=1&pageSize=${this.props.pageSize}`;
  this.setState({
    loading:true
  })
  let data=await fetch(url);
  let parsedData= await data.json();
  console.log(parsedData);
  this.setState({articles :parsedData.articles, totalResults: parsedData.totalResults,loading:false})
}
handlePrevClick= async()=>{

  // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a940cf4d13fc4901a5f4e221ce31e742&page=${this.state.page -1}&pageSize=${this.props.pageSize}`;
  // this.setState({
  //   loading:true
  // })
  // let data=await fetch(url);
  // let parsedData= await data.json();
  // console.log(parsedData);

  // this.setState({
  //   page: this.state.page -1,
  //   articles :parsedData.articles,
  //   loading:false
  // })
  this.setState(
    {
      page:this.state.page-1
    }
  )
  this.updateNews();
}
handleNextClick=async()=>{
  // if(Math.ceil(this.state.totalResults/this.props.pageSize)<1+this.state.page){

  // }
  // else{
  // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a940cf4d13fc4901a5f4e221ce31e742&page=${this.state.page +1}&pageSize=${this.props.pageSize}`;
  // this.setState({
  //   loading:true
  // })
  // let data=await fetch(url);
  // let parsedData= await data.json();
  // console.log(parsedData);
  // this.setState({
  //   page: this.state.page + 1,
  //   articles :parsedData.articles,
  //   loading:false
  // })
  // }
  this.setState(
    {
      page:this.state.page +1
    }
  )
  this.updateNews();

}
  render() {
    return (
      <div className="container my-3">
      <h2>Top Headlines:  { this.props.Key}</h2>
      {this.state.loading && <Spinner/>}
      <div className="row my-3">
        
      {!this.state.loading && this.state.articles && this.state.articles.map((element)=>{
return <div className="col-md-4" key={element.url}  >
<Newsitem title={element.title?element.title:""} description={element.description?element.description.slice(0,119):""} imageURL={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt}></Newsitem>
</div>
      })}
        
      </div>
      <div className="d-flex justify-content-between">
      <button disabled={this.state.page<=1}type="button" class="btn btn-dark" onClick={this.handlePrevClick}>Prev</button>
      <button disabled={Math.ceil(this.state.totalResults/this.props.pageSize)<1+this.state.page} type="button" class="btn btn-dark" onClick={this.handleNextClick}>Next</button>
      </div>
      </div>

    )
  }
}

export default News

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NewsItem from './NewsItem'
import Alert from './Alert';
import Spinner from './Spinner';

export default class News extends Component {
    static defaultProps = {
        country : 'pt',
        pageSize : 21,
        category : 'general'
    }
    static propTypes = {
        country : PropTypes.string,
        pageSize : PropTypes.number,
        category : PropTypes.string
    }
    constructor(){
        super();
        this.state = {
            articles : [],
            loading : false,
            page : 1
        }
    }

    async componentDidMount(){
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fbab7de626374044b0852797eb83b459&page=1&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({articles:parsedData.articles, totalResults : parsedData.totalResults, loading:false});
    }

    clickPrevBtn = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fbab7de626374044b0852797eb83b459&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({articles:parsedData.articles, page : this.state.page - 1, loading:false});
    }
    clickNextBtn = async () => {
        if(this.state.page + 1 < Math.ceil(this.state.totalResults/21)){
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fbab7de626374044b0852797eb83b459&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            this.setState({loading:true});
            let data = await fetch(url);
            let parsedData = await data.json();
            this.setState({articles:parsedData.articles, page : this.state.page + 1, loading:false});
        }else{
            <Alert/>
            console.log(<Alert/>);
        }
    }

    render() {
        return (
            <div className='container my-3'>
                <h1 className="text-center" style={{margin:'35px 0'}}>National News Top - Headlines</h1>
                <div className="text-center">
                    {this.state.loading && <Spinner/>}  
                </div>
                <div className="row">
                    {!this.state.loading && this.state.articles.map((element)=>{
                        return <div className="col-md-4" key={element.url}>
                        <NewsItem title={element.title} description = {element.description} imageUrl = {element.urlToImage} newsUrl = {element.url} author = {element.author} publishedAt = {element.publishedAt}/>
                        </div>
                    })}
                </div>
                <div className="flex d-flex justify-content-between">
                    <button disabled={this.state.page<=1} type="button" onClick={this.clickPrevBtn} className="btn btn-dark">&#8592; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/21)} type="button" onClick={this.clickNextBtn} className="btn btn-dark">Next &#8594;</button>
                </div>
            </div>
        )
    }
}

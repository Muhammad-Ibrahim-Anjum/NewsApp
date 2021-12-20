import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NewsDefaultImg from "../img/news.jpg"

export default class NewsItem extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        let {title, description, imageUrl ,newsUrl} = this.props;
        return (
            <div className='my-3'>
                <div className="card" style={{width: "18rem"}}>
                    <img src={imageUrl?imageUrl:NewsDefaultImg} className="card-img-top" style={{height : '150px'}} alt="NewsImage"/>
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark" rel="noreferrer">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

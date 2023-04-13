import React, { Component } from 'react'

export class NewsItem extends Component {
    constructor() {
        super()
        this.state = {
        }
    }
    render() {
        const { title, content, imgUrl, imgAlt } = this.props
        return (
            <div>
                <div className="card" style={{ width: "18rem" }}>
                    <img src={imgUrl} className="card-img-top" alt={imgAlt} />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{content}</p>
                        <a href="/" class="btn btn-sm btn-success">Read More Here</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
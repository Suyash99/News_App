import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    render() {
        return (
            <div className="container my-3">
                <div className="row">
                    <div className="col-md-4">
                        <NewsItem title="Cricket" content="Content Goes Here" imgUrl="Hello" imgAlt="Hello" />
                    </div>
                    <div className="col-md-4">
                        <NewsItem title="Cricket" content="Content Goes Here" imgUrl="Hello" imgAlt="Hello" />
                    </div>
                    <div className="col-md-4">
                        <NewsItem title="Cricket" content="Content Goes Here" imgUrl="Hello" imgAlt="Hello" />
                    </div>
                </div>
            </div>
        )
    }
}

export default News
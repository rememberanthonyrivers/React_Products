import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

export default class Post extends Component {
    render() {
        post = this.props.post
        const date = moment(post.date_created).calendar()
        return (
            <li className='list-group-item'>
                <div>
                    { dat }
                </div>
                <div>
                    <h4>{post.title}</h4>
                    <Link to={`/blog/${post.id}`}>Read Mor</Link>
                    <div className='truncate'>{post.body}</div>
                </div>
            </li>
        )
    }
}

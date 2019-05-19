import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/fetchAction.js';

@connect((state) => {
    const { list } = state
    return {
	list: list,
}},{
    fetchPosts: actions.fetchPosts
})

export default class Home extends Component {
    constructor(props){
		super(props)
    }

    componentDidMount() {
        // this.props.fetchPosts({
        //     pageIndex: 0,
        // })
    }

    render() {
        return (
            <div>
                <button onClick={this.getData}>Home页面</button>
            </div>
        );
    }
}

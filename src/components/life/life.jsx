import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import actions from '../actions/listAction';

// @connect((state) => ({
//     data: state.list.data,
// }), {
//     fetchData: actions.fetchData,
// })

export default class Life extends Component {
    constructor(props) {
        super(props);
    }
    // getData = () => {
    //     const { fetchData } = this.props;
    //     fetchData();
    // }

    render() {
        // const { data } = this.props;
        return (
            <div>
                <button onClick={this.getData}>Life页面</button>
            </div>
        );
    }
}


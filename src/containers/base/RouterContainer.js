import React, { Component } from 'react';
import { Router, hashHistory } from 'react-router';
import demandLoadingRoute from '../../router/demandLoadingRoute';

export default class RouterContainer extends Component {
    render() {
        return (
            <Router history={hashHistory} routes={demandLoadingRoute} />
        );
    }
}

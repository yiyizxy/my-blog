import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions/fetchAction.js";
import './home.less';

@connect(
  state => {
    const { list } = state;
    return {
      list: list
    };
  },
  {
    fetchPosts: actions.fetchPosts
  }
)
export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // this.props.fetchPosts({
    //     pageIndex: 0,
    // })
  }

  render() {
    return (
      <div>
        <div className="header">
          <div className="container">
            <div className="logo">
              <h1>
                <a href="https://www.tangshuang.net/">Danica's博客</a>
              </h1>
            </div>
            <div className="nav">
              <ul className="menu">
                <li className="menu-item menu-item-type-taxonomy menu-item-object-category current-menu-item menu-item-has-children menu-item-2207">
                  <a href="https://www.tangshuang.net/code" aria-current="page">
                    码
                  </a>
                </li>
                <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-6344">
                  <a href="https://www.tangshuang.net/fm">生活</a>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4327">
                  <a href="https://www.tangshuang.net/aboutme">关于</a>
                </li>
              </ul>
              <a href="javascript:void(0)" className="top-bar-search-btn">
                <i className="fa fa-search" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

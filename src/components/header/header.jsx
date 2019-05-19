import React, { Component } from "react";
import { Link } from "react-router-dom";
import './header.less';

export default class Header extends Component {
    render() {
        return (
            <div>
                <nav>
                    <ul className="banner">
                        <li className="banner-item home">
                            <Link to="/home" className="name">首页</Link>
                        </li>
                        <li className="banner-item  web">
                            <Link to="/detail" className="name">前端</Link>
                        </li>
                        <li className="banner-item life">
                            <Link to="/life" className="name">生活</Link>
                        </li>
                        <li className="banner-item author">
                            <Link to="/author" className="name">关于我</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

import React, {Component}from 'react';
import settings from '../constants/settings';

export default class Nav extends Component {
    constructor(props) {
        super(props)
    }
    render(){
        const {user} = this.props;
        return (
            <nav className="navbar navbar-default">
                <div className="navbar-header">
                    <a className="navbar-brand" href={"/"}>{this.props.title}</a>
                </div>
                <ul className="nav navbar-nav navbar-right" style={{marginRight:'15px',display:(user.userName?'block':'none')}}>
                    <li className="dropdown">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                        {user.userName} 
                        <span className="caret"></span>
                    </a>
                    <ul className="dropdown-menu">
                        <li><a href="javascript:void(0)" onClick={this.onPasswordChange}>修改密码</a></li>
                        <li><a href={"/logout"} onLogou={this.onLogout}>退出</a></li>
                    </ul>
                    </li>
                </ul>
            </nav>
        );
    }
}
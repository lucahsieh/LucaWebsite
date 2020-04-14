import React from 'react';
import logo_lg_white from '../img/logo_lg_white.png'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'

class Menu extends React.Component {
    state = {
        title: "Luca's Website",
        logo: logo_lg_white,
        menuItems: [
            { lable: 'About Me', url: '/', active: false },
            { lable: 'Projects', url: '/projects', active: false },
            { lable: 'Resume', url: '/resume', active: false },
        ]
    }

    renderLogo() {
        if (this.state.logo)
            return <img className="ui tiny image p-0 m-0" src={this.state.logo} />
        return <div className="header item">{this.state.title}</div>
    }
    renderItems() {
        let list = []
        this.state.menuItems.forEach((i, k) => {
            list.push(
                <div key={k}>
                    <Link to={i.url} className={i.active ? 'item active' : 'item'}>
                        {i.lable}
                    </Link>
                </div>
            )
        })
        return list;
    }

    render() {
        return (
            <div className="">
                <div className="ui inverted borderless menu stackable big " style={{ backgroundColor: '#204265 ' }}>
                    <div className="ui container">
                        <div className="header item p-0 m-0">
                            {this.renderLogo()}
                        </div>
                        <div class="right menu">
                            {this.renderItems()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Menu;
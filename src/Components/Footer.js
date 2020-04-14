import React from 'react';
import logo_lg_white from '../img/logo_lg_white.png'


class Footer extends React.Component {
    renderContact() {
        let list = [];
        let contact = [
            // { label: '', icon: 'home icon', value: 'Vancouver,BC', link: null },
            { label: '', icon: 'envelope icon', value: 'chungju.hsieh.ca@gmail.com', link: 'mailto:chungju.hsieh.ca@gmail.com' },
            { label: '', icon: 'phone icon', value: '+1 236 865-9199', link: null },
            { label: '', icon: 'github icon', value: 'Github', link: 'https://github.com/lucahsieh' },
            { label: '', icon: 'linkedin icon', value: 'Linkin', link: 'https://www.linkedin.com/in/lucahsieh/' },

        ]
        contact.forEach((c, k) => {
            if (c.link) {
                list.push(
                    <div class="item" key={k}>
                        <i class={c.icon}></i>
                        <div class="content">
                            <a href={c.link}>{c.value}</a>
                        </div>
                    </div>
                )
            } else {
                list.push(
                    <div class="item" key={k}>
                        <i class={c.icon}></i>
                        <div class="content">
                            {c.value}
                        </div>
                    </div>
                )
            }
        })
        return (
            <div class="ui list inverted">
                {list}
            </div>
        )
    }
    render() {
        return (
            <div className="ui inverted vertical footer segment mt-5 py-5">
                <div className="ui container">
                    <div className="ui stackable inverted divided equal height stackable grid">
                        <div className="three wide column"></div>

                        <div className="three wide column">
                            <img className="ui big image p-0 m-0" src={logo_lg_white} />
                        </div>
                        <div className="three wide column">
                            <h4 className="ui inverted header">Sitemap</h4>
                            <div className="ui inverted link list">
                                <a href="/" className="item">About me</a>
                                <a href="/projects" className="item">Projects</a>
                                <a href="/resume" className="item">Resume</a>
                            </div>
                        </div>
                        {/* <div className="three wide column">
                            <h4 className="ui inverted header">Contact</h4>
                            <div className="ui inverted link list">
                                <a href="#" className="item">Banana Pre-Order</a>
                                <a href="#" className="item">DNA FAQ</a>
                                <a href="#" className="item">How To Access</a>
                                <a href="#" className="item">Favorite X-Men</a>
                            </div>
                        </div> */}
                        <div className="four wide column">
                            <h4 className="ui inverted header">Contact</h4>
                            {this.renderContact()}
                        </div>
                        <div className="three wide column"></div>
                    </div>
                    <div className="ui center aligned grid p-3">
                        <p>&copy; 2020 by Luca Hsieh. </p>
                        <p>This website is built with React.js</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;
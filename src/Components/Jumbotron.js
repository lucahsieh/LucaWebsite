import React from 'react'
import Colors from '../helper/Colors'
import experience_workshop1 from '../img/experience_workshop1.png';




class Jumbotron extends React.Component {
    displays = {
        'projects':
        {
            title: 'Projects',
            description: 'Click a card to view project details',
            icon: 'circular folder open icon'
        },
        'resume':
        {
            title: 'Resume',
            description: 'Click a card to view project details',
            icon: 'circular folder open icon'
        },
        'home':
        {
            title: 'Resume',
            description: 'Click a card to view project details',
            icon: 'circular folder open icon'
        }
    }

    render() {
        console.log(this.props.display)
        let display = this.displays[this.props.display];
        return (
            <div>
                <div className="jumbotron jumbotron-fluid m-0 pb-3" style={{ backgroundColor: Colors.grey }}>
                    <div className="ui center aligned grid container" style={{ color: Colors.primary }}>
                        <div>
                            <h2 class="ui center aligned icon header" style={{ color: Colors.primary }}>
                                <i class={display.icon}></i>
                                <p style={{ color: Colors.primary }}>
                                    <span className="display-4 font-weight-bold">{display.title}</span><br />
                                    {display.description}
                                </p>
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Jumbotron;
import React from 'react';
import DateFormater from '../helper/dateFormater'

const ProjectCard = (props) => {
    const content = props.content;
    const onCardClick = props.onCardClick;

    if (!content) {
        return <div></div>
    }

    return (
        <div className="ui card" style={{ maxWidth: '130px', margin: '10px' }} onClick={onCardClick}>
            <div className="image">
                <img src={content.img} style={{ objectFit: 'cover', height: '80px' }} />
            </div>
            <div className="content p-2">
                <a className="ui small header m-0" onClick={onCardClick}>{content.title}</a>
                <div className="meta">
                    <span className="date">{DateFormater(content.startDate, content.endDate)}</span><br />
                    {/* <span >{content.client}</span> */}
                </div>
                <div className="description m-0">{content.desc}</div>
            </div>
            {/* <div className="ui bottom attached button" onClick={onCardClick}>
                <i className="eye icon"></i>
                View Details
            </div> */}
        </div >
    );
}

export default ProjectCard;
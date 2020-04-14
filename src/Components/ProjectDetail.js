import React from 'react';
import project_makeplus from '../img/project_makeplus.png';
import DateFormater from '../helper/dateFormater';
import experience_workshop1 from '../img/experience_workshop1.png';
import { Button, Header, Icon, Modal, Image, Segment, Divider, Responsive } from 'semantic-ui-react'
import Colors from '../helper/Colors';

const ProjectDetail = (props) => {
    let project = props.project
    if (!project) {
        return <div></div>
    }

    const renderLinks = (links) => {
        return (
            <div>
                <Button.Group compact icon labeled vertical>
                    {links.map((link) => {
                        return (
                            <Button icon labelPosition='left' color='teal' >
                                <Icon name={link.icon} />
                                {link.label}
                            </Button>
                        )
                    })}
                </Button.Group>
            </div>
        )
    }
    const renderDescription = () => {
        return (
            <div>
                <div class="d-flex justify-content-between align-items-start my-2">
                    <h2 className="ui header">
                        <div className="content">
                            {project.projectName}
                            <div className="sub header">{project.category}</div>
                        </div>
                    </h2>
                    {renderLinks(project.links)}
                </div>
                <Divider />



                {/* {project.links.length != 0 ? <Header as='h3' textAlign='center'>{renderLinks(project.links)}</Header> : null}
                <Divider></Divider> */}
                <div>
                    {project.detailDescription.split("\n").map((i, key) => {
                        return <div key={key}>{i}</div>;
                    })}
                </div>
            </div>
        );
    }
    const renderTeckstack = () => {
        let list = [];
        project.teckStack.forEach((item, key) => {
            list.push(
                <div className="item py-2" key={key}>
                    <i className="caret right icon"></i>
                    <div className="content">
                        <h5 className="header">{item.techName}</h5>
                        <div className="description pt-1 pl-3">
                            {item.desc !== null ? item.desc.split("\n").map((i, key) => {
                                return <div key={key}>{i}</div>;
                            }) : ''}
                        </div>
                    </div>
                </div>
            )
        })
        return (
            <div>
                <h2 className="ui header">Tech Stack</h2>
                <div className="ui relaxed list">
                    {list}
                </div>
            </div>
        );
    }

    const renderDemension = () => {
        let list = [];
        let display = [
            { value: 'type', lebel: 'Project Type' },
            { value: 'role', lebel: 'Role' },
            { value: 'client', lebel: 'Client' },
            { value: 'teamSize', lebel: 'Team size' },
            // {value:'type', lebel:'Project Type:'},
        ]
        display.forEach((row, key) => {
            if (project[row.value]) {
                list.push(
                    <div className="item py-2" key={key} >
                        <div className="content" >
                            <div className="header ">{row.lebel}</div>
                            <div className=" description pt-1">{project[row.value]}</div>
                        </div>
                    </div >
                )
            }
        })

        return (
            <div>
                <div className="ui relaxed divided list">
                    {list}
                    <div className="item py-2" sytle={{ width: '250px' }}>
                        <div className="content">
                            <div className="header ">Project Range: </div>
                            <div className="description pt-1">{DateFormater(project.startDate)} - {DateFormater(project.endDate)}</div>

                        </div>
                    </div>

                </div>

            </div>
        );
    }

    const renderImages = () => {
        let list = [];
        project.imgs.forEach((img, key) => {
            list.push(
                renderModal(<Image src={img} key={key} size='small' className="p-2" />, img)
            )
        })
        return (
            <div className="py-4 text-center">
                <div className="d-flex flex-wrap">
                    {list}
                </div>
                {list.length == 0 ? <p>This project is not public. (NDA)</p> : ''}
            </div>
        )
    }
    const renderModal = (imgJSX, img) => {
        const inlineStyle = {
            modal: {
                marginTop: '0px !important',
                marginLeft: 'auto',
                marginRight: 'auto'
            }
        };
        return (
            <div>
                <Modal
                    basic
                    trigger={imgJSX}
                    style={inlineStyle.modal}
                    // size="small"
                    closeOnDocumentClick={true}
                    style={{ position: 'fixed', display: 'block', height: 'auto', left: '50%', transform: 'translateX(-50%)', top: '5%' }}
                >
                    <Modal.Content image >
                        <Image wrapped size='masive' src={img} className="ui fluid image" />
                    </Modal.Content>
                </Modal >
            </div>
        )
    }

    return (
        <div className="ui container">

            <div className="ui stackable  grid ">
                <div className="ten wide column">
                    <div className="ui segment  padded">
                        {renderDescription()}
                        <h4 class="ui horizontal divider header">
                            <i class="camera icon"></i>
                            Images
                        </h4>
                        {renderImages()}
                    </div>
                </div>
                <div className="six wide column">
                    <div className="ui segment padded">
                        {renderTeckstack()}
                    </div>
                    <div className="ui segment padded">{renderDemension()}</div>
                </div>
            </div>

        </div>
    );

}

export default ProjectDetail;
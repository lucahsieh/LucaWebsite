import React from 'react';
import Jumbotron from './Components/Jumbotron'
import 'react-circular-progressbar/dist/styles.css';
import { Grid, Icon, List } from 'semantic-ui-react'
import { Divider, Header, Image, Button } from 'semantic-ui-react'

import CircleProgress from './Components/CircleProgress'
import Colors from './helper/Colors';
import Experiences from './data/Experiences'
import mmmYYYY from './helper/basicDateFormater'
import mypicture_sm from './img/mypicture_sm.png'
import projectList from './data/Projects';
import ExtracurrifularExperiences from './data/ExtracurrifularExperiences'
import Educations from './data/Educations'

class ResumePage extends React.Component {

    skills = [
        { type: 'language', label: 'Java', percentage: 90 },
        { type: 'language', label: 'C#', percentage: 85 },
        { type: 'language', label: 'C++', percentage: 75 },
        { type: 'language', label: 'C', percentage: 50 },
        { type: 'language', label: 'Javascript', percentage: 85 },
        { type: 'language', label: 'HTML/CSS', percentage: 90 },
        { type: 'language', label: 'SQL', percentage: 80 },
        { type: 'language', label: 'Typescript', percentage: 50 },
        { type: 'language', label: 'Kotlin', percentage: 30 },
        { type: 'language', label: 'swift', percentage: 15 },

        { type: 'platform', label: 'Nodejs', percentage: 75 },
        { type: 'platform', label: 'firebase', percentage: 60 },
        { type: 'platform', label: 'docker', percentage: 30 },


        { type: 'framwork', label: 'Asp .NET Core', percentage: 75 },
        { type: 'framwork', label: 'Entity Framework', percentage: 75 },
        { type: 'framwork', label: 'Angular', percentage: 75 },
        { type: 'framwork', label: 'Bootstrap', percentage: 90 },


        { type: 'library', label: 'Entity', percentage: 75 },
        { type: 'library', label: 'React', percentage: 75 },

        { type: 'knowledge', label: 'Agile', percentage: 80 },
        { type: 'knowledge', label: 'MVC', percentage: 90 },
        { type: 'knowledge', label: 'UX/UI', percentage: 80 },

        { type: 'Tool', label: 'npm', percentage: 85 },
        { type: 'Tool', label: 'webpack', percentage: 50 },

        { type: 'Tool', label: 'Visual Studio', percentage: 75 },
        { type: 'Tool', label: 'Android Studio', percentage: 75 },
    ]

    renderDivider(icon, text) {
        return (
            <div className="container ">
                <Divider horizontal>
                    <Header as='h2'>
                        <Icon name={icon} />{text}
                    </Header>
                </Divider>
            </div>
        )
    }

    renderAboutMe() {
        let description =
            `I've had a keen interest in creating new things ever since I was a kid. 
            It gives me great enjoyment by making tools that help people to solve their problems. 
            I am fortunate enough to be a Computer System Technology student in BCIT after graduating 
            from design school. My goal is to produce creative software that everybody will use.`
        return (
            <div className="ui container">
                <Grid textAlign='center' >
                    <Grid.Column width={4}>
                        <Image src={mypicture_sm} />

                    </Grid.Column>
                    <Grid.Column width={7} textAlign='left' className="align-self-center">
                        <Header as='h1'>
                            <Header.Content>
                                Luca Hsieh
                            <Header.Subheader>Junior Software Developer</Header.Subheader>
                            </Header.Content>
                        </Header>
                        <p>{description}</p>
                    </Grid.Column>
                    <Grid.Column width={4} textAlign='left' className="align-self-center">
                        <List size='medium' relaxed>
                            <List.Item icon='home' content='Vancouver, BC' />
                            <List.Item icon='envelope' content={<a href="mailto:chungju.hsieh.ca@gmail.com">chungju.hsieh.ca@gmail.com</a>} />
                            <List.Item icon='phone' content='+1 236 865-9199' />
                            <List.Item icon='linkify' content={<a href="https://lucahsieh.github.io/">Website</a>} />
                            <List.Item icon='github' content={<a href="https://github.com/lucahsieh">Github</a>} />
                            <List.Item icon='linkedin' content={<a href="https://www.linkedin.com/in/lucahsieh/">Linkin</a>} />
                        </List>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }

    renderDeveloperSkills() {
        let language = []
        this.skills
            .filter(s => s.type == 'language')
            .sort((a, b) => b.percentage - a.percentage)
            .forEach((s, k) => {
                language.push(
                    <div class="m-2" key={k} style={{ width: '70px' }}>
                        <CircleProgress percentage={s.percentage} label={s.label} color={Colors.thirdly} />
                    </div>
                )
            });
        let tool = []
        this.skills
            .filter(s => s.type != 'language')
            .sort((a, b) => b.percentage - a.percentage)
            .forEach((s, k) => {
                tool.push(
                    <div class="m-2" key={k} style={{ width: '70px' }}>
                        <CircleProgress percentage={s.percentage} label={s.label} color={Colors.secondary} />
                    </div>
                )
            });
        language.push(tool)




        return (
            <div className="ui container">
                <div class="d-flex justify-content-left flex-wrap">
                    {language}
                </div>
                <div class="d-flex justify-content-left flex-wrap">
                    {/* {tool} */}
                </div>

            </div>
        )
    }

    renderItem(key, title, note, subtitle, location, startDate, endDate, description, tools, links) {
        const renderBtn = (link) => {
            if (!link)
                return null;
            return (
                <a href={link.link} target="_blank">
                    <Button basic compact size='mini' color='teal'>
                        {link.icon ? <Icon name={link.icon} /> : null}
                        {link.label ? link.label : null}
                    </Button>
                </a>)
        };
        return (
            <div className="ui container my-1" key={key}>
                <div class="d-flex justify-content-between">
                    <div>
                        <Header as='h2'>
                            {title}
                            <span className="h5 ml-2">{note ? `${note}` : ''}</span>
                            <span className="ml-4">
                                {links ? links.map((link) => renderBtn(link)) : null}
                            </span>
                            <Header.Subheader>
                                {subtitle ? subtitle : ''} {location ? `| ${location}` : ''}
                            </Header.Subheader>
                        </Header>
                    </div>
                    {/* <div className="mr-auto">
                        <Button compact size='mini' style={{ backgroundColor: Colors.thirdly }}>
                            <Icon name='facebook' /> Facebook
                        </Button>
                    </div> */}
                    <div className="align-self-center" >
                        <Header as='h4' >{startDate ? `${mmmYYYY(startDate)}` : ''} {endDate ? `- ${mmmYYYY(endDate)}` : ''}</Header>
                    </div>
                </div>
                <div>
                    <List bulleted className="mb-1 mt-2">
                        {description ? description.map((des, index) => <List.Item key={index}>{des}</List.Item>) : ''}
                    </List>
                    <List celled horizontal className="mt-1 ml-4 mb-3" size="tiny">
                        {tools ? tools.map((tool, index) => <List.Item key={index}>{tool}</List.Item>) : ''}
                    </List>
                </div>
            </div >
        )
    }

    renderExperiences() {
        return (<div>
            {Experiences
                .sort((a, b) => b.endDate - a.endDate)
                .map((item, index) => {
                    return this.renderItem(
                        index,
                        item.jobTitle,
                        item.note,
                        item.company,
                        item.location,
                        item.startDate,
                        item.endDate,
                        item.description
                    )
                })}
        </div>)
    }

    renderProjects() {
        return (<div>
            {projectList
                .filter(p => p.showOnResume)
                .sort((a, b) => b.endDate - a.endDate)
                .map((item, index) => {
                    return this.renderItem(
                        index,
                        item.role,
                        item.category,
                        item.projectName,
                        item.client,
                        item.startDate,
                        item.endDate,
                        item.resumeOverview,
                        item.teckStack.map((tech) => tech.techName),
                        item.links
                    )
                })}
        </div>)
    }

    renderExtracurricularExperiences() {
        return (<div>
            {ExtracurrifularExperiences
                .sort((a, b) => a.endDate - b.endDate)
                .map((item, index) => {
                    return this.renderItem(
                        index,
                        item.jobTitle,
                        item.note,
                        item.company,
                        item.location,
                        item.startDate,
                        item.endDate,
                        item.description
                    )
                })}
        </div>)
    }

    renderEducation() {
        return (<div>
            {Educations
                .sort((a, b) => b.endDate - a.endDate)
                .map((item, index) => {
                    return this.renderItem(
                        index,
                        item.school,
                        item.location,
                        item.major,
                        null,
                        item.startDate,
                        item.endDate,
                        item.description
                    )
                })}
        </div>)
    }


    render() {
        return (
            <div>
                <Jumbotron display='resume' />
                {this.renderAboutMe()}

                {this.renderDivider('keyboard', 'Developer Skills')}
                {this.renderDeveloperSkills()}

                {this.renderDivider('briefcase', 'Work Experiences')}
                {this.renderExperiences()}

                {this.renderDivider('rocket', 'Projects')}
                {this.renderProjects()}

                {this.renderDivider('leaf', 'Extracurricular Experiences')}
                {this.renderExtracurricularExperiences()}

                {this.renderDivider('graduation cap', 'Education')}
                {this.renderEducation()}

                {this.renderDivider('motorcycle', 'Interests')}

            </div>
        )
    }
}

export default ResumePage;
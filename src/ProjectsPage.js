import React from 'react';
import ProjectCard from './Components/ProjectCard';
import ProjectDetail from './Components/ProjectDetail';
import projectList from './data/Projects';
import Jumbotron from './Components/Jumbotron'

class ProjectsPage extends React.Component {

    state = {
        itemPerPage: 1,
        currentPage: 1,
        totalPage: 0,
        projectViewIndex: 0,
        projects: projectList.filter(p => p.showOnProject),
        filter: 'Java'
    }

    updateDimensions() {
        let itemPerPage = 6;
        if (window.innerWidth > 1520) {
            itemPerPage = 8
        } else if (window.innerWidth > 1430) {
            itemPerPage = 7
        } else if (window.innerWidth > 1200) {
            itemPerPage = 7
        } else if (window.innerWidth > 1000) {
            itemPerPage = 6
        } else if (window.innerWidth > 861) {
            itemPerPage = 5
        } else if (window.innerWidth > 711) {
            itemPerPage = 4
        } else if (window.innerWidth > 550) {
            itemPerPage = 3
        } else if (window.innerWidth > 430) {
            itemPerPage = 2
        } else {
            itemPerPage = 1
        }

        this.setState(
            {
                itemPerPage: itemPerPage,
                totalPage: Math.ceil(this.state.projects.length / itemPerPage),
                currentPage: 1
            }
        )
    }

    componentDidMount() {
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions.bind(this));
    }

    renderList() {
        let curPage = this.state.currentPage;
        let itemPerPage = this.state.itemPerPage;
        let list = [];
        for (let i = 0; i < this.state.itemPerPage; i++) {
            let index = itemPerPage * (curPage - 1) + i;
            list.push(
                <ProjectCard key={`projectCard_${index}`}
                    content={this.state.projects[index]}
                    onCardClick={() => this.setState({ projectViewIndex: index })} />
            )
        }
        return list;
    }

    renderPagination() {
        let list = [];
        let currentPage = this.state.currentPage;
        let totalPage = this.state.totalPage;
        for (let i = 1; i <= totalPage; i++) {
            if ((i > 1) && i <= (currentPage - 2)) {
                list.push(<div className="disabled item">...</div>);
                if (currentPage - 2 > i)
                    i = currentPage - 2;
                continue;
            }
            else if ((i > currentPage + 1) && i <= (totalPage - 1)) {
                list.push(<div className="disabled item">...</div>);
                list.push(<a key={`pagination_${totalPage}`}
                    onClick={() => this.setState({ currentPage: totalPage })}
                    className="item">{totalPage}</a>)
                break;
            }
            else
                if (i == this.state.currentPage) {
                    list.push(
                        <a key={`pagination_${i}`}
                            onClick={() => this.setState({ currentPage: i })}
                            className="active item">{i}</a>
                    )
                } else {
                    list.push(
                        <a key={`pagination_${i}`}
                            onClick={() => this.setState({ currentPage: i })}
                            className="item">{i}</a>
                    )
                }
        }
        return list
    }


    render() {
        return (
            <div>
                <div className="ui segment mb-4" style={{ backgroundColor: '#f0f0f0', borderWidth: '0px' }}>
                    <Jumbotron display='projects' />

                    <div className=" d-flex justify-content-around align-items-center">
                        <button className="ui button icon"
                            onClick={() => this.setState({ currentPage: (this.state.currentPage - 1) < 1 ? this.state.totalPage : (this.state.currentPage - 1) })}>
                            <i className="big arrow left icon"></i>
                        </button>

                        <div className="d-flex ">
                            <div></div>
                            {this.renderList()}
                            <div></div>
                        </div>

                        <button className="ui button icon"
                            onClick={() => this.setState({ currentPage: (this.state.currentPage + 1) > this.state.totalPage ? 1 : (this.state.currentPage + 1) })}>
                            <i className="big arrow right icon"></i>
                        </button>
                    </div>

                    <div className=" ui container stackable d-flex justify-content-around">
                        <div className="ui mini menu ">
                            {this.renderPagination()}
                        </div>
                    </div>
                </div>
                <ProjectDetail project={this.state.projects[this.state.projectViewIndex]} />
            </div>
        )
    }
}

export default ProjectsPage;
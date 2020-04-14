import React from 'react';
import Menu from './Components/Menu';
import Footer from './Components/Footer';
import ProjectsPage from './ProjectsPage';
import Modal from './Components/Model';
import Jumbotron from './Components/Jumbotron'
import { render } from '@testing-library/react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import ResumePage from './ResumePage';

class App extends React.Component {
    state = {
        JumbotronDisplay: 'projects',
    }
    render() {
        return (
            <div>
                <Router>
                    <Menu />
                    <div>
                        <Switch>
                            <Route path="/projects">
                                <ProjectsPage />
                            </Route>
                            <Route path="/resume">
                                <ResumePage />
                            </Route>
                            <Route path="/">
                                About
                            </Route>
                        </Switch>
                    </div>
                    <Footer />

                </Router>
            </div>)
    };
}

export default App;

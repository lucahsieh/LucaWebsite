import project_makeplus from '../img/project_makeplus.png';
import project_bcitHackthon from '../img/project_bcitHackthon-01.png'
import project_publicArt from '../img/project_publicArt.png'
import project_dictateTube from '../img/project_dictateTube.png'
import project_easyGrocery from '../img/project_easyGrocery.png'
import project_MineSweeper_icon from '../img/project_MineSweeper_icon-01.png'
import project_travelPacker from '../img/project_travelPacker.png'
// import project_publicArt from '../img/project_publicArt.png'
import experience_workshop1 from '../img/experience_workshop1.png';
import DictateTube1 from '../img/dictateTube/DictateTube1.png'
import DictateTube3 from '../img/dictateTube/DictateTube3.png'
import DictateTube4 from '../img/dictateTube/DictateTube4.png'
import EasyGrocery1 from '../img/EasyGrocery/EasyGrocery1.png'
import EasyGrocery2 from '../img/EasyGrocery/EasyGrocery2.png'
import EasyGrocery3 from '../img/EasyGrocery/EasyGrocery3.png'
import EasyGrocery4 from '../img/EasyGrocery/EasyGrocery4.png'
import EasyGrocery5 from '../img/EasyGrocery/EasyGrocery5.png'
import Fero from '../img/Fero/Fero.png'
import MineSweeper from '../img/MineSweeper/MineSweeper.png'
import TravelPacker1 from '../img/travelPacker/TravelPacker1.png'
import TravelPacker2 from '../img/travelPacker/TravelPacker2.png'
import TravelPacker3 from '../img/travelPacker/TravelPacker3.png'
import VanArt1 from '../img/VanArt/VanArt1.png'
import VanArt2 from '../img/VanArt/VanArt2.png'
import ProjectMgmt from '../img/ProjectMgmt/ProjectMgmt.png'
import ProjectMgmt1 from '../img/ProjectMgmt/ProjectMgmt1.png'
import ProjectMgmt2 from '../img/ProjectMgmt/ProjectMgmt2.png'
import ProjectMgmt3 from '../img/ProjectMgmt/ProjectMgmt3.png'
import ProjectMgmt4 from '../img/ProjectMgmt/ProjectMgmt4.png'
import ProjectMgmt5 from '../img/ProjectMgmt/ProjectMgmt5.png'
import ProjectMgmt6 from '../img/ProjectMgmt/ProjectMgmt6.png'
import ProjectMgmt7 from '../img/ProjectMgmt/ProjectMgmt7.png'
import ProjectMgmt8 from '../img/ProjectMgmt/ProjectMgmt8.png'
import ProjectMgmt9 from '../img/ProjectMgmt/ProjectMgmt9.png'
import ProjectMgmt10 from '../img/ProjectMgmt/ProjectMgmt10.png'




const projectList = [
    {
        title: 'Project Mgmt.',
        startDate: new Date(2020, 0),
        endDate: new Date(2020, 3),
        desc: 'Academic Project',
        type: 'Academic Project',
        client: null,
        img: ProjectMgmt,
        role: 'Fronet Team Lead',

        teamSize: '11 People',
        category: 'Web App',
        projectName: 'Project Management Tool',
        detailDescription:
            `This project is to design a system to automate certain project management aspects of software
            development at a medium size company. The company usually structures their projects in a standard fashion. This allows
            employees to record their time worked on the project (and get paid), allows customers to
            be billed for the work the company spends on the project, and allows the project manager
            to know how well the project is being run and to report to management. \n \n
            Key features: \n
            * Employees are allowed to submit their work hours via an online timesheet. \n 
            * Supervisor will be able to review/approve the submitted timesheet. \n 
            * Project Manager can create projects, allocate teammembers. \n 
            * Project Manager can view project progress reports. \n 
            `,
        teckStack: [
            { techName: '.NET Core', desc: null },
            { techName: 'Angular 8.0', desc: null },
            { techName: 'Microsoft SQL Server', desc: null },
            { techName: 'Entify Framwork', desc: null },
            { techName: 'Azure Web Services', desc: null },
            { techName: 'Swagger', desc: null },
            { techName: 'Postman', desc: null },
            { techName: 'Visual Studio Code', desc: null },
            { techName: 'npm', desc: null },
            { techName: 'Node.js', desc: null },
            { techName: 'TypeScript', desc: null },
            { techName: 'C#', desc: null },

        ],
        imgs: [ProjectMgmt1, ProjectMgmt2, ProjectMgmt3, ProjectMgmt4, ProjectMgmt5, ProjectMgmt6, ProjectMgmt7, ProjectMgmt8, ProjectMgmt9, ProjectMgmt10
        ],
        links: [
            { label: 'Frontend Repo', link: 'https://github.com/lucahsieh/COMP4910FrontEnd', icon: 'github alternate' },
            { label: 'Backend Repo', link: 'https://github.com/aiyuni/COMP4911WebApi', icon: 'github alternate' },
            { label: 'Live Demo', link: 'https://infosysproject.z9.web.core.windows.net/', icon: 'globe' },

        ],
        showOnResume: true,
        showOnProject: true,
        resumeWeight: 4,
        resumeOverview: [
            'Built web app targeting median-size company to track projects, billing info, and employee timesheets',
            'Led 4 people team to build an Angular8.0 app that implements JWT, Form validation, routing, feature module, interceptor, and Observables(RxJS)',
        ]
    },
    {
        title: 'MAKE+ Tool',
        startDate: new Date(2019, 8),
        endDate: new Date(2019, 11),
        desc: 'Industry Project',
        type: 'Industry Project',
        client: 'MAKE+ Applied Research at BCIT',
        img: project_makeplus,
        role: 'Fronet Web Developer',

        teamSize: '4 People',
        category: 'Web App',
        projectName: 'MAKE+ Project Management Tool',
        detailDescription:
            `
            * Worked in a 4-person team and participated weekly meeting with an industry client \n 
            * Developed a web application for program director and project to track the status of projects internally \n 
            * Designed the solutions by utilizing ASP.NET core, Entity Framework, MSSQL and Angular \n 
            * Implemented Web API in JSON format between frontend and backend
            `,
        teckStack: [
            { techName: 'Microsoft SQL 2017', desc: null },
            { techName: 'ASP.NET Core', desc: null },
            { techName: 'Entify Framwork', desc: null },
            { techName: 'Angular 8.0', desc: null },
            { techName: 'Swagger', desc: null },
            { techName: 'Postman', desc: null },
            { techName: 'TypeScript', desc: null },
            { techName: 'C#', desc: null },

        ],
        imgs: [
        ],
        links: [
        ],
        showOnResume: false,
        showOnProject: true
    },
    {
        title: 'Fero',
        startDate: new Date(2020, 0),
        endDate: new Date(2020, 0),
        desc: 'Hackathon',
        client: null,
        type: 'Hackathon Project',
        role: 'Team Lead & developer',
        img: project_bcitHackthon,

        teamSize: '4 People',
        category: 'Web App',
        projectName: 'Fero',
        detailDescription:
            `* Utilized Airbnb API to build a AI model to predict the most profitable rental price for home owners`,
        teckStack: [
            { techName: 'Angular', desc: null },
            { techName: 'TypeScript', desc: null },
            { techName: 'JavaScript', desc: null },
            { techName: 'Node.js', desc: null },
            { techName: 'Open API', desc: 'Utilized open Airbnb API to predict rental price' },
        ],
        imgs: [
            Fero
        ],
        links: [
            { label: 'Github Repo', link: 'https://github.com/lucahsieh/QDS20', icon: 'github alternate' },
        ],
        showOnResume: true,
        showOnProject: true,
        resumeWeight: 4,
        resumeOverview: [
            'Worked with a random interdisciplinary team and developed a web app to provide users a suggested price for anything they may want to sell or rent',
            'Created a learning predictive model from Airbnb data to suggest an optimal price for a land owner’s listing, with additional analytics',
            'Formed business case, pitch and presented product to industry judges'
        ]
    },
    {
        title: 'Van Art',
        startDate: new Date(2019, 9),
        endDate: new Date(2019, 11),
        desc: 'Android App',
        client: 'Vancouver City',
        type: 'Academic project',
        role: 'Android App Developer',
        img: project_publicArt,

        teamSize: '2 People',
        category: 'Android App',
        projectName: 'Public Art of Vancouver',
        detailDescription:
            `* Designed an android application using Java that allows user explore public art which is near / popular \n
             * Developed with Google Map API, Firebase, and worked in a 2-person team`,
        teckStack: [
            { techName: 'Android API 28', desc: 'Android 9.0 (Pie)' },
            { techName: 'Firebase', desc: null },
            { techName: 'Volley', desc: 'HTTP library' },
            { techName: 'GoogleMap', desc: null },
            { techName: 'Java', desc: null },
        ],
        imgs: [
            VanArt1, VanArt2
        ],
        links: [
            { label: 'Github Repo', link: 'https://github.com/lucahsieh/QDS20', icon: 'github alternate' },
        ],
        showOnResume: true,
        showOnProject: true,
        resumeWeight: 4,
        resumeOverview: [
            'Designed an android application using Java that allows user explore public art which is near / popular',
            'Developed with Google Map API, Firebase, and worked in a 2-person team'
        ]
    },
    {
        title: 'DictateTube',
        startDate: new Date(2018, 7),
        endDate: new Date(2018, 11),
        desc: 'Web App',
        client: null,
        type: 'Personal Project',
        role: 'Developer',
        img: project_dictateTube,

        teamSize: '1 Person',
        category: 'Web App',
        projectName: 'DictateTube',
        detailDescription:
            `
            * Designed a web app for English learners to practice listening skills by dictating YouTube videos \n
            * Developed a strong understanding of Document-Object-Model and Model-View-Controller architecture \n
            * Completed this project during summer holidays as a personal project'`,
        teckStack: [
            { techName: 'Webpack', desc: null },
            { techName: 'Firebase', desc: null },
            { techName: 'Bable', desc: null },
            { techName: 'Youtube API', desc: null },
            { techName: 'JavaScript', desc: null },
            { techName: 'Node.js', desc: null },
            { techName: 'HTML5', desc: null },
            { techName: 'CSS', desc: null },
            { techName: 'Bootstrap', desc: null },
        ],
        imgs: [
            DictateTube1, DictateTube3, DictateTube4
        ],
        links: [
            { label: 'Live Demo', link: 'https://dictatetube.firebaseapp.com/', icon: 'globe' },
        ],
        showOnResume: true,
        showOnProject: true,
        resumeWeight: 3,
        resumeOverview: [
            'Designed a web app for English learners to practice listening skills by dictating YouTube videos',
            'Developed a strong understanding of Document-Object-Model and Model-View-Controller architecture',
            'Completed this project during summer holidays as a personal project'
        ]
    },
    {
        title: 'EasyGrocery',
        startDate: new Date(2018, 4),
        endDate: new Date(2018, 4),
        desc: 'Web App',
        client: 'Vancouver City',
        type: 'Academic Project',
        role: 'Developer',
        img: project_easyGrocery,

        teamSize: '4 People',
        category: 'Mobile Web App',
        projectName: 'Easy Grocery',
        detailDescription:
            `* Developed a JavaScript-based web application with Firebase database for generating grocery list \n 
             * Generated a shopping list based on the user’s nutritional requirement \n 
             * Learned JavaScript, Firebase and agile methodology of 5-person team`,
        teckStack: [
            { techName: 'Firebase', desc: null },
            { techName: 'Bable', desc: null },
            { techName: 'JavaScript', desc: null },
            { techName: 'Node.js', desc: null },
            { techName: 'HTML5', desc: null },
            { techName: 'CSS', desc: null },
            { techName: 'Bootstrap', desc: null },
        ],
        imgs: [
            EasyGrocery1, EasyGrocery2, EasyGrocery3, EasyGrocery4, EasyGrocery5
        ],
        links: [
            { label: 'Live Demo', link: 'https://easygroce-59546.firebaseapp.com/', icon: 'globe' },
            { label: 'Video', link: 'https://www.youtube.com/watch?v=aJmEI5UZYYs', icon: 'video' },
        ],
        showOnResume: true,
        showOnProject: true,
        resumeWeight: 1,
        resumeOverview: [
            'Developed a JavaScript-based web application with Firebase database for generating grocery list',
            'Generated a shopping list based on the user’s nutritional requirement',
            'Learned JavaScript, Firebase and agile methodology of 5-person team'
        ]
    },
    {
        title: 'MineSweeper',
        startDate: new Date(2018, 2),
        endDate: new Date(2018, 3),
        desc: 'Java App',
        client: null,
        type: 'Personal Project',
        role: 'Developer',
        img: project_MineSweeper_icon,

        category: 'Desktop Application',
        projectName: 'Easy Grocery',
        detailDescription:
            `* Developed as a personal project during the 1st term of CST \n `,
        teckStack: [
            { techName: 'Java', desc: null },
            { techName: 'javafx', desc: null },
        ],
        imgs: [
            MineSweeper
        ],
        links: [
            { label: 'Github Repo', link: 'https://github.com/lucahsieh/MineSweeper', icon: 'github alternate' }
        ],
        showOnResume: false,
        showOnProject: true,
        resumeWeight: 1,
        resumeOverview: [
            'Developed as a personal project during the 1st term of CST'
        ]
    },
    {
        title: 'TravelPacker',
        startDate: new Date(2015, 1),
        endDate: new Date(2015, 2),
        desc: 'UI/UX Design',
        client: null,
        type: 'Academic Project',
        role: 'UI/UX Designer',
        img: project_travelPacker,

        category: 'UI/UX Design',
        projectName: 'TravelPacker',
        detailDescription:
            `* Designed a mobile application model that help tourists in trip planning \n
             * Utilized User Centered Design Methodology to build personas and produced possible solutions
             * Solved user’s problem in different kind of situationS by information dashboard, which tells them -instruction to execute travel plan
             `,
        teckStack: [
            { techName: 'Adobe AfterEffect', desc: null },
            { techName: 'Adobe Photoshop', desc: null },
            { techName: 'Adobe Illustrator', desc: null },
            { techName: 'Axure Wireframe', desc: null },
            { techName: 'Story Board', desc: null },
        ],
        imgs: [
            TravelPacker1, TravelPacker2, TravelPacker3
        ],
        links: [
            { label: 'Video', link: 'https://vimeo.com/131342617', icon: 'video' },
        ],
        showOnResume: true,
        showOnProject: true,
        resumeWeight: 1,
        resumeOverview: [
            'Designed a mobile application model that help tourists in trip planning',
            'Utilized User Centered Design Methodology to build personas and produced possible solutions',
            'Solved user’s problem in different kind of situationS by information dashboard, which tells them -instruction to execute travel plan'
        ]
    },
    {
        title: 'Wellaist',
        startDate: new Date(2015, 2),
        endDate: new Date(2015, 3),
        desc: 'UI/UX Design',
        client: null,
        type: 'Academic Project',
        role: 'UI/UX Designer',
        img: null,

        category: 'UI/UX Design',
        projectName: 'TravelPacker',
        detailDescription:
            `* Utilized User Centered Design Methodology to build personas and produced possible solutions \n
             * Guide office workers to extend their bodies & waists in a short break`,
        teckStack: [
            { techName: 'Adobe AfterEffect', desc: null },
            { techName: 'Adobe Photoshop', desc: null },
            { techName: 'Adobe Illustrator', desc: null },
            { techName: 'Axure Wireframe', desc: null },
            { techName: 'Story Board', desc: null },
        ],
        imgs: [

        ],
        links: [
            { label: 'Video', link: 'https://vimeo.com/131421784', icon: 'video' },
        ],
        showOnResume: false,
        showOnProject: false,
        resumeWeight: 1,
        resumeOverview: [
            'Utilized User Centered Design Methodology to build personas and produced possible solutions',
            'Guide office workers to extend their bodies & waists in a short break'
        ]
    },

]

export default projectList;


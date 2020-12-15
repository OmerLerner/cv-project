let data = {
    name: 'Omer Lerner',
    jobTitle: "Software Engineer",
    contact: {
        phoneNumber : '1-800-588-2500',
        email: 'omerler@post.bgu.ac.il',
        linkedin: 'https://www.linkedin.com/in/omer-lerner-678803195/',
        other: 'https://github.com/OmerLerner',
    },
    summary: 'Energetic and inquisitive Computer Science student skilled in leadership, problem solving under pressure, with a strong foundation in logic, math and coding. Seeking to leverage skills to advance and develop as a programmer.',
    education: [{
        id: 0,
        schoolName: 'Ben-Gurion University of the Negev',
        degreeType: 'Bachelor of Science',
        subject: 'Computer Science',
        yearStarted: '2018',
        yearEnded: '2023',
    }],
    projects: [{
        id: 0,
        projectDescription: 'Created a Python based one to one relighting app.',
    },{
        id: 1,
        projectDescription: 'Created a web-based Tic-Tac-Toe game with an unbeatable AI (minimax algorithm).',
    },{
        id: 2,
        projectDescription: 'Created a web-based dynamic to-do app with Vanilla JS & Webpack.',
    },],
    skills: [{
        id:0,
        skillDescription:'C++',
    },{
        id:1,
        skillDescription:'Java',
    },{
        id:2,
        skillDescription:'Javascript',
    },{
        id:3,
        skillDescription:'HTML & CSS',
    },{
        id:4,
        skillDescription:'Python',
    },{
        id:5,
        skillDescription:'React',
    },],
    workExperience: [{
        id:0,
        jobTitle:'Sales Representative',
        companyName:'Arianna Skincare',
        yearStarted: '2016',
        yearEnded: '2018',
        location: 'Boston, MA',
        bulletPoint1:'Present, promote and sell products and services to existing and prospective customers.',
        bulletPoint2:'Consistently meet or exceed monthly sale quotas.',
        bulletPoint3:'Establish, develop and maintain positive business and customer relationships.',
        bulletPoint4:'',
        bulletPoint5:'',
    },{
        id:1,
        jobTitle:"Commander in Battery's Fire Direction Center",
        companyName:'IDF',
        yearStarted: '2013',
        yearEnded: '2016',
        location: 'Israel',
        bulletPoint1:'Worked with computerized systems in order to plan out precise strategies.',
        bulletPoint2:'Responsible for developing a communication network based on VoIP and RoIP.',
        bulletPoint3:'Cooperate with superiors and commanders to solve problems and make decisions under pressure.',
        bulletPoint4:'',
        bulletPoint5:'',
    },],
}

export default data;
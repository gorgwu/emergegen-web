import React from 'react';
import './team.css';

const chartData = [
    {
        title: 'Founders',
        members: [
            { name: 'Anne Santiago', role: 'Managing Partner', school: "Queen's University Commerce", img: '/PeopleIMG/Anne.png' },
            { name: 'Joanna Chai', role: 'Managing Director', school: "Queen's University Commerce", img: '/PeopleIMG/Joanna.png' }
        ]
    },
    {
        title: 'Project Managers',
        members: [
            { name: 'Riya Shahani', role: 'Business Consultant', school: "Queen's University Applied Economics", img: '/PeopleIMG/Riya.png' },
            { name: 'Sunny Zhao', role: 'Project Manager', school: 'University of Western Ontario Film Studies and Commerce', img: '/PeopleIMG/Sunny.JPG' },
            { name: 'Ruby Wang', role: 'Project Manager', school: "Queen's University Computing", img: '/PeopleIMG/Ruby.png' }
        ]
    },
    {
        title: 'Tech',
        members: [
            { name: 'Sandy Mourad', role: 'Director of Tech', school: "Queen's University Computing", img: '/PeopleIMG/Sandy.png' },
            { name: 'George Wu', role: 'Lead Tech Consultant', school: "Queen's University Computing", img: '/PeopleIMG/George.png' },
            { name: 'Michael Jin', role: 'Tech Consultant', school: "Queen's University Computing", img: '/PeopleIMG/Michael.png' },
            { name: 'Kamran Jamacion', role: 'Tech Consultant', school: "Queen's University Engineering", img: '/PeopleIMG/Kamran.png' },
            { name: 'Sarah Mohammad', role: 'Tech Consultant', school: "Queen's University Engineering", img: '/PeopleIMG/Sarah.png' }
        ]
    },
    {
        title: 'Marketing',
        members: [
            { name: 'Isabella Parenthe', role: 'Director of Marketing', school: 'University of Western Ontario Commerce', img: '/PeopleIMG/Isabella.png' },
            { name: 'Emma Barnes', role: 'Marketing Coordinator', school: "Queen's University Commerce", img: '/PeopleIMG/Emma.png' },
            { name: 'Ariel Chen', role: 'Marketing Coordinator', school: 'University of Toronto Commerce', img: '/PeopleIMG/Ariel.png' }
        ]
    },
    {
        title: 'HR & Finance',
        members: [
            { name: 'Clarice Youm', role: 'HR Manager', school: "Queen's University Commerce", img: '/PeopleIMG/Clarice.png' },
            { name: 'Spiro Saites', role: 'Director of Finance', school: "Queen's University Commerce", img: '/PeopleIMG/Spiro.png' }
        ]
    },
    {
        title: 'Business Consultants',
        members: [
            { name: 'Alyssa Byeon', role: 'Business Consultant', school: 'University of Toronto Commerce', img: '/PeopleIMG/Alyssa.png' },
            { name: 'Emily Robinson', role: 'Project Manager', school: "Queen's University Commerce", img: '/PeopleIMG/Emily.png' },
            { name: 'Sam Dai', role: 'Business Consultant', school: "Queen's University Commerce", img: '/PeopleIMG/Sam.png' },
            { name: 'Jessica Hoang', role: 'Business Consultant', school: "Queen's University Commerce", img: '/PeopleIMG/Jessica.png' },
            { name: 'Lauren Chung', role: 'Business Consultant', school: "Queen's University Commerce", img: '/PeopleIMG/Lauren.png' },
            { name: 'Matheus Bryan Djohrianto', role: 'Business Consultant', school: 'University of Toronto International Relations', img: '/PeopleIMG/Matheus.png' },
            { name: 'Anat Kotelatin', role: 'Business Consultant', school: 'Toronto Metropolitan University Commerce', img: '/PeopleIMG/Anat.png' },
            { name: 'Jasmine Chen', role: 'Business Consultant', school: 'University of Western Ontario Commerce', img: '/PeopleIMG/Jasmine.png.jpg' }
        ]
    }
];

const TeamSection = ({ title, members }) => (
    <div className="teams">
        <div className="title">{title}</div>
        <div className="row">
            {members.map(member => (
                <div className="card" key={member.name}>
                    <img src={member.img} alt={member.name} />
                    <div className="name">{member.name}</div>
                    <div className="role">{member.role}</div>
                    <div className="school">{member.school}</div>
                </div>
            ))}
        </div>
    </div>
);

const App = () => (
    <div className='teams-app'>
        <h1>Emerge Gen</h1>
        <div id="chart">
            {chartData.map(section => (
                <TeamSection key={section.title} title={section.title} members={section.members} />
            ))}
        </div>
    </div>
);

export default App;

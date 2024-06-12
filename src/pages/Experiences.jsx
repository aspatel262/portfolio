/*
    File: Experience.jsx
    Author: Ed Park
    Copyright: 2023 - Ed Park https://edpark.space
    Version: 1.0
*/

import PropTypes from 'prop-types';

Experience.propTypes = {
    isSequential: PropTypes.bool.isRequired,
}

// Example work experience data structure
const workExp = [
    {
        company: "Ford Motor Company",
        location: "Dearborn, MI",
        positions: [
            {
                title: "Incoming Software Development Engineering Intern - Machine Learning Ops",
                startDate: "May 2024",
                endDate: "Present"
            },
            {
                title: "Data Software Engineering Intern",
                startDate: "May 2023",
                endDate: "Aug 2023"
            },
            {
                title: "Data Engineering Intern",
                startDate: "June 2022",
                endDate: "Aug 2022"
            },
            {
                title: "Blockchain Applied Research Intern",
                startDate: "June 2021",
                endDate: "Aug 2021"
            }
        ],
        tasks: [
            "Designed and developed an algorithm to measure performance of Ford big data queries within Google Cloud Pipeline.",
            "Launched and trained a statistical analysis model to evaluate run time on big data transfers, queries, or processes.",
            "Developed competencies in Machine Learning tools such as Google Cloud Platform, Jupyter Notebook, Terraform, and XGBoost.",
            "Managed and executed machine learning model predictions inputting housing information parameters.",
            "Obtained proficiencies in Ethereum-based blockchain software tools such as Truffle, Ganache, Solidity, and MetaMask.",
            "Applied research and findings to build decentralized application (dApp) allowing users to donate cryptocurrency to charities using ReactJS and MetaMask."
        ]
    }
];

export default function Experience({ isSequential }) {
    return (
        <ul className={`experience-list ${isSequential ? 'sequential' : 'non-sequential'}`}>
            {workExp.map((work, id) => (
                <li key={id} className={`experience-item ${isSequential ? 'sequential-item' : 'non-sequential-item'}`}>
                    <h3 className={`experience-title ${isSequential ? 'sequential-title' : ''}`}>{work.positions[0].title}</h3>
                    <div className='experience-details'>
                        <span className='experience-company'>{work.company}</span>
                        <span className='experience-location'>{work.location}</span>
                        {(work.positions.length === 1) ?
                            (
                                <DateRange startDate={work.positions[0].startDate} endDate={work.positions[0].endDate} />
                            )
                            :
                            (<ul className='position-list'>
                                {
                                    work.positions.map((position, posId) => (
                                        <li key={posId} className='position-item'>
                                            <p>{position.title}</p>
                                            <DateRange startDate={position.startDate} endDate={position.endDate} />
                                        </li>
                                    ))
                                }
                            </ul>)
                        }
                    </div>
                    <h4 className='roles-title'>Roles and Responsibilities</h4>
                    <ul className='roles-list'>
                        {work.tasks.map((task, taskId) => (
                            <li key={taskId} className='role-item'>
                                {task}
                            </li>
                        ))}
                    </ul>
                </li>
            ))}
        </ul>
    );
}

// DateRange Component for reference
DateRange.propTypes = {
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
}

function DateRange({ startDate, endDate }) {
    return (
        <p className="date-range">
            {startDate} – {endDate}
        </p>
    );
}
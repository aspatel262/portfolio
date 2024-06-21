const experienceData = [
    {
        company: "Ford Motor Company",
        location: "Dearborn, MI",
        title: "Software Development Engineering Intern - Machine Learning Ops",
        duration: "May 2024 - Present",
        responsibilities: [
            "Developed a gradient boosting regression model from scratch to predict battery lifespans as a percentage for F150 Lightning EV batteries, achieving a 9.5% improvement in accuracy from XGBoost, with an MSE of 0.00000559.",
            "Created a comprehensive dashboard to display charging metrics and user charging experience sentiment, summarizing 20 gigabytes of CSV data using 16 different data visualization methods with Python and the Dash framework."
        ]
    },
    {
        company: "Ford Motor Company",
        location: "Dearborn, MI",
        title: "Data Software Engineering Intern",
        duration: "May 2023 - Aug 2023",
        responsibilities: [
            "Designed and developed algorithm to measure performance of Ford big data applications within Google Cloud Big Query, parsing over 200 Terrabytes of project metadata in design testing process within Relational Databases.",
            "Launched and trained a statistical analysis model to evaluate run time on big data transfers, queries, or processes, correctly identifying 91% of new query performances within a Ford project environment.",
            "Utilized model framework to integrate monitoring automation into various scheduled query applications within a Ford project ecosystem, decreasing post-query error detection time from 2 hours to under 80 seconds."
        ]
    },
    {
        company: "Ford Motor Company",
        location: "Dearborn, MI",
        title: "Data Engineering Intern",
        duration: "June 2022 - Aug 2022",
        responsibilities: [
            "Managed and executed machine learning model predictions inputting housing information parameters in order to output projected house prices using Boston Housing dataset at 91% success rate.",
            "Tuned model’s hyperparameters in hyperparameter optimization to refine model learning process through testing process, enhancing accuracy of regression model predictions by 26% and prediction efficiency.",
            "Developed competencies in Machine Learning tools such as Google Cloud Platform, Jupyter Notebook, Terraform, and XGBoost for model prediction under Ford Mach 1 ML model team consisting of 18 members."
        ]
    },
    {
        company: "Busch's Fresh Food Market",
        location: "Canton, Michigan, United States",
        title: "Sales Associate",
        duration: "Jul 2022 - Aug 2022",
        responsibilities: [
            "Operated cash register by adhering to POS system processes and procedures when ringing sales and tendering correct change and receipts.",
            "Engaged customers with friendly smile and knowledgeable support alongside conversation to promote sales and build loyalty.",
            "Escalated customers' complaints or inquiries to management for immediate investigation and resolution."
        ]
    },
    {
        company: "Ford Motor Company",
        location: "Dearborn, MI",
        title: "Blockchain Applied Research Intern",
        duration: "June 2021 - Aug 2021",
        responsibilities: [
            "Applied research and findings to build decentralized application (dApp) allowing users to donate cryptocurrency to charities using ReactJS and MetaMask, handling 50 ETH in transactions through testing and integration process.",
            "Concluded workshop covering Interactive UI development using React JS, HTML, CSS, and Javascript framework tools to raise user interaction and platform engagements by 20%.",
            "Obtained proficiencies in Ethereum-based blockchain software tools such as Truffle, Ganache, Solidity, and MetaMask to expand development capabilities in handling blockchain based transactions with efficiency."
        ]
    },
    {
        company: 'Michigan House of Representatives',
        location: 'Canton, Michigan, United States',
        title: 'Advisory Intern',
        duration: 'Apr 2021 - Jun 2022',
        responsibilities: [
            'Aided in creating and planning various community events and workshops.',
            'Canvassed over local residences to voice concerns and comments to Representative Puri.',
            'Wrote a Bill Proposal on behalf of Representative Puri\'s office to be proposed, promoting a Plastic Bag Incentivized Return Policy to increase Michigan Recycling.'
        ]
    }
];

export default experienceData;


// Coursework Data
const courseworkData = [
  {
    course: 'Business Analytics, Statistics, and Operations',
    code: 'TO 301',
    associatedWith: 'University of Michigan - Stephen M. Ross School of Business'
  },
  {
    course: 'Data Structures and Algorithms',
    code: 'EECS 281',
    associatedWith: 'University of Michigan College of Engineering'
  },
  {
    course: 'Financial Accounting',
    code: 'ACC 300',
    associatedWith: 'University of Michigan - Stephen M. Ross School of Business'
  },
  {
    course: 'Programming and Introduction to Data Structures',
    code: 'EECS 280',
    associatedWith: 'University of Michigan College of Engineering'
  },
  {
    course: 'Theory of Computation and Foundations of Computer Science',
    code: 'EECS 376',
    associatedWith: 'University of Michigan College of Engineering'
  }
];

// Honors & Awards Data
const honorsData = [
  {
    honor: 'Dean\'s Honor List',
    issuer: 'University of Michigan College of Engineering',
    date: 'May 2023'
  },
  {
    honor: 'University Honors',
    issuer: 'University of Michigan - Ann Arbor',
    date: 'May 2023'
  },
  {
    honor: 'Dean\'s Honor List',
    issuer: 'University of Michigan College of Engineering',
    date: 'Jan 2023'
  },
  {
    honor: 'University Honors',
    issuer: 'University of Michigan - Ann Arbor',
    date: 'Jan 2023'
  },
  {
    honor: 'AP Scholar with Distinction',
    issuer: 'The College Board',
    date: 'May 2021',
    description: 'An award granted to students who show excellence in the Advanced Placement program by averaging at least a 3.5 on all exams and scoring a 3 or higher on 5 or more exams.'
  },
  {
    honor: '3 Time KLAA Varsity Scholar Athlete',
    issuer: 'Kensington Lakes Athletic Association',
    date: 'Associated with Salem High School',
    description: '3 time Scholar Athlete (2019-2021). Given to student athletes who compete in a sport at a varsity level while maintaining a 3.5 GPA.'
  }
];

// Skills Data
const skillsData = {
    softSkills: [
        'Leadership',
        'Communication',
        'Teamwork',
        'Problem-solving',
        'Adaptability'
    ],
    technicalSkills: [
        'Data Analysis',
        'Machine Learning',
        'Software Development',
        'Automation',
        'Market Research'
    ],
    programmingLanguages: [
        'Python',
        'JavaScript',
        'C++',
        'HTML',
        'CSS'
    ],
    technologies: [
        'Flask',
        'React',
        'Node.js',
        'TailwindCSS',
        'Google Gemini 1.5 API',
        'Twilio API',
        'Twitter API',
        'Beautiful Soup',
        'Selenium',
        'Numpy',
        'Matplotlib',
        'Unity',
        'Unreal Engine',
        'Amazon AWS'
    ],
    frameworks: [
        'Flask',
        'React',
        'Node.js',
        'TailwindCSS'
    ]
};

export { experienceData, courseworkData, honorsData, skillsData };

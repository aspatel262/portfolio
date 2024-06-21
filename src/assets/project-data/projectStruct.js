// projects.js
import imgStudyBuddy from './project-image/studybuddy.jpg';
import imgFreePointer from './project-image/freepointer.jpeg';
import imgPortfolio from './project-image/portfolio.png';
import imgPostClassifier from './project-image/postclassifier.png';
import imgDronePilot from './project-image/drone.png';

import beautifulSoupIcon from './tech-stack-images/beautiful-soup.svg';
import flaskIcon from './tech-stack-images/flask.svg';
import googleGeminiIcon from './tech-stack-images/google-gemini.svg';
import nodejsIcon from './tech-stack-images/nodejs.svg';
import pythonIcon from './tech-stack-images/python.svg';
import reactIcon from './tech-stack-images/react.svg';
import seleniumIcon from './tech-stack-images/selenium.svg';
import tailwindcssIcon from './tech-stack-images/tailwindcss.svg';
import twilioIcon from './tech-stack-images/twilio.svg';
import twitterIcon from './tech-stack-images/twitter.svg';
import javascriptIcon from './tech-stack-images/javascript.svg';
import gmailIcon from './tech-stack-images/gmail.svg';
import vercelIcon from './tech-stack-images/vercel.svg';
import htmlIcon from './tech-stack-images/html-1.svg';
import cssIcon from './tech-stack-images/css-3.svg';
import cppIcon from './tech-stack-images/c++.svg';
import mlIcon from './tech-stack-images/ml.svg';
import nbIcon from './tech-stack-images/classification.svg';
import unityIcon from './tech-stack-images/unity.svg';
import unrealIcon from './tech-stack-images/unreal.svg';
import numpyIcon from './tech-stack-images/numpy.svg';
import matplotlibIcon from './tech-stack-images/matplotlib.svg';
import amazonAWS from './tech-stack-images/aws.svg';

const projects = [
    {
        title: 'Study Buddy',
        description: 'This is a study-helper web app project made to make your life easier when catching up on lecture content in an interactive way.',
        image: imgStudyBuddy,
        alt: 'Study Buddy Project Image',
        details: {
            description: 'Study Buddy is a web platform designed to enhance the learning experience by providing automated summarization of educational materials and creating interactive quizzes tailored to the uploaded content. It converts text documents, PDFs, and images into concise summaries for quick review, and generates quizzes based on the uploaded content to help users assess their understanding. The platform features a user-friendly interface that is both professional and aesthetically appealing, making it an effective and engaging tool for students.',
            github: 'https://github.com/aspatel262/Study-Buddy',
            liveDemo: 'no-demo',
            techStack: [
                { name: 'Python', link: 'https://python.org', img: pythonIcon },
                { name: 'JavaScript', link: 'https://www.javascript.com/', img: javascriptIcon },
                { name: 'Flask', link: 'https://flask.palletsprojects.com', img: flaskIcon },
                { name: 'React', link: 'https://reactjs.org', img: reactIcon },
                { name: 'HTML', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML', img: htmlIcon },
                { name: 'CSS', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS', img: cssIcon },
                { name: 'Node.js', link: 'https://nodejs.org', img: nodejsIcon },
                { name: 'TailwindCSS', link: 'https://tailwindcss.com', img: tailwindcssIcon },
                { name: 'Google Gemini 1.5 API', link: 'https://cloud.google.com/ai/gemini', img: googleGeminiIcon }
            ]
        },
    },
    {
        title: 'Course Forum Machine Learning Classifier',
        description: 'My first ML project, using Naive Bayes reinforcement learning to classify the topic and author of course forum posts',
        image: imgPostClassifier,
        alt: 'Post Classifier Project Image',
        details: {
            description: 'This project analyzes the topic of student help forum postings and classifies what the post is about using the Naive Bayes classification algorithm. The Naive Bayes algorithm uses calculating log probability scores based on word occurrences in training data to make classifications. This project involves handling data preprocessing, training the model, and evaluating its performance to ensure accurate classification. Implemented in C++, the project demonstrates the application of machine learning techniques for text classification.',
            github: 'priv-repo',
            liveDemo: 'no-demo',
            techStack: [
                { name: 'Naive Bayes Classification Algorithm', link: 'https://en.wikipedia.org/wiki/Naive_Bayes_classifier', img: nbIcon },
                { name: 'Machine Learning', link: 'https://en.wikipedia.org/wiki/Machine_learning', img: mlIcon },
                { name: 'C++', link: 'https://isocpp.org', img: cppIcon }
            ]
        }
    },
    {
        title: 'Chipotle Freepointer Burrito Bot',
        description: 'I designed an automated bot to score free burrito codes during the 2023 NBA Finals. Why, you ask? Because I love Chipotle!',
        image: imgFreePointer,
        alt: 'Chipotle FreePointer Project Image',
        details: {
            description: 'This bot scans Chipotle\'s Twitter account for promotional "FREE" burrito codes and automatically texts these codes to users. It aims to simplify the process of obtaining and using Chipotle promotions. Users need to provide a Twitter API key and configure messaging settings for the bot to function properly. The project addresses the need for automated and efficient code retrieval and distribution. The bot works by scraping Twitter to find codes, filtering the tweets for the code by an algorithm, which then immediately messages the code to Chipotle within milliseconds.',
            github: 'https://github.com/aspatel262/freechipotle',
            liveDemo: 'no-demo',
            techStack: [
                { name: 'Python', link: 'https://python.org', img: pythonIcon },
                { name: 'Twitter API', link: 'https://developer.twitter.com/en/docs/twitter-api', img: twitterIcon },
                { name: 'Twilio API', link: 'https://www.twilio.com', img: twilioIcon },
                { name: 'Beautiful Soup', link: 'https://www.crummy.com/software/BeautifulSoup/', img: beautifulSoupIcon },
                { name: 'Selenium', link: 'https://www.selenium.dev', img: seleniumIcon }
            ]
        }
    },
    {
        title: 'Aditya Patel dot Com',
        description: 'My personal portfolio website. Yup! The one you are looking at right now! Come check out what\'s under the hood!',
        image: imgPortfolio,
        alt: 'Personal Portfolio Project Image',
        details: {
            description: 'This is my personal portfolio website, where I showcase my projects, skills, and experiences. It includes detailed descriptions of my work, links to GitHub repositories, and live demos. Additionally, you will learn more about the developer, me, my professional goals, and my hobbies. The website is designed to provide a comprehensive view of my capabilities and achievements as a developer, as well as a look into the things I enjoy most about my life. I built it using React, along with node.js server-less functions on Vercel to handle contact emails.',
            github: 'https://github.com/aspatel262/freechipotle',
            liveDemo: 'adityapatel.vercel.app',
            techStack: [
                { name: 'JavaScript', link: 'https://www.javascript.com/', img: javascriptIcon },
                { name: 'React', link: 'https://reactjs.org', img: reactIcon },
                { name: 'HTML', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML', img: htmlIcon },
                { name: 'CSS', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS', img: cssIcon },
                { name: 'TailwindCSS', link: 'https://tailwindcss.com', img: tailwindcssIcon },
                { name: 'Node.js', link: 'https://nodejs.org', img: nodejsIcon },
                { name: 'Vercel', link: 'https://vercel.com/home', img: vercelIcon },
                { name: 'Gmail API', link: 'https://developers.google.com/gmail/api/guides', img: gmailIcon },
                { name: 'Amazon AWS', link: 'https://aws.amazon.com', img: amazonAWS }
            ]
        }
    },
    {
        title: 'Autonomous Medical Delivery Drone Pilot',
        description: 'Developed an autonomous drone piloting software capable of navigating complex environments to deliver medical supplies.',
        image: imgDronePilot,
        alt: 'Drone Pilot Project Image',
        details: {
            description: 'This project was designed as a proof of concept for replacing delivery of medical samples, testing kits, and treatments with the use of autonomous drones in a city-like environment. It was built using PID-controller methodology based on lidar, sonar, and barometric input data for collision avoidance, as well as GPS coordinates for routing. This project was deployed and tested using Unity and Unreal Engine city virtual environments for real physics simulations to test the controller. It is entirely developed using Python, including a library to control drone functionality, with Numpy and Matplotlib for data visualization.',
            github: 'priv-repo',
            liveDemo: 'no-demo',
            techStack: [
                { name: 'Python', link: 'https://python.org', img: pythonIcon },
                { name: 'Unity', link: 'https://unity.com/', img: unityIcon },
                { name: 'Unreal Engine', link: 'https://www.unrealengine.com/', img: unrealIcon },
                { name: 'Numpy', link: 'https://numpy.org/', img: numpyIcon },
                { name: 'Matplotlib', link: 'https://matplotlib.org/', img: matplotlibIcon },
            ]
        }
    },
    // Add more projects here...
];

export default projects;

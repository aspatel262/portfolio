const projects = [
    {
        title: 'Study Buddy',
        description: 'This is a study-helper web app project made to make your life easier when catching up on lecture content in an interactive way.',
        details: {
            description: 'Study Buddy is a web platform designed to enhance the learning experience by providing automated summarization of educational materials and creating interactive quizzes tailored to the uploaded content. It converts text documents, PDFs, and images into concise summaries for quick review, and generates quizzes based on the uploaded content to help users assess their understanding. The platform features a user-friendly interface that is both professional and aesthetically appealing, making it an effective and engaging tool for students.',
            github: 'https://github.com/aspatel262/Study-Buddy',
            liveDemo: 'https://github.com/aspatel262/Study-Buddy',
            techStack: [
                { name: 'Python', link: 'https://python.org' },
                { name: 'JavaScript', link: 'https://www.javascript.com/' },
                { name: 'Flask', link: 'https://flask.palletsprojects.com' },
                { name: 'React', link: 'https://reactjs.org' },
                { name: 'HTML', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
                { name: 'CSS', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
                { name: 'Node.js', link: 'https://nodejs.org' },
                { name: 'TailwindCSS', link: 'https://tailwindcss.com' },
                { name: 'Google Gemini 1.5 API', link: 'https://cloud.google.com/ai/gemini' }
            ]  
        },
    },
    {
        title: 'Course Forum Machine Learning Classifier',
        description: 'My first ML project, using Naive Bayes reinforcement learning to classify the topic and author of course forum posts',
        details: {
            description: 'This project analyzes the topic of student help forum postings and classifies what the post is about using the Naive Bayes classification algorithm. The Naive Bayes algorithm uses calculating log probability scores based on word occurences in training data to make classifications. This project involves handling data preprocessing, training the model, and evaluating its performance to ensure accurate classification. Implemented in C++, the project demonstrates the application of machine learning techniques for text classification.',
            github: 'https://github.com/aspatel262/p5-ML',
            liveDemo: 'https://eecs280staff.github.io/p5-ml/',
            techStack: [
                { name: 'Naive Bayes Classification Algorithm', link: 'https://en.wikipedia.org/wiki/Naive_Bayes_classifier' },
                { name: 'Machine Learning', link: 'https://en.wikipedia.org/wiki/Machine_learning' },
                { name: 'C++', link: 'https://isocpp.org' }
            ]
        }
    },
    {
        title: 'Chipotle Freepointer Burrito Bot',
        description: 'I designed an automated bot to score free burrito codes during the 2023 NBA Finals. Why, you ask? Because I love chipotle!',
        details: {
            description: 'This bot scans Chipotle\'s Twitter account for promotional "FREE" burrito codes and automatically texts these codes to users. It aims to simplify the process of obtaining and using Chipotle promotions. Users need to provide a Twitter API key and configure messaging settings for the bot to function properly. The project addresses the need for automated and efficient code retrieval and distribution. The bot works by scraping twitter to find codes, filtering the tweets for the code by an algorithm, which then immediately messages the code to Chipotle within milliseconds.',
            github: 'https://github.com/aspatel262/freechipotle',
            liveDemo: 'https://github.com/aspatel262/freechipotle',
            techStack: [
                { name: 'Python', link: 'https://python.org' },
                { name: 'Twitter API', link: 'https://developer.twitter.com/en/docs/twitter-api' },
                { name: 'Twilio API', link: 'https://www.twilio.com' },
                { name: 'Beautiful Soup', link: 'https://www.crummy.com/software/BeautifulSoup/' },
                { name: 'Selenium', link: 'https://www.selenium.dev' }
            ]
        }
    },
    {
        title: 'Aditya Patel dot Com',
        description: 'My personal portfolio website. Yup! The one you are looking at right now! Come check out what\'s under the hood!',
        details: {
            description: 'This is my personal portfolio website, where I showcase my projects, skills, and experiences. It includes detailed descriptions of my work, links to GitHub repositories, and live demos. Additionally, you will learn more about the developer, me, my professional goals, and my hobbies. The website is designed to provide a comprehensive view of my capabilities and achievements as a developer, as well as a look into the things I enjoy most about my life. I built it using React, along with node.js server-less functions on Vercel to handle contact emails.',
            github: 'https://github.com/aspatel262/freechipotle',
            liveDemo: 'https://github.com/aspatel262/freechipotle',
            techStack: [
                { name: 'JavaScript', link: 'https://www.javascript.com/' },
                { name: 'React', link: 'https://reactjs.org' },
                { name: 'HTML', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
                { name: 'CSS', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
                { name: 'TailwindCSS', link: 'https://tailwindcss.com' },
                { name: 'Node.js', link: 'https://nodejs.org' },
                { name: 'Vercel', link: 'https://vercel.com/home' },
                { name: 'Gmail API', link: 'https://developers.google.com/gmail/api/guides' }
            ]
        }
    },
    
    // Add more projects here...
];

export default projects;

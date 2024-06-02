const projects = [
    {
        title: 'Study Buddy',
        description: 'This is a study-helper web app project made to make your life easier when catching up on lecture content in an interactive way.',
        details: {
            description: 'Study Buddy is a web platform designed to enhance the learning experience by providing automated summarization of educational materials and creating interactive quizzes tailored to the uploaded content. It converts text documents, PDFs, and images into concise summaries for quick review, and generates quizzes based on the uploaded content to help users assess their understanding. The platform features a user-friendly interface that is both professional and aesthetically appealing, making it an effective and engaging tool for students.',
            github: 'https://github.com/aspatel262/Study-Buddy',
            liveDemo: 'https://github.com/aspatel262/Study-Buddy',
            techStack: [
                { name: 'React', link: 'https://reactjs.org', icon: '/project-data/icons/react.svg' },
                { name: 'Flask', link: 'https://flask.palletsprojects.com', icon: '/project-data/icons/flask.svg' },
                { name: 'TailwindCSS', link: 'https://tailwindcss.com', icon: '/project-data/icons/tailwindcss.svg' },
                { name: 'Google Gemini 1.5 API', link: 'https://cloud.google.com/ai/gemini', icon: '/project-data/icons/google-gemini.svg' },
                { name: 'Python', link: 'https://python.org', icon: '/project-data/icons/python.svg' },
                { name: 'Node.js', link: 'https://nodejs.org', icon: '/project-data/icons/nodejs.svg' },
            ]  
        },
    },
    {
        title: 'Chipotle Freepointer Burrito Bot',
        description: 'Automated bot to score free burrito codes during the 2023 NBA Finals',
        details: {
            description: 'This bot scans Chipotle\'s Twitter account for promotional "FREE" burrito codes and automatically texts these codes to users. It aims to simplify the process of obtaining and using Chipotle promotions. Users need to provide a Twitter API key and configure email settings for the bot to function properly. The project addresses the need for automated and efficient code retrieval and distribution.',
            github: 'https://github.com/aspatel262/freechipotle',
            liveDemo: 'https://github.com/aspatel262/freechipotle',
            techStack: [
                { name: 'Python', link: 'https://python.org', icon: '/project-data/icons/python.svg' },
                { name: 'Twitter API', link: 'https://developer.twitter.com/en/docs/twitter-api', icon: '/project-data/icons/twitter.svg' },
                { name: 'Twilio', link: 'https://www.twilio.com', icon: '/project-data/icons/twilio.svg' },
                { name: 'Beautiful Soup', link: 'https://www.crummy.com/software/BeautifulSoup/', icon: '/project-data/icons/beautiful-soup.svg' },
                { name: 'Selenium', link: 'https://www.selenium.dev', icon: '/project-data/icons/twitter.svg' }
            ]
        }
    },
    
    // Add more projects here...
];

export default projects;

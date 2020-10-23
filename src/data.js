import React from 'react';

import AboutMe from './InternetExplorerTabContent/AboutMe';
import Resume from './InternetExplorerTabContent/Resume';
import Notapp from './InternetExplorerTabContent/Notapp';
import Stoinks from './InternetExplorerTabContent/Stoinks';
import Dindle from './InternetExplorerTabContent/Dindle';
import DownloadWebpage from './InternetExplorerTabContent/DownloadWebpage';
import AiMessage from './InternetExplorerTabContent/AiMessage';
import TranscendLife from './InternetExplorerTabContent/TranscendLife';
import UserLoginDatabase from './InternetExplorerTabContent/UserLoginDatabase';
import WebsiteBlocker from './InternetExplorerTabContent/WebsiteBlocker';
import Keylogger from './InternetExplorerTabContent/Keylogger';
import YelpDecisionMaker from './InternetExplorerTabContent/YelpDecisionMaker';
import RobTheMafia from './InternetExplorerTabContent/RobTheMafia';
import QuakeUp from './InternetExplorerTabContent/QuakeUp';

import OaklandHigh from './picSrc/oaklandHigh.jpg';
import Laney from './picSrc/laney.jpg';
import UCI from './picSrc/uci.png';
import CoA from './picSrc/CoA.png';

import Rxt from './picSrc/react.png';
import Python from './picSrc/python.png';
import Firebase from './picSrc/firebase.png';
import TD from './picSrc/td.png';
import RN from './picSrc/RN.png';
import Flutter from './picSrc/Flutter.png';
import Expo from './picSrc/Expo.png';
import Cpp from './picSrc/C++.png';
import SQLite from './picSrc/SQLite.png';
import Yelp from './picSrc/Yelp.png';
import Arduino from './picSrc/Arduino.png';

import Notapp1 from './picSrc/notapp1.PNG';
import Notapp2 from './picSrc/notapp2.PNG';
import Dindle1 from './picSrc/dindle1.png';
import Dindle4 from './picSrc/dindle4.png';
import AiMessage1 from './picSrc/AiMessage1.png';
import AiMessage2 from './picSrc/AiMessage2.png';
import Download1 from './picSrc/Download1.jpg';
import Download2 from './picSrc/Download2.png';
import TranscendLife1 from './picSrc/TranscendLife1.jpg';
import TranscendLife3 from './picSrc/TranscendLife3.jpg';
import ULD from './picSrc/ULD.png';
import WebsiteBlocker1 from './picSrc/WebsiteBlocker1.png';
import WebsiteBlocker2 from './picSrc/WebsiteBlocker2.png';


export const schools = [
    {
        name: 'University of California, Irvine',
        icon: UCI,
        degree: 'Bachelor of Science in Computer Science',
        years: '2018 - 2020',
    },
    {
        name: 'Laney College',
        icon: Laney,
        degree: 'Associate of Science - Transfer in Mathematics',
        years: '2016 - 2018',
    },
    {
        name: 'College of Alameda',
        icon: CoA,
        degree: 'Associate of Science - Transfer in Mathematics',
        years: '2016 - 2018',
    },
    {
        name: 'Oakland High School',
        icon: OaklandHigh,
        degree: 'High School Diploma',
        years: '2012 - 2016',
    }
];

export const skills = [
    {
        name: 'C++',
        level: 75
    },
    {
        name: 'ReactJS',
        level: 90,
    },
    {
        name: 'CSS3',
        level: 60,
    },
    {
        name: 'HTML5',
        level: 70,
    },
    {
        name: 'React Native',
        level: 70,
    },
    {
        name: 'C',
        level: 60,
    },
    {
        name: 'Python',
        level: 85,
    },
    {
        name: 'Javascript',
        level: 90,
    },
    {
        name: 'NodeJS',
        level: 70,
    },
    {
        name: 'ExpressJS',
        level: 70,
    },
    {
        name: 'Git',
        level: 90,
    },
    {
        name: 'AWS',
        level: 50,
    },
    {
        name: 'NoSQL',
        level: 80,
    },
    {
        name: 'SQL',
        level: 60,
    },
    {
        name: 'Java',
        level: 65,
    },
    {
        name: 'SCSS',
        level: 60,
    }
];

export const jobs = [
    {
        company: '</develop> for good',
        location: 'United States',
        position: 'Fullstack Engineer',
        years: 'Sep 2020 - Present',
        info: 'Develop for Good is one of the largest intercollegiate technology and design for social good organizations. They strive to create social impact by developing digital tools and applications pro bono for nonprofit organizations and governing agencies. Their mission is to empower the next generation of student leaders and recent graduates with the tools to use technology for social good.',
        start: {
            month: 6,
            year: 2020,
        },
        description: [
            'Leading the design and implementation of the WashFit app to make it more user-friendly.',
            'Focusing on implementing the dashboard with React.js to make mWater data more informative.',
            'Architected a backend structure in Firebase to collect systemic data to better address water safety.'
        ],
    },
    {
        company: 'Ippo Earrings',
        location: 'Irvine, CA',
        position: 'Fullstack Engineer',
        years: 'Jul 2020 - Present',
        info: 'Ippo Earrings is a jewelry startup that sells handcrafted jewelries and customers could order custom made jewelries.',
        start: {
            month: 9,
            year: 2018,
        },
        description: [
            'Collaborating with the product owner to create 3D jewelry models using Three.js for a better user experience.',
            'Developed a responsive website using MongoDB, Express.js, React.js, Node.js, and Redux stack with REST API.',
            'Used Datadog to monitor the site analytics.',
            'Implemented a web monitoring tool to track traffic and user activities to improve product analysis.',
            'Hosted backend server on Heroku.',
        ],
    },
    {
        company: 'Episource',
        location: 'Gardena, CA',
        position: 'Software Engineer Intern',
        years: 'Jun 2020 - Aug 2020',
        info: 'Episource is a company that develops new ways to help healthcare organizations manage their member populations.',
        start: {
            month: 6,
            year: 2020,
        },
        description: [
            'Created maintainable and reusable UI components using ReactJS.',
            'Developed over 50 automated Jest tests that reduced manual testing time by 15 minutes.',
            'Worked on company dashboard to display metrics used by over 500 insurance companies to save money.',
            'Devised an algorithm and reworked the structure of the search components to improve querying speed.',
        ],
    },
    {
        company: 'Prism Software',
        location: 'Irvine, CA',
        position: 'Quality Assurance Technician',
        years: 'Mar 2020 - Jun 2020',
        info: 'Prism Software replaces manual processes with automated data capture, workflows, and content processing & archiving.',
        start: {
            month: 3,
            year: 2020,
        },
        description: [
            'Programmed web app testing with Selenium that helped to release a new version of the app 17 days earlier.',
            'Automated software testing and tasks using Python, resulting in a 60% decrease of manual work.',
            'Created regression tests to ensure that previously developed and tested software still performed after a change.'
        ],
    },
    {
        company: 'Blueprint at UCI',
        location: 'Irvine, CA',
        position: 'Developer',
        years: 'Sep 2019 - Jun 2020',
        info: 'Blueprint is a club that strives to make technology accessible and useful for those who create communities and promote public welfare.',
        start: {
            month: 12,
            year: 2019,
        },
        description: [
            'Worked on a full-stack web scraper for a nonprofit organization to eliminate manual searching.', 
            'Developed Blueprint website using React.js to display accomplishments and contributions.',
        ],
    },
    {
        company: 'Dreams for Schools',
        location: 'Irvine, CA',
        position: 'Appjam+ Program Mentor',
        years: 'Sep 2019 - Dec 2019',
        info: 'Dreams for schools makes STEM approachable and accessible for all. Empowering students. Cultivating curiosity. By providing the right tools and experience, we help kids program the future. The AppJam+ takes the concept of building software in a short period of time and uses it as a tool to excite and inform middle school students about STEM fields while teaching them the creative and hands-on technical process of mobile application development. Middle school students receive mentorship from college undergraduates and learn to make Mobile apps, which will be utilized by a K-12 audience.',
        start: {
            month: 9,
            year: 2019,
        },
        description: [
            'Empowered 20 middle schoolers with learning disabilities to develop their interests in computer science.', 
            'Mentored 4 kids to give them a hands-on technical experience in building a mobile game app using Thunkable.',
            'Collaborated with 3 mentors to compose weekly lesson plans to motivate kids and cultivate their curiosities.'
        ],
    },
    {
        company: 'King Kong Chinese Restaurant',
        location: 'Castro Valley, CA',
        position: 'Manager',
        years: 'Jan 2014 - Sep 2018',
        info: 'Chinese restaurant in Castro Valley that serves the best authentic Chinese food all over the Bay Area. It was featured on KTSF news.',
        start: {
            month: 1,
            year: 2014,
        },
        description: [
            "Developed the restaurant's website to display their menu and specials.",
            'Served customers, managed dining area, and delivered food.',
        ],
    },
];

export const tabs = [
    {
        name: 'About Me',
        component: <AboutMe/>,
    },
    {
        name: 'Resume',
        component: <Resume/>,
    },
    {
        name: 'Notapp',
        component: <Notapp/>,
    },
    {
        name: 'Stoinks',
        component: <Stoinks/>,
    },
    {
        name: 'QuakeUp',
        component: <QuakeUp/>,
    },
    {
        name: 'Dindle',
        component: <Dindle/>,
    },
    {
        name: 'Download Webpage',
        component: <DownloadWebpage/>,
    },
    {
        name: 'ai Message',
        component: <AiMessage/>,
    },
    {
        name: 'Transcend Life',
        component: <TranscendLife/>,
    },
    {
        name: 'User Login Database',
        component: <UserLoginDatabase/>,
    },
    {
        name: 'Website Blocker',
        component: <WebsiteBlocker/>,
    },
    {
        name: 'Keylogger',
        component: <Keylogger/>,
    },
    {
        name: 'Yelp Decision Maker',
        component: <YelpDecisionMaker/>,
    },
    {
        name: 'Rob the Mafia',
        component: <RobTheMafia/>,
    },
];

export const projects = {
    'Notapp': {
        purpose: 'Notapp is a combination of Google Docs and VS Code. It works like Google Docs but has the ability to format code based on the programming language as well as line numbers.',
        WIL: 'I learned that trying to reinvent a language syntax highlighter is similar to a compiler, and that it was nice wise to do this in a 1 day hackathon.',
        additionalDetails: [
            'Created at DubHacks Aug 2020.',
            'Github: https://github.com/GaryZLi/notap'
        ],
        tech: [
            Rxt,
            Python,
            Firebase,
        ],
        images: [
            Notapp1,
            Notapp2,
        ],
    },
    'Stoinks': {
        purpose: 'Stoinks help determine the best buying and selling point of the stocks that are currently tracked. Information is sent to Discord.',
        WIL: 'I learned there is no easy way to find the right time to buy or sell a stock. There is only lowering the risks and minimizing losses.',
        additionalDetails: [
            'Plan on refining this project and turning it into a side business.',
        ],
        tech: [
            Python,
            TD,
        ],
    },
    'Dindle': {
        purpose: "The goal of Dindle is to match a group of users who cannot agree on where to eat. With Dindle, multiple people can participate in a current session hosted by one of the people in the group. Every person in the same session will have a list of places for food/drink. Everyone will swipe until either a perfect match occurs, or until there are no more cards left. If everyone has swiped to the end and no perfect match occurs, the app will pick the result that matches the most users. The result will display on everyone's screens at the same time.",
        WIL: 'I learned that there are so many dating apps out there that a new dating app must be better than the best or appeal to almost everyone in order to attract people to use it.',
        additionalDetails: [
            'Created at LA Hacks 2020.',
            'Github: https://github.com/GaryZLi/dindle',
        ],
        tech: [
            RN,
            Firebase,
            Yelp,
        ],
        images: [
            Dindle1,
            Dindle4,
        ],
    },
    'Download Webpage': {
        purpose: "I created this app solely for learning purposes. Have you ever wanted to view a webpage but you can't because you don't have an account, have ad blocker on, or some other event? Download Webpage downloads the page and converts the entire page into a .html file. You can now click on the file and your default .html application will open that file.",
        WIL: "I learned that some websites will have javascript that helps render the HTML contents, so this won't work on those types of pages.",
        additionalDetails: [
            'I am not liable for any illegal activities performed using this.',
            'Github: https://github.com/GaryZLi/download_page',
        ],
        tech: [
            Python,
        ],
        images: [
            Download1,
            Download2,
        ],
    },
    'ai Message': {
        purpose: "We want to squash the beef between the Android and iPhone rivalry. Therefore, ai Message (Android and iOS) was created to allow users of different platforms to talk to each other.",
        WIL: "",
        additionalDetails: [
            "Used ReactJS for the web, Flutter for the mobile, and Firebase as the backend. Originally planned to allow the app to send and receive SMS.",
            'Created at Hack UCI 2020.',
            'Github: https://github.com/GaryZLi/ai_message',
        ],
        tech: [
            Rxt,
            Firebase,
            Flutter,
        ],
        images: [
            AiMessage2,
            AiMessage1,
        ],
    },
    'Transcend Life': {
        purpose: "Transcend means go beyond the limit. I wanted to go above and beyond in creating something that matches a user's taste. Instead of choosing a restaurant randomly, a list of recommended restaurants is chosen based on the user's data by analyzing their pattern of restaurant choices. The app recommends the user breakfast, lunch, and dinner everyday.",
        WIL: 'I learned that creating a recommendation system is very difficult to do without gathering lots of data to create models.',
        additionalDetails: [
            'Plan on reworking this and releasing it onto the app store.',
            'Github: https://github.com/GaryZLi/TranscendLife',
        ],
        tech: [
            RN,
            Firebase,
            Expo,
            Yelp,
        ],
        images: [
            TranscendLife1,
            TranscendLife3,
        ],
    },
    'User Login Database': {
        purpose: "Many people, including myself, tend to become forgetful as they grow older. Many different websites or applications have a different username and password requirements, or people just simply want to have a different username or password for each website or application. As the different username and password combinations increase, it becomes much more difficult to keep track of each login. A lot of people save their usernames and passwords online using their Google accounts, however, as we all know, saving any vital information online has a chance of it ending up in the wrong hands. This app allows the users to be able to store their usernames, passwords, and which website or app the combination belongs to and save it onto their local computer. The user could even store the information on an external USB and store it somewhere safe. All the information is encrypted as the user saves and decrypted when the user wants to access their information. Before the user can access the saved information, they must log into the app. This helps prevent the chances of the user's credentials being stolen.",
        WIL: 'I learned how to encrypt data to make it very difficult to hack using brute force. I also learned how to manipulate the operating system to help secure data.',
        additionalDetails: [
            'Encryption/Decryption uses lots of hashing and ciphering.',
        ],
        tech: [
            Python,
            SQLite,
        ],
        images: [
            ULD,
        ],
    },
    'Website Blocker': {
        purpose: "The biggest cyber issue that affected me back when I had a Windows XP computer was a website blocker. Hackers scripted a website blocker that prevented me from going on any website. Making a website blocker became the second thing on my list of programming skills that I wanted to learn. The website blocker I made redirects the blocked websites to the user's localhost instead of the website's hostname which results in a failure to connect.",
        WIL: 'Making this project taught me how requests were made and how the connections between a server and a client could be very insecure.',
        additionalDetails: [
            'Github: https://github.com/GaryZLi/website_blocker',
        ],
        tech: [
            Python,
        ],
        images: [
            WebsiteBlocker1,
            WebsiteBlocker2,
        ],
    },
    'Keylogger': {
        purpose: 'The keylogger is a project that I have always wanted to do ever since I was a kid. Due to hackers always hacking my game accounts when I was a kid made me really want to learn how to prevent that from happening. I realized that most of the time I got hacked was due to a malicious keylogger that logged all of my keystrokes and sent them back to the hacker. After I gained some programming knowledge, I started to do some ethical hacking to learn more about how hacking works. It recorded all the necessary keystrokes and mouseclicks and saved them on a textfile.',
        WIL: 'Making this project made me acknowledge how keyloggers work and how easy it was for them to bypass many antiviruses.',
        additionalDetails: [
            'Github: https://github.com/GaryZLi/Keylogger',
        ],
        tech: [
            Cpp,
        ],
    },
    'Yelp Decision Maker': {
        purpose: "When we hang out with friends, many of us have been through the same problem: \"What do you want to eat?\" \"I don't know... What do YOU want to eat?\". We never know what to eat, and sometimes we spend over 10 minutes scrolling through many pages on Yelp and still do not know what to eat. This Yelp generator generates a restaurant using Yelp API based on their budget and distance. I created this to help be the middleman and to get rid of indecisiveness.",
        WIL: 'I learned how requests and APIs worked.',
        tech: [
            Python,
            Yelp,
        ],
    },
    'Rob the Mafia': {
        purpose: "This was my very first C++ project that I did to help me improve my skills. Rob the Mafia is similar to Tic Tac Toe that the user plays with the computer. I created this to help me experience 'artificial intelligence'. The game used random to help pick the moves.",
        WIL: 'I learned how to use 2D dynamic arrays in C++.',
        tech: [
            Cpp,
        ],
    },
    'QuakeUp': {
        purpose: 'QuakeUp! is a vibrating mattress used to help force lazy/heavy sleepers to get out of bed.',
        WIL: 'I learned how to manipulate the Arduino to help me connect the velostat conductive tape. I learned that it required a good team to create a good product.',
        additionalDetails: [
            'It really wakes someone up.',
            'Github: https://github.com/GaryZLi/QuakeUp',
        ],
        tech: [
            Cpp,
            Arduino,
        ],
    },
};

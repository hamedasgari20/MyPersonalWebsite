//PLEASE FOLLOW THE FORMAT OF THIS FILE.

import {
    faGithubAlt,
    faLinkedinIn,
    faMediumM,
    faFacebook,
    faTwitter,
    faInstagram,
    faYoutube,
    faBehance
} from "@fortawesome/free-brands-svg-icons"


export const userinfo = {
    logoText: "Hamed Asgari", //This text is visible on your navbar and footer like your logo.
    contact: {
        email: 'hamedasgari20@yahoo.com', //It is always a good idea to mention your email on your website. Good platform to communicate.
        phone: '9332737739', //Phone number is optional, if you dont want it, consider leaving it blank .
        countrycode: '+98' //It is advisable to add the country code incase you mention your contact number.
    },
    socials: [
        //For aesthetics, it is advisable for you to mention upto 4 social media links only. Fill in the links.
        //more icons are imported above, use as you like them.
        {type: 'github', link: 'https://github.com/hamedasgari20', icon: faGithubAlt},
        {type: 'linkedin', link: 'https://www.linkedin.com/in/hamed-asgari-18ab89b6/', icon: faLinkedinIn},
        {type: 'medium', link: '', icon: faMediumM},
    ],
    greeting: {
        //this text goes on your landing page
        title: "Hey there, I am Hamed.",
        subtitle: "Before any professional or academic title, I like to be known as a continuous learner. After graduating with a master's degree in industrial engineering, I decided that I needed to master computer science more. After several years of learning, I am currently a full-stack software developer. My idea is to integrate the field of operation research and computer science to produce knowledge-based products in the IT platform."
    },
    capabilities: [
        //this text goes on your home page in table format.
        //For aesthetics, it is advisable for you to mention upto 4 catgeories links only.
        //For aesthetics, it is advisable for you to keep similar number of skills in each category
        {
            category: "Backend Developer", // eg.frontend, backend, devops etc
            skills: ["Python", "Django", "Docker"] //eg. react, html, python etc.
        },
        {
            category: "Frontend Developer",
            skills: ["React", "NextJs", "JavaScript"]
        },
        {
            category: "Optimization",
            skills: ["Mathematical modelling", "Meta-heuristic", "GAMS"]
        },
        {
            category: "Algorithm trading",
            skills: ["Quantitative analysis", "Backtesting", "Bot creating"]
        },
    ],
    about: {
        //this text goes at the bottom of your home page.
        content: "Before any professional or academic title, I like to be known as a continuous learner. After graduating with a master's degree in industrial engineering, I decided that I needed to master computer science more. After several years of learning, I am currently a full-stack software developer. My idea is to integrate the field of operation research and computer science to produce knowledge-based products in the IT platform.",
        resume: "/" //link your resume here. it can be drive link or any other link
    },
    education: {
        visible: true, //set this to false if you want to omit this section
        educationList: [
            {
                time: '2003 May - Oct 2007', //timespan
                title: 'Diploma', //eg. BTech in Compuster Engineering
                organization: 'Bu Ali Sina High School', //eg. VJTI, Mumbai
                description: 'Mathematics' //eg. secured a cgpa of 9.25 in all sems appeared in so far
            },
            {
                time: '2008 May - Oct 2012',
                title: 'Bachelor of Science',
                organization: 'Bu Ali Sina University',
                description: 'Industrial engineering (Optimization)'
            },
            {
                time: '2015 May - Oct 2018',
                title: 'Master of Science',
                organization: 'Bu Ali Sina University',
                description: 'Industrial engineering (Optimization)'
            },
        ],
    },
    experience: {
        visible: true, //set this to false if you want to omit this section
        experienceList: [
            {
                company: 'Freelancer', //company name eg.Microsoft
                companylogo: '', //companylogo
                position: 'Algorithm trader', //post you held eg.Senior SDE
                time: 'Jan 2021 - Dec 2021', //timespan
                description: 'My duties was backtesting financial strategies and parameter optimization and creating bots with python language for auto trading' //eg. spearheaded the graphics team in designing SASS product UIs
            },
            {
                company: 'Pishtrade',
                companylogo: '',
                position: 'Full Stack Developer',
                time: 'Jan 2022 - Aug 2022',
                description: 'My duties was building NVP of pishtrade'
            },
            {
                company: 'RayanBourse',
                companylogo: '',
                position: 'Full Stack Developer',
                time: 'Aug 2022 - Current',
                description: 'My duties is developing company software with Django for backend and NextJs for frontend development'
            },
        ],
    },
    blogs: {
        //set this to false if you want to omit this section
        visible: true
    },
}

export const headings = {
    //you can customise all the headings here.
    workHomePage: 'Work',
    workMainPage: 'Projects',
    capabilities: 'Capabilities',
    about: 'About Me',
    education: 'Education',
    experience: 'Experiences',
    blogs: 'I write!',
    contact: 'Contact Me',
}

export const ctaTexts = {
    //you can customise all the cta texts here.
    landingCTA: 'My work',
    workCTA: 'View All',
    capabCTA: 'Get in Touch',
    educationCTA: 'About Me',
    resumeCTA: 'Resume',
    submitBTN: 'Submit'
}
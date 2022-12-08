// import project demo images as follows.

import PROJECT21 from '../styles/projects/project21.jpg';
import PROJECT22 from '../styles/projects/project22.jpg';
import PROJECT23 from '../styles/projects/project23.jpg';
import PROJECT11 from '../styles/projects/project11.jpg';
import PROJECT12 from '../styles/projects/project12.jpg';
import PROJECT13 from '../styles/projects/project13.jpg';

// first 3 projects are visible on the homepage while all are visible on the work page.

export const projects = [
    //leave the githublink field blank if it is a private repo or doent exist, alerts will take care of it
    //leave the projectlink field blank if it the project has not been deployed, alerts will take care of it
    {
        name: 'Behwrite', //project name
        description: 'The first intelligent IELTS writing system in Iran.', //project description
        githubLink: '', //github repo link
        projectLink: 'https://behwrite.com/', //deployed project link
        tech: ['Laravel', 'PHP', 'JavaScript'], //techstack of the project, it is advisavble to mention only upto 3 technologies here to maintain the ui
        photo: [PROJECT11, PROJECT12, PROJECT13], //list of names of images from above imports.
    },
    {
        name: 'Pishtrade',
        description: 'statistical tools and artificial intelligence tool in financial market',
        githubLink: '/',
        projectLink: 'https://pishtrade.com/',
        tech: ['React', 'Django', 'Python'],
        photo: [PROJECT21, PROJECT22, PROJECT23],
    },
]

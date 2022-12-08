import paper1 from '../styles/projects/paper1.jpg'
import paper2 from '../styles/projects/paper2.jpg'
import paper3 from '../styles/projects/paper3.jpg'
import paper4 from '../styles/projects/paper4.jpg'
import paper5 from '../styles/projects/paper5.jpg'


export const custom_blogs = [
    // please add only upto 6 blogs for maintaining the ui
    {
        title: 'A scatter search algorithm with a novel solution representation for flexible open shop scheduling: a multi-objective optimization', //blog title
        description: 'In this study, a bi-objective flexible open shop scheduling with independent setup time is considered. The considered objective functions are to minimize the maximum completion time of jobs and total tardiness.', //blog decription
        link: 'https://link.springer.com/article/10.1007/s11227-021-03794-5', //link your blog here
        thumbnail: paper1, //blog image, can be an import or link
        categories: ['optimization', 'operation research', 'AI'] //eg. web developement, prgramming, lifestyle etc.
    },
    {
        title: 'Multi-objective stock market portfolio selection using multi-stage stochastic programming with a harmony search algorithm',
        description: 'This study aims to provide a framework that addresses some shortcomings and provides a practical tool. In this regard, this study suggests a multi-objective and multi-stage stochastic model for portfolio selection in the financial market. ',
        link: 'https://link.springer.com/article/10.1007/s00521-022-07686-4',
        thumbnail: paper2,
        categories: ['portfolio', 'metaheuristic', 'mathematics']
    },
    {
        title: 'A hyper-heuristic for distributed parallel machine scheduling with machine-dependent processing and sequence-dependent setup times',
        description: ' this study considers the scheduling of multiple factories by taking into account the job transportation time between factories. The main problem here is that each job would be assigned to which factory and machine. In this research, unrelated parallel machines are considered in which the processing time of jobs depends on the machine and setup time.',
        link: 'https://www.rairo-ro.org/articles/ro/abs/2022/06/ro220166/ro220166.html',
        thumbnail: paper3,
        categories: ['scheduling', 'transportation', 'AI']
    },
    {
        title: 'Buffer estimation in the critical chain method by considering internal and external risks',
        description: 'In this research, the internal and external source of uncertainty is considered simultaneously during the buffer estimation process. In order to identify the external risks of the project, the failure mode and effect analysis technique has been used.',
        link: 'https://www.inderscienceonline.com/doi/abs/10.1504/IJAOM.2022.122694',
        thumbnail: paper4,
        categories: ['risk', 'project management', 'estimation']
    },
    {
        title: 'Multi-objective portfolio selection with multi-stage stochastic programming',
        description: 'In this paper, a multi objective multi stage stochastic model is proposed to portfolio selection. This model takes into account both the investment goal and risk control at each stage. A scenario generation method is proposed that acts as the basis of the portfolio management model.',
        link: 'https://fej.ctb.iau.ir/article_681169.html?lang=en',
        thumbnail: paper5,
        categories: ['portfolio', 'finance', 'optimization']
    },
]

// uncomment the following code if you want to fetch your medium articles and comment out the custom blogs code above
// export const medium_blogs = { username: 'yourusername'}

// uncomment the following code if you want to fetch your devto articles and comment out the custom blogs code above
// export const dev_to = { username: 'yourusername'}
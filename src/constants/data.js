import images from './images';

const Menu = [
    {
        text: 'About us',
        link: 'https://bhavithran1.github.io/Portfolio-website/',
    },
    {
        text: 'Services',
        link: '#services',
    },
    {
        text: 'Use Cases',
        link: '#use-cases',
    },
    {
        text: 'Process',
        link: '#process',
    },

    {
        text: 'Testimonials',
        link: '#testimonials',
    },
    {
        text: 'Request a quote',
        link: '#quote',
    }
];
const ServicesData = [
    {
        titleone: 'Attractive',
        titletwo: 'themes',
        link: '#quote',
        itemclass: 'blight',
        imgURL: images.services01,
    },
    {
        titleone: 'Intersting',
        titletwo: 'layouts',
        link: '#quote',
        itemclass: 'bgreen',
        imgURL: images.services02,
    },
    {
        titleone: 'Linking social',
        titletwo: 'media',
        link: '#quote',
        itemclass: 'bdark',
        imgURL: images.services03,
    },
    {
        titleone: '"Contact Us"',
        titletwo: 'section',
        link: '#quote',
        itemclass: 'blight',
        imgURL: images.services04,
    },
    {
        titleone: "Blogger's",
        titletwo: 'Section',
        link: '#',
        itemclass: 'bgreen',
        imgURL: images.services05,
    },
    {
        titleone: 'Analytics and',
        titletwo: 'Tracking',
        link: '#quote',
        itemclass: 'bdark',
        imgURL: images.services06,
    },
]
const CaseStudies = [
    {
        text: 'Whether you are a model, actor, on painter or writer, an online portfolio will let you showcase all the work that you have done to people worldwide.',
        link: 'https://www.linkedin.com/pulse/benefits-having-professional-websiteportfolio-taniya-pathania/',
    },
    {
        text: " It has great potential to showcase your skills, previous work, and experience in the industry. Any professional business needs an updated portfolio that draws the audience's attention.",
        link: 'https://acquaintsoft.com/blog/benefits-of-developing-portfolio-website',
    },
    {
        text: 'LinkedIn, Instagram, Pinterest, Facebook pages, etc., are great. But do you know what’s even better? A personal website to tell the world who you are and what you do best.',
        link: 'https://www.ucraft.com/blog/the-benefits-of-an-online-portfolio#',
    },
];

const WorkingProcess = [
    {
        title: 'Consultation',
        description: 'During the initial consultation, we will understand the purpose of the portfolio website (e.g., showcasing work, attracting clients, job hunting) and identify your target audience (potential clients, employers, peers).',
    },
    {
        title: 'Plan the Content',
        description: "Decide what content to include [ Projects] [ Resume/CV ] [About Me: Share a brief bio, skills, and background.] [ Contact Information: Make it easy for visitors to reach out]",
    },
    {
        title: 'Choose a Domain Name and Hosting',
        description: 'Select a unique & relevant domain name (e.g., firstname-lastname.com). Choose a reliable web hosting service (e.g., Bluehost, SiteGround).',
    },
    {
        title: 'Design and Development',
        description: 'Customize the design: [ Colors][ Fonts ][ Layout ] Develop and organize pages (homepage, portfolio, about, contact). Optimize images and other media files for the web.',
    },
    {
        title: 'Create Exclusive Portfolio Content',
        description: 'Showcase your best work. Write compelling descriptions for each project. Highlight your skills, expertise, and unique selling points.',
    },
    {
        title: 'Test and Launch',
        description: 'Test the website on different devices (desktop, tablet, mobile). Check for broken links, typos, and other issues. Set up analytics (e.g., Google Analytics) to track website performance. Launch the website and promote it on social media and professional networks.',
    },

];

const Testimonials = [
    {
        name: 'MD. Nazmul Ahmed',
        position: 'Attended Western Governors University',
        testimonial: '"I highly recommend Xquisite for all of your design, development, and manufacturing needs. The bonus is that they are a friendly and amazing bunch of talented individuals who will deliver exceptional work for projects of any size or scale. Bhavithran Ananthan is a delight to work with on projects and building client relationships."',
    },
    {
        name: 'Shifat Alom',
        position: 'Account Manager at Amazon',
        testimonial: '"Xquisite`s expertise in portfolio website development is evident. Their attention to detail and commitment to delivering high-quality work make them a top choice for anyone seeking professional web development services."',
    },
    {
        name: 'Emdadul Hoq Mithu',
        position: 'Digital Marketing Manager at Power Digital Marketing',
        testimonial: '"Xquisite’s portfolio website design is impressive. Their blend of creativity, functionality, and user experience showcases their mastery in the field. Highly recommended!"',
    },
    {
        name: 'Syed Aliraza',
        position: 'Sales and Marketing Manager at Samsung Smartzone',
        testimonial: '"Bhavithran is a front-end developer specializing in UX/UI designs – his web developer portfolio is an excellent representation of his expertise. Rather than using multiple website layouts, he provides all the essential information on a single page, from his work to contact details."',
    },
];
export default { Menu, CaseStudies, WorkingProcess, Testimonials, ServicesData };
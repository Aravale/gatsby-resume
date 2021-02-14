module.exports = {
  /* Your site config here */
  siteMetadata: {
    siteUrl: `https://hussainshabbir.netlify.com/`,
    name: `Hussain Shabbir`,
    role: `Software Engineer`,
    email: `hussain.bhaiji.97@hotmail.com`,
    socialMedia: [
      {
        name: "github",
        link: "https://github.com/Aravale",
      },
      { name: "linkedin", link: "https://www.linkedin.com/in/hussain-shabbir-8b525b109/" },
      /* { name: "facebook", link: "https://facebook.com" },
      { name: "twitter", link: "https://twitter.com" },
      { name: "instagram", link: "https://instagram.com" }, */
    ],
    about: `
      
      <p>A software engineer with experience in web and mobile via internsips, university and personal projects. I graduted at the top of my class and spend most of my time trying to keep up with new technologies. I love learning new things and can easily adapt to different platforms.</p>
      
      `,
    education: [
      {
        degree: "BS",
        major: "Computer Science",
        when: "2016-2020",
        school: "SZABIST",
        where: "Karachi, Pakistan",
        moreInfo: `<p>3.66 CGPA. Gold medalist of my batch</p> <p>Member of ACM where I conducted an Intro to OOP seminar for first-year students.</p>`,
      },
      {
        degree: "A levels",
        when: "2014-2016",
        school: "The Lyceum",
        where: "Karachi, Pakistan",
        moreInfo: `<p>Sciences</p> <p>Part of LyManage society which was responsible for organising school events.</p>`,
      },
      {
        degree: "O levels",
        when: "2011-2014",
        school: "The Avicenna School",
        where: "Karachi, Pakistan",
        moreInfo: `<p>Sciences</p> <p>School Prefect.</p>`
      },
    ],
    experience: [
      {
        role: "Tech Intern",
        when: "May 2020 - July 2020",
        company: "Dot & Line",
        where: "Karachi, Pakistan",
        moreInfo: `Worked with Angular, React and Laravel. 
        Contributed new fetures such as a products page and order form to the website and internal admin app and helped update a learning app to the latest Angular version.`,
      },
      {
        role: "IT Intern",
        when: "Aug 2019",
        company: "Dubai Islamic Bank",
        where: "Karachi, Pakistan",
        moreInfo: `Monitoring NMS and compiling tickets from emails to reduce billing.`,
      },
      {
        role: "Home Tutor",
        when: "Jan 2015 - Dec 2016",
        company: "Teachingcareers.pk",
        where: "Karachi, Pakistan",
        moreInfo: `Taught A Level Computer Science and all O Level Science subjects.`,
      },
    ],
    skills: [
      {
        name: "Python",
      },
      {
        name: "C#",
      },
      {
        name: "Java",
      },
      {
        name: "HTML",
      },
      {
        name: "CSS",
      },
      {
        name: "Javascript",
      },
      {
        name: "ReactJS",
      },
      {
        name: "KonvaJS",
      },
      {
        name: "MySQL",
      },
      {
        name: "MongoDB",
      },
    ],
    interests: [
      "Dota, RPGs and strategy games",
      "Programming",
      "TV shows, movies and anime",
      "Eating new food",
    ],
    //available_themes: ["great-gatsby", "master-yoda", "wonder-woman", "darth-vader", "luke-lightsaber"],
    theme: "luke-lightsaber",
    //fonts. Available: [default, programmer]
    font: "default",
  },
  plugins: [
    // Make sure this plugin is first in the array of plugins
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-111111111-1",
        head: true,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
		`gatsby-plugin-less`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
            `IBM Plex Mono`,
        ],
				display: 'swap'
      },
    },
  ],
}

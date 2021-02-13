module.exports = {
  /* Your site config here */
  siteMetadata: {
    siteUrl: `https://hussainshabbir.netlify.com/`,
    name: `Hussain Shabbir`,
    role: `Software Developer`,
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
      
      <p>See the PDF version of my resume <a href="#">here</a>.</p>
      <p>As you can see, it's possible to add HTML tags in your about page.</p>
      `,
    education: [
      {
        degree: "BS",
        major: "Computer Science",
        when: "2016-2020",
        school: "SZABIST",
        where: "Karachi, Pakistan",
        moreInfo: `<p>3.66 CGPA. Gold medalist of my batch.</p>`,
      },
      {
        degree: "A levels",
        when: "2014-2016",
        school: "The Lyceum",
        where: "Karachi, Pakistan",
      },
    ],
    experience: [
      {
        role: "Tech Intern",
        when: "2020",
        company: "Dot and Line",
        where: "Karachi, Pakistan",
        moreInfo: `Removed a feature from a page and made UI changes to Angular app.
        Made updates to forms on a Laravel app.
        Added a page to sell products as a new feature to React app( Main website).
        Used MySQL workbench to make updates to information in DB when required.
        Remade homepage to improve UX and added filters for a list and changed UI in their
        react app.`,
      },
      {
        role: "IT Intern",
        when: "2019",
        company: "Dubai Islamic Bank",
        where: "Karachi, Pakistan",
        moreInfo: `Primary role was understanding and monitoring the network monitoring system.
                  Learned how the network of a large organization works.`,
      },
    ],
    skills: [
      {
        name: "JavaScript",
        level: "85",
        experience: "5 years",
      },
      {
        name: "Python",
        level: "75",
        experience: "2 years",
      },
      {
        name: "Java",
        level: "65",
        experience: "2 years",
      },
      {
        name: "React",
        level: "75",
        experience: "1 years",
      },
      {
        name: "Linux",
        level: "75",
        experience: "4 years",
      },
      {
        name: "C++",
        level: "40",
        experience: "1 years",
      },
    ],
    interests: [
      "Reading",
      "Programming",
      "Playing the violin",
      "Running",
      "Watching Monty Python and the Holy Grail",
    ],
    //available_themes: ["great-gatsby", "master-yoda", "wonder-woman", "darth-vader", "luke-lightsaber"],
    theme: "great-gatsby",
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

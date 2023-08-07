import posts from "../../assets/projects_images/postSharer.PNG";
import expensify from "../../assets/projects_images/expensifyApp.PNG";
import devConnector from "../../assets/projects_images/devConnector.PNG";
import jobs from "../../assets/projects_images/jobSchedulingSys.PNG";
import intigue from "../../assets/projects_images/intigue.PNG";
import meetups from "../../assets/projects_images/travel meetups.PNG";

const data_projects = [
  {
    name: "Expensify-App",
    image: expensify,
    deployed_url: "https://expensify-app-xi.vercel.app/",
    github_url: "https://github.com/dicer3/expensify-app",
    category: ["react.js"],
  },

  {
    name: "Dev Connector",
    image: devConnector,
    deployed_url: "https://devconnector-zi7l.onrender.com/",
    github_url: "https://github.com/dicer3/devConnector",
    category: ["node.js", "mongoDB", "react.js"],
  },

  {
    name: "Job Scheduling System",
    image: jobs,
    deployed_url: "https://job-scheduling-system.onrender.com/",
    github_url: "https://github.com/dicer3/Job-Scheduling-System ",
    category: ["node", "socket.io", "react"],
  },
  {
    name: "Post Sharer",
    image: posts,
    deployed_url: "https://post-share-app.netlify.app/",
    github_url: "https://github.com/dicer3/MEAN_course",
    category: ["django", "react"],
  },
  {
    name: "Travel Meetups",
    image: meetups,
    deployed_url: "https://travel-meetups.vercel.app/",
    github_url: "https://github.com/dicer3/Travel-Meetups",
    category: ["django", "react"],
  },
  {
    name: "Work Sample(Design)",
    image: intigue,
    deployed_url: "https://design-work-sample.netlify.app/",
    category: ["html_css", "vanilla"],
  },
];

export default data_projects;

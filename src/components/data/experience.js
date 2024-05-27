const dot = `&#x2022;`
export default [
  {
    company: "Paymentus",
    position: "Full Stack Developer",
    time: "July 2021 - Present",
    work: `${dot} Worked on Project Tracking Product named
    Drutas made frontend in React did styling using
    Bootstrap and SCSS , handled state management
    in React Context and Redux <br />
    ${dot} Made Microservices in Springboot connected
    with Database MySQL using ORM Tools like
    JPA/Hibernate <br/>
    ${dot} Integrated Redis with Spring Boot to cache data,
    reducing API response times by avoiding
    database hits when data is already available <br />
    ${dot} Made Cron Job in Springboot for Daily Digest
    Emails to all active users of drutas using
    SendGrid Email Service <br/>
    ${dot} The Communication between Cron Job
    Microservice and Email Service was done using
    RestTemplate in Sprinboot(sending HTTP
    Request) which was later refactored and Kafka
    Architecture was used instead of HTTP Rest
    Template <br/>`,
    TechUsed: "Java,Springboot,JPA,SQL,Sendgrid, <br/> Redis,Kafka,React,Redux",
  },
  {
    company: "Paymentus",
    position: "Full Stack Developer",
    time: "July 2020 - March 2021",
    work: `${dot} made IPN dashboard interfaces in React(used
      React Hooks , React Context and Redux) 
      integrated the backend in NodeJs and used
      mongoDB as database. <br/>
      ${dot} made mircoservices in NodeJS and connected
      with database MongoDB <br/>
      ${dot} styled different pages using Bootstrap and SCSS <br/>`,
    TechUsed: " NodeJs,ReactJS,MongoDB,SCSS",
  },
  {
    company: "Holidify",
    position: "Full Stack Developer(Intern)",
    time: "Jan 2020 - June 2020",
    work: `${dot} Designed a Project where user could see routes from city to another.Made appropriate 
    algorithm for backend and designed the frontend <br />
    ${dot} Designed the CMS so content Team could perform CRUD operation in Holidfiy website `,
    TechUsed: "Java,SpringBoot,SCSS,Javascript,SQL",
  }
  // {
  //     "company": "Mindpeers",
  //     "position": "Frontend Developer",
  //     "time": "March 2020 -  Present",
  //     "work": "Made Screens for therpay Booking on Mindpeers Platform",
  //     "TechUsed": "React , Redux, Bootstrap"
  // }
];

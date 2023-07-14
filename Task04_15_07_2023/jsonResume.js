/**
 * Task file to create JSON Resume.
 */
let myResume = {
  basics: {
    firstName: "Saranya",
    lastName: "Mariappan",
    email: "saxxxxxxxx@gamil.com",
    phone: 9000000000,
    degree: "B.E",
    location: {
      address: "15/16 Sainath Enclave ShenoyNagar",
      postalCode: 600030,
      city: "Chennai",
      state: "Tamilnadu",
      country: "India",
    },
    profiles: [
      {
        linkedin: "https://www.linkedin.com/in/saranya-mariappan-96144674/",
        github: "https://github.com/saranya-mariappan",
      },
    ],
  },
  work: [
    {
      company: "ValueBound Consulting Services Pvt Ltd",
      position: "Tech Lead",
      startDate: "2021-05-31",
      endDate: "",
      currentCompany: true,
      summary:
        "I have 10+ years of experience on Drupal Development. Expertise on custom module building, themeing. Has experience on Project Estimation, Code review, Code refactoring, Optimizing. Been in Project Architectural Team.",
    },
  ],
  education: [
    {
      institution: "Theni Kammavar Sangam College of Technology",
      department: "CSE",
      studyType: "fulltime",
      "batch start year": 2008,
      "batch end year": 2012,
      gpa: 7.5,
    },
  ],
  skills: [
    {
      name: "Drupal, PHP, MySQL, HTML, Javascript, CSS, AJAX",
      level: "Experienced",
      project: ["E-commerce", "Educational University", "Health Care"],
    },
  ],
  languages: [
    {
      language: "Tamil,Enlish",
    },
  ],
  interests: [
    {
      name: "Gardening, Cooking",
    },
  ],
};
console.log(myResume);

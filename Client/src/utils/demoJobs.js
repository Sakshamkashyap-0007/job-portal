const demoCompanies = [
  {
    companyName: "PixelForge Studio",
    logo: "https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=200&q=80",
  },
  {
    companyName: "CloudNest",
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=200&q=80",
  },
  {
    companyName: "FinStack Labs",
    logo: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=200&q=80",
  },
  {
    companyName: "Nova Retail",
    logo: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=200&q=80",
  },
  {
    companyName: "Medisphere",
    logo: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=200&q=80",
  },
  {
    companyName: "OrbitX Digital",
    logo: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=200&q=80",
  },
  {
    companyName: "TalentBridge AI",
    logo: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=200&q=80",
  },
  {
    companyName: "UrbanCart",
    logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=200&q=80",
  },
];

const demoJobTemplates = [
  ["Frontend Developer", "Build polished React interfaces for a fast-moving product team focused on conversion and retention.", "Bengaluru", "Full Time", 4, 8, 3],
  ["Backend Engineer", "Design scalable Node.js APIs, optimize database queries, and ship reliable backend services.", "Hyderabad", "Full Time", 3, 12, 4],
  ["Full Stack Developer", "Own features end-to-end across React, Express, MongoDB, and internal admin tooling.", "Pune", "Full Time", 5, 14, 5],
  ["UI/UX Designer", "Create high-converting user journeys, wireframes, and production-ready design systems.", "Mumbai", "Full Time", 2, 9, 2],
  ["Product Designer", "Translate product ideas into intuitive flows, reusable components, and crisp prototypes.", "Delhi NCR", "Full Time", 2, 11, 3],
  ["DevOps Engineer", "Automate CI/CD, improve cloud infrastructure, and strengthen monitoring across environments.", "Chennai", "Full Time", 2, 15, 4],
  ["Data Analyst", "Turn business data into dashboards, insights, and experiment recommendations for leadership.", "Gurugram", "Full Time", 4, 7, 2],
  ["Data Scientist", "Build forecasting and recommendation models using Python, SQL, and modern ML workflows.", "Bengaluru", "Full Time", 2, 18, 4],
  ["Machine Learning Engineer", "Deploy ML models to production, manage feature pipelines, and monitor drift.", "Hyderabad", "Full Time", 3, 20, 5],
  ["QA Automation Engineer", "Create resilient automated test coverage for web apps and API-heavy releases.", "Noida", "Full Time", 3, 8, 3],
  ["Mobile App Developer", "Ship delightful React Native experiences with strong performance and analytics discipline.", "Pune", "Full Time", 2, 13, 3],
  ["HR Recruiter", "Source top product and engineering talent while creating a standout candidate experience.", "Mumbai", "Full Time", 6, 6, 2],
  ["Technical Support Engineer", "Solve customer issues, debug integrations, and improve self-serve support content.", "Remote", "Full Time", 8, 5, 1],
  ["Business Analyst", "Gather requirements, map workflows, and support delivery teams with crisp documentation.", "Kolkata", "Full Time", 3, 9, 2],
  ["Project Manager", "Coordinate cross-functional teams, timelines, and stakeholder updates for critical launches.", "Remote", "Full Time", 2, 16, 5],
  ["Content Writer", "Write clear landing pages, email campaigns, and SEO-focused product content.", "Jaipur", "Part Time", 2, 4, 1],
  ["Digital Marketing Specialist", "Run paid campaigns, optimize funnels, and improve organic reach across channels.", "Delhi NCR", "Full Time", 4, 7, 2],
  ["SEO Specialist", "Improve technical SEO, keyword targeting, and content structure for growth pages.", "Remote", "Contract", 1, 6, 2],
  ["Sales Executive", "Drive B2B pipeline through outbound outreach, demos, and structured follow-ups.", "Ahmedabad", "Full Time", 10, 6, 1],
  ["Customer Success Manager", "Onboard clients, increase adoption, and build long-term account relationships.", "Remote", "Full Time", 3, 10, 3],
  ["Graphic Designer", "Produce ad creatives, brand assets, and pitch visuals for multi-channel campaigns.", "Indore", "Full Time", 2, 6, 2],
  ["Operations Associate", "Support daily business workflows, vendor coordination, and internal process cleanup.", "Pune", "Internship", 5, 3, 0],
  ["Cybersecurity Analyst", "Monitor threats, support audits, and improve internal security standards.", "Hyderabad", "Full Time", 2, 17, 4],
  ["Cloud Engineer", "Manage AWS infrastructure, container workloads, and cost-efficient scaling strategies.", "Bengaluru", "Full Time", 2, 19, 4],
];

export const demoJobs = demoJobTemplates.map((job, index) => {
  const [title, description, location, jobType, position, salary, experience] = job;
  const company = demoCompanies[index % demoCompanies.length];
  const createdAt = new Date(Date.now() - index * 86400000).toISOString();

  return {
    _id: `demo-job-${index + 1}`,
    title,
    description,
    location,
    jobType,
    position,
    salary,
    experience,
    createdAt,
    updatedAt: createdAt,
    requirements: [
      "Strong communication and ownership mindset",
      "Ability to collaborate across teams",
      "Comfort working in a fast-paced product environment",
    ],
    applications: [],
    company,
    isDemo: true,
  };
});

export const getDisplayJobs = (apiJobs = [], query = "") => {
  const normalizedQuery = query.trim().toLowerCase();
  const mergedJobs = [...apiJobs, ...demoJobs];

  if (!normalizedQuery) {
    return mergedJobs;
  }

  return mergedJobs.filter((job) =>
    [job?.title, job?.description, job?.location, job?.company?.companyName, job?.jobType]
      .filter(Boolean)
      .some((value) => value.toLowerCase().includes(normalizedQuery))
  );
};

export const getDemoJobById = (jobId) => demoJobs.find((job) => job._id === jobId) || null;



const help = [
    "<br>",
    "Available Commands:",
    "- <strong>whoami:</strong> Display personal information and a brief introduction.",
    "- <strong>achievements</strong> Highlight notable achievements, certifications.",
    "- <strong>clear:</strong> Clears the terminal.",
    "- <strong>contact:</strong> Display contact information for easy communication.",
    "- <strong>education:</strong> Provide details about educational background.",
    "- <strong>experience:</strong> Share information about professional work experience.",
    "- <strong>help:</strong> Display a help menu with available commands.",
    "- <strong>header:</strong> Display the header information with the ONESHELL banner.",
    // "- <strong>projects:</strong> List coding projects with descriptions and links.",
    "- <strong>resume:</strong> Display or link to a downloadable resume.",
    "- <strong>skills:</strong> Showcase technical skills, programming languages, and tools.",
    "- <strong>top:</strong> Open the terminal in fullscreen mode.",
    "- <strong>date:</strong> Display today's date.",
    "- <strong>hostname:</strong> Display hostname.",
    "- <strong>exit:</strong> Exit the terminal.",
    
    "- <strong>echo:</strong> Print the provided text to the terminal. If no text is provided, an error message is shown.",
    "<br>"
];

const whoami = [
    "<br>",
    "Welcome to ONESHELL.",
    "I'm Suhas C, a passionate Linux and Cloud Enthusiast based in Bengaluru, Karnataka.",
    "<br>"
];


const education = [
    "<br>",
    "Education:",
    "- <strong>Degree:</strong> MCA in Computer Applications",
    "- <strong>University:</strong> Bangalore Institute of Technology",
    "- <strong>Graduation Year:</strong> 2017",
    "<br>"
];
const experience = [
    "<br>",
    "Professional Experience:",
    "<br>",
    "- <strong>Job Title:</strong> App/Cloud Support Sr. Analyst",
    "- <strong>Company:</strong> Accenture",
    "- <strong>Duration:</strong> June 2022 - Present",
    "<br>",
    "- <strong>Job Title:</strong> Support Technician Engineer",
    "- <strong>Company:</strong> Rackspace Technology – Bengaluru, Karnataka",
    "- <strong>Duration:</strong> February 2021 – June 2022",
    "<br>",
    "- <strong>Job Title:</strong> Information Technology Associate",
    "- <strong>Company:</strong> Benchmark Gensuite – Bengaluru, Karnataka",
    "- <strong>Duration:</strong> January 2019 – February 2021",
    "<br>",
    "- <strong>Job Title:</strong> Information Technology Instructor",
    "- <strong>Company:</strong> Glisten Project Solutions Pvt. Ltd. – Bengaluru, Karnataka",
    "- <strong>Duration:</strong> April 2018 - November 2018",
    "<br>"
];

const resume = [
    "<br>",
    "Download my resume:",
    "- Link: <a href='/CV/SuhasC.pdf' target='_blank' class='underlined-link'>Download Resume</a>",
    "<br>"
];
const shell = [
    '<span class="index">Suhas C. All rights reserved ©️ 2024.</span>',
    "<br>",
    "████████ ███    ██ ███████       ███████ ██   ██ ███████ ██      ██      ",
    "██    ██ ████   ██ ██            ██      ██   ██ ██      ██      ██      ",
    "██    ██ ██ ██  ██ █████         ███████ ███████ █████   ██      ██      ",
    "██    ██ ██  ██ ██ ██                 ██ ██   ██ ██      ██      ██  ",
    "████████ ██   ████ ███████       ███████ ██   ██ ███████ ██████  ███████ ",
    "<br>",
    '<span class="color2">Welcome to ONESHELL; Your Interactive Web Terminal Experience.</span>',
    "<br>"
];

const skills = [
    "<br>",
    "<strong>Technical Skills:</strong>",
    "<ul>",
    "   <li><strong>System Administration:</strong> Linux, Windows</li>",
    "   <li><strong>Cloud Computing Platforms:</strong> AWS, Azure, GCP</li>",
    "   <li><strong>Cloud Deployment Operations:</strong> Terraform</li>",
    "   <li><strong>Configuration Management:</strong> Ansible</li>",
    "   <li><strong>Automations:</strong> Bash, PowerShell</li>",
    "   <li><strong>Containerization:</strong> Docker, Kubernetes</li>",
    "   <li><strong>Database Management:</strong> SQL</li>",
    "   <li><strong>DevOps:</strong> CI/CD</li>",
    "   <li><strong>Troubleshooting & Networking:</strong> Network connectivity, hardware, and software issues</li>",
    "   <li><strong>Monitoring Tools:</strong> Grafana, SCOM</li>",
    "   <li><strong>Virtualization:</strong> VMware</li>",
    "   <li><strong>Business Acumen & System Reliability Improvement:</strong> Process optimization and efficiency</li>",
    "   <li><strong>Programming:</strong> Python (Intermediate)</li>",
    "</ul>",
    "<br>"
];

const social = [
    "<br>",
    "Connect with me on social media:",
    "- <strong>LinkedIn:</strong> <a href='https://www.linkedin.com/in/suhas-chandrahas-24548b123' target='_blank' class='underlined-link'>in/suhas-chandrahas</a>",
    "- <strong>Email:</strong> <a href='mailto:suhas5chandra93@gmail.com' target='_blank' class='underlined-link'>suhas5chandra93@gmail.com</a>",
    "<br>"
];

const achievements = [
    "<br>",
    "Certifications:",
    "<br>",
    "<strong>Google:</strong>",
    "   - <a href='https://www.credly.com/badges/c758c83a-d161-4355-88f1-aaaddab64036' target='_blank' class='underlined-link'>GCP: Associate Cloud Engineer</a>",
    "   - <a href='https://www.credly.com/badges/90d6bb21-9618-4503-b995-479b4f6a979e/public_url' target='_blank' class='underlined-link'>GCP: Professional Cloud Architect</a>",
    "<br>",
    "<strong>Microsoft:</strong>",
    "   - <a href='https://learn.microsoft.com/en-us/users/suhaschandrahas156/credentials/8c0d63a9295509e9' target='_blank' class='underlined-link'>AZ-104: Azure Administrator</a>",
    "<br>",
    "<strong>Amazon:</strong>",
    "   - <a href='https://www.credly.com/badges/3f2ab3ba-f444-4511-8649-e7d8a519acfc' target='_blank' class='underlined-link'>AWS Certified Solutions Architect – Professional</a>",
    "<br>",
    "<strong>Simplilearn:</strong>",
    "   - <a href='#' target='_blank' class='underlined-link'>Certified DevOps Engineer</a>",
    "   - <a href='#' target='_blank' class='underlined-link'>Cloud Architect</a>",
    "<br>"
];

const clear = [
    "<br>",
    "The terminal has been cleared and is ready for your next command!",
    "<br>"
];

const contact = [
    "<br>",
    "Contact Information:",
    "- <strong>Email:</strong> <a href='mailto:suhas5chandra93@gmail.com' target='_blank' class='underlined-link'>suhas5chandra93@gmail.com</a>",
    "- <strong>LinkedIn:</strong> <a href='https://www.linkedin.com/in/suhas-chandrahas-24548b123' target='_blank' class='underlined-link'>suhas-chandrahas</a>",
    "<br>"
];



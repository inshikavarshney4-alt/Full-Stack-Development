<<<<<<< HEAD
const teamMembers = [
{
name: "poonam Rajawat",
role: "Managing Director",
img: "image/poonam rajawat.png",
linkedin: "linkedin.com/in/poonam-rajawat",
twitter: "https://twitter.com/",
email: "mailto:poonam@email.com"
},

{
name: "Gajendradityagaur",
role: "Chief Technical Officer",
img: "image/gajendradityagaur.jpeg",
linkedin: "https://linkedin.com/in/gajendraditya",
twitter: "https://twitter.com/",
email: "mailto:gajendra@email.com"
},

{
name: "Manjeet Singh",
role: "Sales Manager",
img: "image/manjeet singh.jpg",
linkedin: "https://linkedin.com",
twitter: "https://twitter.com",
email: "mailto:manjeet@email.com"
}
];

const grid = document.getElementById('team-grid');

function renderTeam() {
    grid.innerHTML = teamMembers.map(member => `
        <div class="team-card">
            <img src="${member.img}" alt="${member.name}">
            <h3>${member.name}</h3>
            <p>${member.role}</p>
            <div class="social-icons">
                <i class="fab fa-linkedin"></i>
                <i class="fab fa-twitter"></i>
                <i class="fas fa-envelope"></i>
            </div>
        </div>
    `).join('');
}

renderTeam();
=======

document.addEventListener("DOMContentLoaded", function () {

    const courses = [
        "Ethical Hacking Certification - Powered by Pedestal Edtech",
        "DevSecOps Engineer ECDE | Powered by EC-Council",
        "AI Prompt Engineer | APE",
        "Advanced UI/UX Design",
        "Python Programming Basic To Advanced",
        "Certification In Java Using JSP",
        "Flutter Development From Basic Advance",
        "Data Science With Python",
        "Generative AI and Large Language Models with Python",
        "Pedestal C | Python | Java",
        "Certified DevOps Engineer | CDE",
        "Elementary Data Science Certification | EDSC",
        "Elementary MERN Stack Development Certification | EMSDC",
        "Elementary Full Stack Development Certification | EFSDC",
        "Digital Marketing Certification | DMC",
        "Computer Hacking Forensic Investigator | CHFI - Powered by EC-Council",
        "Certified Computer Forensic Investigator | CCFI - Powered by PTW",
        "Advanced UI/UX Design Program | AUXDP",
        "Certified Ethical Hacker | CEH - Powered by EC-Council",
        "Certified Penetration Testing | CPT - Powered by PTW",
        "Certified MERN Stack Development | CMSD",
        "Certified Web Developer | CWD",
        "Fundamentals of Data Analysis (Basic and Advance) | FDABA",
        "Certified Data Scientist Program (ML and DL) | CDSP",
        "Certified Data Science and Analyst Program | CDSAP",
        "Certified Artificial Intelligence Developer | CAID",
        "Certified Full Stack Development Mastery | CFSDM",
        "E-Commerce Startup Growth Support Program | ECSGSP",
        "Certified Python Developer | CPD",
        "Certified Global Business Analyst Program | CGBAP",
        "YouTube Automation, Video Editing and Monetization Mastery | YTEM",
        "Certified Advanced Digital Sales Navigator | CADSN",

    ];

    const courseList = document.getElementById("courses-list");

    if (!courseList) {
        console.log("❌ courses-list ID not found");
        return;
    }

    courses.forEach((course, index) => {
        const div = document.createElement("div");
        div.className = "course-item";
        div.textContent = (index + 1) + ". " + course;
        courseList.appendChild(div);
    });

});
// Simple animation when page loads
document.addEventListener("DOMContentLoaded", () => {
    const boxes = document.querySelectorAll(".course-box");

    boxes.forEach((box, index) => {
        box.style.opacity = "0";
        box.style.transform = "translateY(30px)";

        setTimeout(() => {
            box.style.transition = "0.6s ease";
            box.style.opacity = "1";
            box.style.transform = "translateY(0)";
        }, index * 150);
    });
});
document.addEventListener("DOMContentLoaded", function () {

    const salaryCtx = document.getElementById('salaryChart');
    if (!salaryCtx) return; // safety check

    new Chart(salaryCtx.getContext('2d'), {
        type: 'bar',
        data: {
            labels: [
                'Full Stack Engineer',
                'Senior Full Stack Engineer',
                'Technical Lead',
                'Principal Developer',
                'Technical Architect'
            ],
            datasets: [{
                label: 'Average Salary (₹ LPA)',
                data: [4, 6, 9, 14, 15],
                backgroundColor: [
                    'rgba(9, 70, 96, 0.8)',
                    'rgba(51, 52, 103, 0.8)',
                    'rgba(45, 105, 67, 0.8)',
                    'rgba(129, 89, 60, 0.8)',
                    'rgba(129, 70, 100, 0.8)'
                ],
                borderColor: [
                    '#0284c7',
                    '#4338ca',
                    '#16a34a',
                    '#ea580c',
                    '#db2777'
                ],
                borderWidth: 2,
                borderRadius: 10
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Salary (₹ LPA)'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Career Levels'
                    }
                }
            }
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {

    const courses = [
        "Ethical Hacking Certification - Powered by Pedestal Edtech",
        "DevSecOps Engineer ECDE | Powered by EC-Council",
        "AI Prompt Engineer | APE",
        "Advanced UI/UX Design",
        "Python Programming Basic To Advanced",
        "Certification In Java Using JSP",
        "Flutter Development From Basic Advance",
        "Data Science With Python",
        "Generative AI and Large Language Models with Python",
        "Pedestal C | Python | Java",
        "Certified DevOps Engineer | CDE",
        "Elementary Data Science Certification | EDSC",
        "Elementary MERN Stack Development Certification | EMSDC",
        "Elementary Full Stack Development Certification | EFSDC",
        "Digital Marketing Certification | DMC",
        "Computer Hacking Forensic Investigator | CHFI - Powered by EC-Council",
        "Certified Computer Forensic Investigator | CCFI - Powered by PTW",
        "Advanced UI/UX Design Program | AUXDP",
        "Certified Ethical Hacker | CEH - Powered by EC-Council",
        "Certified Penetration Testing | CPT - Powered by PTW",
        "Certified MERN Stack Development | CMSD",
        "Certified Web Developer | CWD",
        "Fundamentals of Data Analysis (Basic and Advance) | FDABA",
        "Certified Data Scientist Program (ML and DL) | CDSP",
        "Certified Data Science and Analyst Program | CDSAP",
        "Certified Artificial Intelligence Developer | CAID",
        "Certified Full Stack Development Mastery | CFSDM",
        "E-Commerce Startup Growth Support Program | ECSGSP",
        "Certified Python Developer | CPD",
        "Certified Global Business Analyst Program | CGBAP",
        "YouTube Automation, Video Editing and Monetization Mastery | YTEM",
        "Certified Advanced Digital Sales Navigator | CADSN",
        "Certified Meta Business Suite Professional | CMBSP"
    ];

    const courseList = document.getElementById("courses-list");

    if (!courseList) {
        console.log("❌ courses-list ID not found");
        return;
    }

    courses.forEach((course, index) => {
        const div = document.createElement("div");
        div.className = "course-item";
        div.textContent = (index + 1) + ". " + course;
        courseList.appendChild(div);
    });

});
// Simple animation when page loads
document.addEventListener("DOMContentLoaded", () => {
    const boxes = document.querySelectorAll(".course-box");

    boxes.forEach((box, index) => {
        box.style.opacity = "0";
        box.style.transform = "translateY(30px)";

        setTimeout(() => {
            box.style.transition = "0.6s ease";
            box.style.opacity = "1";
            box.style.transform = "translateY(0)";
        }, index * 150);
    });
});
document.addEventListener("DOMContentLoaded", function () {

    const salaryCtx = document.getElementById('salaryChart');
    if (!salaryCtx) return; // safety check

    new Chart(salaryCtx.getContext('2d'), {
        type: 'bar',
        data: {
            labels: [
                'Full Stack Engineer',
                'Senior Full Stack Engineer',
                'Technical Lead',
                'Principal Developer',
                'Technical Architect'
            ],
            datasets: [{
                label: 'Average Salary (₹ LPA)',
                data: [4, 6, 9, 14, 15],
                backgroundColor: [
                    'rgba(9, 70, 96, 0.8)',
                    'rgba(51, 52, 103, 0.8)',
                    'rgba(45, 105, 67, 0.8)',
                    'rgba(129, 89, 60, 0.8)',
                    'rgba(129, 70, 100, 0.8)'
                ],
                borderColor: [
                    '#0284c7',
                    '#4338ca',
                    '#16a34a',
                    '#ea580c',
                    '#db2777'
                ],
                borderWidth: 2,
                borderRadius: 10
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Salary (₹ LPA)'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Career Levels'
                    }
                }
            }
        }
    });
});
plugins: {
    tooltip: {
        backgroundColor: "#2563eb";
        titleColor: "#fff";
        bodyColor: "#fff";
        borderColor: "#38bdf8";
        borderWidth: 1;
        cornerRadius: 8;
        padding: 10;
    }
}

>>>>>>> 97b1dee820e40375eed5a58d88e3f81c2170d2d0

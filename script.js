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
// Team member data
// Add your team members here!
const teamData = [
    {
        name: "Grace Totten",
        role: "Founder",
        bio: "Founder of the 17 by Seventeen Initiative. Need to get in contact with the founder? Email Grace@17bySeventeen.org.",
        photo: "images/grace-photo.png",
        social: {
            instagram: "https://www.instagram.com/17byseventeen_/"
        }
    },
    {
        name: "Leah Sherwood",
        role: " 2026-2027 Challenge Lead",
        bio: "My name is Leah Sherwood, and I am the current 17 by Seventeen challenge Lead. Across this next year, my goal is to spark a desire to make a difference by leading through example and building a community that fosters conversations about real change and action. I am always willing to put in the work to achieve a better outcome, whether through proposals and grant applications to start a composting program in my school or by bringing a positive and hardworking attitude to numerous clubs, teams, and other local programs. I am passionate about our environment, STEAM, mental health and social advocacy, and so much more.         Having started my journey with 17 by Seventeen as a volunteer, then as editor and social media manager, I am so grateful that I get to carry the torch for the next leg of the 17 by Seventeen challenge. I look forward to growing the initiative’s impact and furthering the values of our founder with the help of the rest of the 17 by Seventeen team. ",
        photo: "images/leah-photo.jpg",
        social: {
            // Add social media links if available
        }
    }
];

// Former team member data
const formerTeamData = [
    {
        name: "Viki Herrera",
        role: "British Colombia Representative for 17 By Seventeen",
        bio: "I’m Viki Herrera, and I’m incredibly excited to serve as 17 by 17’s British Columbia representative. I’m a Grade 12 student from Vancouver, in shambles about graduating. However, I’m looking forward to helping create meaningful impacts within my school and greater communities over the course of the year ahead. I’m passionate about ensuring quality education within my community and worldwide. Throughout high school, I’ve worked as a peer tutor, and volunteered with the University of British Columbia’s STEM outreach program; Geering Up. They help provide young students across BC with fun lessons and activities related to science at tech. As a debate and Model UN club leader within my school,  I’ve also developed a passion for establishing peace, justice, and strong institutions across the globe. In between club meetings and Field Hockey practice, I can usually be found scrapbooking, rewatching a comfort show, or hanging out at one of Vancouver’s lovely beaches with my dog. I hope to one day strengthen our global community by forming policies that expand access to quality healthcare, and I believe 17 by 17 is a great place to begin. Youth can improve our world in powerful, concrete ways, and I’m eager to work alongside a team that both shares and illustrates this view.",
        photo: "images/willow-photo.jpg",
        social: {
            // Add social media links if available
        }
    },
    {
        name: "Youna Wang",
        role: "Québec Representative for 17 By Seventeen",
        bio: " Hi, my name is Youna. I'm based in Montreal, Quebec. I consider myself a curious and open-minded person. I love to learn about new things, and I care about the big concepts in our society today. I want to protect the environment; I want to make a change at a young age, and I believe we all can do it. I balance my studies with dragon boating. I love doing sports so much, I always believe that health is wealth.",
        photo: "images/anjani-photo.jpg",
        social: {
            // Add social media links if available
        }
    },
    {
        name: "Eva Matheson",
        role: "Alberta Representative for 17 By Seventeen",
        bio: "Hey, I’m Eva Matheson, and I’m so thrilled to be working with such a wonderful group. I’m an artist, musical theatre enthusiast, and I’m super passionate about learning languages. I look forward to driving positive change within my community. Thank you, Grace, for founding this fantastic organization. ",
        photo: "images/olivia-photo.jpg",
        social: {
            // Add social media links if available
        }
    },
    {
        name: "TBD",
        role: "none",
        bio: "This spot on the team could belong to you!",
        photo: "images/carter-photo.jpg",
        social: {
            // Add social media links if available
        }
    },
    {
        name: "TBD",
        role: "None",
        bio: "This spot on the team could belong to you!",
        photo: "images/madhu-photo.png.JPG",
        social: {
            // Add social media links if available
        }
    },
    {
        name: "TBD",
        role: "none",
        bio: "This spot on the team could belong to you!",
        photo: "images/maria-photo.png",
        social: {
            // Add social media links if available
            // instagram: "https://instagram.com/username",
            // email: "email@example.com"
        }
    },
    {
        name: "TBD",
        role: "none",
        bio: "This spot on the team could belong to you!",
        photo: "images/mateo-photo.jpg",
        social: {
            // Add social media links if available
        }
    }
];

// Create team member card
function createTeamMemberCard(member) {
    const teamCard = document.createElement('div');
    teamCard.className = 'team-member';
    
    let photoHTML = '';
    if (member.photo) {
        // Add specific class for photos that need special positioning
        let photoClass = "team-member-photo";
        let inlineStyle = '';
        if (member.name === "Leah Sherwood") {
            photoClass = "team-member-photo leah-photo";
            inlineStyle = 'style="object-position: 35% 20% !important;"';
        } else if (member.name === "Carter Mochinski") {
            photoClass = "team-member-photo carter-photo";
            inlineStyle = 'style="object-position: center 25% !important;"';
        }
        photoHTML = `<img src="${member.photo}" alt="${member.name}" class="${photoClass}" ${inlineStyle} onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
            <div class="team-member-placeholder" style="display:none;">
                <i class="fas fa-user"></i>
            </div>`;
    } else {
        photoHTML = `
            <div class="team-member-placeholder">
                <i class="fas fa-user"></i>
            </div>
        `;
    }
    
    let socialHTML = '';
    if (member.social && (member.social.instagram || member.social.email)) {
        socialHTML = '<div class="team-member-social">';
        if (member.social.instagram) {
            socialHTML += `<a href="${member.social.instagram}" target="_blank" rel="noopener noreferrer" aria-label="${member.name} Instagram"><i class="fab fa-instagram"></i></a>`;
        }
        if (member.social.email) {
            socialHTML += `<a href="mailto:${member.social.email}" aria-label="${member.name} Email"><i class="fas fa-envelope"></i></a>`;
        }
        socialHTML += '</div>';
    }
    
    teamCard.innerHTML = `
        ${photoHTML}
        <h3 class="team-member-name">${member.name}</h3>
        <p class="team-member-role">${member.role}</p>
        <p class="team-member-bio">${member.bio}</p>
        ${socialHTML}
    `;
    
    return teamCard;
}

// Create team grid
function createTeamGrid() {
    const teamGrid = document.getElementById('team-grid');
    if (!teamGrid) {
        console.error('Team grid element not found!');
        return;
    }
    
    if (!teamData || !Array.isArray(teamData)) {
        console.error('teamData is not a valid array!');
        teamGrid.innerHTML = '<p>Error: Team data not available.</p>';
        return;
    }
    
    teamGrid.innerHTML = '';
    
    teamData.forEach((member, index) => {
        try {
            console.log(`Processing team member ${index + 1}: ${member.name}`);
            const teamCard = createTeamMemberCard(member);
            teamGrid.appendChild(teamCard);
        } catch (error) {
            console.error(`Error creating card for team member ${index + 1} (${member.name || 'unknown'}):`, error);
        }
    });
}

// Mobile navigation
function toggleMobileNav() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Update copyright year
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // Mobile menu functionality
    const hamburger = document.querySelector('.hamburger');
    if (hamburger) {
        hamburger.addEventListener('click', toggleMobileNav);
    }

    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            const navMenu = document.querySelector('.nav-menu');
            navMenu.classList.remove('active');
        });
    });

    // Create team grid
    try {
        console.log('Team data loaded:', teamData.length, 'members');
        createTeamGrid();
        console.log('Team grid created');
    } catch (error) {
        console.error('Error creating team grid:', error);
        const teamGrid = document.getElementById('team-grid');
        if (teamGrid) {
            teamGrid.innerHTML = '<p style="color: red;">Error loading team members. Please check the console.</p>';
        }
    }
    
    // Create former team grid
    try {
        console.log('Former team data loaded:', formerTeamData.length, 'members');
        createFormerTeamGrid();
        console.log('Former team grid created');
    } catch (error) {
        console.error('Error creating former team grid:', error);
        const formerTeamGrid = document.getElementById('former-team-grid');
        if (formerTeamGrid) {
            formerTeamGrid.innerHTML = '<p style="color: red;">Error loading former team members. Please check the console.</p>';
        }
    }
});

// Create former team grid
function createFormerTeamGrid() {
    const formerTeamGrid = document.getElementById('former-team-grid');
    if (!formerTeamGrid) {
        console.log('Former team grid element not found - skipping');
        return;
    }
    
    if (!formerTeamData || !Array.isArray(formerTeamData) || formerTeamData.length === 0) {
        formerTeamGrid.innerHTML = '';
        return;
    }
    
    formerTeamGrid.innerHTML = '';
    
    formerTeamData.forEach((member, index) => {
        try {
            console.log(`Processing former team member ${index + 1}: ${member.name}`);
            const teamCard = createTeamMemberCard(member);
            formerTeamGrid.appendChild(teamCard);
        } catch (error) {
            console.error(`Error creating card for former team member ${index + 1} (${member.name || 'unknown'}):`, error);
        }
    });
}



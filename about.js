// Team member data
// Add your team members here!
const teamData = [
    {
        name: "Grace Totten",
        role: "Founder",
        bio: "Founder of the 17 by 17 Challenge, working to complete all 17 UN Sustainable Development Goals before turning 17.",
        photo: "images/grace-photo.jpg",
        social: {
            instagram: "https://www.instagram.com/17_by17",
            tiktok: "https://www.tiktok.com/@17by17",
            youtube: "https://www.youtube.com/@17by17"
        }
    }
    // Add more team members here following this format:
    // {
    //     name: "Team Member Name",
    //     role: "Team Member Role",
    //     bio: "Brief bio about the team member",
    //     photo: "images/team-member-photo.jpg", // Optional - leave empty or null for placeholder
    //     social: {
    //         instagram: "https://instagram.com/username", // Optional
    //         tiktok: "https://tiktok.com/@username", // Optional
    //         youtube: "https://youtube.com/@username", // Optional
    //         email: "email@example.com" // Optional
    //     }
    // }
];

// Create team grid
function createTeamGrid() {
    const teamGrid = document.getElementById('team-grid');
    if (!teamGrid) return;
    
    teamGrid.innerHTML = '';
    
    teamData.forEach(member => {
        const teamCard = document.createElement('div');
        teamCard.className = 'team-member';
        
        let photoHTML = '';
        if (member.photo) {
            photoHTML = `<img src="${member.photo}" alt="${member.name}" class="team-member-photo">`;
        } else {
            photoHTML = `
                <div class="team-member-placeholder">
                    <i class="fas fa-user"></i>
                </div>
            `;
        }
        
        let socialHTML = '';
        if (member.social) {
            socialHTML = '<div class="team-member-social">';
            if (member.social.instagram) {
                socialHTML += `<a href="${member.social.instagram}" target="_blank" rel="noopener noreferrer" aria-label="${member.name} Instagram"><i class="fab fa-instagram"></i></a>`;
            }
            if (member.social.tiktok) {
                socialHTML += `<a href="${member.social.tiktok}" target="_blank" rel="noopener noreferrer" aria-label="${member.name} TikTok"><i class="fab fa-tiktok"></i></a>`;
            }
            if (member.social.youtube) {
                socialHTML += `<a href="${member.social.youtube}" target="_blank" rel="noopener noreferrer" aria-label="${member.name} YouTube"><i class="fab fa-youtube"></i></a>`;
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
        
        teamGrid.appendChild(teamCard);
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
    createTeamGrid();
});



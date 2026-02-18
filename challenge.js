// Participants data
// Add participants here!
const participantsData = [
    {
        name: "Grace Totten",
        location: "New Brunswick, Canada",
        bio: "Founder of the 17 by 17 Challenge, working to complete all 17 UN Sustainable Development Goals before turning 17.",
        photo: "images/grace-photo.png",
        social: {
            instagram: "https://www.instagram.com/17byseventeen_/"
        }
    }
    // Add more participants here following this format:
    // {
    //     name: "Participant Name",
    //     location: "City, Country",
    //     bio: "Brief bio about the participant and their SDG journey",
    //     photo: "images/participant-photo.jpg", // Optional
    //     social: {
    //         instagram: "https://instagram.com/username", // Optional
    //     }
    // }
];

// Create participants grid
function createParticipantsGrid() {
    const participantsGrid = document.getElementById('participants-grid');
    if (!participantsGrid) return;
    
    participantsGrid.innerHTML = '';
    
    if (participantsData.length === 0) {
        participantsGrid.innerHTML = `
            <div class="no-participants">
                <i class="fas fa-users"></i>
                <p>Be the first to join! Use #17by17challenge on social media to be featured here.</p>
            </div>
        `;
        return;
    }
    
    participantsData.forEach(participant => {
        const participantCard = document.createElement('div');
        participantCard.className = 'participant-card';
        
        let photoHTML = '';
        if (participant.photo) {
            photoHTML = `<img src="${participant.photo}" alt="${participant.name}" class="participant-photo" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                <div class="participant-placeholder" style="display:none;">
                    <i class="fas fa-user"></i>
                </div>`;
        } else {
            photoHTML = `
                <div class="participant-placeholder">
                    <i class="fas fa-user"></i>
                </div>
            `;
        }
        
        let socialHTML = '';
        if (participant.social && participant.social.instagram) {
            socialHTML = '<div class="participant-social">';
            if (participant.social.instagram) {
                socialHTML += `<a href="${participant.social.instagram}" target="_blank" rel="noopener noreferrer" aria-label="${participant.name} Instagram"><i class="fab fa-instagram"></i></a>`;
            }
            socialHTML += '</div>';
        }
        
        participantCard.innerHTML = `
            ${photoHTML}
            <div class="participant-info">
                <h3 class="participant-name">${participant.name}</h3>
                <p class="participant-location"><i class="fas fa-map-marker-alt"></i> ${participant.location}</p>
                <p class="participant-bio">${participant.bio}</p>
                ${socialHTML}
            </div>
        `;
        
        participantsGrid.appendChild(participantCard);
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

    // Create participants grid
    createParticipantsGrid();
});


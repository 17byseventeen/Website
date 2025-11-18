// Programs data
// Add your programs here with their registration form links
const programsData = [
    {
        title: "The Big Sister Project",
        hosts: "Grace Totten and Leah Sherwood",
        description: "The Big Sister Project is a 2-hour program that aims to help middle school girls build self-confidence, learn healthy eating habits, and discourage the use of harmful substances. Grace and Leah want to make a difference in these young females' lives by sharing how they managed middle school and the things they were met with along the way.",
        registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSd9I0La1CNsIcFvk836fpdN4EvKeO8g2MQq2NmcloLumSJihw/viewform?usp=dialog",
        status: "open",
        date: "December 12th",
        location: "81 Broad Street, Uptown Saint John (Brilliant Labs)"
    }
    // Example program structure:
    // {
    //     title: "Program Name",
    //     description: "Brief description of the program",
    //     registrationLink: "https://forms.google.com/...",
    //     status: "open", // "open", "closed", or "coming-soon"
    //     date: "March 2025",
    //     location: "Online" or "In-person location"
    // }
];

// Create programs grid
function createProgramsGrid() {
    const programsGrid = document.getElementById('programs-grid');
    if (!programsGrid) return;
    
    programsGrid.innerHTML = '';
    
    if (programsData.length === 0) {
        programsGrid.innerHTML = `
            <div class="no-programs">
                <i class="fas fa-calendar-plus"></i>
                <h3>No programs available at the moment</h3>
                <p>Check back soon for upcoming programs and registration opportunities!</p>
            </div>
        `;
        return;
    }
    
    programsData.forEach(program => {
        const programCard = document.createElement('div');
        programCard.className = 'program-card';
        
        let statusBadge = '';
        let buttonHTML = '';
        
        if (program.status === 'open') {
            statusBadge = '<span class="program-status open">Open for Registration</span>';
            buttonHTML = `<a href="${program.registrationLink}" target="_blank" rel="noopener noreferrer" class="btn btn-primary program-register-btn">
                <i class="fas fa-arrow-right"></i> Register Now
            </a>`;
        } else if (program.status === 'closed') {
            statusBadge = '<span class="program-status closed">Registration Closed</span>';
            buttonHTML = `<button class="btn btn-secondary program-register-btn" disabled>
                <i class="fas fa-lock"></i> Registration Closed
            </button>`;
        } else if (program.status === 'coming-soon') {
            statusBadge = '<span class="program-status coming-soon">Coming Soon</span>';
            buttonHTML = `<button class="btn btn-secondary program-register-btn" disabled>
                <i class="fas fa-clock"></i> Coming Soon
            </button>`;
        }
        
        programCard.innerHTML = `
            <div class="program-card-header">
                <h3>${program.title}</h3>
                ${statusBadge}
            </div>
            <div class="program-card-body">
                ${program.hosts ? `<p class="program-hosts"><i class="fas fa-user-friends"></i> Hosted by ${program.hosts}</p>` : ''}
                <p class="program-description">${program.description}</p>
                <div class="program-details">
                    ${program.date ? `<div class="program-detail"><i class="fas fa-calendar"></i> <span>${program.date}</span></div>` : ''}
                    ${program.location ? `<div class="program-detail"><i class="fas fa-map-marker-alt"></i> <span>${program.location}</span></div>` : ''}
                </div>
            </div>
            <div class="program-card-footer">
                ${buttonHTML}
            </div>
        `;
        
        programsGrid.appendChild(programCard);
    });
}

// Update copyright year
document.addEventListener('DOMContentLoaded', function() {
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
    
    createProgramsGrid();
    
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
});


// Events data
// Add your events here
const eventsData = [];

// Create events grid
function createEventsGrid() {
    const eventsGrid = document.getElementById('events-grid');
    if (!eventsGrid) return;

    eventsGrid.innerHTML = '';

    if (eventsData.length === 0) {
        eventsGrid.innerHTML = `
            <div class="no-events">
                <i class="fas fa-calendar-check"></i>
                <h3>No upcoming events</h3>
            </div>
        `;
        return;
    }

    eventsData.forEach(event => {
        const eventCard = document.createElement('div');
        eventCard.className = 'event-card';

        let statusBadge = '';
        let buttonHTML = '';

        if (event.status === 'active') {
            statusBadge = '<span class="event-status active">Active</span>';
            if (event.website) {
                buttonHTML = `<a href="${event.website}" target="_blank" rel="noopener noreferrer" class="btn btn-primary event-website-btn">
                    <i class="fas fa-external-link-alt"></i> Visit Website
                </a>`;
            } else {
                buttonHTML = '<span class="btn btn-secondary event-website-btn" style="cursor: default;">Registration Coming Soon</span>';
            }
        } else if (event.status === 'upcoming') {
            statusBadge = '<span class="event-status upcoming">Upcoming</span>';
            if (event.website) {
                buttonHTML = `<a href="${event.website}" target="_blank" rel="noopener noreferrer" class="btn btn-primary event-website-btn">
                    <i class="fas fa-external-link-alt"></i> Register Now
                </a>`;
            } else {
                buttonHTML = '<span class="btn btn-secondary event-website-btn" style="cursor: default;">Registration Coming Soon</span>';
            }
        } else if (event.status === 'past') {
            statusBadge = '<span class="event-status past">Past Event</span>';
            if (event.website) {
                const buttonText = event.linkLabel || 'Visit Website';
                buttonHTML = `<a href="${event.website}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary event-website-btn">
                    <i class="fas fa-external-link-alt"></i> ${buttonText}
                </a>`;
            } else {
                buttonHTML = '';
            }
        }

        eventCard.innerHTML = `
            <div class="event-card-header">
                <h3>${event.title}</h3>
                ${statusBadge}
            </div>
            <div class="event-card-body">
                <p class="event-description">${event.description}</p>
                <div class="event-details">
                    ${event.date ? `<div class="event-detail"><i class="fas fa-calendar"></i> <span>${event.date}</span></div>` : ''}
                    ${event.location ? `<div class="event-detail"><i class="fas fa-map-marker-alt"></i> <span>${event.location}</span></div>` : ''}
                </div>
            </div>
            <div class="event-card-footer">
                ${buttonHTML}
            </div>
        `;

        eventsGrid.appendChild(eventCard);
    });
}

// Update copyright year
document.addEventListener('DOMContentLoaded', function() {
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    createEventsGrid();

    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
});

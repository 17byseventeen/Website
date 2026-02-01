// Events data
// Add your events here
const eventsData = [
    {
        title: "Cardboard for Kitty: Helping Paws and People",
        description: "An annual creative fundraising event where teams compete to build innovative cardboard cat homes in just two hours. This year, Cardboard for Kitty is proud to support both RedHead Strays, a local organization that rescues and rehomes approximately 400 stray cats annually, and First Steps Saint John, which supports mothers and babies in our community. Through friendly competition and creativity, participants help make a difference for both paws and people in Saint John. The event is part of the 17 by Seventeen initiative, connecting local action with the UN Sustainable Development Goals.",
        website: "http://cardboardforkitty.org",
        status: "active", // "active", "upcoming", or "past"
        date: "TBD 2026", // Add date when available
        location: "Saint John, NB" // Add location when available
    }
    // Example event structure:
    // {
    //     title: "Event Name",
    //     description: "Brief description of the event",
    //     website: "https://example.com",
    //     status: "active", // "active", "upcoming", or "past"
    //     date: "March 2025",
    //     location: "Location name"
    // }
];

// Create events grid
function createEventsGrid() {
    const eventsGrid = document.getElementById('events-grid');
    if (!eventsGrid) return;
    
    eventsGrid.innerHTML = '';
    
    if (eventsData.length === 0) {
        eventsGrid.innerHTML = `
            <div class="no-events">
                <i class="fas fa-calendar-check"></i>
                <h3>No events available at the moment</h3>
                <p>Check back soon for upcoming events!</p>
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
            buttonHTML = `<a href="${event.website}" target="_blank" rel="noopener noreferrer" class="btn btn-primary event-website-btn">
                <i class="fas fa-external-link-alt"></i> Visit Website
            </a>`;
        } else if (event.status === 'upcoming') {
            statusBadge = '<span class="event-status upcoming">Upcoming</span>';
            buttonHTML = `<a href="${event.website}" target="_blank" rel="noopener noreferrer" class="btn btn-primary event-website-btn">
                <i class="fas fa-external-link-alt"></i> Learn More
            </a>`;
        } else if (event.status === 'past') {
            statusBadge = '<span class="event-status past">Past Event</span>';
            buttonHTML = `<a href="${event.website}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary event-website-btn">
                <i class="fas fa-external-link-alt"></i> Visit Website
            </a>`;
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
        
        // Close menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
});

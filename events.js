// Events data
// Add your events here
const eventsData = [
    {
        title: "Women's Day Webinar",
        description: "17 by Seventeen hosted a Women's Day Webinar on March 11th in celebration of International Women's Day. Guest speakers Jennifer McGill (entrepreneur, consultant, and co-chair of We Worthy Women) and Tiffany Fields (Burke-Gafney Observatory Technician at Saint Mary's University) shared their experiences on following your passion, breaking barriers, and women's empowerment. The webinar highlighted women in STEM and leadership, inspiring students and empowering the next generation.",
        website: "https://youtu.be/StE2668q7eY?si=dAmZ4fqyDJLuLoHm",
        linkLabel: "Watch full recording",
        status: "past",
        date: "March 11, 2026 at 5:00 PM",
        location: "Online"
    },
    {
        title: "Cardboard for Kitty: Helping Paws and People",
        description: "An annual creative fundraising event where teams compete to build innovative cardboard cat homes in just two hours. This year, Cardboard for Kitty is proud to support both RedHead Strays, a local organization that rescues and rehomes approximately 400 stray cats annually, and First Steps Saint John, which supports mothers and babies in our community. Through friendly competition and creativity, participants help make a difference for both paws and people in Saint John. The event is part of the 17 by Seventeen initiative, connecting local action with the UN Sustainable Development Goals.",
        website: "http://cardboardforkitty.org",
        status: "upcoming",
        date: "May 30, 2026",
        location: "Market Square Atrium, 1 Market Square, Saint John, NB E2L 4Z6"
    }
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
